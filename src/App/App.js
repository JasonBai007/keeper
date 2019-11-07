import React from "react";
import "./App.less";
import TopForm from "@/TopForm";
import REcharts from "@/REcharts";
import LeftMenu from "@/Menu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curObj: {}
    };
    if (!localStorage.chartData) localStorage.chartData = JSON.stringify([]);
  }

  onRef = ref => {
    this.child = ref;
  };

  renderChart = obj => {
    // 获取最新的state，得放在回调函数里，因为是异步的
    this.setState({ curObj: obj }, () => {
      let beforeData = JSON.parse(localStorage.chartData);
      beforeData.push(this.state.curObj);
      localStorage.chartData = JSON.stringify(beforeData);
      this.child._renderChart();
    });
  };

  render() {
    return (
      <div className="wrap">
        {/* 引入github丝带 */}
        <a
          className="github-fork-ribbon"
          href="https://github.com/JasonBai007/keeper"
          target="_blank"
          rel="noopener noreferrer"
          data-ribbon="Fork me on GitHub"
        >
          github-fork-ribbon
        </a>
        <LeftMenu></LeftMenu>
        <h2>Keeper <span>一天一记录，仨月大变样</span></h2>
        <TopForm submit={this.renderChart}></TopForm>
        <REcharts onRef={this.onRef}></REcharts>
      </div>
    );
  }
}

export default App;
