import Svg, {Path} from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  color: string;
}

function Notification({width, height, color}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
        <Path d="M9 11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5C15 10.7043 14.6839 9.94124 14.1213 9.37863C13.5587 8.81602 12.7956 8.49995 12 8.49995C11.2044 8.49995 10.4413 8.81602 9.87868 9.37863C9.31607 9.94124 9 10.7043 9 11.5Z"
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
        <Path d="M17.657 17.157L13.414 21.4C13.039 21.7746 12.5306 21.985 12.0005 21.985C11.4704 21.985 10.962 21.7746 10.587 21.4L6.343 17.157C5.22422 16.0381 4.46234 14.6127 4.15369 13.0608C3.84504 11.509 4.00349 9.90047 4.60901 8.43868C5.21452 6.9769 6.2399 5.72749 7.55548 4.84846C8.87107 3.96943 10.4178 3.50024 12 3.50024C13.5822 3.50024 15.1289 3.96943 16.4445 4.84846C17.7601 5.72749 18.7855 6.9769 19.391 8.43868C19.9965 9.90047 20.155 11.509 19.8463 13.0608C19.5377 14.6127 18.7758 16.0381 17.657 17.157Z" 
        stroke={color}
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
    </Svg>
  );
}

export default Notification;
