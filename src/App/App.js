import React from "react";
import "./App.less";
import TopForm from "@/TopForm";
import REcharts from "@/REcharts";

function App() {
  return (
    <div className="wrap">
      <h2>keeper</h2>
      <TopForm></TopForm>
      <REcharts></REcharts>
    </div>
  );
}

export default App;
