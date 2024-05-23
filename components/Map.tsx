import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  center: [number, number];
  zoom: number;
  markers?: Array<[number, number]>;
}

const Map: React.FC<MapProps> = ({ center, zoom, markers = [] }) => {
  useEffect(() => {
    const map = L.map('map').setView(center, zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    markers.forEach(marker => {
      L.marker(marker).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [center, zoom, markers]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default Map;
