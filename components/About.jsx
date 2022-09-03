import React from 'react';
import BigHead from './BigHead';
import CircularProgress from './CircularProgressBar';
import GradientBtn from './GradientBtn';

function AboutMe() {
  return (
    <main className=" sm:p-10 bg-[#111111] text-white box-border min-h-screen ">
      <BigHead main="ABOUT ME" background="RESUME" />
      <section className="flex flex-wrap justify-around">
        <div className="w-[50%] p-3 min-w-[250px]">
          <h1 className="font-bold">Personal Info</h1>
          <div className="flex flex-wrap items-center my-5">
            <p className="w-[50%] opacity-80 min-w-[200px]">
              First Name:
              {' '}
              <strong>Nazmul</strong>
            </p>
            <p className="w-[50%] opacity-80 min-w-[200px]">
              Last Name:
              {' '}
              <strong>Hasan</strong>
            </p>
          </div>
          <div className="flex flex-wrap items-center my-5">
            <p className="w-[50%] opacity-80 min-w-[200px]">
              Nationality:
              {' '}
              <strong>Bangladeshi</strong>
            </p>
            <p className="w-[50%] opacity-80 min-w-[200px]">
              Languages:
              {' '}
              <strong>English,Bangla</strong>
            </p>
          </div>
          <div className="flex flex-wrap items-center my-5">
            <p className="w-[50%] opacity-80 min-w-[200px]">
              Freelance:
              {' '}
              <strong>Available</strong>
            </p>
            <p className="w-[50%] opacity-80 min-w-[200px]">
              City:
              {' '}
              <strong>Kushtia</strong>
            </p>
          </div>
          <div className="flex flex-wrap items-center my-5">
            <p className="w-[50%] opacity-80 min-w-[200px]">
              Phone:
              {' '}
              <strong>+8801521408381</strong>
            </p>
            <p className="w-[50%] opacity-80 min-w-[200px]">
              Email:
              {' '}
              <strong>nazmulhasan0290@gmail.com</strong>
            </p>
          </div>
          <GradientBtn />
        </div>
        <div className="p-3 min-w-[250px]">
          <h1 className="font-bold">Education </h1>
          <p className="opacity-80 min-w-[200px] my-5">
            Degree:
            {' '}
            <strong>BACHELOR</strong>
          </p>
          <p className="opacity-80 min-w-[200px] my-5">
            University:
            {' '}
            <strong>ISLAMIC UNIVERSITY</strong>
          </p>
          <p className="opacity-80 min-w-[200px] my-5">
            Subject:
            {' '}
            <strong>MATHEMATICS</strong>
          </p>
          <p className="opacity-80 min-w-[200px] my-5">
            From:
            {' '}
            <strong>2018</strong>
          </p>
        </div>
      </section>
      <hr className="w-[40%] my-10 border-t-[#615f5f22] mx-auto" />
      <section className="">
        <h1 className="py-5 text-center">
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
