import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import {options} from './options';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getHistoryAll} from '../../../../services/api_thirdparty';
import * as R from 'ramda';

const ChartsContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ReactEchartsContainer = styled(ReactEcharts)`
  height: 100%;
  width: 100%;
`;

export default function CountryBarLabelRotation({location}) {
  const [data, setData] = useState();

  useEffect(() => {
    getHistoryAll(location === 'world' ? 'all' : location).then(data => {
      let source;
      if (location !== 'world') {
        source = data.timeline;
      } else {
        source = data;
      }
      setData(source);
    });
  }, []);

  return (
    <ChartsContainer>
      {!data ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          option={options(data)}
          notMerge={true}
          style={{height: '45vh', width: '100%'}}
        />
      )}
    </ChartsContainer>
  );
}
