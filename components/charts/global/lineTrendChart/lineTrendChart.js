import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import {options} from './options';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getDailyByCountry} from '../../../../services/api';
import apiCountryNameMapping from '../../../../const/apiCountryNameMapping';
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
    getDailyByCountry(
      apiCountryNameMapping[location]
        ? apiCountryNameMapping[location]
        : location,
    ).then(({data}) => {
      setData(data);
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
