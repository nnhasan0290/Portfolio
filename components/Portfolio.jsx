import React from 'react';
import secondImg from '../public/Screenshot_2.jpg';
import thirdImg from '../public/Screenshot_3.jpg';
import tictac from "../public/tic.png";
import basket from "../public/basketball.png";
import BigHead from './BigHead';
import SinglePortfolio from './SinglePortfolio';
import Slider from "../public/slider.png";
import cs from "../public/cs.png"

export default function Portfolio() {
  const shopgrid = {
    name: 'Shop Grid',
    tech: 'Next js, Express js, Mongoose, JWT Authentication',
  };
  const dashboard = {
    name: 'Simple Dashboard',
    tech: 'Next js, Chart Js, Mongoose',
  };
  const tictactoe = {
    name: 'TIC TAC TOE',
    tech: 'Vanilla JavaScript, Vanilla Css',
  };
  const basketball = {
    name: 'Basketball Winner Prediction',
    tech: 'React, LocalStorage, MUi'
  };
  const fixedslider = {
    name: 'SVG slider',
    tech: 'React, GSAP, SVG drawing'
  };
  const cscience = {
    name: 'Static Figma Design',
    tech: 'Next js, Figma, bootstrap'
  };

  return (
    <main className=" sm:p-10 bg-[#111111] text-white box-border min-h-screen pb-10 ">
      <BigHead main="PORTFOLIO" background="WORKS" />
      <div className="sm:flex flex-wrap justify-center sm:mx-[70px]">
        <SinglePortfolio img={secondImg} details={shopgrid} link="https://nxt-shop.vercel.app/product" />
        <SinglePortfolio img={cs} details={cscience} link="https://bn-asignment.vercel.app" />
        <SinglePortfolio img={Slider} details={fixedslider} link="https://asignment-bn.vercel.app" />
        <SinglePortfolio img={thirdImg} details={dashboard} link="https://nxt-shop.vercel.app/admin/dashboard" />
        <SinglePortfolio img={tictac} details={tictactoe} link="https://tic-tac-toe-pearl-mu.vercel.app" />
        <SinglePortfolio img={basket} details={basketball} link="https://basketball-prediction.vercel.app" />
      </div>
    </main>
  );
}
