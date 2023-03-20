import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl ="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/OH-39-ohio-counties.json";


function TransactionMap({markers}){
  return (
    <ComposableMap 
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
        rotate: [83, -40, 0],
        scale: 5000
    }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map((transaction) => (
        <Marker key={transaction._id} coordinates={[transaction.longitude_coordinate, transaction.latitude_coordinate]}>
          <circle r={2} fill="#F00" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default TransactionMap;






