import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import LanguageDropdown from '@/components/LanguageDropdown';

import en from '@/locales/en/en.json';

export default function Header() {
  const { t } = useTranslation();

  const links = [
    {
      title: t(en.Home),
      path: '/',
    },
    {
      title: t(en['Who we are']),
      path: '#about',
    },
    {
      title: t(en.Services),
      path: '#services',
    },
    {
      title: t(en.Contact),
      path: '#contact',
    },
  ];

  return (
    <div className='flex h-16 w-full border-b'>
      <div className='container flex h-full w-full items-center justify-between'>
        <div></div>
        <div className='flex gap-5'>
          <div className='flex gap-3'>
            {links.map((link) => (
              <Link to={link.path} key={link.title} className='flex'>
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
