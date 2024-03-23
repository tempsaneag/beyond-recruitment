import { useSwipeable } from 'react-swipeable';

import { pageLinks } from '@/constants/pageLinks';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePreventSwipeStore } from '@/store/preventSwipeStore';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const preventSwipe = usePreventSwipeStore((state) => state.preventSwipe);

  const handleSwipeRight = () => {
    if (preventSwipe) return;
    const currentIndex = pageLinks.findIndex(
      (link) => link.path === location.pathname
    );
    const nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      navigate(pageLinks[pageLinks.length - 1]?.path);
      return;
    }
    navigate(pageLinks[nextIndex].path);
  };

  const handleSwipeLeft = () => {
    if (preventSwipe) return;
    const currentIndex = pageLinks.findIndex(
      (link) => link.path === location.pathname
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex >= pageLinks.length) {
      navigate(pageLinks[0]?.path);
      return;
    }
    navigate(pageLinks[nextIndex].path);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className='container flex flex-1 flex-col space-y-10 max-sm:py-10'>
      <div
        className='flex flex-1 flex-col items-center justify-center space-y-3'
        {...handlers}
      >
        {children}
      </div>
    </div>
  );
}
