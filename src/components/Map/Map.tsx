import React from "react";
import { Suburb } from "./Suburb";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import L, { PathOptions } from "leaflet";

type MapProps = {
  selectedSuburb: Suburb;
  onSuburbChange: () => any;
};
const geoJson = window.location.origin + "/qldGeoJson.json";

const markerIcon = L.icon({
  iconUrl: window.location.origin + "/img/marker.png",
  iconRetinaUrl: window.location.origin + "/img/marker.png",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
});

export const Map: React.FC<MapProps> = ({ selectedSuburb, onSuburbChange }) => {
  const [geoJsonData, setGeoJsonData] = React.useState<
    GeoJSON.GeoJsonObject | undefined
  >();

  const getColor = (d: number) => {
    return d > 1000
      ? "#800026"
      : d > 500
      ? "#BD0026"
      : d > 200
      ? "#E31A1C"
      : d > 100
      ? "#FC4E2A"
      : d > 50
      ? "#FD8D3C"
      : d > 20
      ? "#FEB24C"
      : d > 10
      ? "#FED976"
      : "#FFEDA0";
  };

  //style
  const style = (
    feature: GeoJSON.Feature<GeoJSON.GeometryObject> | undefined
  ) => {
    if (!feature?.properties) return {} as PathOptions;
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  React.useEffect(() => {
    const fetchGeoData = async () => {
      const data = await fetch(geoJson).then((res) => res.json());

      setGeoJsonData(data);
    };

    fetchGeoData();
  }, []);

  if (!geoJsonData) {
    return <div></div>;
  }

  return (
    <div>
      <MapContainer
        center={[-27.4705, 153.026]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100wh" }}
      >
        <GeoJSON data={geoJsonData} style={style} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={markerIcon} position={[-27.4705, 153.026]}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
