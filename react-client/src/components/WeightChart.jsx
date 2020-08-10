import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";

const WeightChart = (props) => {


  return (
      <div>
        <LineChart
          width={730}
          height={250}
          data={props.data}
          margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#046773" strokeWidth='2' />
        </LineChart>
      </div>
  )
}

export default WeightChart;

