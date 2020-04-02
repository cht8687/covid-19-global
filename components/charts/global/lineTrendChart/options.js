import * as R from 'ramda';
import colours from '../../../../styles/colours';

export const options = data => ({
  color: ['red', 'white', 'green'],
  xAxis: {
    type: 'category',
    data: R.keys(R.prop('cases')(data)),
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
  yAxis: {
    gridIndex: 0,
    axisLabel: {
      textStyle: {
        color: colours.dimWhite,
      },
    },
    type: 'value',
  },
  legend: {
    data: ['Total cases', 'Total deaths', 'Total recovered'],
    textStyle: {
      color: colours.dimWhite,
    },
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '3%',
    containLabel: true,
  },
  series: [
    {
      name: 'Total cases',
      data: R.values(R.prop('cases')(data)),
      type: 'line',
    },

    {
      name: 'Total deaths',
      data: R.values(R.prop('deaths')(data)),
      type: 'line',
    },

    {
      name: 'Total recovered',
      data: R.values(R.prop('recovered')(data)),
      type: 'line',
    },
  ],
});
