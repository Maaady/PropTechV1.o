export interface Property {
  id: string;
  title: string;
  type: 'apartment' | 'house' | 'commercial';
  address: string;
  rent: number;
  availableFrom: Date;
  description: string;
  features: string[];
  status: 'available' | 'pending' | 'rented';
  assignedAgent?: string;
  images: string[];
  size: number;
  bedrooms?: number;
  bathrooms?: number;
  energyRating?: string;
  yearBuilt?: number;
  amenities: string[];
  location: {
    lat: number;
    lng: number;
  };
}

export interface PropertyApplication {
  id: string;
  propertyId: string;
  applicantId: string;
  status: 'pending' | 'approved' | 'rejected';
  aiScore?: number;
  documents: string[];
  createdAt: Date;
  monthlyIncome: number;
  employmentStatus: string;
  currentAddress: string;
  references: {
    name: string;
    contact: string;
    relationship: string;
  }[];
  backgroundCheck?: {
    status: 'pending' | 'passed' | 'failed';
    completedAt?: Date;
  };
}