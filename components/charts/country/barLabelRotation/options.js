import echarts from 'echarts';
import * as R from 'ramda';
import colours from '../../../../styles/colours';

let app = {
  configParameters: null,
  config: null,
};

var posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight',
];

app.configParameters = {
  rotate: {
    min: -90,
    max: 90,
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right',
    },
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom',
    },
  },
  position: {
    options: echarts.util.reduce(
      posList,
      function(map, pos) {
        map[pos] = pos;
        return map;
      },
      {},
    ),
  },
  distance: {
    min: 0,
    max: 100,
  },
};

app.config = {
  rotate: 0,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function() {
    var labelOption = {
      normal: {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance,
      },
    };
    myChart.setOption({
      series: [
        {
          label: labelOption,
        },
        {
          label: labelOption,
        },
        {
          label: labelOption,
        },
        {
          label: labelOption,
        },
      ],
    });
  },
};

var labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  fontWeight: 'normal',
  fontStyle: 'normal',
  rich: {
    name: {
      color: colours.dimWhite,
      fontSize: 14,
    },
  },
};

export const options = ({source, states}) => ({
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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  dataZoom: [
    {
      show: true,
      yAxisIndex: [0],
      start: 98,
      end: 100,
      maxSpan: 2,
      minSpan: 2,
    },
    {
      type: 'inside',
      yAxisIndex: [0],
      start: 98,
      end: 100,
      maxSpan: 2,
      minSpan: 2,
    },
  ],
  legend: {
    data: states,
    textStyle: {
      color: colours.dimWhite,
    },
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'left',
    top: 'center',
    feature: {
      mark: {show: false},
      dataView: {show: false, readOnly: false},
      magicType: {
        show: true,
        title: 'switch view',
        type: ['line', 'bar'],
      },
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
  yAxis: [
    {
      type: 'category',
      axisTick: {show: false},
      data: R.drop(2, source[0]),
      axisLabel: {
        textStyle: {
          color: colours.dimWhite,
        },
      },
    },
  ],
  xAxis: [
    {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: colours.dimWhite,
        },
      },
    },
  ],
  series: R.compose(
    R.map(
      R.applySpec({
        name: R.head,
        type: () => 'bar',
        label: () => labelOption,
        data: R.compose(R.identity, R.drop(1)),
      }),
    ),
  )(R.drop(1, source)),
});
