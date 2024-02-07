import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function LineVertical({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M12 5.3252V19.3252" 
    stroke={color} 
    strokeWidth="2"
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default LineVertical;
