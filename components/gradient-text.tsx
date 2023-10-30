import React from "react";
import { Text, View } from "react-native";
import {
  Svg,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const GradientText = ({
  text,
  colors,
  fontWeight,
  fontSize,
  containerHeight,
  containerWidth,
}) => {
  // const containerHeight = 50;
  // const containerWidth = 200;
  const verticalPosition = containerHeight - containerHeight / 4;
  const textWidth = (text.length * fontSize) / 4;
  const horizontalPosition = containerWidth / 2 - textWidth;

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Svg width={containerWidth} height={containerHeight}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="100%">
            {colors.map((color, index) => (
              <Stop
                key={index}
                offset={`${(index * 100) / (colors.length - 1)}%`}
                stopColor={color}
              />
            ))}
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize={fontSize}
          fontWeight={fontWeight}
          x={horizontalPosition}
          y={verticalPosition}
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default GradientText;
