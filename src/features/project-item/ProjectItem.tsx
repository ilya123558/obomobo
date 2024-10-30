'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface IProps {
  imgSrc: string
  title: string
  githubLink: string
  liveDemoLink: string
}

export const ProjectItem: React.FC<IProps> = ({imgSrc, githubLink, liveDemoLink, title}) => {
  const router = useRouter()

  const handleOpenGithub = () => {
    router.push(githubLink)
  }

  const handleOpenliveDemo = () => {
    router.push(liveDemoLink)
  }

  return (
    <div className='xl:w-[335px] w-[280px] xl:h-[440px] h-[400px] flex flex-col items-center justify-between xl:p-[37px_37px_23px] p-[25px_25px_18px] text-center border-[#A2A2A2] rounded-[25px] border-[2px] bg-[#FAFAFA]'>
      <div className="">
        <Image src={imgSrc} alt='project-img' width={261} height={261} quality={100} />
      </div>
      <div className="w-full">
        <h6 className='font-bold xl:text-[24px] text-[22px]'>{title}</h6>
        <div className="flex justify-between mt-[15px]">
          <button onClick={handleOpenGithub} className='xl:w-[120px] w-[100px] xl:h-[46px] h-[35px] active:scale-95 flex items-center justify-center transition-all will-change-transform xl:text-[14px] text-[12px] font-medium rounded-[50px] border-[1px] border-[#9A9A9A]'>
            Github
          </button>
          <button onClick={handleOpenliveDemo} className='xl:w-[120px] w-[100px] xl:h-[46px] h-[35px] active:scale-95 flex items-center justify-center transition-all will-change-transform xl:text-[14px] text-[12px] font-medium rounded-[50px] border-[1px] border-[#9A9A9A]'>
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};