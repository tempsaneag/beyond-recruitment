import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ReactNode } from 'react';

interface ServicesCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  footer?: ReactNode;
}

export default function ServicesCard({
  icon,
  title,
  description,
  footer,
}: ServicesCardProps) {
  return (
    <Card className='max-w-md transition-all duration-300 hover:shadow-lg'>
      <CardHeader>
        <div className='flex flex-col items-center gap-2'>
          {icon}
          <span className='text-lg'>{title}</span>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <p className='text-center'>{description}</p>
      </CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}
