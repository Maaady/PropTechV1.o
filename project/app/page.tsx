import { Button } from '@/components/ui/button';
import { Building2, Users, Calendar, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              AI-Powered Real Estate Management
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your property management workflow with intelligent automation and AI-driven insights.
            </p>
            <div className="mt-10 space-x-4">
              <Button asChild size="lg">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/demo">Try Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Building2 className="h-10 w-10" />}
              title="Property Management"
              description="Efficiently manage your property portfolio with automated tools and insights."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Tenant Screening"
              description="AI-powered tenant screening and application management."
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10" />}
              title="Smart Scheduling"
              description="Automated visit scheduling and calendar management."
            />
            <FeatureCard
              icon={<FileCheck className="h-10 w-10" />}
              title="Digital Paperwork"
              description="Automated document generation and digital signatures."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
      <div className="p-3 bg-primary/5 rounded-full text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}