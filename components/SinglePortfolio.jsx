import Image from 'next/image';
import React from 'react';

export default function SinglePortfolio({ img }) {
  return (
    <div className="flex justify-center items-center py-5 px-4 basis-1/2 min-w-[200px] sm:min-w-[350px] ">
      <Image className="rounded-md border border-gray-500" src={img} width="500px" height="250px" />
    </div>
  );
}
