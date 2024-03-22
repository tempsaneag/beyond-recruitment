import LanguageDropdown from '@/components/LanguageDropdown';

import HeaderContact from '@/components/Header/HeaderContact';
import HeaderLogo from '@/components/Header/HeaderLogo';
import HeaderNavigationLinks from '@/components/Header/HeaderNavigationLinks';

export default function Header() {
  return (
    <div className='flex w-full flex-col border-b'>
      <HeaderContact />
      <div className='container flex h-full w-full items-center justify-between pb-5 pt-1'>
        <HeaderLogo />
        <div className='flex items-center gap-5'>
          <HeaderNavigationLinks />
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
}
