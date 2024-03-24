import MainSection from '@/components/Home/MainSection';
import ServicesSection from '@/components/Home/ServicesSection';
import StrengthsSection from '@/components/Home/StrengthsSection';
import PagesLayout from '@/layouts/PagesLayout';
import { usePageTransitionStore } from '@/store/pageTransitionStore';
import { motion } from 'framer-motion';

export default function Home() {
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
        <MainSection />
        <StrengthsSection />
        <ServicesSection />
      </PagesLayout>
    </motion.div>
  );
}
