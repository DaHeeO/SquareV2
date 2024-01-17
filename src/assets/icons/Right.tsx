import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Right({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M9 6.32532L15 12.3253L9 18.3253" 
    stroke={color}
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default Right;
