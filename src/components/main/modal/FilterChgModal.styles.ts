import styled from "styled-components/native";
import {colors} from '../../../components/common/globalStyles';

export const CenteredView = styled.View`
    flex: 1;
    width: 100%;
    justify-content: flex-end;
    background-color: rgba(17, 17, 17, 0.15);
`

export const ModalView = styled.Pressable`
    align-items: center;
    width: 100%;
    height: 70%;
    border-radius: 20px;
    background-color: white;
    padding: 20px;
`

export const LocationBtn = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
`

