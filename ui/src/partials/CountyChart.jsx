import React from 'react';
import {Bar} from 'react-chartjs-2';


function CountyChart({ chartData, title }) {
              return (
                <div className="chart-container">
                  <h2 className="text-lg text-gray-400" style={{ textAlign: "center" }}>{title}</h2>
                  <Bar
                    data={chartData}
                    options={{
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                </div>
              );
};

export default CountyChart;