import React from 'react';
import {useState, useEffect} from "react";
import { CategoryScale } from "chart.js";
import CountyChart from './CountyChart';
import CountLineChart from './CountyLineChart';
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

function SearchBar({tasks}) {

    const [query, setQuery] = useState("")

    function simplify(){

      const a = [];

      if (query === ''){
       return []
      }
      else{
        const things = tasks.filter(task => task.Area_name.toLowerCase().includes(query.toLowerCase())).sort()
      if(things.length > 10){
        return things.splice(1, 10);
      }
      else{
        return things;
      }
      }
      
      

    }

    const[chartTitle, setChartTitle] = useState("Example Chart for Nonexistent County")

    const[chartTitle2, setChartTitle2] = useState("Example Chart for Nonexistent County")


    function simplify2(){

      if (query === ''){
        setChartTitle("Example Employed Population Chart for Nonexistent County")
        return [200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000]
       }
       else{
         const things = tasks.filter(task => task.Area_name.toLowerCase().includes(query.toLowerCase())).sort()
         setChartTitle("Employed Population 2011-2020 of " + things[1].Area_name)
       if(things.length > 10){
         return things.splice(1, 10).map((task) => task.Employed);
       }
       else{
         return things.map((task) => task.Employed);
       }
       }
      
    }

    function simplify3(){

      if (query === ''){
        setChartTitle2("Example Unemployment Chart for Nonexistent County")
        return [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0]
       }
       else{
         const things = tasks.filter(task => task.Area_name.toLowerCase().includes(query.toLowerCase())).sort()
         setChartTitle2("Unemployment Rate 2011-2020 of " + things[1].Area_name)
       if(things.length > 10){
         return things.splice(1, 10).map((task) => task.Unemployment_Rate);
       }
       else{
         return things.map((task) => task.Unemployment_Rate);
       }
       }
      
    }


    


    const [chartData, setChartData] = useState({
      labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
      datasets: [
          {
            label: 'Employed Individuals',
            data: [200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000],
            // you can set indiviual colors for each bar
            backgroundColor: [
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.6)'
            ],
            borderWidth: 1,
          }
      ]
})

const [chartData2, setChartData2] = useState({
  labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
      {
        label: 'Unemployment Rate',
        data: [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0],
        // you can set indiviual colors for each bar
        pointBackgroundColor:'rgba(191, 15, 15, 0.6)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: 'rgba(255, 255, 255, 0.6)',
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 1,
      }
  ]
})





    return (
        <section className='grid gap-10'>
          <div className='mx-auto items-center'>
            <input type="text" maxLength="20" placeholder="Enter County Name" className = "searchbar"
            onChange={event => {setQuery(event.target.value);  setChartData(
              {
                labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
                datasets: [
                    {
                      label: 'Employed Individuals',
                      data: simplify2(),
                      // you can set indiviual colors for each bar
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      borderWidth: 1,
                    }
                ]
          }
          ); setChartData2({
            labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
            datasets: [
                {
                  label: 'Unemployment Rate',
                  data: simplify3(),
                  // you can set indiviual colors for each bar
                  pointBackgroundColor:'rgba(191, 15, 15, 0.6)',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  borderWidth: 1,
                }
            ]
          })}} ></input>
          </div>
            
      <div className = "grid gap-10">

      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up"> 
          <CountyChart chartData = {chartData} title = {chartTitle} />
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6" data-aos="fade-right">
          <CountLineChart chartData={chartData2} title = {chartTitle2} />
        </div>
      </div>
     


       </div>
        </section>
    
    
    
    )
}

export default SearchBar;




