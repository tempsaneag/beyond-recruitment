export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container flex flex-1 flex-col space-y-10 max-sm:py-10'>
      <div className='flex flex-1 flex-col items-center justify-center space-y-3'>
        {children}
      </div>
    </div>
  );
}
