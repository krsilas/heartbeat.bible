import { useState, useEffect } from "react";

const CheckItem = ({ children, handleClick, checked, color }) => {
  const styles = `focus:ring-offset-0 focus:outline-none rounded-big bg-transparent mr-2 h-10 w-10 ${children.length > 1 && 'mt-1'} border-2 border-gray-500 border-opacity-50`;
  const cColor = {
    lightblue: 'focus:ring-blue-500 focus:border-blue-400 text-blue-400 hover:ring-blue-400 dark:text-blue-500 dark:desaturate-75',
    green: 'focus:ring-green-500 focus:border-green-400 text-green-400 hover:ring-green-400 dark:text-green-500 dark:desaturate-75',
    orange: 'focus:ring-orange-500 focus:border-orange-400 text-orange-400 hover:ring-orange-400 dark:text-orange-500 dark:desaturate-75'
  }
  

  return (
    <li className="text-xl">
      <label className={`inline-flex my-2 ${children.length == 1 ? 'items-center leading-loose' : 'items-start leading-snug'}`}>
      <input type="checkbox" onChange={handleClick} checked={checked} 
        className={styles + ' ' + cColor[color]} />
        <div className="ml-2 select-none text-gray-900 dark:text-gray-200">
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