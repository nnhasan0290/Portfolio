import React from 'react';
import firstImg from '../public/Screenshot_1.jpg';
import secondImg from '../public/Screenshot_2.jpg';
import thirdImg from '../public/Screenshot_3.jpg';
import BigHead from './BigHead';
import SinglePortfolio from './SinglePortfolio';

export default function Portfolio() {
  const shopgrid = {
    name: 'Shop Grid',
    tech: 'Next js, Express js, Mongoose, JWT Authentication',
  };
  const dashboard = {
    name: 'Simple Dashboard',
    tech: 'Next js, Chart Js, Mongoose',
  };

  return (
    <main className=" sm:p-10 bg-[#111111] text-white box-border min-h-screen pb-10 ">
      <BigHead main="PORTFOLIO" background="WORKS" />
      <div className="sm:flex flex-wrap justify-center sm:mx-[70px]">
        <SinglePortfolio img={secondImg} details={shopgrid} link="https://nxt-shop.vercel.app/product" />
        <SinglePortfolio img={thirdImg} details={dashboard} link="https://nxt-shop.vercel.app/admin/dashboard" />
      </div>
    </main>
  );
}
