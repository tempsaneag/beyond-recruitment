import { create } from 'zustand';

interface PageIndexStore {
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
}

export const usePageIndexStore = create<PageIndexStore>((set) => ({
  pageIndex: 0,
  setPageIndex: (pageIndex) => set({ pageIndex }),
}));
