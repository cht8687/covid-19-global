import * as R from 'ramda';
import colours from '../../../../styles/colours';

export const options = data => ({
  color: [colours.red, colours.wheat],
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
    data: ['New Daily Increases Australia'],
    textStyle: {
      color: colours.dimWhite,
    },
  },
  series: [
    {
      name: 'New Daily Increases Australia',
      data: data.source,
      type: 'bar',
    },
  ],
});
