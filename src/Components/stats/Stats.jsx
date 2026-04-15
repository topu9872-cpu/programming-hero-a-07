import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
// Only keep this if you have the package installed and actually need the devtools
// import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
];

const Stats = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "40px auto",
        aspectRatio: "1 / 1",
      }}
    >
      <ResponsiveContainer width="80%" height="80%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            paddingAngle={5}
            dataKey="value"
            // The individual 'fill' from the data array will override this
            fill="#8884d8"
          />
          {/* <RechartsDevtools /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
