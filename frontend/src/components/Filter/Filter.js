import React, { useEffect, useState } from 'react';
import { Col, Input, Row, Select } from 'antd';
import Selection from './Selection';
import debounce from 'lodash/debounce';
import { ResetButton, StickyFilter } from './Filter.styled';
import { Body } from '../Typography';
import { closeIcon } from '../../assets/images';
import { INIT_FILTER } from '../../constants';

const TIER_VAL = {
  ALL: 0,
  UPPER: 1,
  LOWER: 2,
  HAT: 3,
  SHOES: 4,
  ACC: 5
};
export const TIER_LABEL = {
  [TIER_VAL.ALL]: 'All',
  [TIER_VAL.UPPER]: 'Upper body',
  [TIER_VAL.LOWER]: 'Lower body',
  [TIER_VAL.HAT]: 'Hat',
  [TIER_VAL.SHOES]: 'Shoes',
  [TIER_VAL.ACC]: 'Accessory'
};
const TIER = [
  {
    value: TIER_VAL.ALL,
    label: TIER_LABEL[TIER_VAL.ALL]
  },
  {
    value: TIER_VAL.UPPER,
    label: TIER_LABEL[TIER_VAL.UPPER]
  },
  {
    value: TIER_VAL.LOWER,
    label: TIER_LABEL[TIER_VAL.LOWER]
  },
  {
    value: TIER_VAL.HAT,
    label: TIER_LABEL[TIER_VAL.HAT]
  },
  {
    value: TIER_VAL.SHOES,
    label: TIER_LABEL[TIER_VAL.SHOES]
  },
  {
    value: TIER_VAL.ACC,
    label: TIER_LABEL[TIER_VAL.ACC]
  }
];

const THEME_VAL = {
  HAL: 1,
  HAL2: 2,
  HAL3: 3
};

export const THEME_LABEL = {
  [THEME_VAL.HAL]: 'Halloween',
  [THEME_VAL.HAL2]: 'Halloween2',
  [THEME_VAL.HAL3]: 'Halloween3'
};

export const THEME = [
  {
    value: THEME_VAL.HAL,
    label: THEME_LABEL[THEME_VAL.HAL]
  },
  {
    value: THEME_VAL.HAL2,
    label: THEME_LABEL[THEME_VAL.HAL2]
  },
  {
    value: THEME_VAL.HAL3,
    label: THEME_LABEL[THEME_VAL.HAL3]
  }
];
const TIME = [
  {
    value: 1,
    label: 'Latest'
  }
];
const PRICE = [
  {
    value: 1,
    label: 'Low to Hight'
  }
];

export const Filter = ({ onChangeFilter, filter }) => {
  const handleSearchKeyWord = debounce((word) => {
    onChangeFilter((prevState) => ({
      ...prevState,
      keyword: word.target.value
    }));
  }, 500);

  const resetFilter = () => {
    onChangeFilter(INIT_FILTER);
  };

  return (
    <StickyFilter>
      <Row gutter={[0, 50]}>
        <Input.Search
          label
          placeholder='Quick search'
          allowClear
          onChange={handleSearchKeyWord}
        />
        <Selection
          label='Tier'
          style={{ width: '100%' }}
          value={filter.tier}
          options={TIER}
          onChange={(value) =>
            onChangeFilter((prev) => ({ ...prev, tier: value }))
          }
        />

        <Selection
          label='THEME'
          style={{ width: '100%' }}
          value={filter.theme}
          options={THEME}
          onChange={(value) =>
            onChangeFilter((prev) => ({ ...prev, theme: value }))
          }
        />
        <Selection
          label='TIME'
          style={{ width: '100%' }}
          value={filter.time}
          options={TIME}
          onChange={(value) =>
            onChangeFilter((prev) => ({ ...prev, time: value }))
          }
        />
        <Selection
          label='PRICe'
          style={{ width: '100%' }}
          value={filter.price}
          options={PRICE}
          onChange={(value) =>
            onChangeFilter((prev) => ({ ...prev, theme: value }))
          }
        />
        <ResetButton onClick={resetFilter}>
          <img src={closeIcon} alt='close icon' />
          <Body>Reset filter</Body>
        </ResetButton>
      </Row>
    </StickyFilter>
  );
};
