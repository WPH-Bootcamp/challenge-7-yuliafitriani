import React, { useState } from "react";
import Button from "../../ui/Button";
import NavLink from "../../ui/NavLink";
import Logo from "./Logo";
import ThemeToggle from "../../ui/Button/ThemeToggle";

const HeaderSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className="
            px-4
            h-[84px]
            bg-transparent
            backdrop-blur-[40px]
          "
        >
          <div className="mx-auto max-w-[1440px] h-[84px] flex items-center justify-between">
            {/* Logo */}
            <Logo></Logo>
            {/* DESKTOP MENU */}
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <NavLink href="#about">About</NavLink>
                </li>
                <li>
                  <NavLink href="#service">Service</NavLink>
                </li>
                <li>
                  <NavLink href="#projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink href="#faq">FAQ</NavLink>
                </li>
              </ul>
            </nav>
            <div className="flex flex-row items-center gap-3">
              {/* Theme toggle (always visible) */}
              <ThemeToggle />

              {/* Desktop button only */}
              <div className="hidden md:block">
                <Button>Let's Talk</Button>
              </div>

              {/* Mobile hamburger only */}
              <div className="w-6 h-6 md:hidden">
                <button
                  className="relative w-6 h-6"
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu"
                >
                  {/* Top */}
                  <span
                    className={`absolute left-0 top-1/2 h-[3px] w-6 rounded-xs bg-neutral-900 dark:bg-dark-neutral-25 transition-all duration-300
        ${open ? "rotate-45" : "-translate-y-2"}`}
                  />

                  {/* Middle */}
                  <span
                    className={`absolute left-0 top-1/2 h-[3px] w-6 rounded-xs bg-neutral-900 dark:bg-dark-neutral-25 transition-all duration-300
        ${open ? "opacity-0" : ""}`}
                  />

                  {/* Bottom */}
                  <span
                    className={`absolute left-0 top-1/2 h-[3px] w-6 rounded-xs bg-neutral-900 dark:bg-dark-neutral-25 transition-all duration-300
        ${open ? "-rotate-45" : "translate-y-2"}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            fixed
            top-[84px]
            w-full
            bg-white
            md:hidden
            px-4
            z-1
            h-screen
            dark:bg-black
            
          "
        >
          <ul className="flex flex-col w-full gap-6 pb-4">
            <li>
              <NavLink className="w-full" href="#about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="w-full" href="#service">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink className="w-full" href="#projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="w-full" href="#faq">
                FAQ
              </NavLink>
            </li>
          </ul>
          <div className="py-2">
            <Button className="w-full">Let's Talk</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;
