import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgress({ value, text }) {
  return (
    <div className="flex flex-col justify-center items-center px-10 py-3">
      <div className="w-[110px] h-[110px]">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: '#615f5f22',
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent',
          })}
        />
      </div>
      <h2 className="text-[20px]">{text}</h2>
    </div>
  );
}
export default CircularProgress;
