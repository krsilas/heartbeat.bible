import { useState, useEffect } from "react";

const CheckItem = ({ children, handleClick, checked, color }) => {
  const styles = `focus:ring-offset-0 focus:outline-none rounded-big mr-2 h-10 w-10 ${children.length > 1 && 'mt-1'} border-2 border-gray-200`
  const cColor = {
    lightblue: 'focus:ring-blue-500 focus:border-blue-400 text-blue-400',
    green: 'focus:ring-green-500 focus:border-green-400 text-green-400',
    orange: 'focus:ring-orange-500 focus:border-orange-400 text-orange-400'
  }
  

  return (
    <li className="text-xl">
      <label className={`inline-flex my-2 ${children.length == 1 ? 'items-center leading-loose' : 'items-start leading-snug'}`}>
      <input type="checkbox" onChange={handleClick} checked={checked} 
        className={styles + ' ' + cColor[color]} />
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