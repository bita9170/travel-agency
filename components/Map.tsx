import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Button } from "./ui/button";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  center: [number, number];
  zoom: number;
  markers: [number, number][];
}

const Map: React.FC<MapProps> = ({ center, zoom, markers }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMapClick = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
    }
  };

  return (
    <div
      className={`relative ${
        isFullscreen ? "map-container" : "w-full h-[300px]"
      }`}
      onClick={handleMapClick}
    >
      <MapContainer center={center} zoom={zoom} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker}>
            <Popup>
              Marker at {marker[0]}, {marker[1]}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {isFullscreen && (
        <Button
          className="absolute top-4 right-6 bg-white p-2 rounded shadow"
          onClick={(e) => {
            e.stopPropagation();
            setIsFullscreen(false);
          }}
        >
          <span className="text-gray-600">&times;</span>
        </Button>
      )}
    </div>
  );
};

export default Map;
