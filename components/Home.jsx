import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function HomePage() {
  const router = useRouter();
  return (
    <main className="lg:flex sm:p-10 bg-[#111111] text-white box-border min-h-screen">
      <div className="flex justify-center items-center px-10 py-2 sm:w-full w-[250px] basis-1/3 m-auto">
        <Image className="bg-[#e0dbdb] lg:rounded-md rounded-full border border-gray-500" src="/avatar.png" width="400px" height="400px" />
      </div>
      <div className="flex justify-center items-center basis-2/3">
        <div className="lg:mx-[130px] text-center lg:text-start">
          <h1 className="second-big-head after:content-[''] after:w-[35px] after:lg:h-[3px] after:bg-white after:absolute after:left-[-40px] after:top-[26px] after:rounded-md lg:ml-10 lg:text-start">
            I&apos;m Nazmul Hasan.
            {' '}
            <br />
            {' '}
            Frontend Developer
            {' '}
          </h1>
          <p className="py-5 tracking-wider leading-8 lg:px-5 px-[20px] md:py-10">
            I&apos;m a Tunisian based web designer & front‑end developer focused on crafting
            clean & user‑friendly experiences, I am passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <button onClick={() => router.push('/aboutme')} type="submit" className="gradient relative py-3 pr-[60px] pl-10  rounded-full border font-semibold  uppercase box-border">
            more about me
            {' '}
            <span className="flex absolute top-0 right-0 justify-center items-center px-3 h-full text-black bg-white rounded-full"><ArrowForward /></span>
          </button>
        </div>
      </div>

    </main>
  );
}
export default HomePage;
