import React from "react";
import "./App.less";
import TopForm from "@/TopForm";
import REcharts from "@/REcharts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curObj: {}
    };
  }
  renderChart = obj => {
    this.setState({ curObj: obj });
    if (!localStorage.chartData) localStorage.chartData = JSON.stringify([]);
    let beforeData = JSON.parse(localStorage.chartData);
    beforeData.push(this.state.curObj);
    localStorage.chartData = JSON.stringify(beforeData);
  };

  render() {
    return (
      <div className="wrap">
        <h2>keeper</h2>
        <TopForm submit={this.renderChart}></TopForm>
        <REcharts chartData={this.state.curObj}></REcharts>
      </div>
    );
  }
}

export default App;
