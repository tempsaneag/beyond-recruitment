import { useSwipeHintStore } from '@/store/swipeHintStore';
import { motion } from 'framer-motion';

export default function SwipeHint() {
  const showSwipeHint = useSwipeHintStore((state) => state.showSwipeHint);

  if (!showSwipeHint) return null;

  return (
    <div className='fixed bottom-10 z-10 flex w-full justify-center lg:hidden'>
      <div className='flex items-center gap-3 rounded-lg bg-gray-300 p-3'>
        <motion.img
          src='/images/swipe.png'
          className='size-10'
          alt='swipe'
          initial={{ x: -5 }}
          animate={{ x: 5 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatType: 'reverse',
          }}
        />
      </div>
    </div>
  );
}
