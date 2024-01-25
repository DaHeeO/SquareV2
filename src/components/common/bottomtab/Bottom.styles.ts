import styled from 'styled-components/native';
import {colors} from '../globalStyles';

export const Bottom = styled.View`
    width: 100%;
    padding: 8px 0px 16px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top-width: 1px;
    border-top-color: ${colors.white._500}
`
