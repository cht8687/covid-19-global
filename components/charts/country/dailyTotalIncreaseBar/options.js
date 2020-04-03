import * as R from 'ramda';
import colours from '../../../../styles/colours';

export const options = data => ({
  color: [colours.red, colours.wheat],
  dataZoom: [
    {
      show: true,
      xAxisIndex: [0],
      maxSpan: 50,
      minSpan: 10,
      start: 50,
      end: 100,
    },
    {
      type: 'inside',
      xAxisIndex: [0],
      maxSpan: 50,
      minSpan: 10,
      start: 50,
      end: 100,
    },
  ],
  xAxis: {
    inverse: false,
    type: 'category',
    data: data.datesInfo,
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
    type: 'value',
    data: data.datesInfo,
  },
  tooltip: {
    trigger: 'axis',
    showContent: true,
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '13%',
    containLabel: true,
  },

  legend: {
    data: ['New Daily Increases Austria'],
    textStyle: {
      color: colours.dimWhite,
    },
  },
  series: [
    {
      name: 'New Daily Increases Austria',
      data: data.source,
      type: 'bar',
    },
  ],
});
