import React from 'react';
import {Line} from 'react-chartjs-2';

function CountyLineChart({ chartData, title}) {
    return (
      <div className="chart-container">
        <h2 className="text-lg text-gray-400" style={{ textAlign: "center" }}>{title}</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              legend: {
                display: false
              }
            }
          } }
        />
      </div>
    );
  }
  export default CountyLineChart;
