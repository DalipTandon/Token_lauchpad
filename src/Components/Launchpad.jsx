import React from 'react';
import Input from '../Buttons/Input';

const Launchpad = () => {
  return (
    <div className="p-6 w-full  h-full flex flex-col items-center bg-[#D3C0B2] justify-center">
      <h3 className="text-4xl font-extrabold mb-4">Solana Token Launchpad</h3>
      
      <div className="flex flex-col gap-4   p-6 rounded-lg  items-center">
        <Input type="text" text="Token Name" />
        <Input type="text" text="Token Symbol" />
        <Input type="text" text="Image URL" />
        <Input type="number" text="Initial Supply" />
        
        <button className="border border-gray-200 bg-white hover:bg-gray-100 py-2 rounded-md font-medium w-72">
          Create Token
        </button>
      </div>
    </div>
  );
};

export default Launchpad;
