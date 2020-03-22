export const options = (name, data, total) => ({
  title: [
    {
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },
      subtext: '',
      text: name,
      top: 'auto',
      subtextStyle: {
        color: '#fff',
        fontSize: 12,
      },
      left: 'auto',
    },
  ],
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      var value = (params.value + '').split('.');
      value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
      return params.name + '<br/>' + ' Total Confirmed: ' + value;
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
    min: 0, // this should from dataset
    max: total && total.total_cases, // this should from dataset
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['#d2e3fc', '#4e85f4', '#2f4fa5'],
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
      mapType: name,
      data,
      name: '',
      symbol: 'circle',
      type: 'map',
      roam: true,
    },
  ],
});
