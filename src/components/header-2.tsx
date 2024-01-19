import React from "react";

interface Props {
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ navbarOpen, setNavbarOpen }: Props) => {
  return (
    <header className="z-20 flex w-full bg-red-500 p-4">
      {/* Logo */}
      <div className="z-20 flex-grow text-teal-500">
        <h1 className="my-0 text-2xl font-bold">Logo</h1>
      </div>
      {/* Hamburger Icon */}
      <button
        className="relative right-0 top-0 z-20 flex h-10 w-10 text-teal-500 focus:outline-none lg:hidden"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute left-1/2 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            className={`absolute h-0.5 w-5 transform bg-slate-500 transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 transform bg-slate-500 transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-5 opacity-100 delay-200"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 transform bg-slate-500 transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};

const MenuOverlay = ({ navbarOpen, setNavbarOpen }: Props) => {
  return (
    <nav
      className={`fixed left-0 top-0 z-10 flex h-screen w-full transform bg-gray-900 bg-opacity-100 p-5 pt-16 text-black transition-all delay-100 duration-300 ${
        navbarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" // change coordinates to move overlay menu
      }`}
    >
      <ul className="flex w-full flex-col items-start">
        <li className="nav-li">
          <a
            href="/"
            className="text-teal-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-li">
          <a
            href="/"
            className="text-teal-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default function Header2() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="bg-gray-800">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </div>
  );
}
