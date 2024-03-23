import { NavLink } from 'react-router-dom';

import { pageLinks } from '@/constants/pageLinks';

export default function HeaderNavigationLinks() {
  const navLinkClassName =
    'flex text-xl transition-colors duration-300 hover:text-blue-600';

  return (
    <div className='flex gap-5'>
      {pageLinks.map((link) => (
        <NavLink
          to={link.path}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `underline underline-offset-4 ${navLinkClassName}`
              : `${navLinkClassName}`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}
