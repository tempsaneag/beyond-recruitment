import { create } from 'zustand';

interface PreventSwipeStore {
  preventSwipe: boolean;
  setPreventSwipe: (preventSwipe: boolean) => void;
}

export const usePreventSwipeStore = create<PreventSwipeStore>((set) => ({
  preventSwipe: false,
  setPreventSwipe: (preventSwipe) => set({ preventSwipe }),
}));
