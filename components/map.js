/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/china.js');
import {options} from './mapData/china';

const MapContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 800px;
`;

const getOption = () => {};

export default function Map() {
  return (
    <MapContainer>
      <ReactEcharts
        option={options() || {}}
        style={{height: '100vh', width: '100%'}}
        className="react_for_echarts"
      />
    </MapContainer>
  );
}
