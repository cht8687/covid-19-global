/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
//require('echarts/map/js/Australia.js');
require('echarts-countries-js/echarts-countries-js/Australia');
//import {options} from './mapData/china';
import {options} from './mapData/commonOption';

const MapContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 800px;
`;

export default function Map() {
  return (
    <MapContainer>
      <ReactEcharts
        option={options('澳大利亚') || {}}
        style={{height: '100vh', width: '100%'}}
        className="react_for_echarts"
      />
    </MapContainer>
  );
}
