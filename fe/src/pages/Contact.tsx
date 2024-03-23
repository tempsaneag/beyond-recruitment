import ContactForm from '@/components/ContactForm/ContactForm';
import PagesLayout from '@/layouts/PagesLayout';
import { usePageTransitionStore } from '@/store/pageTransitionStore';
import { motion } from 'framer-motion';

export default function Contact() {
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
        <div className='flex w-full flex-col items-center'>
          <p className='text-4xl font-semibold'>Contact</p>
          <ContactForm />
        </div>
      </PagesLayout>
    </motion.div>
  );
}
