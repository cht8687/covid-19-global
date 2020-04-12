import * as R from 'ramda';
import colours from '../../../../styles/colours';

export const options = data => ({
  color: [colours.red, colours.wheat, colours.green],
  xAxis: {
    type: 'category',
    data: R.keys(R.prop('confirmed')(data)),
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
      data: R.dropLast(1, R.values(R.prop('confirmed')(data))),
      type: 'line',
    },

    {
      name: 'Total deaths',
      data: R.dropLast(1, R.values(R.prop('deaths')(data))),
      type: 'line',
    },

    {
      name: 'Total recovered',
      data: R.dropLast(1, R.values(R.prop('recovered')(data))),
      type: 'line',
    },
  ],
});
