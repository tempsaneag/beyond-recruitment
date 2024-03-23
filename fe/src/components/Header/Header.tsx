import HeaderContact from '@/components/Header/HeaderContact';
import HeaderLogo from '@/components/Header/HeaderLogo';
import HeaderNavigationLinks from '@/components/Header/HeaderNavigationLinks';

export default function Header() {
  return (
    <div className='relative z-10 flex h-full min-h-[140px] w-full flex-col gap-5 border-b'>
      <HeaderContact />
      <div className='container flex h-full w-full items-center justify-between pb-5 pt-1'>
        <HeaderLogo />
        <div className='flex items-center gap-5 max-md:hidden'>
          <HeaderNavigationLinks />
        </div>
      </div>
    </div>
  );
}
