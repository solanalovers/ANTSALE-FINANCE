import { useEffect, useRef } from "react";

const useEndList = (handler: () => void) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const handleEndList = () => {
      if (containerRef.current) {
        const { height, y } = containerRef.current.getBoundingClientRect();
        if (y <= window.innerHeight - height ) {
          if (handler) {
            handler();
          }
        }
      }
    };

    window.addEventListener("scroll", handleEndList);

    return () => {
      window.removeEventListener("scroll", handleEndList);
    };
  }, [handler]);

  return { containerRef };
};

export default useEndList;