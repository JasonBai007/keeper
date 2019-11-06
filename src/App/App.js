import React from "react";
import "./App.less";
import TopForm from "@/TopForm";
import REcharts from "@/REcharts";

class App extends React.Component {
  constructor(props) {
    super(props);
    if (!localStorage.chartData) localStorage.chartData = JSON.stringify([]);
    this.state = {
      curObj: {}
    };
  }

  onRef = ref => {
    this.child = ref;
  };

  renderChart = obj => {
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
        <h2>keeper</h2>
        <TopForm submit={this.renderChart}></TopForm>
        <REcharts onRef={this.onRef}></REcharts>
      </div>
    );
  }
}

export default App;
