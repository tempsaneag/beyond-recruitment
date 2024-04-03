import HeaderContact from '@/components/Header/HeaderContact';
import HeaderNavigationLinks from '@/components/Header/HeaderNavigationLinks';

export default function Header() {
  return (
    <div className='relative z-10 flex w-full flex-col gap-2 border-b'>
      <div className='border-b pb-1'>
        <HeaderContact />
      </div>
      <div className='container flex h-full w-full items-center justify-end py-5'>
        <div className='flex items-center gap-5'>
          <HeaderNavigationLinks />
        </div>
      </div>
    </div>
  );
}
