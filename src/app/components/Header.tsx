import React from 'react'

function Header() {
  return ( 
    <div className="flex justify-center bg-gray-50 mt-[40px]">
      <div className="flex justify-between items-center bg-gray-50 w-[1120px]">
        <div className="text-[24px] font-bold">
          ma.
        </div>

        
        <div className="flex gap-[30px] text-[18px] font-medium">
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

  
  