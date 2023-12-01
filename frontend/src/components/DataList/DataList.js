import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Row, Col } from 'antd';
import useInterval from '../../hooks/useInterval';
import CardCharacter from '../CardCharacter/CardCharacter';
import { DataListWrapper, ViewMore, ViewMoreWrapper } from './DataList.styled';
import { Filter, THEME_LABEL, TIER_LABEL } from '../Filter/Filter';
import { INIT_FILTER } from '../../constants';

const INTERVAL_FETCH_TIME = 60000;

const DataList = () => {
  const [filter, setFilter] = useState(INIT_FILTER);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async (isRefresh = false, pageQuery = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:4000/data/getData?page=${pageQuery}`
      );
      setCanLoadMore(response.data.page < response.data.pageSize);
      setPage(+response.data.page);
      setData((prevData) =>
        isRefresh ? response.data.data : [...prevData, ...response.data.data]
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(filter);
  }, [filter, data]);

  const handleSearch = (value) => {
    let filtered = [...data];
    if (value.keyword) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(value.keyword.toLowerCase())
      );
    }

    if (value.tier) {
      filtered = filtered.filter(
        (item) =>
          TIER_LABEL[value.tier]?.toLowerCase() === item.tier.toLowerCase()
      );
    }
    if (value.theme) {
      filtered = filtered.filter(
        (item) =>
          THEME_LABEL[value.theme]?.toLowerCase() === item.theme.toLowerCase()
      );
    }

    if (value.price) {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    if (value.time) {
      filtered = filtered.sort(
        (a, b) => new Date(b.create_at) - new Date(a.create_at)
      );
    }

    setFilteredData(filtered);
  };

  useInterval(() => {
    fetchData(true);
  }, INTERVAL_FETCH_TIME);

  useEffect(() => {
    fetchData(true);
  }, []);

  const handleClickViewMore = () => {
    fetchData(false, page + 1);
    setPage(page + 1)
  };

  return (
    <DataListWrapper>
      <Row gutter={40} style={{ padding: 24 }}>
        <Col span={4}>
          <Filter filter={filter} onChangeFilter={setFilter} />
        </Col>
        <Col span={20}>
          <List
            grid={{ gutter: [40, 20], column: 4 }}
            loading={loading}
            dataSource={filteredData}
            renderItem={(item) => (
              <List.Item key={item.name}>
                <CardCharacter
                  name={item.name}
                  price={item.price}
                  owner={item.owner}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <ViewMoreWrapper>
        <ViewMore disabled={!filteredData.length || !canLoadMore} onClick={handleClickViewMore}>
          View more
        </ViewMore>
      </ViewMoreWrapper>
    </DataListWrapper>
  );
};

export default DataList;
