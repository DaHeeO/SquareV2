import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Map({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" >
    <Path d="M9 4.3252L3 7.3252V20.3252L9 17.3252M9 4.3252L15 7.3252M9 4.3252V17.3252M15 7.3252L21 4.3252V17.3252L15 20.3252M15 7.3252V20.3252M15 20.3252L9 17.3252" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default Map;
