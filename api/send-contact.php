<?php
/**
 * Contact form handler - sends email via PHPMailer + ZeptoMail SMTP
 * Uses info@rfpplanet.com credentials
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/config.php';

$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
$fullName = trim($input['fullName'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$service = trim($input['service'] ?? '');
$message = trim($input['message'] ?? '');

// Validation
if (strlen($fullName) < 2) {
    echo json_encode(['success' => false, 'message' => 'Full name must be at least 2 characters.']);
    exit;
}
if (empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Email is required.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}
if (empty($phone) || strlen(preg_replace('/\D/', '', $phone)) < 10) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid phone number (min 10 digits).']);
    exit;
}
if (empty($service)) {
    echo json_encode(['success' => false, 'message' => 'Please select a service.']);
    exit;
}
if (strlen($message) < 10) {
    echo json_encode(['success' => false, 'message' => 'Message must be at least 10 characters.']);
    exit;
}

$to = MAIL_FROM_ADDRESS;
$subject = 'New Contact - F5Technolabs: ' . $fullName;
$body = "
<h3>New Contact Form Submission - F5Technolabs Portfolio</h3>
<p><strong>Name:</strong> " . htmlspecialchars($fullName) . "</p>
<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
<p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
<p><strong>Service:</strong> " . htmlspecialchars($service) . "</p>
<p><strong>Message:</strong></p>
<p>" . nl2br(htmlspecialchars($message)) . "</p>
";

$debug = isset($_GET['debug']) && $_GET['debug'] === '1';
$errorMsg = 'Failed to send message. Please try again later.';

try {
    require __DIR__ . '/vendor/autoload.php';

    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = MAIL_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = MAIL_USERNAME;
    $mail->Password = MAIL_PASSWORD;
    $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = MAIL_PORT;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom(MAIL_FROM_ADDRESS, MAIL_FROM_NAME);
    $mail->addAddress($to);
    $mail->addReplyTo($email, $fullName);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $body;

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Thank you for your message! We will get back to you soon.']);
} catch (\Exception $e) {
    error_log('Contact form mail error: ' . $e->getMessage());
    if ($debug) {
        echo json_encode([
            'success' => false,
            'message' => $errorMsg,
            'debug' => $e->getMessage(),
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $errorMsg]);
    }
}
