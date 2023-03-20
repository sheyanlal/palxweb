import React from "react";
import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import Geocode from "react-geocode";
import MainTransactionMap from "./MainTransactionMap";
import TransactionCharts from "./TransactionCharts";


Geocode.setApiKey("AIzaSyCNeG6lRpvF-yDmlr6IuUlfpwoQ_T-vz5s");

function TransactionForm({transactions}) {
  const [showResults, setshowResults] = useState(false)
  const [times, setTimes] = useState(0)
  const [latitude, setLatitude] = useState(0.0)
  const [longitude, setlongitude] = useState(0.0)
  

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
  
    return Math.sqrt(x * x + y * y);
  }

  function fiterTransactions(){

    const things = transactions.sort(
      function compareFn(a, b) {
        const astuff = getDistance(latitude, longitude, a.latitude_coordinate, a.longitude_coordinate);
        const bstuff = getDistance(latitude, longitude, b.latitude_coordinate, b.longitude_coordinate);
        if (astuff < bstuff) {
          return -1;
        }
        if (astuff > bstuff) {
          return 1;
        }
        else{
          return 0;
        }
      }
      ).splice(1,50);

      return things;

  }

  const onSubmit = (data) => {
    const address = data.street + ", "  + data.city + ", " + data.state + " " + data.zipcode
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setlongitude(lng)
        setLatitude(lat)
        console.log(latitude)
        console.log(longitude)
      },
      (error) => {
        console.error(error);
      }
    );
    if (times < 1){
      setshowResults(!showResults);
      setTimes(times + 1);
    }
  };


  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-10">


        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 items-center">
          <input className="searchbar2" type="text" name="city" placeholder="Enter City" {...register("city")} />
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 items-center">
          <input className="searchbar2" type="text" name="street" placeholder="Enter Street Address" {...register("street")} />
        </div>
        </div>


        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1">
          <input className="searchbar2" type="text" name="zipcode" placeholder="Enter Zip Code" {...register("zipcode")} />
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6">
          <input className="searchbar2" type="text" name="state" placeholder="Enter State" {...register("state")} />
        </div>
        </div>

        <div className="mx-auto items-center">
          <button className = "submitbutton" type="submit">Submit</button>
        </div>
        </div>
      </form>
      
      <div>
        {showResults && 
        <div className="grid gap-10">
          <div className="pt-10">
          <MainTransactionMap transactions = {fiterTransactions()} latitude = {latitude} longitude={longitude}/>
          </div>
          <TransactionCharts transactions={fiterTransactions()}/>
        </div>}
      </div>
      
    </section>
  );
}

export default TransactionForm;