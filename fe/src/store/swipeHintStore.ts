import { create } from 'zustand';

interface SwipeHintStore {
  showSwipeHint: boolean;
  setShowSwipeHint: (showSwipeHint: boolean) => void;
}

export const useSwipeHintStore = create<SwipeHintStore>((set) => ({
  showSwipeHint: true,
  setShowSwipeHint: (showSwipeHint) => set({ showSwipeHint }),
}));
