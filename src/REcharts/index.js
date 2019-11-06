import React from "react";
import ReactEcharts from "echarts-for-react";

class REchats extends React.Component {
  componentDidMount() {
    this.props.onRef(this);
  }
  getOption() {
    let arr = JSON.parse(localStorage.chartData);
    return {
      grid: {
        top: 50,
        left: 30,
        right: 30,
        bottom: 90
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          label: {
            show: true
          }
        }
      },
      legend: {
        data: ["健康指数", "睡眠指数"],
        bottom: 0
      },
      dataZoom: [
        {
          show: true,
          bottom: 30
        }
      ],
      xAxis: {
        data: arr.map(obj => obj.date)
      },
      yAxis: [
        {
          type: "value",
          name: "健康指数",
          min: 0,
          max: 100
        },
        {
          type: "value",
          name: "睡眠指数",
          min: 0,
          max: 100
        }
      ],
      series: [
        {
          name: "健康指数",
          type: "line",
          yAxisIndex: 0,
          data: arr.map(obj => obj.hIndex)
        },
        {
          name: "睡眠指数",
          type: "line",
          yAxisIndex: 1,
          data: arr.map(obj => obj.sIndex)
        }
      ]
    };
  }

  _renderChart = () => {
    this.echarts_react.getEchartsInstance().setOption(this.getOption());
  };
  render() {
    return (
      <div>
        <ReactEcharts
          ref={e => {
            this.echarts_react = e;
          }}
          option={this.getOption()}
          style={{ height: "480px", width: "100%" }}
          className="react_for_echarts"
        />
      </div>
    );
  }
}

export default REchats;
