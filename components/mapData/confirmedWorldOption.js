import colours from "../../styles/colours";
import { upperCase } from "upper-case";
import { nameMappingWord } from "./mapNameMapping";
import { mapOptionZoomlevelMapping } from "./mapNameMapping";

export const confirmedWorldOption = (name, data, total, timestamp) => ({
  title: [
    {
      textStyle: {
        color: colours.dimWhite,
        fontSize: 18,
      },
      subtext: "Updated " + timestamp,
      text: upperCase(name) + " Total COVID-19 Cases MAP ",
      top: "auto",
      subtextStyle: {
        color: colours.dimWhite,
        fontSize: 12,
        fontWeight: "bold",
      },
      left: "auto",
    },
  ],
  tooltip: {
    trigger: "item",
    formatter: function(params) {
      if (!params.value) {
        return;
      }
      var value = (params.value + "").split(".");
      value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
      return params.name + "<br/>" + " Total Confirmed: " + value;
    },
  },
  toolbox: {
    show: true,
    orient: "horizontal",
    bottom: "center",
    left: "center",
    bottom: "10%",
    feature: {
      restore: {
        show: true,
        title: "Restore Map",
      },
    },
    iconStyle: {
      color: colours.dimWhite,
    },
  },
  visualMap: {
    left: "left",
    top: "50%",
    min: 0,
    max: 5000000,
    text: ["High", "Low"],
    realtime: false,
    calculable: true,
    inRange: {
      color: ["#ffd8c9", "#eeb39d", "#db8e73", "#c66a4c", "#af4527", "#961700"],
    },
    textStyle: {
      color: "#fff",
    },
  },
  series: [
    {
      mapType: name,
      roam: "scale",
      zoom: mapOptionZoomlevelMapping()[name],
      data,
      label: {
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        emphasis: { label: { show: true } },
      },
      name: "",
      type: "map",
      nameMap: nameMappingWord(),
    },
  ],
});
