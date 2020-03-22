import colours from '../../styles/colours';
import getNameMappings from '../../services/getEchartsNameMappings';

export const options = (name, data, total, timestamp) => ({
  title: [
    {
      textStyle: {
        color: colours.dimWhite,
        fontSize: 18,
      },
      subtext: 'updated ' + timestamp,
      text: name + ' COVID-19 map ',
      top: 'auto',
      subtextStyle: {
        color: '#fff',
        fontSize: 12,
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
    min: 0, // this should from dataset
    max: data[0].value,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['#d2e3fc', '#4e85f4', '#3f4065'],
    },
    textStyle: {
      color: colours.dimWhite,
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
      nameMap: getNameMappings(name),
    },
  ],
});
