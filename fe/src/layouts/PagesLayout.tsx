import { useSwipeable } from 'react-swipeable';

import { useToast } from '@/components/ui/use-toast';
import { pageLinks } from '@/constants/pageLinks';
import { usePreventSwipeStore } from '@/store/preventSwipeStore';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePageTransitionStore } from '@/store/pageTransitionStore';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const preventSwipe = usePreventSwipeStore((state) => state.preventSwipe);
  const { setSwipeDirection } = usePageTransitionStore((state) => state);
  const { toast } = useToast();

  const [counter, setCounter] = useState(0);

  const checkPreventSwipe = () => {
    if (preventSwipe) {
      setCounter((prev) => prev + 1);
      if (counter >= 2) {
        toast({
          description:
            'If you want to leave contact page, submit or reset the form',
          className: 'bg-blue-500 text-white border-0',
        });
        setCounter(0);
      }
      return true;
    }
    return false;
  };

  const handleSwipeRight = () => {
    if (checkPreventSwipe()) {
      return;
    }
    setSwipeDirection('right');
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
    if (checkPreventSwipe()) {
      return;
    }
    setSwipeDirection('left');
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
