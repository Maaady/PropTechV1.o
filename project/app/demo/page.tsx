'use client';

import { Button } from '@/components/ui/button';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { PropertyCard } from '@/components/properties/property-card';
import { ApplicationList } from '@/components/applications/application-list';
import { VisitScheduler } from '@/components/visits/visit-scheduler';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Property } from '@/lib/types/property';

// Demo data with correct type
const demoProperty: Property = {
  id: 'demo-1',
  title: 'Luxury Apartment in Paris',
  type: 'apartment',
  address: '123 Champs-Élysées, Paris',
  rent: 2500,
  availableFrom: new Date('2024-05-01'),
  description: 'Beautiful apartment with Eiffel Tower view',
  features: ['Balcony', 'Parking', 'Elevator'],
  status: 'available',
  images: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
  ],
  size: 120,
  bedrooms: 3,
  bathrooms: 2,
  energyRating: 'A',
  yearBuilt: 2020,
  amenities: ['Air Conditioning', 'Heating', 'Security System'],
  location: {
    lat: 48.8566,
    lng: 2.3522
  }
};

const demoApplication = {
  id: 'app-1',
  propertyId: 'demo-1',
  applicantId: 'user-1',
  status: 'pending',
  aiScore: 85,
  documents: ['passport.pdf', 'payslip.pdf'],
  createdAt: new Date(),
  monthlyIncome: 5000,
  employmentStatus: 'Full-time',
  currentAddress: '456 Avenue des Ternes, Paris',
  references: [
    {
      name: 'John Doe',
      contact: 'john@example.com',
      relationship: 'Previous Landlord'
    }
  ]
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">PropTech Demo</h1>
          <Button asChild>
            <a href="/signup">Try It Now</a>
          </Button>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="visits">Visits</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <StatsCards
              totalProperties={12}
              activeApplications={24}
              scheduledVisits={8}
              vacancyRate={15}
            />
          </TabsContent>

          <TabsContent value="properties">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PropertyCard
                property={demoProperty}
                onViewDetails={() => {}}
              />
            </div>
          </TabsContent>

          <TabsContent value="applications">
            <ApplicationList
              applications={[demoApplication]}
              onViewApplication={() => {}}
            />
          </TabsContent>

          <TabsContent value="visits">
            <div className="grid gap-6 md:grid-cols-2">
              <VisitScheduler
                propertyId="demo-1"
                existingVisits={[]}
                onScheduleVisit={() => {}}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}