import TeamSection from '@/components/WhoWeAre/TeamSection';
import WhoWeAreSection from '@/components/WhoWeAre/WhoWeAreSection';
import { Separator } from '@/components/ui/separator';
import PagesLayout from '@/layouts/PagesLayout';
import { usePageTransitionStore } from '@/store/pageTransitionStore';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
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
      className='flex flex-1 flex-col'
    >
      <PagesLayout>
        <WhoWeAreSection />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='container'
        >
          <Separator className='h-1' />
        </motion.div>
        <TeamSection />
      </PagesLayout>
    </motion.div>
  );
}
