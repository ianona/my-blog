import React, { useEffect, useState } from "react";

export function useIsVisible(ref: React.MutableRefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting),
      );

      observer.observe(ref.current);
    }
  }, [ref]);

  return isIntersecting;
}
