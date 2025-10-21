import React from "react";
import Svg, { Path } from "react-native-svg";

export default function HouseIcon({
  width = 50,
  height = 50,
  color = "black",
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" fill="none">
      {/* Дах */}
      <Path
        d="M0 242.682L256 38.93L512 242.682L482.21 285.764L256 105.722L29.79 285.764Z"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="black"
      />
      {/* Тіло будинку */}
      <Path
        d="M434.162 293.382V493.862H308.321V368.583H203.682V493.862H77.841V293.382H256.002Z"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="black"
      />
      {/* Комин */}
      <Path
        d="M439.853 18.138V148.538H376.573V18.138Z"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="black"
      />
    </Svg>
  );
}
