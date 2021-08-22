import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Popup, TileLayer, GeoJSON } from "react-leaflet";
import Marker from './Marker';
import L, { PathOptions } from "leaflet";
import { e4, getColor } from "./utils";

type MapProps = {
  selectedSuburb: string;
};
const geoJson = window.location.origin + "/output.json";

export const Map: React.FC<MapProps> = ({ selectedSuburb }) => {
  const [map, setMap] = React.useState<any>();
  const [geoJsonData, setGeoJsonData] = React.useState<
    GeoJSON.GeoJsonObject | undefined
  >();

  //style
  const style = (
    feature: GeoJSON.Feature<GeoJSON.GeometryObject> | undefined
  ) => {
    if (!feature?.properties?.se4) return {} as PathOptions;
    return {
      fillColor: getColor(feature.properties.se4),
      fillOpacity: 0.7,
      stroke: false,
    };
  };

  React.useEffect(() => {
    const fetchGeoData = async () => {
      const data = await fetch(geoJson).then((res) => res.json());

      setGeoJsonData(data);
    };

    fetchGeoData();
  }, []);

  React.useEffect(() => {
    if (map && e4[selectedSuburb] && e4[selectedSuburb].markerPosition) {
      map.flyTo([e4[selectedSuburb].markerPosition?.lat, e4[selectedSuburb].markerPosition?.long], 13)
    }
  }, [selectedSuburb])

  if (!geoJsonData) {
    return <div>Loading map...</div>;
  }

  return (
    <div style={{ width: '100%', height: '100%', zIndex: 1 }}>
      <MapContainer
        center={[-27.4705, 153.026]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
        whenCreated={map => setMap(map)}
      >
        <GeoJSON data={geoJsonData} style={style} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          Object.entries(e4).filter(e => e[1].markerPosition).map((se4Location) => (
            <Marker se4Location={se4Location} selectedSuburb={selectedSuburb} />
          ))
        }
      </MapContainer>
    </div>
  );
};
