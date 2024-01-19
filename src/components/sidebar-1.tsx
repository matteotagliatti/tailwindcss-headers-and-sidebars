import { Coins, Home, Menu, Search, User } from "lucide-react";
import { useState } from "react";

const routes = [
  {
    title: "Home",
    href: "#",
    icon: Home,
  },
  {
    title: "Explore",
    href: "#",
    icon: Search,
  },
  {
    title: "Pricing",
    href: "#",
    icon: Coins,
  },
  {
    title: "About",
    href: "#",
    icon: User,
  },
];

export default function Sidebar1() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div
      className={`min-h-screen bg-[#0e0e0e] ${
        isOpen ? "w-72" : "w-16"
      } px-4 py-3 text-gray-100 duration-500`}
    >
      <div className={`mr-1 flex justify-end`}>
        <button
          className="cursor-pointer"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <Menu />
        </button>
      </div>
      <div className="relative mt-8 flex flex-col gap-y-2">
        {routes?.map((route, i) => (
          <a
            href={route.href}
            key={i}
            className={`group flex items-center rounded-md text-sm font-medium transition-colors hover:bg-gray-800`}
          >
            <div className="flex items-center justify-center p-2">
              <route.icon className="h-5 w-5" />
            </div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`ml-3.5 whitespace-pre duration-500 ${
                !isOpen && "-translate-x-28 overflow-hidden opacity-0"
              }`}
            >
              {route.title}
            </h2>
            <h2
              className={`${
                isOpen && "hidden"
              } absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300`}
            >
              {route.title}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
}
