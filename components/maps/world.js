/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
require('echarts-countries-js/echarts-countries-js/world.js');
import {activeWorldOption} from '../mapData/activeWorldOption';
import {confirmedWorldOption} from '../mapData/confirmedWorldOption';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  curry,
  reduce,
  assoc,
  keys,
  compose,
  map,
  pick,
  applySpec,
  prop,
  converge,
  concat,
  toLower,
} from 'ramda';
import countryCodeToGeo from '../mapData/countryCodeToGeo';

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

export default function World({data, location, timestamp, mode}) {
  let total, list, dataRaw;
  let dataToRender = [];
  if (data) {
    total = data.total;
    list = data.list;

    const activeCases = map(renameKeys({active_cases: 'value'}));
    const totalCases = map(renameKeys({total_cases: 'value'}));

    const getCases = () => (mode === 'active_cases' ? activeCases : totalCases);

    dataToRender = compose(
      map(renameKeys({country_code: 'code'})),
      map(renameKeys({country: 'name'})),
      map(renameKeys({total_cases: 'value'})),
      map(renameKeys({active_cases: 'AValue'})),
      map(pick(['country', 'active_cases', 'total_cases', 'country_code'])),
    )(list);
  }

  return (
    <MapContainer>
      {!total ? (
        <CircularProgress color="secondary" />
      ) : (
        <ReactEchartsContainer
          option={
            activeWorldOption('world', dataToRender, total, timestamp) || {}
          }
          style={{height: '50vh', width: '100%'}}
        />
      )}
    </MapContainer>
  );
}
