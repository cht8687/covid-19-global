import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import {options} from './options';
import {useAsync} from 'react-async';
import CircularProgress from '@material-ui/core/CircularProgress';
import renameKeys from '../../../../utilities/renameKeys';
import {getCountryStateDaily} from '../../../../services/api';

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

export default function CountryPieWithLineCharts({location}) {
  const [pieLineData, setPieLineData] = useState();

  useEffect(() => {
    const result = getCountryStateDaily('victoria');
    console.log(result);
    setPieLineData(result);
  }, []);

  return (
    <ChartsContainer>
      {!pieLineData ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          option={options()}
          style={{height: '80vh', width: '100%'}}
        />
      )}
    </ChartsContainer>
  );
}
