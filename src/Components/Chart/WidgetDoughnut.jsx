// Step 1 - Include react
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


const WidgetDoughnut = (props) => {

  const chartData = [
    {
      label: "Users",
      value: props.user
    },
    {
      label: "New Users",
      value: props.newUser
    }
  ];

  const chartConfigs = {
    type: "Doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        // "caption": "Split of Revenue by Product Categories",
        // "subCaption": "Last year",
        // "numberPrefix": "$",
        "bgcolor": "#2c2c54",
        // "defaultCenterLabel": "Total revenue: $64.08K",
        // "centerLabel": "Revenue from $label: $value",
        "decimals": "0",
        "theme": "fusion",
        paletteColors: "#6957DA,#ffffff",
        valueFontColor: "#fff",
        showToolTipShadow: "1"
        },
        data: chartData
    }
  };

  return (
    <div className="widget">
      <p className="wedget_title" style={{ textAlign: "center" }}>
        {props.title}
      </p>
      <ReactFC {...chartConfigs} />
    </div>
  )
}

export default WidgetDoughnut;
