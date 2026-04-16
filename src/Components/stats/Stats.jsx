import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Context } from "../timeline/TimelineProvider";

const Stats = () => {
  const { timeline } = useContext(Context);

  const colors = {
    Call: "#0088FE",
    Text: "#00C49F",
    Video: "#FFBB28",
  };

  const chartData = Object.values(
    timeline.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = {
          name: item.type,
          value: 0,
          fill: colors[item.type] || "#8884d8",
        };
      }

      acc[item.type].value += 1;

      return acc;
    }, {}),
  );

  return timeline.length === 0 ? (
    <div className="lg:mx-40 my-10">
    <div className="flex w-full h-80 justify-center mx-auto bg-gray-300 shadow-md items-center rounded-lg">
      <h1 className="text-4xl text-[#244d3f] text-center">No Cards Found</h1>
    </div>
    </div>
  ) : (
    <div className="border-4 border-gray-100 shadow-md mt-6  m-30">
      <div
        className="flex mx-auto justify-center"
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "40px auto",
          aspectRatio: "1 / 1",
        }}
      >
        <ResponsiveContainer width="70%" height="70%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              paddingAngle={5}
              dataKey="value"
              // The individual 'fill' from the data array will override this
              fill="#8884d8"
            />

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
