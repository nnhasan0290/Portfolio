import {
  Home, HomeRepairService, Mail, Person
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function Heading() {
  const router = useRouter();
  return (
    <div className="text-white bg-[#111] fixed z-[1] right-[30px] transform top-[50%] translate-y-[-50%]">
      <ul className="flex flex-col">
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
        <li className="text-white bg-[#2b2a2a]  rounded-full p-3 flex items-center justify-center m-4 whitespace-nowrap icons-parent-list group">
          <Mail />
          <span className="icon-text">CONTACT ME</span>
        </li>
      </ul>
    </div>
  );
}
export default Heading;
