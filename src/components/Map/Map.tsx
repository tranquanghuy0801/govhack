import React from "react";
import { Suburb } from "./Suburb";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import L, { PathOptions } from "leaflet";
import { e4, getColor } from "./utils";

type MapProps = {
  selectedSuburb: Suburb;
  onSuburbChange: () => any;
};
const geoJson = window.location.origin + "/output.json";

const markerIcon = L.icon({
  iconUrl: window.location.origin + "/img/marker.png",
  iconRetinaUrl: window.location.origin + "/img/marker.png",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 40]
});

export const Map: React.FC<MapProps> = ({ selectedSuburb, onSuburbChange }) => {
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
      >
        <GeoJSON data={geoJsonData} style={style} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          Object.entries(e4).filter(e => e[1].markerPosition).map((se4Location) => (
            <Marker
              icon={markerIcon}
              position={[se4Location[1].markerPosition!.lat, se4Location[1].markerPosition!.long]}
            >
              <Popup>
                Something nice about {se4Location[0]}
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </div>
  );
};
