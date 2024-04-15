import { useSwipeable } from 'react-swipeable';

import { useToast } from '@/components/ui/use-toast';
import { pageLinks } from '@/constants/pageLinks';
import { usePageTransitionStore } from '@/store/pageTransitionStore';
import { usePreventSwipeStore } from '@/store/preventSwipeStore';
import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import { useSwipeHintStore } from '@/store/swipeHintStore';

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
  const setShowSwipeHint = useSwipeHintStore((state) => state.setShowSwipeHint);

  const checkPreventSwipe = () => {
    if (preventSwipe) {
      toast({
        title: 'You have unsaved changes',
        description:
          'If you want to leave contact page, submit or reset the form',
        className: 'bg-blue-500 text-white border-0',
      });
      return true;
    }
    return false;
  };

  const handleSwipeRight = () => {
    if (checkPreventSwipe()) {
      return;
    }
    setSwipeDirection('right');
    setShowSwipeHint(false);
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
    setShowSwipeHint(false);
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

  const debouncedSwipeRight = useMemo(
    () => debounce(handleSwipeRight, 100),
    [checkPreventSwipe]
  );
  const debouncedSwipeLeft = useMemo(
    () => debounce(handleSwipeLeft, 100),
    [checkPreventSwipe]
  );

  const handlers = useSwipeable({
    onSwipedLeft: debouncedSwipeLeft,
    onSwipedRight: debouncedSwipeRight,
    onSwipedUp: () => {
      setShowSwipeHint(false);
    },
    onSwipedDown: () => {
      setShowSwipeHint(false);
    },
    delta: 50,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div {...handlers}>
      {children}
      <Footer />
    </div>
  );
}
