import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react"; // animated hamburger menu
import { Coins, Home, Search, User } from "lucide-react";
import { useRef, useState } from "react";
import { useClickAway } from "../utils/hooks/useClickAway";

const routes = [
  {
    title: "Home",
    href: "#",
    Icon: Home,
  },
  {
    title: "Explore",
    href: "#",
    Icon: Search,
  },
  {
    title: "Pricing",
    href: "#",
    Icon: Coins,
  },
  {
    title: "About",
    href: "#",
    Icon: User,
  },
];

export default function Header1() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

export function Desktop() {
  return (
    <ul className="hidden gap-5 bg-teal-500 p-5 text-sm lg:flex lg:items-center">
      {routes.map((route, index) => {
        const { Icon, href, title } = route;
        return (
          <li key={route.title}>
            <a
              href={href}
              className="flex items-center gap-1 transition-all hover:text-neutral-400"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Mobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null); // ref for click away

  useClickAway(ref, () => setOpen(false)); // close menu when clicking outside

  return (
    <div ref={ref} className="bg-teal-500 lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="shadow-4xl fixed left-0 right-0 top-[3rem] bg-slate-400 p-5 pt-4"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full rounded-xl bg-teal-500 p-[0.08rem]"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex w-full items-center justify-between rounded-xl p-5 text-black"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <Icon className="text-xl" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
