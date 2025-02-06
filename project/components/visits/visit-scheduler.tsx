'use client';

import { Visit } from '@/lib/types/visit';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface VisitSchedulerProps {
  propertyId: string;
  existingVisits: Visit[];
  onScheduleVisit: (date: Date, timeSlot: string) => void;
}

export function VisitScheduler({
  propertyId,
  existingVisits,
  onScheduleVisit,
}: VisitSchedulerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const timeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      const visitDate = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':');
      visitDate.setHours(parseInt(hours), parseInt(minutes));
      onScheduleVisit(visitDate, selectedTime);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule a Visit</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          disabled={(date) => date < new Date()}
        />
        
        <Select onValueChange={setSelectedTime}>
          <SelectTrigger>
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleSchedule}
          disabled={!selectedDate || !selectedTime}
          className="w-full"
        >
          Schedule Visit
        </Button>
      </CardContent>
    </Card>
  );
}