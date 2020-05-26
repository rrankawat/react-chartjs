import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import './App.css';

function App() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = () => {
    setChartData({
      labels: [
        'Boston',
        'Worcester',
        'Springfield',
        'Lowell',
        'Cambridge',
        'New Bedford',
      ],
      datasets: [
        {
          label: 'Population',
          data: [617594, 181045, 153060, 106519, 105162, 95072],
          backgroundColor: '#7e54bc',
        },
      ],
    });
  };

  return (
    <div className="App">
      <Chart chartData={chartData} />
    </div>
  );
}

export default App;
