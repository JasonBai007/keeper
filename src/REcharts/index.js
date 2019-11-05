import React from "react";
import ReactEcharts from "echarts-for-react";

class REchats extends React.Component {
  getOption() {
    return {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
  }
  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{ height: "350px", width: "100%" }}
        className="react_for_echarts"
      />
    );
  }
}

export default REchats;
