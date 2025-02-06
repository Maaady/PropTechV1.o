'use client';

import { Property } from '@/lib/types/property';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Calendar, BedDouble, Bath, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

export function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
          {property.images?.[0] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={property.images[0]}
              alt={property.title}
              className="object-cover w-full h-full"
            />
          )}
          <Badge
            className="absolute top-2 right-2"
            variant={property.status === 'available' ? 'default' : 'secondary'}
          >
            {property.status}
          </Badge>
        </div>
        <div>
          <h3 className="text-lg font-semibold line-clamp-2">{property.title}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{property.address}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 text-sm">
            {property.bedrooms && (
              <div className="flex items-center gap-1">
                <BedDouble className="h-4 w-4" />
                <span>{property.bedrooms} beds</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms} baths</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Ruler className="h-4 w-4" />
              <span>{property.size}m²</span>
            </div>
          </div>
          <div className="flex items-center">
            <Building2 className="h-4 w-4 mr-2" />
            <span className="capitalize">{property.type}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>From {format(new Date(property.availableFrom), 'PP')}</span>
          </div>
          <p className="text-2xl font-bold">€{property.rent.toLocaleString()}/month</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onViewDetails(property.id)} className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}