'use client';

import { StatsCards } from '@/components/dashboard/stats-cards';
import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

const data = [
  { month: 'Jan', applications: 65, visits: 24, occupancyRate: 85 },
  { month: 'Feb', applications: 59, visits: 28, occupancyRate: 87 },
  { month: 'Mar', applications: 80, visits: 35, occupancyRate: 88 },
  { month: 'Apr', applications: 81, visits: 45, occupancyRate: 90 },
  { month: 'May', applications: 56, visits: 32, occupancyRate: 89 },
  { month: 'Jun', applications: 55, visits: 30, occupancyRate: 85 },
];

export default function DashboardPage() {
  const [stats] = useState({
    totalProperties: 12,
    activeApplications: 24,
    scheduledVisits: 8,
    vacancyRate: 15,
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <StatsCards {...stats} />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  axisLine={true}
                  tickLine={true}
                />
                <YAxis 
                  axisLine={true}
                  tickLine={true}
                  width={80}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="hsl(var(--chart-1))"
                  name="Applications"
                  dot={false}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="hsl(var(--chart-2))"
                  name="Visits"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Occupancy Rate</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  axisLine={true}
                  tickLine={true}
                />
                <YAxis 
                  axisLine={true}
                  tickLine={true}
                  width={80}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="occupancyRate"
                  stroke="hsl(var(--chart-3))"
                  name="Occupancy Rate"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}