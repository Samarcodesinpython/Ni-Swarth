// src/Map.jsx
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);
  const [ngoMarkers, setNgoMarkers] = useState([]);

  useEffect(() => {
    const initMap = L.map('map').setView([30.3165, 78.0322], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(initMap);
    setMap(initMap);

    // Fetch and display all NGOs on map load
    fetch('http://localhost:5000/api/all-ngos')
      .then((res) => res.json())
      .then((all) => {
        const markers = all.map((ngo) => {
          const marker = L.marker([ngo.latitude, ngo.longitude])
            .addTo(initMap)
            .bindPopup(`<b>${ngo.name}</b><br>${ngo.services}`);
          return marker;
        });
        setNgoMarkers(markers);
      });

    return () => {
      initMap.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    const onMapClick = (e) => {
      if (userMarker) {
        map.removeLayer(userMarker);
      }
      ngoMarkers.forEach((marker) => map.removeLayer(marker));
      setNgoMarkers([]);

      const { lat, lng } = e.latlng;
      const newUserMarker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup('📍 You are here')
        .openPopup();
      setUserMarker(newUserMarker);

      fetch('http://localhost:5000/api/match-ngos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lat,
          lng,
          interests: [], // Adjust as needed
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const orangeIcon = new L.Icon({
            iconUrl:
              'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
            shadowUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          });

          const newNgoMarkers = data.map((ngo) => {
            const icon = ngo.is_top5 ? orangeIcon : new L.Icon.Default();
            const marker = L.marker([ngo.latitude, ngo.longitude], { icon })
              .addTo(map)
              .bindPopup(
                `<b>${ngo.name}</b><br>${ngo.services}<br><i>${ngo['Distance (km)'].toFixed(
                  2
                )} km away</i>`
              );
            return marker;
          });
          setNgoMarkers(newNgoMarkers);
        });
    };

    map.on('click', onMapClick);
    return () => {
      map.off('click', onMapClick);
    };
  }, [map, userMarker, ngoMarkers]);

  return (
    <div>
      <p>📍 Click on the map to mark your location and get top 5 nearest matches</p>
      <div id="map" style={{ height: '85vh', width: '100%', marginTop: '10px' }}></div>
    </div>
  );
};

export default MapComponent;
