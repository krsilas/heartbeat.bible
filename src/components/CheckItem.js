import { useState, useEffect } from "react";

const CheckItem = (props) => {
  const { children, handleClick, checked } = props;
  
  return (
    <li className="font-mono text-xl">
      <label className={`inline-flex my-2 ${children.length == 1 ? 'items-center leading-loose' : 'items-start leading-snug'}`}>
      <input type="checkbox" onChange={handleClick} checked={checked} className={`form-checkbox bg-gray-100 border-2 border-gray-400 focus:border-green-500 rounded-px ${children.length > 1 && 'mt-1'} mr-2 h-8 w-8 text-green-500 dark:bg-gray-900 dark:border-gray-800 dark:text-green-700 dark:focus:border-green-700`}/>
        <div className="ml-2 select-none text-gray-900 dark:text-white">
          {children}
        </div>
      </label>
    <style jsx>{`
      div { word-spacing: -2px; }
    `}</style>
    </li>
  );
}
export default CheckItem;