import styled from 'styled-components';
import * as styles from './styles';

const LEVEL_STYLE = {
  1: styles.body1,
  2: styles.body2,
  3: styles.body3,
  4: styles.body4,
  5: styles.body5,
  6: styles.body6
};

const TEXT_COLOR = {
  primary: styles.textColors.primary,
  white: styles.textColors.white,
  textGrey: styles.textColors.textGrey,
  textHeaderGrey: styles.textColors.textHeaderGrey
};

const Body = styled.span`
  font-family: 'Roboto', sans-serif;
  ${(props) => (props.level ? LEVEL_STYLE[props.level] : LEVEL_STYLE[2])}
  ${(props) => (props.color ? TEXT_COLOR[props.color] : TEXT_COLOR.white)}
`;

export default Body;
