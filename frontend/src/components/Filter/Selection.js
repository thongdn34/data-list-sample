import { Select } from 'antd';
import React from 'react';
import { Body } from '../Typography';

const Selection = (props) => {
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  return (
    <div style={{ width: '100%' }}>
      <Body level={1}>{props.label.toUpperCase()}</Body>
      <Select
        showSearch
        placeholder='Select a person'
        optionFilterProp='children'
        filterOption={filterOption}
        {...props}
      />
    </div>
  );
};

export default Selection;
