import React from 'react';

function Header() {
  return ( 
    <div className="flex justify-center bg-gray-50 mt-[40px]">
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 w-full md:w-[1120px] px-4">

       
        <div className="text-[24px] font-bold">
          ma.
        </div>

        
        <div className="flex flex-col md:flex-row gap-[15px] md:gap-[30px] text-[18px] font-medium mt-4 md:mt-0">
          <div className="cursor-pointer hover:underline">Work</div>
          <div className="cursor-pointer hover:underline">About</div>
          <div className="cursor-pointer hover:underline">Playground</div>
          <div className="cursor-pointer hover:underline">Contact</div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;

