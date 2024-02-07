import Svg, {Path} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

function Reset({size, color}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
    <Path d="M19.933 13.3664C19.7442 14.8063 19.1669 16.1677 18.2632 17.3045C17.3594 18.4414 16.1633 19.3107 14.803 19.8194C13.4427 20.3281 11.9696 20.4568 10.5417 20.1919C9.11374 19.927 7.78486 19.2784 6.69755 18.3157C5.61024 17.3529 4.80551 16.1124 4.36967 14.727C3.93383 13.3417 3.88332 11.8638 4.22355 10.4519C4.56379 9.04008 5.28194 7.74746 6.30097 6.71272C7.32001 5.67798 8.6015 4.94015 10.008 4.57836C13.907 3.57836 17.943 5.58536 19.433 9.32536M20 4.32535V9.32535H15" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    />
    </Svg>
  );
}

export default Reset;
