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
        <div className='min-h-[calc(100vh-130px)]'>
          <p className='text-4xl font-semibold'>Services</p>
        </div>
      </PagesLayout>
    </motion.div>
  );
}
