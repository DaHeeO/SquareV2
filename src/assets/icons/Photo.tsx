import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Photo({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M15 8.3252H15.01M3 16.3252L8 11.3252C8.928 10.4322 10.072 10.4322 11 11.3252L16 16.3252M14 14.3252L15 13.3252C15.928 12.4322 17.072 12.4322 18 13.3252L21 16.3252M3 6.3252C3 5.52955 3.31607 4.76648 3.87868 4.20388C4.44129 3.64127 5.20435 3.3252 6 3.3252H18C18.7956 3.3252 19.5587 3.64127 20.1213 4.20388C20.6839 4.76648 21 5.52955 21 6.3252V18.3252C21 19.1208 20.6839 19.8839 20.1213 20.4465C19.5587 21.0091 18.7956 21.3252 18 21.3252H6C5.20435 21.3252 4.44129 21.0091 3.87868 20.4465C3.31607 19.8839 3 19.1208 3 18.3252V6.3252Z" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default Photo;
