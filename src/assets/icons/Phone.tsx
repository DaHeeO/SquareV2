import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Phone({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M5 4.3252H9L11 9.3252L8.5 10.8252C9.57096 12.9967 11.3285 14.7542 13.5 15.8252L15 13.3252L20 15.3252V19.3252C20 19.8556 19.7893 20.3643 19.4142 20.7394C19.0391 21.1145 18.5304 21.3252 18 21.3252C14.0993 21.0881 10.4202 19.4317 7.65683 16.6684C4.8935 13.905 3.23705 10.2259 3 6.3252C3 5.79476 3.21071 5.28605 3.58579 4.91098C3.96086 4.53591 4.46957 4.3252 5 4.3252Z" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    </Svg>
  );
}

export default Phone;
