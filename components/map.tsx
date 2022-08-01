import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { searchDataType } from "../interfaces";
import "mapbox-gl/dist/mapbox-gl.css";

interface Props {
  searchData: searchDataType[];
}

const Map = ({ searchData }: Props) => {
  // calauted initial center point for map
  const corodinates = searchData.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const center = getCenter(corodinates);
  if (!center) {
    throw new Error("Cannot find Center");
  }

  const [viewState, setViewState] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  //Setting tooltip
  const [selectedLocation, setSelectedLocation] =
    useState<searchDataType | null>(null);

  const handleClick = (item: searchDataType) => {
    setSelectedLocation(item);
    console.log(item);
  };

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_URL}
      mapboxAccessToken={process.env.MAP_ACCESS_TOKEN}
      {...viewState}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchData.map((item) => (
        <div key={`marks_${item.long},${item.lat}`}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            onClick={() => handleClick(item)}
            aria-label="push-pin"
          >
            <p
              className=" rounded-full cursor-pointer font-semibold bg-white px-5 py-2 text-lg inline-block shadow-md 
            hover:scale-105 hover:shadow-lg transition transform duration-200 ease-out "
            >
              {`$ ${item.price.slice(1, -7)} CAD`}
            </p>
          </Marker>

          {/* Tootip for the marker popup */}
          {selectedLocation && selectedLocation.long === item.long ? (
            <Popup
              // onClose={() => setSelectedLocation(null)}
              // closeOnClick={true}
              latitude={item.lat}
              longitude={item.long}
            >
              {item.title}
            </Popup>
          ) : (
            ""
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
