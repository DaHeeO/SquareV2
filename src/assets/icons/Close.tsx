import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Close({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M18 6.3252L6 18.3252M6 6.3252L18 18.3252" 
    stroke={color}
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default Close;
