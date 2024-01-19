import { Home, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar2s() {
  const [isOpen, setOpen] = useState(false);

  return (
    <aside
      className={`bg-red-400 p-2 duration-500 ${!isOpen ? "w-14" : "w-64"}`}
    >
      <div className="flex justify-end p-2">
        <button onClick={() => setOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <a
        href="#"
        className="transition-color flex gap-2 bg-neutral-100 p-2 hover:bg-slate-400"
      >
        <Home className="h-6 w-6 shrink-0" />
        <span
          className={`duration-500 ${!isOpen && "translate-x-28 overflow-hidden opacity-0"} `}
        >
          Home
        </span>
      </a>
    </aside>
  );
}
