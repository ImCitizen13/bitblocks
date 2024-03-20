import { useState, useEffect } from "react";

const useViewSize = (ref: React.RefObject<HTMLDivElement>) => {
  const [screenSize, setScreenSize] = useState({
    width: ref.current?.clientWidth,
    height: ref.current?.clientHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: ref.current?.clientWidth,
        height: ref.current?.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return screenSize;
};

export default useViewSize;
