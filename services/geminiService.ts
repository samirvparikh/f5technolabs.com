
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeProjectIdea = async (idea: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following software project idea and provide a structured technical roadmap: "${idea}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          estimate: {
            type: Type.STRING,
            description: "A rough budget estimate description (e.g. $10k - $25k)",
          },
          techStack: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of recommended technologies",
          },
          timeline: {
            type: Type.STRING,
            description: "Expected development timeline",
          },
          keyFeatures: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Core features to build first",
          },
        },
        required: ["estimate", "techStack", "timeline", "keyFeatures"],
      },
    },
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Failed to parse AI response", error);
    return null;
  }
};
