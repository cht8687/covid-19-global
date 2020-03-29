import colours from '../../../../styles/colours';

export const options = ({source}) => ({
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
      type: 'pie',
      id: 'pie',
      radius: '35%',
      center: ['50%', '25%'],
      label: {
        formatter: '{b}:({d}%)',
        textStyle: {},
      },
      encode: {
        itemName: 'state',
        value: source[0][2],
        tooltip: source[0][2],
      },
    },
  ],
});
