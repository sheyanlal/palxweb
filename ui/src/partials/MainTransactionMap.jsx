import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import CountyChart from "./CountyChart";
import CountyLineChart from "./CountyLineChart";

const AnyReactComponent = ({ text }) => <div className="pin">
<Icon icon={locationIcon} className="pin-icon" width={30} height={30} color="red"/>
<p className="pin-text" style={{ color: 'black' }} >{text}</p>
</div>;

const AnyReactComponent2 = ({ text }) => <div className="pin">
<Icon icon={locationIcon} className="pin-icon" width={40} height={40} color="black"/>
<p className="pin-text" style={{ color: 'black',  fontSize: 15}} >{text}</p>
</div>;


function MainTransactionMap({transactions, latitude, longitude}){
  return (
    // Important! Always set the container height explicitly
    <div className="grid gap-10">
    
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCNeG6lRpvF-yDmlr6IuUlfpwoQ_T-vz5s" }}
        center= {{
          lat:latitude,
          lng: longitude
        }}
        defaultZoom={14}
      >
        <AnyReactComponent2 lat = {latitude} lng = {longitude} text = {"YOUR BUSINESS"} />
        {transactions.map((transaction) => {return(<AnyReactComponent
          lat={transaction.latitude_coordinate}
          lng={transaction.longitude_coordinate}
          text={transaction.brand}
        />)})
        }
      </GoogleMapReact>
    </div>

    </div>
  );
}

export default MainTransactionMap;