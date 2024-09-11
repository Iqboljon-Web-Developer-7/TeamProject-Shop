import React from "react";

  const toggleDarkMode = () => {
    window.document.body.classList.toggle("dark");
    console.log(1);
    
  };
const Header = () => {
  return(
   <header>
      <h1 className="text-green-300 text-center text-6xl p-3 my-8 dark:text-white dark:bg-black">
        Hello
      </h1>
      <button
        onClick={toggleDarkMode}
        className="p-4 bg-green-400 text-white rounded-lg"
      >
        Dark Toggle
      </button>
    </header>
  );
};

export default Header;
