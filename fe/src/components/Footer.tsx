import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='flex justify-center border-t py-5'>
      <Link
        to='/privacy-policy'
        className='underline underline-offset-4 hover:text-gray-600'
      >
        Privacy Policy
      </Link>
      <div className='mx-2'>
        <Separator
          orientation='vertical'
          className='h-full w-[1px] bg-gray-600'
        />
      </div>
      <span>2024 © Beyond Recruitment partners</span>
    </div>
  );
}
