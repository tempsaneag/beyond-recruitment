import ContactForm from '@/components/ContactForm/ContactForm';
import PagesLayout from '@/layouts/PagesLayout';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0)' }}
      exit={{ transform: 'translateX(-100%)' }}
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
