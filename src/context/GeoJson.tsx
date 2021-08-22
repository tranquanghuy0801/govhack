import React, { useContext } from 'react';

const GeoJsonContext = React.createContext<any>(null);

export const GeoJsonProvider = (
  {
    geoJson,
    children,
  }:
  {
    geoJson: Record<string, any>,
    children: React.ReactNode,
  }
) => {
  const [currentGeoJson, setCurrentGeoJson] = React.useState(geoJson);

  return (
    <GeoJsonContext.Provider value={{ currentGeoJson, setCurrentGeoJson }}>
      {children}
    </GeoJsonContext.Provider>
  )
};

export const useGeoJson = () => useContext(GeoJsonContext);