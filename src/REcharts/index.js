import React from "react";
import ReactEcharts from "echarts-for-react";

class REchats extends React.Component {
  getOption() {
    return {
      grid: {
        top: 30,
        left: 30,
        right: 30,
        bottom: 40
      },
      legend: {
        data: ["销量"],
        bottom:0
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 100, 20]
        }
      ]
    };
  }
  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{ height: "400px", width: "100%" }}
        className="react_for_echarts"
      />
    );
  }
}

export default REchats;
