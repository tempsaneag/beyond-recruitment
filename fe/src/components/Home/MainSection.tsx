import ImageCarousel from '@/components/Home/ImageCarousel';

export default function MainSection() {
  return (
    <>
      <ImageCarousel />
      <div className='container py-5'>
        <div className='mx-auto mt-5 max-w-2xl space-y-2'>
          <p className='text-justify text-xl'>
            Hello there! At Beyond Recruitment Partners, our mission is to
            connect you with top-tier tech talent and executive experts. Our
            goal? To supercharge your team's performance with the best solutions
            available. We specialize in providing skilled professionals who
            seamlessly integrate into your projects, ensuring a smooth and
            successful collaboration. Rest assured, we prioritize finding the
            perfect fit for your crew without exceeding your budget. Count on us
            to deliver results with precision, speed, and efficiency, empowering
            your organization to excel without compromising quality.
          </p>
        </div>
      </div>
    </>
  );
}
