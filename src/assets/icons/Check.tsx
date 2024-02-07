import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Check({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" >
    <Path d="M5 12.3252L10 17.3252L20 7.3252" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    </Svg>
  );
}

export default Check;
