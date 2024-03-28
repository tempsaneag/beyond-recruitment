import { motion } from 'framer-motion';

export default function MainSection() {
  return (
    <>
      <div className='h-fit bg-black'>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          src='/images/logo.jpg'
          className='mx-auto'
        />
      </div>
      <div className='container py-5'>
        <div className='mx-auto mt-5 max-w-2xl space-y-2'>
          <p className='text-center text-xl'>
            Trust Beyond Recruitment for innovative solutions that maximize your
            team's potential. Specializing in top-quality recruitment and talent
            research, tailored to your needs, we prioritize cost-effectiveness
            without compromising quality.
          </p>
          <p className='mx-auto max-w-2xl pt-5 text-center text-2xl font-semibold'>
            Our mission is clear: to fulfill our clients' needs with precision
            and care.
          </p>
        </div>
      </div>
    </>
  );
}
