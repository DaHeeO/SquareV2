import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Back({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M9 14.3253L5 10.3253M5 10.3253L9 6.32529M5 10.3253H16C17.0609 10.3253 18.0783 10.7467 18.8284 11.4969C19.5786 12.247 20 13.2644 20 14.3253C20 15.3862 19.5786 16.4036 18.8284 17.1537C18.0783 17.9039 17.0609 18.3253 16 18.3253H15" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    </Svg>
  );
}

export default Back;
