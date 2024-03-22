import { useTranslation } from 'react-i18next';

import en from '@/locales/en/en.json';
import { Link } from 'react-router-dom';

export default function HeaderNavigationLinks() {
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
    <div className='flex gap-3'>
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.title}
          className='flex text-2xl font-semibold 
          transition-colors duration-300 hover:text-blue-600'
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
