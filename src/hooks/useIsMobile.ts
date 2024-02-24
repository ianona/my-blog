"use client";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileMediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches);
    };

    mobileMediaQuery.addListener(handleResize);

    return () => {
      mobileMediaQuery.removeListener(handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
