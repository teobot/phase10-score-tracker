/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useState } from "react";

export const WindowContext = createContext();

export default () => {
  // This handles the global user of the window dimension information
  // This hook returns the window dimensions
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleWindowSizeChange = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return [{windowWidth, windowHeight}];
};
