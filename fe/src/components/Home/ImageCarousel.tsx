import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

export default function ImageCarousel() {
  const slides = [
    {
      index: 0,
      image: '/images/logo.png',
    },
    {
      index: 1,
      image: '/images/1-min.jpg',
      text: 'Quality Recruitment & Talent Research',
    },
    {
      index: 2,
      image: '/images/2-min.jpg',
      text: 'Personalized & Budget-Friendly Solutions',
    },
    {
      index: 3,
      image: '/images/3-min.jpg',
      text: 'Prompt Delivery of Talent',
    },
  ];

  return (
    <div className='h-fit bg-[#1E2D40]'>
      <Carousel
        className='w-full'
        opts={{
          loop: true,
          watchDrag: false,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.index}>
              <div
                className={`relative flex h-full max-h-[500px] w-full items-center bg-black`}
              >
                {slide?.text && (
                  <div className='absolute inset-0 flex h-full w-full items-end justify-end md:items-center md:justify-center'>
                    <span className='rounded-md bg-gray-700/70 p-4 text-center text-3xl font-semibold text-white md:text-6xl'>
                      {slide.text}
                    </span>
                  </div>
                )}
                <img
                  src={slide.image}
                  className={`h-full ${slide.image.includes('logo') ? 'mx-auto py-24' : 'w-full object-cover'}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
