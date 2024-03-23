import { create } from 'zustand';

interface PageTransitionStore {
  swipeDirection: 'left' | 'right';
  setSwipeDirection: (swipeDirection: 'left' | 'right') => void;
}

export const usePageTransitionStore = create<PageTransitionStore>((set) => ({
  swipeDirection: 'right',
  setSwipeDirection: (swipeDirection) => set({ swipeDirection }),
}));
