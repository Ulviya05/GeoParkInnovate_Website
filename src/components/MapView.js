import React, { useEffect, useRef } from "react";
import L from "leaflet";
import axios from "axios"; // To fetch API data
import proj4 from "proj4"; // To convert UTM to lat/lng
import "leaflet/dist/leaflet.css";

// Define the UTM zone for Azerbaijan (Zone 38N)
const UTM_ZONE_38N = "+proj=utm +zone=38 +datum=WGS84 +units=m +no_defs";

function MapView() {
  const mapRef = useRef(null);

  // Function to fetch the national parks data
  const fetchParkData = async (parkId) => {
    try {
      const response = await axios.get(
        `https://api.opendata.az/v2/az/json/map/geographic/nationalPark/${parkId}`
      );
      const { nationalPark } = response.data;

      // Log the full response to see the data
      console.log(`Data for park ${parkId}:`, nationalPark);

      // Extract border paths from the API data and convert them from UTM to lat/lng
      const borderCoordinates = nationalPark.borderPaths.map((coord) => {
        const [lng, lat] = proj4(UTM_ZONE_38N, "WGS84", [
          parseFloat(coord.x),
          parseFloat(coord.y),
        ]);
        return [lat, lng]; // Leaflet takes [lat, lng]
      });

      // Log the parsed border coordinates
      console.log(`Coordinates for park ${parkId}:`, borderCoordinates);

      // Return the parsed coordinates
      return borderCoordinates;
    } catch (error) {
      console.error(`Error fetching data for park ${parkId}:`, error);
      return [];
    }
  };

  useEffect(() => {
    if (mapRef.current) return;

    // Initialize the map centered on Azerbaijan
    const map = L.map("map").setView([40.1431, 47.5769], 6);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Function to fetch and draw all parks
    const fetchAndDrawParks = async () => {
      for (let parkId = 1; parkId <= 23; parkId++) {
        const coordinates = await fetchParkData(parkId);

        if (coordinates.length > 0) {
          // Log before drawing the polyline
          console.log(
            `Drawing polyline for park ${parkId} with coordinates:`,
            coordinates
          );

          // Draw the borders with a red polyline
          const polyline = L.polyline(coordinates, {
            color: "red",
            weight: 3,
          }).addTo(map);

          // Log after drawing to confirm
          console.log(`Polyline for park ${parkId} drawn successfully!`);
        } else {
          console.log(`No valid coordinates for park ${parkId}`);
        }
      }
    };

    // Fetch and draw the parks on the map
    fetchAndDrawParks();
  }, []);

  return (
    <div id="map" style={{ height: "630px", margin: "0px -8px -8px -8px" }} />
  );
}

export default MapView;
