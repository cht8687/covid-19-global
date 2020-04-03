import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import {options} from './options';
import {useAsync} from 'react-async';
import CircularProgress from '@material-ui/core/CircularProgress';
import renameKeys from '../../../../utilities/renameKeys';
import {getCountryStateDaily} from '../../../../services/api';
import {statesInfo} from '../common/stateTables';
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

export default function CountryDailyTotalIncreaseBar({location}) {
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
      const datesArray = R.compose(
        R.map(R.map(R.path(['data_date']))),
        R.map(R.prop('suburbs')),
      )(values);

      let longestChildren = 0;
      let longestChildrenIndex = 0;
      datesArray.forEach((array, index) => {
        if (array.length > longestChildren) {
          longestChildren = array.length;
          longestChildrenIndex = index;
        }
      });

      firstDateRow = R.prepend(
        'state',
        R.reverse(datesArray[longestChildrenIndex]),
      );

      source = R.compose(
        R.prepend(firstDateRow),
        R.map(R.compose(R.map(R.path(['confirmed'])))),
        R.map(R.path(['suburbs'])),
      )(values);

      source = source.map((array, index) => {
        let result;
        if (index !== longestChildrenIndex) {
          const tails = R.repeat(0, longestChildren - array.length);
          result = [...array, ...tails].reverse();
        } else {
          result = array;
        }
        if (index > 0) {
          result = result.map((item, index) => {
            if (index > 0) {
              return result[index] - result[index - 1];
            } else {
              return item;
            }
          });
        }

        return result;
      });

      const datesInfo = R.drop(1, R.head(source));
      const valuesData = R.drop(1, source);
      let resultData = [];
      for (let index = 0; index < datesInfo.length; index++) {
        let currentColumn = 0;
        for (let index2 = 0; index2 < valuesData.length; index2++) {
          currentColumn += valuesData[index2][index];
        }
        resultData.push(currentColumn);
      }
      setSource({source: resultData, datesInfo});
      setOptionData(options({source: resultData, datesInfo}));
    });
  }, []);

  function onChange(event) {
    const labelOption = {
      normal: {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 5,
      },
    };
    chartRef.current.getEchartsInstance().setOption({
      series: [
        {
          type: 'bar',
          label: labelOption,
        },
        {
          type: 'bar',
          label: labelOption,
        },
        {
          type: 'bar',
          label: labelOption,
        },
        {
          type: 'bar',
          label: labelOption,
        },
        {
          type: 'bar',
          label: labelOption,
        },
        {
          type: 'bar',
          label: labelOption,
        },
        {
          type: 'bar',
          label: labelOption,
        },
      ],
    });
  }

  let onEvents = {
    onChange: onChange,
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
          style={{height: '45vh', width: '100%'}}
          onEvents={onEvents}
        />
      )}
    </ChartsContainer>
  );
}
