
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const API_URL = (import.meta as { env?: Record<string, string> }).env?.VITE_CONTACT_API_URL || '/api/send-contact.php?debug=1';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[\d\s\-\+\(\)]{10,20}$/.test(phone.replace(/\s/g, '')) && phone.replace(/\D/g, '').length >= 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    else if (formData.fullName.trim().length < 2) newErrors.fullName = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number (min 10 digits)';

    if (!formData.service) newErrors.service = 'Please select a service';

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    setSubmitMessage(null);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          setSubmitMessage({ type: 'success', text: data.message });
          setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
        } else {
          setSubmitMessage({ type: 'error', text: data.message || 'Failed to send message.' });
        }
      } catch {
        setSubmitMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Build Something <span className="text-blue-600">Great</span> Together.</h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Whether you have a fully-formed idea or just the spark of a concept, our team is ready to help you navigate the journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500">hello@f5technolabs.com</p>
                  <p className="text-slate-500">sales@f5technolabs.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-500">+1 (555) 123-4567</p>
                  <p className="text-slate-500">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-500">123 Tech Park, HSR Layout,</p>
                  <p className="text-slate-500">Bengaluru, KA 560102, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-xl font-bold mb-2">Fast Response Guarantee</h4>
                 <p className="text-blue-100 text-sm">We typically respond to inquiries within 4 business hours.</p>
               </div>
               <Clock className="absolute top-4 right-4 text-blue-500 opacity-50" size={80} />
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-100 border border-blue-50">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.fullName ? 'border-red-400' : 'border-slate-200'}`} placeholder="John Doe" />
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.email ? 'border-red-400' : 'border-slate-200'}`} placeholder="john@example.com" />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              {/* </div> */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.phone ? 'border-red-400' : 'border-slate-200'}`} placeholder="+1 (555) 123-4567" />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed <span className="text-red-500">*</span></label>
                <select name="service" value={formData.service} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer ${errors.service ? 'border-red-400' : 'border-slate-200'}`}>
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="AI Solutions">AI Solutions</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consulting">Consulting</option>
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message <span className="text-red-500">*</span></label>
                <textarea name="message" value={formData.message} onChange={handleChange} className={`w-full h-32 px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none ${errors.message ? 'border-red-400' : 'border-slate-200'}`} placeholder="Tell us about your project..."></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {submitMessage && (
                <p className={`text-sm ${submitMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                  {submitMessage.text}
                </p>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
