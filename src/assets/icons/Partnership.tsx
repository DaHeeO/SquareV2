import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Partnership({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" >
    <Path d="M8 6.3252C8 5.79476 8.21071 5.28605 8.58579 4.91098C8.96086 4.53591 9.46957 4.3252 10 4.3252H18C18.5304 4.3252 19.0391 4.53591 19.4142 4.91098C19.7893 5.28605 20 5.79476 20 6.3252V14.3252C20 14.8556 19.7893 15.3643 19.4142 15.7394C19.0391 16.1145 18.5304 16.3252 18 16.3252H10C9.46957 16.3252 8.96086 16.1145 8.58579 15.7394C8.21071 15.3643 8 14.8556 8 14.3252V6.3252Z" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    <Path d="M4 10.3252C4 9.79476 4.21071 9.28605 4.58579 8.91098C4.96086 8.53591 5.46957 8.3252 6 8.3252H14C14.5304 8.3252 15.0391 8.53591 15.4142 8.91098C15.7893 9.28605 16 9.79476 16 10.3252V18.3252C16 18.8556 15.7893 19.3643 15.4142 19.7394C15.0391 20.1145 14.5304 20.3252 14 20.3252H6C5.46957 20.3252 4.96086 20.1145 4.58579 19.7394C4.21071 19.3643 4 18.8556 4 18.3252V10.3252Z" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default Partnership;
