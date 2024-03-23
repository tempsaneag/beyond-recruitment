import { NavLink } from 'react-router-dom';

import { pageLinks } from '@/constants/pageLinks';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';

export default function HeaderNavigationLinks() {
  const navLinkClassName =
    'flex text-xl transition-colors duration-300 hover:text-blue-600';

  return (
    <div>
      <div className='flex gap-5 max-lg:hidden'>
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
      <div className='lg:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu className='size-10' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='flex flex-col space-y-3'>
            {pageLinks.map((link) => (
              <NavLink to={link.path} key={link.title} className='text-xl'>
                <DropdownMenuItem>{link.title}</DropdownMenuItem>
              </NavLink>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
