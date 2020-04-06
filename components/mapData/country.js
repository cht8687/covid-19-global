import colours from '../../styles/colours';
import {upperCase} from 'upper-case';
import {nameMappingCountry} from './mapNameMapping';
import {
  mapOptionNameMapping,
  mapOptionZoomlevelMapping,
} from './mapNameMapping';

export const options = (name, data, total, timestamp) => ({
  title: [
    {
      textStyle: {
        color: colours.dimWhite,
        fontSize: 18,
      },
      subtext: 'Updated ' + timestamp,
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
      if (!params.value) return;
      var value = (params.value + '').split('.');
      value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
      return params.name + '<br/>' + ' Total Confirmed: ' + value;
    },
  },
  visualMap: {
    left: 'left',
    bottom: '50',
    min: 0,
    max: data[0].value,
    realtime: false,
    calculable: true,
    textStyle: {
      color: '#fff',
    },
    inRange: {
      color: ['#ffd8c9', '#eeb39d', '#db8e73', '#c66a4c', '#af4527', '#961700'],
    },

    text: ['High', 'Low'],
    calculable: true,
  },
  toolbox: {
    show: true,
    orient: 'horizontal',
    bottom: 'center',
    left: 'center',
    bottom: '10%',
    feature: {
      restore: {
        show: true,
        title: 'Restore Map',
      },
      iconStyle: {
        color: colours.dimWhite,
      },
    },
  },
  series: [
    {
      mapType: mapOptionNameMapping()[name],
      zoom: mapOptionZoomlevelMapping()[name],
      type: 'map',
      label: {
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        emphasis: {label: {show: true}},
      },
      roam: 'scale',
      data,
      nameMap: nameMappingCountry(location),
    },
  ],
});
