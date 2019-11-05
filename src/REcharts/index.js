import React from "react";
import PropTypes from "prop-types";
import ReactEcharts from "echarts-for-react";

class REchats extends React.Component {
  getOption() {
    let arr = JSON.parse(localStorage.chartData);
    return {
      grid: {
        top: 30,
        left: 30,
        right: 30,
        bottom: 60
      },
      legend: {
        data: ["健康指数", "睡眠指数"],
        bottom: 0
      },
      xAxis: {
        data: arr.map(obj => obj.date)
      },
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 100
        },
        {
          type: "value",
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
  render() {
    return (
      <div>
        <ReactEcharts
          option={this.getOption()}
          style={{ height: "400px", width: "100%" }}
          className="react_for_echarts"
        />
      </div>
    );
  }
}

REchats.propTypes = {
  chartData: PropTypes.object
};

export default REchats;
