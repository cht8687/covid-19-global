/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
require('echarts-countries-js/echarts-countries-js/world.js');
import {options} from '../mapData/option';
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

export default function World({data, location, timestamp}) {
  let total, list, dataToRender;
  if (data) {
    total = data.total;
    list = data.list;
    dataToRender = compose(
      map(renameKeys({country: 'name'})),
      map(renameKeys({total_cases: 'value'})),
      map(pick(['country', 'total_cases'])),
    )(list);
  }

  return (
    <MapContainer>
      {!total ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          option={options('world', dataToRender, total, timestamp) || {}}
          style={{height: '50vh', width: '100%'}}
        />
      )}
    </MapContainer>
  );
}
