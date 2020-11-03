// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const WidgetBar = (props) => {
  // Preparing the chart data
const chartData = [
  {
    label: "Organic Source",
    value: props.orgValue
  },
  {
    label: "Direct Source",
    value: props.dirValue
  },
  {
    label: "Referral Source",
    value: props.refValue
  }
];

// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  containerBackgroundOpacity: "0",  
  dataSource: {
    // Chart Configuration
    chart: {
      // caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
      // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
      // xAxisName: "Country",           //Set the x-axis name
      // yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
      // yaxisMaxValue: "650",
      // valueFontColor: "#706fd3",
      labelFontColor: "#fff",
      paletteColors: "#6957DA",
      valueFontColor: "#fff",
      showToolTipShadow: "1",
      showvalues : "1",
      showdivlineValues: "0",
      showLimits: "0",
      divlineAlpha: "0",
      bgcolor: "#2c2c54",
      theme: "fusion"                 //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData
  }
};
    return (
      <div className="widget">
        <p className="wedget_title" style={{textAlign:"center"}}>
                {props.title}
        </p>
         <ReactFC {...chartConfigs} />
     </div>   
    )
}

export default WidgetBar;
