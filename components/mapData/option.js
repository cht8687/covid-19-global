import colours from '../../styles/colours';
import {upperCase} from 'upper-case';
import getNameMappings from '../../const/nameMappingWorld';

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
    show: false,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {},
    },
  },
  visualMap: {
    left: 'left',
    bottom: '50',
    min: 0, // this should from dataset
    max: data[0].value,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: [
        '#ffebcd',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026',
      ],
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
      nameMap: getNameMappings,
    },
  ],
});
