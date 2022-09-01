import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

function HomePage() {
  return (
    <main className="flex p-10 bg-[#111111] text-white box-border h-screen">
      <div className="flex justify-center items-center basis-2/3">
        <div className="mx-[130px] ">
          <h1 className="text-[40px] uppercase relative font-bold ml-10 after:content-[''] after:w-[35px] after:h-[3px] after:bg-white after:absolute after:left-[-40px] after:top-[26px] after:rounded-md">
            I&apos;m Nazmul Hasan.
            {' '}
            <br />
            {' '}
            Frontend Developer
            {' '}
          </h1>
          <p className="py-10 tracking-wider leading-8">
            I&apos;m a Tunisian based web designer & front‑end developer focused on crafting
            clean & user‑friendly experiences, I am passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <button type="submit" className="gradient relative py-3 pr-[60px] pl-10 capitalize rounded-full border font-semibold">
            about me
            {' '}
            <span className="flex absolute top-0 right-0 justify-center items-center px-3 h-full text-black bg-white rounded-full"><ArrowForward /></span>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full basis-1/3">
        <Image className="bg-[#040404] rounded-md" src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" width="300px" height="300px" />
      </div>
    </main>
  );
}
export default HomePage;
