import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { pageLinks } from '@/constants/pageLinks';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { PageLinkType } from '@/types/PageLinksType';
import { usePageTransitionStore } from '@/store/pageTransitionStore';

export default function HeaderNavigationLinks() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setSwipeDirection } = usePageTransitionStore((state) => state);

  const navLinkClassName =
    'flex text-xl transition-colors duration-300 hover:text-blue-600';

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: PageLinkType
  ) => {
    event.preventDefault();
    if (location.pathname === link.path) return;
    if (
      pageLinks.findIndex((page) => page.path === link.path) >
      pageLinks.findIndex((page) => page.path === location.pathname)
    ) {
      setSwipeDirection('left');
    } else {
      setSwipeDirection('right');
    }
    navigate(link.path);
  };

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
            onClick={(e) => handleLinkClick(e, link)}
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
              <NavLink
                to={link.path}
                key={link.title}
                className='text-xl'
                onClick={(e) => handleLinkClick(e, link)}
              >
                <DropdownMenuItem>{link.title}</DropdownMenuItem>
              </NavLink>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
