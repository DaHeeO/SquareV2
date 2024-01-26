import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Bell({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M9 17.3252V18.3252C9 19.1208 9.31607 19.8839 9.87868 20.4465C10.4413 21.0091 11.2044 21.3252 12 21.3252C12.7956 21.3252 13.5587 21.0091 14.1213 20.4465C14.6839 19.8839 15 19.1208 15 18.3252V17.3252M10 5.3252C10 4.79476 10.2107 4.28605 10.5858 3.91098C10.9609 3.53591 11.4696 3.3252 12 3.3252C12.5304 3.3252 13.0391 3.53591 13.4142 3.91098C13.7893 4.28605 14 4.79476 14 5.3252C15.1484 5.86822 16.1274 6.71352 16.8321 7.77049C17.5367 8.82747 17.9404 10.0563 18 11.3252V14.3252C18.0753 14.9469 18.2954 15.5423 18.6428 16.0633C18.9902 16.5844 19.4551 17.0166 20 17.3252H4C4.54494 17.0166 5.00981 16.5844 5.35719 16.0633C5.70457 15.5423 5.92474 14.9469 6 14.3252V11.3252C6.05956 10.0563 6.4633 8.82747 7.16795 7.77049C7.8726 6.71352 8.85159 5.86822 10 5.3252Z" 
    stroke={color}
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"/>
    </Svg>
  );
}

export default Bell;
