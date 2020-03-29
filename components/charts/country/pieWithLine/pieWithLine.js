import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import {options} from './options';
import {useAsync} from 'react-async';
import CircularProgress from '@material-ui/core/CircularProgress';
import renameKeys from '../../../../utilities/renameKeys';
import {getCountryStateDaily} from '../../../../services/api';
import {statesInfo} from './stateTables';
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

export default function CountryPieWithLineCharts({location}) {
  location = 'australia';
  const [optionData, setOptionData] = useState();
  const [source, setSource] = useState();
  const chartRef = useRef(null);
  const states = statesInfo[location];
  useEffect(() => {
    let source = [];
    let firstDateRow = [];
    let promises = [];
    let statesInfo;
    states.map(state => {
      promises.push(getCountryStateDaily(location, state));
    });
    Promise.all(promises).then(function(values) {
      console.log(JSON.stringify(values));
      firstDateRow = R.compose(
        R.reverse(),
        R.take(14),
        R.map(R.prop('data_date')),
        R.flatten,
        R.map(R.prop('suburbs')),
      )(values);

      source = R.compose(
        R.prepend(firstDateRow),
        R.map(R.compose(R.reverse, R.take(14), R.map(R.path(['confirmed'])))),
        R.map(R.path(['suburbs'])),
      )(values);

      statesInfo = R.compose(
        R.prepend('state'),
        R.flatten,
        R.map(R.take(1)),
        R.map(R.map(R.path(['geo_location', 'province_state']))),
        R.map(R.prop('suburbs')),
      )(values);
      source = statesInfo.map((state, index) =>
        R.prepend(state)(source[index]),
      );
      setSource(source);
      setOptionData(options({source}));
    });
  }, []);

  function onUpdateAxisPointer(event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      var dimension = xAxisInfo.value + 1;
      chartRef.current.getEchartsInstance().setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}:({d}%)',
          },
          encode: {
            value: dimension,
            tooltip: dimension,
          },
        },
      });
    }
  }

  let onEvents = {
    updateAxisPointer: onUpdateAxisPointer,
  };

  return (
    <ChartsContainer>
      {!optionData ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          ref={chartRef}
          option={optionData}
          notMerge={true}
          style={{height: '80vh', width: '100%'}}
          onEvents={onEvents}
        />
      )}
    </ChartsContainer>
  );
}
