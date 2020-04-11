import * as R from 'ramda';
import colours from '../../../../styles/colours';

export const options = data => ({
  color: [colours.red, colours.orange, colours.green, colours.lightWheat],
  yAxis: {
    inverse: true,
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
  grid: {
    left: '1%',
    right: '1%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    gridIndex: 0,
    axisLabel: {
      textStyle: {
        color: colours.dimWhite,
      },
    },
    type: 'value',
    data: data.top10TotalCases,
  },
  legend: {
    data: [
      'Confirmed Cases',
      'Active Cases',
      'New Cases Today',
      'New Death Today',
    ],
    textStyle: {
      color: colours.dimWhite,
    },
  },
  series: [
    {
      name: 'Confirmed Cases',
      data: data.top10TotalCases,
      type: 'bar',
    },
    {
      name: 'Active Cases',
      data: data.top10ActiveCases,
      type: 'bar',
    },
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
