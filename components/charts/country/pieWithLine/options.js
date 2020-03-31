import colours from '../../../../styles/colours';
import {last} from 'ramda';

export const options = ({source}) => ({
  color: [
    '#86ceeb',
    '#800000',
    '#060080',
    '#006a4d',
    '#fed700',
    '#ff0000',
    '#e65900',
    '#fed700',
  ],
  legend: {
    textStyle: {
      color: colours.dimWhite,
    },
    inactiveColor: 'grey',
  },
  tooltip: {
    trigger: 'axis',
    showContent: false,
  },
  dataset: {
    source,
  },
  toolbox: {
    show: true,
    orient: 'horizontal',
    left: 'right',
    top: 'center',
    feature: {
      restore: {
        show: true,
        title: 'restore',
      },
      saveAsImage: {
        show: true,

        title: 'save',
      },
    },
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      textStyle: {
        color: colours.dimWhite,
      },
    },
  },
  yAxis: {
    gridIndex: 0,
    axisLabel: {
      textStyle: {
        color: colours.dimWhite,
      },
    },
  },
  grid: {top: '55%', y: 50, y2: 90},
  dataZoom: [
    {
      show: true,
      xAxisIndex: [0],
      start: 60,
      end: 100,
    },
    {
      type: 'inside',
      xAxisIndex: [0],
      start: 60,
      end: 100,
    },
  ],
  series: [
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
    },
    {
      type: 'pie',
      id: 'pie',
      radius: '35%',
      center: ['50%', '35%'],
      label: {
        show: false,
        formatter: '{b}:({d}%)',
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      encode: {
        itemName: 'state',
        value: last(source[0]),
        tooltip: last(source[0]),
      },
    },
  ],
});
