import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function VibePieChart({ pieData, dominantVibe, COLORS, width = 200, height = 200 }) {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        outerRadius={width / 2.5}
        dataKey="value"
        stroke="none"
        label={false} // keep labels off inside pie
      >
        {pieData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[entry.name] || '#ccc'}
          />
        ))}
      </Pie>
      <Tooltip 
        formatter={(value, name) => [value, name]} 
        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.75)', borderRadius: 8, border: 'none' }} 
        itemStyle={{ color: '#fff' }}
        cursor={{ fill: 'rgba(0,0,0,0.1)' }}
      />
    </PieChart>
  );
}
