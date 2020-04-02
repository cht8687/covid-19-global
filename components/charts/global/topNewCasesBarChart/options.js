import * as R from 'ramda';
import colours from '../../../../styles/colours';

export const options = data => ({
  color: ['red', 'white'],
  yAxis: {
    type: 'category',
    data: data.top10Names,
    axisLabel: {
      textStyle: {
        color: colours.dimWhite,
      },
    },
  },
  tooltip: {
    trigger: 'axis',
    showContent: true,
  },
  xAxis: {
    gridIndex: 0,
    axisLabel: {
      textStyle: {
        color: colours.dimWhite,
      },
    },
    type: 'value',
    data: data.top10Values,
  },
  legend: {
    data: ['New Cases Today', 'New Death Today'],
    textStyle: {
      color: colours.dimWhite,
    },
  },
  series: [
    {
      name: 'New Cases Today',
      data: data.top10Increase,
      type: 'bar',
    },
    {
      name: 'New Death Today',
      data: data.top10Death,
      type: 'bar',
    },
  ],
});
