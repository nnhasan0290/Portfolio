import React from "react";
import secondImg from "../public/Screenshot_2.jpg";
import cs from "../public/cs.png";
import csgImg from "../public/csg.PNG";
import cvgenerator from "../public/cv.PNG";
import shadamonImg from "../public/shadamon.png";
import SortGall from "../public/sortableGallery.PNG";
import BigHead from "./BigHead";
import SinglePortfolio from "./SinglePortfolio";

export default function Portfolio() {
  const shopgrid = {
    name: "Shop Grid",
    tech: "Next js, Express js, Mongoose, JWT Authentication",
  };
  const dashboard = {
    name: "Simple Dashboard",
    tech: "Next js, Chart Js, Mongoose",
  };
  const tictactoe = {
    name: "TIC TAC TOE",
    tech: "Vanilla JavaScript, Vanilla Css",
  };
  const basketball = {
    name: "Basketball Winner Prediction",
    tech: "React, LocalStorage, MUi",
  };
  const fixedslider = {
    name: "SVG slider",
    tech: "React, GSAP, SVG drawing",
  };
  const cscience = {
    name: "Static Figma Design",
    tech: "Next js, Figma, bootstrap",
  };
  const shadamon = {
    name: "Shadamon",
    tech: "Next js, Ant Design, Node js",
  };
  const cvGen = {
    name: "Cv Generator",
    tech: "React js, Vite, Sass",
  };
  const csg = {
    name: "Color Shades Generator",
    tech: "React Js, Sass, Vanilla Js"
  }

  const SG = {
    name: "Sortable Gallary",
    tech: "React Js, Css"
  }

  return (
    <main className=" sm:p-10 bg-[#111111] text-white box-border min-h-screen pb-10 ">
      <BigHead main="PORTFOLIO" background="WORKS" />
      <div className="sm:flex flex-wrap justify-center sm:mx-[70px]">
        <SinglePortfolio
          img={SortGall}
          details={SG}
          link="https://ollyo-gallary-task.vercel.app/"
        />
        <SinglePortfolio
          img={cvgenerator}
          details={cvGen}
          link="https://cv-generator-zeta.vercel.app/"
        />
        <SinglePortfolio
          img={secondImg}
          details={shopgrid}
          link="https://nxt-shop.vercel.app/product"
        />
        <SinglePortfolio
          img={cs}
          details={cscience}
          link="https://bn-asignment.vercel.app"
        />
        <SinglePortfolio
          img={shadamonImg}
          details={shadamon}
          link="https://shadamon-three.vercel.app/"
        />
        <SinglePortfolio
          img={csgImg}
          details={csg}
          link="https://color-shades-phwr.vercel.app/"
        />
      </div>
    </main>
  );
}
