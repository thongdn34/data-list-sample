import styled from 'styled-components';
import StarBG from '../../assets/images/star_bg.png';
import { Button } from 'antd';
import colors from '../colors';

export const DataListWrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${StarBG}),
    lightgray -111.14px -1234.051px / 111.589% 161.076% no-repeat;
    padding-bottom: 24px;
`;

export const ViewMore = styled(Button)`
  width: 250px;
  height: 40px;
  border-radius: 4px;
  background: var(
    --Primary,
    linear-gradient(91deg, #da458f -6%, #da34dd 113.05%)
  );
  box-shadow: 0px 0px 50px 0px rgba(187, 75, 255, 0.32);
  color: ${colors.white};
  font-weight: 600;
  border: none;
`;

export const ViewMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
`