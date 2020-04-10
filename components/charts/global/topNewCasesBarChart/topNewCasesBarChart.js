import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import {options} from './options';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getHistoryAll} from '../../../../services/api_thirdparty';
import getValueFromArray from '../../../../utilities/getValueFromArray';
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

export default function GlobalTopNewCasesBarChart({data, type}) {
  const [dataToDisplay, setDataToDisplay] = useState('');

  useEffect(() => {
    if (data) {
      const {total, list, continents} = data;
      const toIndividualKeys = R.pipe(
        R.toPairs,
        R.map(R.pipe(R.of, R.fromPairs)),
      );

      if (type === 'world') {
        const sortedList = R.sort(R.descend(R.prop('new_cases')), list);
        const countryArray = R.take(10, R.map(toIndividualKeys)(sortedList));
        const top10Names = R.compose(R.map(getValueFromArray('country')))(
          countryArray,
        );
        const top10TotalCases = R.compose(
          R.map(getValueFromArray('total_cases')),
        )(countryArray);
        const top10Increase = R.compose(R.map(getValueFromArray('new_cases')))(
          countryArray,
        );
        const top10ActiveCases = R.compose(
          R.map(getValueFromArray('active_cases')),
        )(countryArray);
        const top10Death = R.compose(R.map(getValueFromArray('new_deaths')))(
          countryArray,
        );
        setDataToDisplay({
          top10TotalCases,
          top10ActiveCases,
          top10Names,
          top10Increase,
          top10Death,
        });
      } else if (type === 'continents') {
        const sortedList = R.sort(R.descend(R.prop('new_cases')), continents);
        const countryArray = R.map(toIndividualKeys)(sortedList);
        const top10Names = R.compose(R.map(getValueFromArray('country')))(
          countryArray,
        );
        const top10TotalCases = R.compose(
          R.map(getValueFromArray('total_cases')),
        )(countryArray);
        const top10ActiveCases = R.compose(
          R.map(getValueFromArray('active_cases')),
        )(countryArray);
        const top10Increase = R.compose(R.map(getValueFromArray('new_cases')))(
          countryArray,
        );
        const top10Death = R.compose(R.map(getValueFromArray('new_deaths')))(
          countryArray,
        );
        setDataToDisplay({
          top10TotalCases,
          top10ActiveCases,
          top10Names,
          top10Increase,
          top10Death,
        });
      }
    }
  }, [data]);

  return (
    <ChartsContainer>
      {!data && !dataToDisplay ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          option={options(dataToDisplay)}
          notMerge={true}
          style={{height: '45vh', width: '100%'}}
        />
      )}
    </ChartsContainer>
  );
}
