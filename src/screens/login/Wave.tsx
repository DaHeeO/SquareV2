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

const SIZE = 400;
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface WaveProps {
  style?: ViewStyle; // ViewStyle을 사용하면 bottom과 zIndex를 포함하고 있을 것으로 예상됨
  bottom: number;
  zIndex: number;
}

const StyledSvg = styled(Svg)`
  width: ${SIZE}px;
  height: ${SIZE}px;
  position: absolute;
`;

const Wave: React.FC<WaveProps> = ({ style, bottom, zIndex }) => {
  const c1y = useSharedValue(0.2);
  const c2y = useSharedValue(0.8);

  const animatedProps = useAnimatedProps(() => {
    const path = [
      "M 0 0.5",
      `C 0.4 ${c1y.value} 0.6 ${c2y.value}, 1 0.5`,
      "V 1",
      "H 0",
    ].join(" ");

    return {
      d: path,
    };
  });

  const startAnimation = () => {
    c1y.value = withRepeat(withTiming(0.8, { duration: 500 }), -1, true);
    c2y.value = withDelay(
      200,
      withRepeat(withTiming(0.2, { duration: 500 }), -1, true)
    );
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <StyledSvg style={{ ...style, bottom, zIndex }} viewBox="0 0 1 1">
      <AnimatedPath fill={"rgba(255, 255, 255, 0.3)"} animatedProps={animatedProps} />
    </StyledSvg>
  );
};

export default Wave;
