import { useEffect, useRef, useState } from "react";

const useClickOutside = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isOpen, setIsOpen, containerRef };
};

export default useClickOutside;