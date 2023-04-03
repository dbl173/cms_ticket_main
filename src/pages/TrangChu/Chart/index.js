import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  } from 'recharts';

const data = [
  { day: 'Thứ 2', sales: 140,  leftColumn: 140 },
  { day: 'Thứ 3', sales: 180,  leftColumn: 180 },
  { day: 'Thứ 4', sales: 190, leftColumn: 220 },
  { day: 'Thứ 5', sales: 220,  leftColumn: 260 },
  { day: 'Thứ 6', sales: 240,  leftColumn: 260 },
  { day: 'Thứ 7', sales: 200,  leftColumn: 260 },
  { day: 'Chủ nhật', sales: 220,  leftColumn: 260 },
];

const Chart = () => (
  <LineChart width={1000} height={200} data={data}>
    <XAxis dataKey="day" />
    <YAxis yAxisId="left" domain={[140, 260]} />
    <CartesianGrid strokeDasharray="0 3" />
    <Tooltip />
    <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" />
    
  </LineChart>
);

export default Chart;