import PagesLayout from '@/layouts/PagesLayout';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0)' }}
      exit={{ transform: 'translateX(-100%)' }}
      className='flex flex-1 flex-col'
    >
      <PagesLayout>
        <p className='text-4xl font-semibold'>Who we are</p>
      </PagesLayout>
    </motion.div>
  );
}
