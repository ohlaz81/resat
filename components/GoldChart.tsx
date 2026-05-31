"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const data = [
  { value: 40 },
  { value: 55 },
  { value: 48 },
  { value: 70 },
  { value: 62 },
  { value: 85 },
  { value: 78 },
  { value: 105 },
  { value: 95 },
  { value: 120 },
];

export default function GoldChart() {
  return (
    <div className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#d4a017"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}