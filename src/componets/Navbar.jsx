import React from "react";

const Navbar = ({ setIsDark,isDark }) => {
  const handleChangeTheme = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <header className="text-black flex justify-between py-6 px-4  bg-white shadow-md shadow-grey-200 dark:bg-slate-800 dark:text-white duration-200 ">
      <h1 className="font-bold">Where in the world?</h1>
      <button
        onClick={handleChangeTheme}
        className="flex gap-2 items-center font-semibold"
      > 
      
      {
        isDark? <i class='bx bx-sun'></i> : <i className="bx bx-moon"></i>
      }
        <span>{
        isDark ? "Light Mode" : "Dark Mode"
      }</span>
        
      </button>
    </header>
  );
};

export default Navbar;
