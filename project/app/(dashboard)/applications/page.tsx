'use client';

import { ApplicationList } from '@/components/applications/application-list';
import { PropertyApplication } from '@/lib/types/property';
import { useState } from 'react';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<PropertyApplication[]>([]);

  const handleViewApplication = (id: string) => {
    console.log('View application:', id);
    // TODO: Implement application details view
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Applications</h1>
      <ApplicationList
        applications={applications}
        onViewApplication={handleViewApplication}
      />
    </div>
  );
}