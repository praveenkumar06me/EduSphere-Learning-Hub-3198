import React from 'react';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const Dashboard = () => {
  const progressOptions = {
    title: {
      text: 'Course Progress',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: Array.from({length: 7}, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return format(date, 'MMM dd');
      })
    },
    yAxis: {
      type: 'value',
      max: 100
    },
    series: [{
      data: [30, 40, 45, 50, 60, 70, 75],
      type: 'line',
      smooth: true,
      areaStyle: {
        opacity: 0.3
      },
      itemStyle: {
        color: '#0ea5e9'
      }
    }]
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Active Courses</h3>
          <p className="text-3xl font-bold text-primary-600">4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Assignments Due</h3>
          <p className="text-3xl font-bold text-orange-500">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
          <p className="text-3xl font-bold text-green-500">75%</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <ReactECharts option={progressOptions} style={{ height: '400px' }} />
      </div>
    </div>
  );
};

export default Dashboard;