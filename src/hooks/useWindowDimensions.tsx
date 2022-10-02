import { useState, useEffect } from "react";

interface windowSize {
  width: number;
  height: number;
}

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = (): windowSize => {
  const [windowSize, setWindowSize] = useState<windowSize>(getWindowSize);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize]);

  return windowSize;
};

export default useWindowDimensions;
