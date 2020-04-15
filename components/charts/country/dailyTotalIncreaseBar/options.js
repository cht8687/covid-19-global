import * as R from 'ramda';
import colours from '../../../../styles/colours';

export const options = data => ({
  color: [colours.red, colours.wheat],
  xAxis: {
    inverse: false,
    type: 'category',
    data: R.keys(R.prop('new_cases')(data)),
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
    data: ['Daily New Increases', 'Daily New Death'],
    textStyle: {
      color: colours.dimWhite,
    },
  },
  series: [
    {
      name: 'Daily New Increases',
      data: R.dropLast(1, R.values(R.prop('new_cases')(data))),
      type: 'bar',
    },
    {
      name: 'Daily New Death',
      data: R.dropLast(1, R.values(R.prop('new_deaths')(data))),
      type: 'bar',
    },
  ],
});
