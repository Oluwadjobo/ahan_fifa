
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest, RecommendationResponse } from "../types";

// Helper function to get drink recommendation using Gemini AI
export const getDrinkRecommendation = async (data: RecommendationRequest): Promise<RecommendationResponse> => {
  // Always initialize a new GoogleGenAI instance right before the call to ensure the latest configuration is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Plan a drink delivery for an event:
      - Event Type: ${data.eventType}
      - Number of guests: ${data.guestCount}
      - Duration: ${data.duration}
      
      Available Packs:
      - EFÂ: 48 bottles (small groups)
      - TCHÉKÉÉ: 120 bottles (medium/large groups)
      - GBADOU: Custom (extra large or specific needs)
      
      Suggest the best pack and a mix of beers/soft drinks. Respond in French.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          packId: {
            type: Type.STRING,
            description: "The ID of the recommended pack (efa, tchekee, or gbadou)",
          },
          reason: {
            type: Type.STRING,
            description: "A brief explanation in French why this pack is best.",
          },
          suggestedMix: {
            type: Type.STRING,
            description: "A suggested mix of drinks in French (e.g. 60% bières, 40% sucreries).",
          }
        },
        required: ["packId", "reason", "suggestedMix"],
      },
      systemInstruction: "Tu es un expert en événementiel à Cotonou et Abomey-Calavi au Bénin. Tu aides les clients de 'Ahan Fifa' à choisir le meilleur pack de boissons pour leurs fêtes. Sois amical et pro."
    },
  });

  // response.text is a property, not a method. We check if it exists before parsing.
  const text = response.text;
  if (!text) {
    throw new Error("The AI returned an empty response.");
  }

  return JSON.parse(text) as RecommendationResponse;
};
