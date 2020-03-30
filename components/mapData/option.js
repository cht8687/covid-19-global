import colours from '../../styles/colours';
import {upperCase} from 'upper-case';
import {nameMappingWord} from './mapNameMapping';

export const options = (name, data, total, timestamp) => ({
  title: [
    {
      textStyle: {
        color: colours.dimWhite,
        fontSize: 18,
      },
      subtext: 'Updated ' + timestamp + ' (*map disclaimer)',
      text: upperCase(name) + ' COVID-19 MAP ',
      top: 'auto',
      subtextStyle: {
        color: colours.dimWhite,
        fontSize: 12,
        fontWeight: 'bold',
      },
      left: 'auto',
    },
  ],
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      var value = (params.value + '').split('.');
      value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
      return params.name + '<br/>' + ' Total Confirmed: ' + value;
    },
  },
  toolbox: {
    show: true,
    orient: 'horizontal',
    bottom: 'center',
    left: 'center',
    bottom: '20%',
    feature: {
      restore: {
        show: true,
        title: 'restore map',
      },
    },
    iconStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: 'white', // color at 0% position
          },
          {
            offset: 1,
            color: 'yellow', // color at 100% position
          },
        ],
        global: false, // false by default
      },
    },
  },
  visualMap: {
    left: 'left',
    top: '50%',
    min: 0,
    max: 15000,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['#ffd8c9', '#eeb39d', '#db8e73', '#c66a4c', '#af4527', '#961700'],
    },
    textStyle: {
      color: '#fff',
    },
  },
  series: [
    {
      mapType: name,
      data,
      label: {
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        emphasis: {label: {show: true}},
      },
      name: '',
      type: 'map',
      roam: true,
      nameMap: nameMappingWord(),
    },
  ],
});
