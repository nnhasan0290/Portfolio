import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

function HomePage() {
  return (
    <main className="lg:flex sm:p-10 bg-[#111111] text-white box-border min-h-screen">
      <div className="flex justify-center items-center px-10 py-2 sm:w-full w-[250px] basis-1/3 m-auto">
        <Image className="bg-[#e0dbdb] lg:rounded-md rounded-full border border-gray-500" src="/avatar.png" width="400px" height="400px" />
      </div>
      <div className="flex justify-center items-center basis-2/3">
        <div className="lg:mx-[130px] text-center lg:text-start">
          <h1 className=" sm:text-[40px] text-[20px] uppercase relative font-bold lg:ml-10 after:content-[''] after:w-[35px] after:lg:h-[3px] after:bg-white after:absolute after:left-[-40px] after:top-[26px] after:rounded-md">
            I&apos;m Nazmul Hasan.
            {' '}
            <br />
            {' '}
            Frontend Developer
            {' '}
          </h1>
          <p className="px-5 py-5 tracking-wider leading-8 md:py-10">
            I&apos;m a Tunisian based web designer & front‑end developer focused on crafting
            clean & user‑friendly experiences, I am passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <button type="submit" className="gradient relative py-3 pr-[60px] pl-10 capitalize rounded-full border font-semibold hidden lg:block">
            about me
            {' '}
            <span className="flex absolute top-0 right-0 justify-center items-center px-3 h-full text-black bg-white rounded-full"><ArrowForward /></span>
          </button>
        </div>
      </div>

    </main>
  );
}
export default HomePage;
