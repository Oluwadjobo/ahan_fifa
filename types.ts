
export interface Pack {
  id: string;
  name: string;
  description: string;
  bottles: string;
  price: string;
  priceValue?: number;
  features: string[];
  gradient: string;
  whatsappMessage: string;
}

export interface RecommendationRequest {
  eventType: string;
  guestCount: number;
  duration: string;
}

export interface RecommendationResponse {
  packId: string;
  reason: string;
  suggestedMix: string;
}
