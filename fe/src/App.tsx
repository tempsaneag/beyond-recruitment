import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from '@/components/ui/toaster';
import AppRoutes from '@/utils/routes/AppRoutes';
import { useLanguageStore } from '@/store/languageStore';
import { useEffect } from 'react';

const queryClient = new QueryClient();

export default function App() {
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  useEffect(() => {
    const language = localStorage.getItem('i18nextLng');

    if (language) {
      setLanguage(language);
    }
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
