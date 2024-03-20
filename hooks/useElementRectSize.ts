import { useState, useEffect } from "react";

export type Dimensions = {
  width: number;
  height: number;
}

const useViewSize = (ref: React.RefObject<HTMLDivElement>) => {
  const [screenSize, setScreenSize] = useState<Dimensions>({
    width: ref.current?.clientWidth ?? 0,
    height: ref.current?.clientHeight ?? 0,
  });

  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const { width, height } = current.getBoundingClientRect();
      setScreenSize({ width: Math.floor(width), height: Math.floor(height) });
      // console.log("DIe: ", width)
    }
  }, [ref.current?.getBoundingClientRect().width]);

  return screenSize;
};

export default useViewSize;
