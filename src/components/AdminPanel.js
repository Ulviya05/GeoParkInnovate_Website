import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Simulated data for park visits
const parkVisitData = [
  { park: "Park A", visits: [50, 60, 80, 90, 120] },
  { park: "Park B", visits: [30, 40, 50, 70, 90] },
  { park: "Park C", visits: [20, 25, 30, 35, 40] },
];

// Simulated data for pathway visits within a park
const pathwayVisitData = [
  { pathway: "Pathway 1", visits: [10, 15, 20, 30, 25] },
  { pathway: "Pathway 2", visits: [5, 10, 15, 20, 18] },
  { pathway: "Pathway 3", visits: [8, 12, 14, 16, 20] },
];

const AdminPanel = () => {
  const [parkData, setParkData] = useState(parkVisitData);
  const [pathwayData, setPathwayData] = useState(pathwayVisitData);

  // Prepare chart data for park visits
  const prepareParkChartData = () => {
    const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    const datasets = parkData.map((data, index) => ({
      label: data.park,
      data: data.visits,
      backgroundColor: `rgba(${75 + index * 30}, 192, 192, 0.6)`,
      borderColor: `rgba(${75 + index * 30}, 192, 192, 1)`,
      borderWidth: 1,
    }));

    return {
      labels,
      datasets,
    };
  };

  // Prepare chart data for pathway visits
  const preparePathwayChartData = () => {
    const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    const datasets = pathwayData.map((data, index) => ({
      label: data.pathway,
      data: data.visits,
      fill: false,
      borderColor: `rgba(${50 + index * 40}, 150, 255, 1)`,
      tension: 0.1,
    }));

    return {
      labels,
      datasets,
    };
  };

  const parkChartData = prepareParkChartData();
  const pathwayChartData = preparePathwayChartData();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the Admin Panel</h1>

      <h2>Park Visits Over Time:</h2>
      <Bar
        data={parkChartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "Number of Visits to Parks Over 5 Weeks",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Visits",
              },
            },
          },
        }}
      />

      <h2>Pathway Visits Over Time:</h2>
      <Line
        data={pathwayChartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "Number of Visits to Pathways Over 5 Weeks",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Visits",
              },
            },
          },
        }}
      />

      {/* Identifying the most visited area in the park */}
      <h2>Most Visited Areas in the Park:</h2>
      <ul>
        {pathwayData.map((pathway, index) => (
          <li key={index}>
            {pathway.pathway}: {pathway.visits.reduce((a, b) => a + b, 0)} total
            visits
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
