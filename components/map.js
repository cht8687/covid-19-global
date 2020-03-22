/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/China.js');
require('echarts-countries-js/echarts-countries-js/world');
//import {options} from './mapData/china';
import {options} from './mapData/option';
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

export default function Map({data, location}) {
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

  console.log(dataToRender);

  return (
    <MapContainer>
      {!total ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          option={options('world', dataToRender, total) || {}}
          style={{height: '80vh', width: '100%'}}
        />
      )}
    </MapContainer>
  );
}
