import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ReactNode } from 'react';

interface StrengthsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  footer?: ReactNode;
}

export default function StrengthsCard({
  icon,
  title,
  description,
  footer,
}: StrengthsCardProps) {
  return (
    <Card className='group max-w-xs bg-gray-200 transition-all duration-300 hover:bg-gray-700 hover:text-white'>
      <CardHeader>
        <div className='flex flex-col items-center gap-2'>
          <div className='transition-transform duration-1000 group-hover:[transform:rotateY(360deg)]'>
            {icon}
          </div>
          <span className='text-lg'>{title}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-center'>{description}</p>
      </CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}
