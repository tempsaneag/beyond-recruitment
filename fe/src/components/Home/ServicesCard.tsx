import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { usePageTransitionStore } from '@/store/pageTransitionStore';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const setSwipeDirection = usePageTransitionStore(
    (state) => state.setSwipeDirection
  );

  const handleCardClick = () => {
    setSwipeDirection('left');
    navigate('/services');
  };

  return (
    <Card
      className='group max-w-md cursor-pointer bg-gray-200 transition-all duration-300 hover:bg-gray-700 hover:text-white hover:shadow-lg'
      onClick={handleCardClick}
    >
      <CardHeader>
        <div className='flex flex-col items-center gap-2'>
          {icon}
          <span className='text-lg'>{title}</span>
        </div>
        <Separator className='bg-gray-400 transition-all duration-300 group-hover:bg-white' />
      </CardHeader>
      <CardContent>
        <p className='text-center'>{description}</p>
      </CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}
