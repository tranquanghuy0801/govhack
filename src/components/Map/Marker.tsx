import L from "leaflet";
import React from "react";
import { MapContainer, Marker as LeafletMarker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import MarkerPopup from './MarkerPopup';

const markerIcon = L.icon({
  iconUrl: window.location.origin + "/img/marker.png",
  iconRetinaUrl: window.location.origin + "/img/marker.png",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 40]
});


const Marker = ({ se4Location, selectedSuburb }: any) => {
  const [leaf, setLeaf] = React.useState<any>();

  React.useEffect(() => {
    if (leaf !== undefined) {
      if (se4Location[0] === selectedSuburb) {
        leaf.openPopup();
      } else {
        leaf.closePopup();  
      }
    }
  }, [selectedSuburb])

  return (
    <LeafletMarker
      icon={markerIcon}
      position={[se4Location[1].markerPosition!.lat, se4Location[1].markerPosition!.long]}
      key={`${se4Location[1].markerPosition!.lat}-${se4Location[1].markerPosition!.long}`}
      ref={r => setLeaf(r)}
    >
      <Popup>
        <MarkerPopup location={se4Location[0]}/>
      </Popup>
    </LeafletMarker>
  )
}

export default Marker