'use client';

import { PropertyApplication } from '@/lib/types/property';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Eye, Download, CheckCircle, XCircle, Clock } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ApplicationListProps {
  applications: PropertyApplication[];
  onViewApplication: (id: string) => void;
}

export function ApplicationList({ applications, onViewApplication }: ApplicationListProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getAIScoreBadge = (score: number | undefined) => {
    if (!score) return null;
    let variant = 'default';
    if (score >= 80) variant = 'default';
    else if (score >= 60) variant = 'secondary';
    else variant = 'destructive';

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Badge variant={variant}>{score}%</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>AI Compatibility Score</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Applicant</TableHead>
            <TableHead>AI Score</TableHead>
            <TableHead>Income</TableHead>
            <TableHead>Documents</TableHead>
            <TableHead>Applied</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getStatusIcon(application.status)}
                  <span className="capitalize">{application.status}</span>
                </div>
              </TableCell>
              <TableCell>{application.propertyId}</TableCell>
              <TableCell>{application.applicantId}</TableCell>
              <TableCell>{getAIScoreBadge(application.aiScore)}</TableCell>
              <TableCell>€{application.monthlyIncome.toLocaleString()}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  {application.documents.length} files
                </Button>
              </TableCell>
              <TableCell>{format(new Date(application.createdAt), 'PP')}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewApplication(application.id)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}