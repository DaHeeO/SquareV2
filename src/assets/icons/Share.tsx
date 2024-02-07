import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Share({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" >
    <Path d="M8 9.32532H7C6.46957 9.32532 5.96086 9.53603 5.58579 9.9111C5.21071 10.2862 5 10.7949 5 11.3253V19.3253C5 19.8558 5.21071 20.3645 5.58579 20.7395C5.96086 21.1146 6.46957 21.3253 7 21.3253H17C17.5304 21.3253 18.0391 21.1146 18.4142 20.7395C18.7893 20.3645 19 19.8558 19 19.3253V11.3253C19 10.7949 18.7893 10.2862 18.4142 9.9111C18.0391 9.53603 17.5304 9.32532 17 9.32532H16M12 14.3253V3.32532M12 3.32532L9 6.32532M12 3.32532L15 6.32532" 
    stroke={color}
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    </Svg>
  );
}

export default Share;
