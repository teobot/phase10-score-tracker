import { useContext } from "react";

import { WindowContext } from "../context/useWindowSize";

export default function BottomContainer({ children, size, alignCenter }) {
  const { windowHeight } = useContext(WindowContext);

  const borderRadiusCurve = 50; // This is the curve of the bottom navigation corners

  const containerSize = () => {
    if(size === "small") {
      return 0.15
    } else {
      return 0.25
    }
  }

  return (
    <div
      style={{
        height: windowHeight * containerSize(),
        backgroundColor: "#62CB6E",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: borderRadiusCurve,
        borderTopRightRadius: borderRadiusCurve,
        WebkitBorderTopLeftRadius: borderRadiusCurve,
        WebkitBorderTopRightRadius: borderRadiusCurve,
        padding: borderRadiusCurve / 2,
        ...(alignCenter
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
}
