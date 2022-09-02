import {
  Home, HomeRepairService, Mail, Person,
} from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

function Heading() {
  return (
    <div className="text-white bg-[#111] fixed right-[30px] transform top-[50%] translate-y-[-50%]">
      <ul className="flex flex-col">
        <li className="icons-parent-list group">
          <Home />
          <span className="icon-text">HOME</span>
        </li>
        <Link href="/hoome">
          <li className="whitespace-nowrap icons-parent-list group">
            <Person />
            <span className="icon-text">ABOUT ME</span>
          </li>
        </Link>
        <li className="icons-parent-list group">
          <HomeRepairService />
          <span className="icon-text">PORTFOLIO</span>
        </li>
        <li className="text-white bg-[#2b2a2a]  rounded-full p-3 flex items-center justify-center m-4 whitespace-nowrap icons-parent-list group">
          <Mail />
          <span className="icon-text">CONTACT ME</span>
        </li>
      </ul>
    </div>
  );
}
export default Heading;
