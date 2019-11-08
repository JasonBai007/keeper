import React from "react";
// 对于 echarts-for-react 进行按需引入
// import the core library.
import ReactEchartsCore from "echarts-for-react/lib/core";
// then import echarts modules those you have used manually.
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/grid';
import { notification } from "antd";

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

  // 点击折线图上的折点，获取当前天的备注数组
  onChartClick = params => {
    let obj = JSON.parse(localStorage.chartData)[params.dataIndex];
    notification.open({
      message: `${obj.date} Notes`,
      placement: "bottomRight",
      description: obj.note.join("；")
    });
  };

  render() {
    let onEvents = {
      click: this.onChartClick
    };
    return (
      <div>
        <ReactEchartsCore
          echarts={echarts}
          ref={e => {
            this.echarts_react = e;
          }}
          option={this.getOption()}
          style={{ height: "480px", width: "100%" }}
          className="react_for_echarts"
          onEvents={onEvents}
        />
      </div>
    );
  }
}

export default REchats;
