import React from 'react';
import {useState, useEffect} from "react";
import { CategoryScale } from "chart.js";
import CountyChart from './CountyChart';
import CountLineChart from './CountyLineChart';
import PieChart from './PieChart';
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

function TransactionCharts({transactions}){
    const [chartData, setChartData] = useState({
    labels: transactions.map((transaction) => transaction.brand),
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Total Spend by Consumers',
          data: transactions.map((transaction) => transaction.raw_total_spend),
          // you can set indiviual colors for each bar
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderWidth: 1,
        }
    ]
})

    const [chartData2, setChartData2] = useState({
    labels: transactions.map((transaction) => transaction.brand),
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Number of Customers',
          data: transactions.map((transaction) => transaction.raw_num_customers),
          // you can set indiviual colors for each bar
          pointBackgroundColor:'rgba(191, 15, 15, 0.6)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          color: 'rgba(255, 255, 255, 0.6)',
          borderColor: 'rgba(255, 255, 255, 0.6)',
          borderWidth: 1,
        }
    ]
    })

    const [chartData3, setChartData3] = useState({
      labels: transactions.map((transaction) => transaction.brand), 
      datasets: [
        {
          label: "Number of Transactions",
          data: transactions.map((transaction) => transaction.raw_num_transactions),
          backgroundColor: ["#F4364C", "#B80F0A", "#FF6347", "#7E2811", "#800000", "#7E191B", "#FF0800", "#FF2800", "#420D09", "#8D021F", "#933A16", "#B80F0A", "#AA0000", "#AA0000", "#D2122E", "#BA0021", "#FF033E", "#A52A2A", "#DB0007", "#C60C30", "#660000", "#B31B1B", "#58111A", "#FF7F50", "#893F45", "#801818", "#FF004F", "#E25822", "#733635", "#9D2933", "#DA614E", "#E62020", "#CF1020", "#C8102E", "#DA291C", "#F2003C", "#FF6961", "#860111", "#65000B", "#BC3F4A", "#CD5700", "#722F37", "#7B1113", "#C80815", "#FD0E35", "#E60026", "#A81C07", "#BD3039", "#701C1C", "#F40009"],
          borderColor: "white",
          borderWidth: 2
        }
      ]
    }
    )

    const [chartData4, setChartData4] = useState({
      labels: transactions.map((transaction) => transaction.brand),
      // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
      datasets: [
          {
            label: 'Total Spend by Consumers',
            data: transactions.map((transaction) => transaction.Average_Spending_Per_Day),
            // you can set indiviual colors for each bar
            backgroundColor: 'rgba(191, 15, 15, 0.6)',
            borderWidth: 1,
          }
      ]
  })





    return(
      <div className="grid gap-10">
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up"> 
          <CountyChart chartData = {chartData} title = {"Total Spending By Consumers"} />
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6" data-aos="fade-right">
          <CountLineChart chartData={chartData2} title = {"Total Number of Customers"} />
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up"> 
          <PieChart chartData = {chartData3} title = {"Total Number of Transactions"} />
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6" data-aos="fade-right">
        <CountyChart chartData = {chartData4} title = {"Average Spending By Consumers Per Day"} />
        </div>
      </div>
      </div>
      </div>

    );
}

export default TransactionCharts;