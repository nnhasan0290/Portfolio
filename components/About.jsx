import React from 'react';
import BigHead from './BigHead';
import CircularProgress from './CircularProgressBar';

function AboutMe() {
  return (
    <main className=" sm:p-10 bg-[#111111] text-white box-border min-h-screen ">
      <BigHead />
      <section className="">
        <h1 className="third-big-head">
          MY SKILLS
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <CircularProgress value={80} text="HTML" />
          <CircularProgress value={90} text="CSS" />
          <CircularProgress value={85} text="TAILWIND" />
          <CircularProgress value={95} text="JAVSCRIPT" />
          <CircularProgress value={60} text="TYPESCRIPT" />
          <CircularProgress value={95} text="REACT JS" />
          <CircularProgress value={95} text="NEXT JS" />
          <CircularProgress value={70} text="FIREBASE" />
          <CircularProgress value={70} text="NODE JS" />
          <CircularProgress value={65} text="MONGOOSE" />
          <CircularProgress value={60} text="WEBPACK" />
          <CircularProgress value={90} text="NPM/YARN" />
        </div>
      </section>
    </main>
  );
}
export default AboutMe;
