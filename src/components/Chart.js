import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = ({ chartData, displayTitle, displayLegend, legendPosition }) => {
  const options = {
    maintainAspectRatio: false,
    title: {
      display: displayTitle,
      text: 'Largest Cities In Massachusetts',
      fontSize: 25,
    },
    legend: {
      display: displayLegend,
      position: legendPosition,
    },
  };

  return (
    <div className="chart">
      <Bar data={chartData} width={100} height={500} options={options} />
    </div>
  );
};

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: 'right',
};

export default Chart;
