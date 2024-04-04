import { motion } from 'framer-motion';

export default function MainSection() {
  return (
    <>
      <div className='h-fit bg-black py-24'>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          src='/images/logo.png'
          className='mx-auto h-full max-h-[250px]'
        />
      </div>
      <div className='container py-5'>
        <div className='mx-auto mt-5 max-w-2xl space-y-2'>
          <p className='text-justify text-xl'>
            Hey there! At Beyond Recruitment, we're all about hooking you up
            with the best tech talent and top execs out there. Our goal? To
            supercharge your team's mojo with killer solutions. We're pros at
            finding the perfect fit for your crew without breaking the bank.
            Count on us to deliver results with precision, fast speed and
            efficiency, ensuring your organization excels without compromising
            quality.
          </p>
        </div>
      </div>
    </>
  );
}
