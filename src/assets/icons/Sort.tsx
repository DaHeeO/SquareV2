import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Sort({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" >
    <Path d="M3 9.32532L7 5.32532M7 5.32532L11 9.32532M7 5.32532V19.3253M21 15.3253L17 19.3253M17 19.3253L13 15.3253M17 19.3253V5.32532" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    </Svg>
  );
}

export default Sort;
