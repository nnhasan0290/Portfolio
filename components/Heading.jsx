import {
  Home, HomeRepairService, Mail, Person
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function Heading() {
  const router = useRouter();
  return (
    <div className="text-white md:bg-[#111] fixed z-[1] md:right-[30px] transform md:top-[50%] md:translate-y-[-50%] bottom-0 w-screen md:w-auto overflow-visible  bg-[#111]/70 backdrop-filter backdrop-blur-md backdrop-saturate-50">
      <ul className="flex flex-row justify-around md:flex-col">
        <Link href="/">
          <li className={`icons-parent-list group ${router.pathname === '/' ? 'active-menu' : ''}`}>
            <Home />
            <span className="icon-text">HOME</span>
          </li>
        </Link>
        <Link href="/aboutme">
          <li className={`whitespace-nowrap icons-parent-list group ${router.pathname === '/aboutme' ? 'active-menu' : ''}`}>
            <Person />
            <span className="icon-text">ABOUT ME</span>
          </li>
        </Link>
        <Link href="/portfolio">
          <li className={` icons-parent-list group ${router.pathname === '/portfolio' ? 'active-menu' : ''}`}>
            <HomeRepairService />
            <span className="icon-text">PORTFOLIO</span>
          </li>
        </Link>
        <li className={` icons-parent-list whitespace-nowrap group ${router.pathname === '/portfolio' ? 'active-menu' : ''}`}>
          <Mail />
          <span className="icon-text">CONTACT ME</span>
        </li>
      </ul>
    </div>
  );
}
export default Heading;
