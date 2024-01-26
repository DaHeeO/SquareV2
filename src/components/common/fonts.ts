import styled from "styled-components/native"

interface Font {
    size: number;
    color: string;
    weight: number | string;
}

const fontWeight = (weight: number | string ): string => {
  switch (weight) {
    case 100 :
    case 'Thin':
      return 'Pretendard-Thin';
    case 200 :
    case 'ExtraLight':
      return 'Pretendard-ExtaLight';
    case 300 :
    case 'Ligth':
      return 'Pretendard-Light';
    case 400:
    case 'Regular':
      return 'Pretendard-Regular';
    case 500 :
    case 'Medium':
      return 'Pretendard-Medium';
    case 600 :
    case 'SemiBold':
      return 'Pretendard-SemiBold';
    case 700 :
    case 'Bold':
      return 'Pretendard-Bold';
    case 800 :
    case 'ExtraBold':
      return 'Pretendard-ExtraBold';
    case 900 :
    case 'Black':
      return 'Pretendard-Black';
    default:
      return 'Pretendard-Regular'; // 기본 색상
  }
};

export const Text = styled.Text<Font>`
  font-family: ${props => fontWeight(props.weight)};
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`