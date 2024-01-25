// 예시로 수정된 코드
import React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withRepeat,
  withDelay,
} from "react-native-reanimated";
import styled from "styled-components/native";

interface WaveProps {
  bottom: number;
  right: number;
  zIndex: number;
  SIZE: number;
  direction: string;
  duration: number;
  sx: number;
  sy: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Wave: React.FC<WaveProps> = ({ bottom, right, zIndex, SIZE, direction, duration, sx, sy }) => {
  const c1y = useSharedValue(sx);
  const c2y = useSharedValue(sy);

  const animatedProps = useAnimatedProps(() => {
    const path = [
      "M 0 0.5",
      `C 0.4 ${direction=='left' ? c1y.value : c2y.value} 0.6 ${direction=='left' ? c2y.value : c1y.value}, 1 0.5`,
      "V 1",
      "H 0",
    ].join(" ");

    return {
      d: path,
    };
  });

  const startAnimation = () => {
    c1y.value = withRepeat(withTiming(0.4, { duration: duration }), -1, true);
    c2y.value = withDelay(
      200,
      withRepeat(withTiming(0.2, { duration: duration }), -1, true)
    );
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  const StyledSvg = styled(Svg)`
    width: ${SIZE}px;
    height: ${SIZE}px;
    position: absolute;
  `;

  return (
    <StyledSvg style={{bottom, right, zIndex}} viewBox="0 0 1 1">
      <AnimatedPath fill={"rgba(255, 255, 255, 0.3)"} animatedProps={animatedProps} />
    </StyledSvg>
  );
};

export default Wave;
