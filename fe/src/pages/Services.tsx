import WhyWorkingWithUsSection from '@/components/Services/WhyWorkingWithUsSection';
import TalentAndMarketingService from '@/components/WhoWeAre/TalentAndMarketingService';
import TalentResearchService from '@/components/WhoWeAre/TalentResearchService';
import { Separator } from '@/components/ui/separator';
import PagesLayout from '@/layouts/PagesLayout';
import { usePageTransitionStore } from '@/store/pageTransitionStore';
import { motion } from 'framer-motion';

export default function Services() {
  const swipeDirection = usePageTransitionStore(
    (state) => state.swipeDirection
  );

  const getSwipeDirection = () => {
    if (swipeDirection === 'right') {
      return {
        initial: 'translateX(-100%)',
        exit: 'translateX(100%)',
      };
    }
    return {
      initial: 'translateX(100%)',
      exit: 'translateX(-100%)',
    };
  };

  return (
    <motion.div
      initial={{ transform: getSwipeDirection().initial }}
      animate={{ transform: 'translateX(0)' }}
      exit={{ transform: getSwipeDirection().exit }}
    >
      <PagesLayout>
        <WhyWorkingWithUsSection />
        <div className='container'>
          <Separator className='h-1' />
        </div>
        <div className='flex flex-col items-center gap-5 py-10'>
          <p className='text-4xl font-semibold'>Services</p>
          <div className='container flex flex-col justify-center gap-10 max-lg:items-center lg:flex-row'>
            <TalentAndMarketingService />
            <TalentResearchService />
          </div>
        </div>
      </PagesLayout>
    </motion.div>
  );
}
