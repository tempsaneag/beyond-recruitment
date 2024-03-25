export default function MainSection() {
  return (
    <div
      className="flex size-full min-h-[calc(100vh-130px)] 
      flex-col justify-center 
      bg-[url('/images/shaking_hands.png')] bg-cover bg-center bg-no-repeat max-sm:py-10"
    >
      <div className='container text-white'>
        <div className='text-center'>
          <p className='text-6xl font-semibold'>Beyond Recruitment</p>
          <p className='text-2xl font-semibold'>
            Tech Talent & Executive Research
          </p>
        </div>
        <div className='mx-auto mt-5 max-w-2xl space-y-2'>
          <p>
            At Beyond Recruitment, we go beyond traditional recruitment
            services, offering something innovative and exceptional.
          </p>
          <p>
            We specialize in delivering top-quality recruitment and talent
            research services, tailored to your unique requirements. We believe
            in building strong relationships with our clients, holding ourselves
            accountable, and always striving for excellence.
          </p>
          <p>
            Moreover, we understand the importance of cost-effectiveness,
            ensuring that our services deliver great value without compromising
            on quality.
          </p>
          <p>
            You can count on Beyond Recruitment for exceptional service,
            offering inventive approaches and unleashing the full potential of
            your team
          </p>
          <p className='mx-auto max-w-2xl pt-5 text-center text-2xl font-semibold'>
            Our mission is clear: to fulfill our clients' needs with precision
            and care.
          </p>
        </div>
      </div>
    </div>
  );
}
