'use client';

import { VisitScheduler } from '@/components/visits/visit-scheduler';
import { Visit } from '@/lib/types/visit';
import { useState } from 'react';

export default function VisitsPage() {
  const [visits, setVisits] = useState<Visit[]>([]);

  const handleScheduleVisit = (date: Date, timeSlot: string) => {
    console.log('Schedule visit:', { date, timeSlot });
    // TODO: Implement visit scheduling
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Visit Scheduling</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <VisitScheduler
          propertyId="example"
          existingVisits={visits}
          onScheduleVisit={handleScheduleVisit}
        />
      </div>
    </div>
  );
}