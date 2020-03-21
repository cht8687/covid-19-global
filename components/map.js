/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
//require('echarts/map/js/Australia.js');
require('echarts-countries-js/echarts-countries-js/world');
//import {options} from './mapData/china';
import {options} from './mapData/commonOption';

const MapContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ReactEchartsContainer = styled(ReactEcharts)`
  background-color: green;
  height: 100%;
  width: 100%;
`;

export default function Map() {
  return (
    <MapContainer>
      <ReactEchartsContainer option={options('world') || {}} />
    </MapContainer>
  );
}
