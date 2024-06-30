import { useEffect, useState } from "react";
import { IoMoon, IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="dark:bg-Dark-Blue-Dark-Mode-Elements bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-5 py-7">
        <h1 className="text-2xl font-bold dark:text-white">
          Where in the world?
        </h1>
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-1 font-semibold dark:text-white"
        >
          {darkMode ? <IoMoonSharp /> : <IoMoon />}
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
