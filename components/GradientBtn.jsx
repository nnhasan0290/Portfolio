import React from 'react';

export default function GradientBtn({ text, icon }) {
  return (
    <button type="submit" className="gradient relative py-3 my-10 mx-2 pr-[60px] pl-10  rounded-full border font-bold  box-border uppercase whitespace-nowrap">
      {text}
      {' '}
      <span className="flex absolute top-0 right-0 justify-center items-center px-3 h-full text-black bg-white rounded-full">{icon}</span>
    </button>
  );
}
