import React from 'react';
import LogoCoin from '../../assets/images/logos_ethereum.svg';
import Profile from '../../assets/images/Profile-Verified.png';
import { Card } from 'antd';
import {
  Author,
  CardStyled,
  ImageWithGradientColorBG,
  PriceIcon
} from './CardCharacter.styled';
import { Body } from '../Typography';
import colors from '../colors';
import { getRandomCharacter } from '../../assets/images';

const CardCharacter = ({ name, price, owner }) => {
  return (
    <CardStyled>
      <Card
        hoverable
        bodyStyle={{
          background: 'transparent',
          borderColor: colors.greyBg,
          padding: '24px 0 0'
        }}
        style={{ minWidth: 240, border: 'none', background: 'transparent' }}
        cover={<ImageWithGradientColorBG alt='example' src={getRandomCharacter()} />}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Body level={1}>{name}</Body>
          <PriceIcon>
            <img src={LogoCoin} alt='logo' />
            <Body>{price.toFixed(2)} ETH</Body>
          </PriceIcon>
        </div>
        <Author>
          <img src={Profile} alt='logo' />
          <Body>{owner}</Body>
        </Author>
      </Card>
    </CardStyled>
  );
};

export default CardCharacter;
