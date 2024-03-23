import PagesLayout from '@/layouts/PagesLayout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0)' }}
      exit={{ transform: 'translateX(-100%)' }}
      className="flex flex-1 flex-col bg-[url('/images/shaking_hands.png')] 
      bg-cover bg-center bg-no-repeat"
    >
      <PagesLayout>
        <div className='text-white'>
          <div className='text-center'>
            <p className='text-6xl font-semibold'>Beyond Recruitment</p>
            <p className='text-2xl font-semibold'>
              Tech Talent & Executive Research
            </p>
            <p className='mt-5 text-center text-2xl font-semibold'>
              Our mission is clear: to fulfill our client's needs with precision
              and care.
            </p>
          </div>
          <div className='mx-auto mt-5 max-w-2xl space-y-2'>
            <p className='text-center'>
              At Beyond Recruitment, we go beyond traditional recruitment
              services, offering something innovative and exceptional.
            </p>
            <p className='text-center'>
              We specialize in delivering top-quality recruitment and talent
              research services, tailored to your unique requirements. We
              believe in building strong relationships with our clients, holding
              ourselves accountable, and always striving for excellence.
            </p>
            <p className='text-center'>
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
