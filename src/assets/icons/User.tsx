import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function User({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M6 21.3252V19.3252C6 18.2643 6.42143 17.2469 7.17157 16.4968C7.92172 15.7466 8.93913 15.3252 10 15.3252H14C15.0609 15.3252 16.0783 15.7466 16.8284 16.4968C17.5786 17.2469 18 18.2643 18 19.3252V21.3252M8 7.3252C8 8.38606 8.42143 9.40348 9.17157 10.1536C9.92172 10.9038 10.9391 11.3252 12 11.3252C13.0609 11.3252 14.0783 10.9038 14.8284 10.1536C15.5786 9.40348 16 8.38606 16 7.3252C16 6.26433 15.5786 5.24691 14.8284 4.49677C14.0783 3.74662 13.0609 3.3252 12 3.3252C10.9391 3.3252 9.92172 3.74662 9.17157 4.49677C8.42143 5.24691 8 6.26433 8 7.3252Z" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default User;
