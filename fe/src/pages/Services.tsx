import PagesLayout from '@/layouts/PagesLayout';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0)' }}
      exit={{ transform: 'translateX(-100%)' }}
    >
      <PagesLayout>
        <p className='whitespace-nowrap text-nowrap text-4xl font-semibold'>
          Services
        </p>
      </PagesLayout>
    </motion.div>
  );
}