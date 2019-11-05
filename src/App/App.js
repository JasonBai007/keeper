import React from "react";
import "./App.less";
import TopForm from "@/TopForm";
import REcharts from "@/REcharts";

class App extends React.Component {
  renderChart = (obj) => {
    console.log(obj);
  };

  render() {
    return (
      <div className="wrap">
        <h2>keeper</h2>
        <TopForm submit={this.renderChart}></TopForm>
        <REcharts></REcharts>
      </div>
    );
  }
}

export default App;
