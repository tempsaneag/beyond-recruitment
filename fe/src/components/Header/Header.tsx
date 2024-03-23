import HeaderContact from '@/components/Header/HeaderContact';
import HeaderLogo from '@/components/Header/HeaderLogo';
import HeaderNavigationLinks from '@/components/Header/HeaderNavigationLinks';

export default function Header() {
  return (
    <div className='relative z-10 flex w-full flex-col gap-2 border-b'>
      <div className='border-b pb-1'>
        <HeaderContact />
      </div>
      <div className='container flex h-full w-full items-center justify-between pb-2'>
        <HeaderLogo />
        <div className='flex items-center gap-5 max-md:hidden'>
          <HeaderNavigationLinks />
        </div>
      </div>
    </div>
  );
}
