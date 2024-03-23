import PagesLayout from '@/layouts/PagesLayout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0)' }}
      exit={{ transform: 'translateX(-100%)' }}
    >
      <PagesLayout>
        <div className='pb-20'>
          <p className='whitespace-nowrap text-nowrap text-4xl font-semibold'>
            Beyond Recruitment
          </p>
          <p className='whitespace-nowrap text-nowrap text-2xl font-semibold'>
            Tech Talent & Executive Research
          </p>
        </div>
      </PagesLayout>
    </motion.div>
  );
}
