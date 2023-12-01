import styled from 'styled-components';
import colors from '../colors';

export const ImageWithGradientColorBG = styled.img`
  padding-top: 56px;
  background-image: linear-gradient(
    45deg,
    hsl(277deg 100% 7%) 0%,
    hsl(269deg 63% 14%) 11%,
    hsl(271deg 62% 19%) 22%,
    hsl(274deg 62% 24%) 33%,
    hsl(277deg 62% 30%) 44%,
    hsl(279deg 64% 35%) 56%,
    hsl(282deg 65% 40%) 67%,
    hsl(285deg 68% 45%) 78%,
    hsl(287deg 71% 49%) 89%,
    hsl(290deg 84% 53%) 100%
  );
`;

export const CardStyled = styled.div`
  padding: 16px;
  border-radius: 10px;
  background: ${colors.greyBg};
`;

export const PriceIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Author = styled(PriceIcon)`
  margin-top: 24px;
  gap: 16px;
`