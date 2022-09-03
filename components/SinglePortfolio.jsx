import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SinglePortfolio({ img, details, link }) {
  return (
    <Link href={link}>
      <div className="flex justify-center items-center m-5 min-w-[200px] sm:min-w-[350px] relative group cursor-pointer">
        <Image className="rounded-md border border-gray-500" src={img} width="500px" height="250px" />
        <div className="flex absolute top-0 left-0 invisible flex-col justify-center items-center w-full h-full text-white rounded-md opacity-0 transition-all duration-300 bg-black/70 group-hover:visible group-hover:opacity-100">
          <h2 className="text-xl font-semibold opacity-100">{details?.name}</h2>
          <p className="w-[70%]">
            <span className="opacity-70"> Technology:</span>
            {' '}
            <span className="font-semibold">{details?.tech}</span>
            <br />
          </p>
          {
            details?.focus && (
            <p className="w-[70%]">
              <span className="opacity-70">
                Focus:
                {' '}
              </span>
              <span className="font-semibold">
                {details?.focus}
              </span>
            </p>
            )
          }
        </div>
      </div>
    </Link>
  );
}
