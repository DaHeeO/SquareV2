import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Down({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" >
    <Path d="M6 9.32532L12 15.3253L18 9.32532" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default Down;
