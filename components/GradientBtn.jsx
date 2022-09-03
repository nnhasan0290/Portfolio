import { Download } from '@mui/icons-material';
import React from 'react';

export default function GradientBtn() {
  return (
    <button type="submit" className="gradient relative py-3 my-10 pr-[60px] pl-10 capitalize rounded-full border font-bold  box-border">
      Download CV
      {' '}
      <span className="flex absolute top-0 right-0 justify-center items-center px-3 h-full text-black bg-white rounded-full"><Download /></span>
    </button>
  );
}
