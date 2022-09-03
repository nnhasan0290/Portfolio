import React from 'react';

function BigHead({ main, background }) {
  return (
    <div className="">
      <h1 className="relative text-center second-big-head py-[30px]">
        {main}
        {' '}
        <span className="sm:text-[110px] text-[50px] absolute top-[50%] transform translate-y-[-50%] left-0 right-0 text-[#615f5f22] font-extrabold">{background}</span>
      </h1>
    </div>
  );
}
export default BigHead;
