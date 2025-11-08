import React, { useState } from 'react';
import Input from '../Buttons/Input';

const Launchpad = () => {

    const[name,setName]=useState("");
    const[symbol,setSymbol]=useState("");
    const[imageURL,setImageURL]=useState("");
    const[initialSupply,setInitialSupply]=useState(0);
    function createToken(){
 console.log({
        name,symbol,imageURL,initialSupply
    });
    }
   
    
  return (
    <div className="p-6 w-full  h-[80vh] flex flex-col items-center  justify-center">
      <h3 className="text-4xl font-extrabold mb-4">Solana Token Launchpad</h3>
      
      <div className="flex flex-col gap-4   p-6 rounded-lg  items-center">
         <Input value={name} onChange={(e) => setName(e.target.value)} text="Token Name" />
        <Input value={symbol} onChange={(e) => setSymbol(e.target.value)} text="Token Symbol" />
        <Input value={imageURL} onChange={(e) => setImageURL(e.target.value)} text="Image URL" />
        <Input value={initialSupply} onChange={(e) => setInitialSupply(e.target.value)} text="Initial Supply" />

        <button onClick={createToken} className="border border-gray-200 bg-white hover:bg-gray-100 py-2 rounded-md font-medium w-72">
          Create Token
        </button>
      </div>
    </div>
  );
};

export default Launchpad;
