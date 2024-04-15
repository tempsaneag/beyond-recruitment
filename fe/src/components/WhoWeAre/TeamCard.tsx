import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  description: string;
  image: string;
  imageContainerClassName?: string;
  textContainerClassName?: string;
  imageSide?: 'left' | 'right';
  linkedinUrl: string;
}

export default function TeamCard({
  name,
  description,
  image,
  imageContainerClassName,
  textContainerClassName,
  imageSide = 'left',
  linkedinUrl,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ x: imageSide === 'left' ? -1000 : 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`flex w-full flex-col items-center gap-x-5 gap-y-10 ${imageSide === 'left' ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}
    >
      <div className={`h-fit w-full max-w-xl ${imageContainerClassName ?? ''}`}>
        <img src={image} alt={name} className='size-full' />
      </div>
      <div
        className={`flex-1 space-y-3 px-4 md:text-lg ${textContainerClassName ?? ''}`}
      >
        <p className='font-bold'>{name}</p>
        <p className='text-justify'>{description}</p>
        <div className='size-7'>
          <a href={linkedinUrl} target='_blank'>
            <img src='/images/linkedin.png' />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
