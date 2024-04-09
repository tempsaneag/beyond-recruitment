import StrengthsCard from '@/components/Home/StrengthsCard';
import { BadgeCheck, Gauge, UsersRound, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StrengthsSection() {
  return (
    <div className='px-10'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        className='flex flex-wrap justify-center gap-5 py-10'
      >
        <StrengthsCard
          icon={<BadgeCheck className='size-10 group-hover:text-green-500' />}
          title='Quality'
          description='We give special importance to providing high-quality 
          recruitment and talent research services, striving to surpass 
          expectations, and set new standards.'
        />
        <StrengthsCard
          icon={<UsersRound className='size-10 group-hover:text-blue-500' />}
          title='Customer-centricity'
          description="We emphasize our focus on understanding and meeting 
          clients' needs, providing solutions to their unique requirements."
        />
        <StrengthsCard
          icon={<Wallet className='size-10 group-hover:text-yellow-600' />}
          title='Cost-effectiveness'
          description='At Beyond Recruitment Partners we bring our ability to deliver 
          value by providing cost-effective solutions without compromising on quality.'
        />
        <StrengthsCard
          icon={<Gauge className='size-10 group-hover:text-red-500' />}
          title='We Move FAST'
          description="Understanding our clients' needs, and we undertake 
          recruitment agreements with full speed and responsibility, 
          ensuring prompt delivery of talent."
        />
      </motion.div>
    </div>
  );
}
