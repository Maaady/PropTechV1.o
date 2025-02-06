export interface Visit {
  id: string;
  propertyId: string;
  applicantId: string;
  scheduledFor: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}