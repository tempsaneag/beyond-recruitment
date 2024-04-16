import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface WhyWorkingWithUsListItemsProps {
  title: string;
  description: string;
  delay: number;
}

export default function WhyWorkingWithUsListItems({
  title,
  description,
  delay,
}: WhyWorkingWithUsListItemsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, position: 'absolute' }}
      animate={{ opacity: 1, y: 0, position: 'relative' }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: 'spring',
        stiffness: 70,
      }}
      className='flex gap-2'
    >
      <div>
        <Check className='size-7 text-green-500' />
      </div>
      <p>
        <span className='text-lg font-semibold'>{title}</span>
        <span className='text-lg'>{description}</span>
      </p>
    </motion.div>
  );
}
