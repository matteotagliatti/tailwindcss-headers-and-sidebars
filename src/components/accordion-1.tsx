import { CarFront } from "lucide-react";
import { useState } from "react";

interface Props {
  sidebarIsOpen: boolean;
}

const SimpleAccordion = ({ sidebarIsOpen }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <input
        id="expandCollapse"
        checked={open}
        type="checkbox"
        className="peer sr-only"
      />
      <label
        htmlFor="expandCollapse"
        className={`flex w-full items-center justify-center bg-blue-100 transition-colors duration-500 ease-in-out hover:bg-blue-500`}
        onClick={() => setOpen(!open)}
      >
        <CarFront
          className={`h-6 w-6 shrink-0 duration-300 ${open ? "rotate-180" : ""}`}
        />
        <p
          className={`duration-500 ${!sidebarIsOpen && "translate-x-28 overflow-hidden opacity-0"}`}
        >
          {open ? "Less information" : "More information"}
        </p>
      </label>
      <div className="h-0 overflow-hidden bg-slate-300 transition-[height] duration-500 ease-in-out peer-checked:h-[200px]">
        <p className="p-4 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]
        </p>
      </div>
    </div>
  );
};

export { SimpleAccordion };
