import ServicesCard from '@/components/Home/ServicesCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { usePageTransitionStore } from '@/store/pageTransitionStore';
import { useNavigate } from 'react-router-dom';

export default function ServicesSection() {
  const navigate = useNavigate();
  const setSwipeDirection = usePageTransitionStore(
    (state) => state.setSwipeDirection
  );
  const handleReadMoreClick = () => {
    setSwipeDirection('left');
    navigate('/services');
  };

  return (
    <div className='container flex justify-center py-10'>
      <div className='w-full space-y-5'>
        <div>
          <p className='text-center text-4xl'>Services</p>
          <Separator className='mx-auto h-[2px] max-w-lg' />
        </div>
        <div className='flex flex-wrap justify-center gap-5'>
          <ServicesCard
            icon={
              <div className='size-20'>
                <img src='/images/reputation.png' />
              </div>
            }
            title='Talent and Marketing Mapping'
            description='Our talent and market mapping services 
            meticulously chart the landscape of skilled professionals 
            and market trends, empowering businesses with targeted 
            insights to strategically navigate recruitment and market 
            positioning'
          />
          <ServicesCard
            icon={
              <div className='size-20'>
                <img src='/images/recruitment.png' />
              </div>
            }
            title='Talent Research'
            description='With our talent research capabilities, we 
            reveal the stars waiting to be found, delivering 
            individualized solutions to connect business with 
            the ideal candidates suited to their distinct needs 
            and objectives.'
          />
        </div>
        <div className='flex justify-center'>
          <Button
            className='text-lg'
            variant='link'
            onClick={handleReadMoreClick}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
