/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/china.js');

const MapContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 800px;
`;

const randomData = () => {
  return Math.round(Math.random() * 1000);
};

const getOption = () => {
  return {
    title: {
      text: 'iphone销量',
      subtext: '纯属虚构',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['iphone3', 'iphone4', 'iphone5'],
    },
    visualMap: {
      min: 0,
      max: 2500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: 'iphone3',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        data: [
          {name: '北京', value: randomData()},
          {name: '天津', value: randomData()},
          {name: '上海', value: randomData()},
          {name: '重庆', value: randomData()},
          {name: '河北', value: randomData()},
          {name: '河南', value: randomData()},
          {name: '云南', value: randomData()},
          {name: '辽宁', value: randomData()},
          {name: '黑龙江', value: randomData()},
          {name: '湖南', value: randomData()},
          {name: '安徽', value: randomData()},
          {name: '山东', value: randomData()},
          {name: '新疆', value: randomData()},
          {name: '江苏', value: randomData()},
          {name: '浙江', value: randomData()},
          {name: '江西', value: randomData()},
          {name: '湖北', value: randomData()},
          {name: '广西', value: randomData()},
          {name: '甘肃', value: randomData()},
          {name: '山西', value: randomData()},
          {name: '内蒙古', value: randomData()},
          {name: '陕西', value: randomData()},
          {name: '吉林', value: randomData()},
          {name: '福建', value: randomData()},
          {name: '贵州', value: randomData()},
          {name: '广东', value: randomData()},
          {name: '青海', value: randomData()},
          {name: '西藏', value: randomData()},
          {name: '四川', value: randomData()},
          {name: '宁夏', value: randomData()},
          {name: '海南', value: randomData()},
          {name: '台湾', value: randomData()},
          {name: '香港', value: randomData()},
          {name: '澳门', value: randomData()},
        ],
      },
      {
        name: 'iphone4',
        type: 'map',
        mapType: 'china',
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        data: [
          {name: '北京', value: randomData()},
          {name: '天津', value: randomData()},
          {name: '上海', value: randomData()},
          {name: '重庆', value: randomData()},
          {name: '河北', value: randomData()},
          {name: '安徽', value: randomData()},
          {name: '新疆', value: randomData()},
          {name: '浙江', value: randomData()},
          {name: '江西', value: randomData()},
          {name: '山西', value: randomData()},
          {name: '内蒙古', value: randomData()},
          {name: '吉林', value: randomData()},
          {name: '福建', value: randomData()},
          {name: '广东', value: randomData()},
          {name: '西藏', value: randomData()},
          {name: '四川', value: randomData()},
          {name: '宁夏', value: randomData()},
          {name: '香港', value: randomData()},
          {name: '澳门', value: randomData()},
        ],
      },
      {
        name: 'iphone5',
        type: 'map',
        mapType: 'china',
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        data: [
          {name: '北京', value: randomData()},
          {name: '天津', value: randomData()},
          {name: '上海', value: randomData()},
          {name: '广东', value: randomData()},
          {name: '台湾', value: randomData()},
          {name: '香港', value: randomData()},
          {name: '澳门', value: randomData()},
        ],
      },
    ],
  };
};

export default function Map() {
  return (
    <MapContainer>
      <ReactEcharts
        option={getOption() || {}}
        style={{height: '350px', width: '100%'}}
        className="react_for_echarts"
      />
      <style jsx>{`
        #main {
          width: 1200px;
          height: 800px;
        }
      `}</style>
    </MapContainer>
  );
}
