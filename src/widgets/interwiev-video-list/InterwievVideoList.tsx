import Image from 'next/image';
import React from 'react';

export const InterwievVideoList = () => {
  const list = [1]
  const col = list.length > 1 ? (list.length > 4 ? 3 : 2) : 1

  return (
    <div className={`w-full h-full grid gap-[10px] grid-cols-${col}`}>
      {list.map((item, index) => {
        return (
          <div key={index} className={`h-full w-full flex items-center justify-center`}>
            <Image src={'/interwiev/interwiev.png'} alt='video' width={1000} height={600} quality={100} className='md:w-[50%] w-[90%]' />
          </div>
        )})}
    </div>
  );
};