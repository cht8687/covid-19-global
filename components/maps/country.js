import React from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
require('echarts-countries-js/echarts-countries-js/USA.js');
require('echarts-countries-js/echarts-countries-js/Australia.js');
import {options} from '../mapData/country';
import CircularProgress from '@material-ui/core/CircularProgress';
import {curry, reduce, assoc, keys, compose, map, pick} from 'ramda';

const renameKeys = curry((keysMap, obj) =>
  reduce(
    (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
    {},
    keys(obj),
  ),
);

const MapContainer = styled.div`
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

export default function country({data, location, timestamp}) {
  let total, list, dataToRender;
  if (data && data.type && data.type === 'country') {
    total = data.total;
    list = data.list;
    dataToRender = compose(
      map(renameKeys({province_state: 'name'})),
      map(renameKeys({total_cases: 'value'})),
      map(pick(['province_state', 'total_cases'])),
    )(list);
  }
  return (
    <MapContainer>
      {!total ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          option={options(location, dataToRender, total, timestamp) || {}}
          style={{height: '60vh', width: '100%'}}
        />
      )}
    </MapContainer>
  );
}
