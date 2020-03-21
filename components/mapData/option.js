export const options = cityname => ({
  title: [
    {
      textStyle: {
        color: '#000',
        fontSize: 18,
      },
      subtext: '',
      text: cityname,
      top: 'auto',
      subtextStyle: {
        color: '#aaa',
        fontSize: 12,
      },
      left: 'auto',
    },
  ],
  tooltip: {
    trigger: 'item',
    formatter: function() {
      return `<div onclick='tooltip_click_event'>...</div>`;
    },
  },
  toolbox: {
    show: false,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {},
    },
  },
  visualMap: {
    min: 800, // this should from dataset
    max: 50000, // this should from dataset
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['orangered', 'yellow', 'lightskyblue'],
    },
  },
  legend: [
    {
      selectedMode: 'multiple',
      top: 'top',
      orient: 'horizontal',
      data: [''],
      left: 'center',
      show: true,
    },
  ],
  series: [
    {
      mapType: cityname,
      data: [],
      name: '',
      symbol: 'circle',
      type: 'map',
      roam: true,
    },
  ],
});
