import PagesLayout from '@/layouts/PagesLayout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0)' }}
      exit={{ transform: 'translateX(-100%)' }}
      className='flex flex-1 flex-col'
    >
      <PagesLayout>
        <div>
          <div className='text-center'>
            <p className='text-6xl font-semibold'>Beyond Recruitment</p>
            <p className='text-2xl font-semibold'>
              Tech Talent & Executive Research
            </p>
          </div>
          <div className='mt-5 space-y-5'>
            <p className='mx-auto max-w-xl text-center text-lg'>
              At Beyond Recruitment, we go beyond traditional recruitment
              services, offering something innovative and exceptional.
            </p>
            <p className='mx-auto max-w-xl text-center text-2xl font-bold'>
              Our mission is clear: to fulfill our client's needs with precision
              and care.
            </p>
            <p className='mx-auto max-w-2xl text-center'>
              We specialize in delivering top-quality recruitment and talent
              research services, tailored to your unique requirements. We
              believe in building strong relationships with our clients, holding
              ourselves accountable, and always striving for excellence.
            </p>
            <p className='mx-auto max-w-2xl text-center'>
              Moreover, we understand the importance of cost-effectiveness,
              ensuring that our services deliver great value without
              compromising on quality.
            </p>
          </div>
        </div>
      </PagesLayout>
    </motion.div>
  );
}
