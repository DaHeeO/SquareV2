import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function PickUp({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" >
    <Path d="M7 21.3252L10 17.3252M16 21.3252L14 17.3252L11 14.3252L12 8.3252M12 8.3252L8 9.3252L6 12.3252M12 8.3252L15 11.3252L18 12.3252M12 4.3252C12 4.59041 12.1054 4.84477 12.2929 5.0323C12.4804 5.21984 12.7348 5.3252 13 5.3252C13.2652 5.3252 13.5196 5.21984 13.7071 5.0323C13.8946 4.84477 14 4.59041 14 4.3252C14 4.05998 13.8946 3.80562 13.7071 3.61809C13.5196 3.43055 13.2652 3.3252 13 3.3252C12.7348 3.3252 12.4804 3.43055 12.2929 3.61809C12.1054 3.80562 12 4.05998 12 4.3252Z" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>

  );
}

export default PickUp;
