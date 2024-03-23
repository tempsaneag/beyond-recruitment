export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container h-full min-h-[calc(100vh-140px)] space-y-10'>
      <div className='flex min-h-[inherit] flex-col items-center justify-center space-y-3 text-center'>
        <div className='pb-20'>{children}</div>
      </div>
    </div>
  );
}
