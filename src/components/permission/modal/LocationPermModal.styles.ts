import styled from "styled-components/native";
import {colors} from '../../../components/common/globalStyles';

export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(217, 217, 217, 0.3);
`

export const ModalView = styled.View`
    margin: 0px 50px;
    border-radius: 4px;
    background-color: white;
`

export const TextAlert = styled.View`
    padding: 25px 20px;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.white._500};
`

export const ButtonContainer = styled.View`
    flex-direction: row;
`

export const Button = styled.Pressable<{ border?: 'left' | 'right' }>`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;
    border-color: ${colors.white._600};
    border-left-width: ${({ border }) => (border === 'left' ? '0.5px' : '0')};
    border-right-width: ${({ border }) => (border === 'right' ? '0.5px' : '0')};
    margin-left: ${({ border }) => (border === 'left' ? '-0.5px' : '0')};
    margin-right: ${({ border }) => (border === 'right' ? '-0.5px' : '0')};
`;