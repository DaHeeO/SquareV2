import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Star({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.25495L8.90702 8.25495L11.993 2.00195L15.079 8.25495L21.979 9.25495L16.979 14.122L18.158 20.995L12 17.75Z" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    </Svg>
  );
}

export default Star;
