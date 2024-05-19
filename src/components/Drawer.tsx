import React, { ReactNode, useEffect, useRef } from "react";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
}

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 bottom-0 bg-[#1d1d1d60] ${
          isOpen ? "opacity-100 z-[99]" : "opacity-0 -z-10"
        } transition-all duration-500`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 bottom-0 w-[520px] bg-white z-[100] py-10 px-6 overflow-y-scroll ${
          !isOpen ? "translate-x-[100%]" : "translate-x-0"
        }
    transition-all duration-500
      `}
      >
        {children}
      </div>
    </>
  );
}
