import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ShopIcon({ width = 50, height = 50, color = "black" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M.52 1.5H3.18a2.87 2.87 0 0 1 2.74 2L9.11 13.91H8.64A2.39 2.39 0 0 0 6.25 16.3h0a2.39 2.39 0 0 0 2.39 2.38h10M7.21 5.32H22.48V7.23L20.57 13.91H9.11M10.07 20.59a1.91 1.91 0 1 1 0-3.82 1.91 1.91 0 0 1 0 3.82ZM18.66 20.59a1.91 1.91 0 1 1 0-3.82 1.91 1.91 0 0 1 0 3.82Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
