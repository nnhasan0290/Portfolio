import React from 'react';
import firstImg from '../public/Screenshot_1.jpg';
import secondImg from '../public/Screenshot_2.jpg';
import thirdImg from '../public/Screenshot_3.jpg';
import BigHead from './BigHead';
import SinglePortfolio from './SinglePortfolio';

export default function Portfolio() {
  return (
    <main className=" sm:p-10 bg-[#111111] text-white box-border min-h-screen ">
      <BigHead main="PORTFOLIO" background="WORKS" />
      <div className="sm:flex flex-wrap justify-center  sm:mx-[70px]">
        <SinglePortfolio img={secondImg} />
        <SinglePortfolio img={thirdImg} />
        <SinglePortfolio img={firstImg} />

      </div>
    </main>
  );
}
