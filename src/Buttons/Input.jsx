import React from "react";

const Input = ({ type, text ,width = "w-72"}) => {
  return (
    <div >
      <input
        type={type}
        placeholder={text}
      className={`${width} w- p-2 border font-semibold border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
    </div>
  );
};

export default Input;
