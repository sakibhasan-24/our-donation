import React from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { getValue } from "../Db/localstorage";

export default function Statistics() {
  const dataDonate = useLoaderData();

  const getValueFromLocal = Number(getValue("price"));
  console.log("stat", getValueFromLocal);
  let totalDonation = 0;
  for (const i of dataDonate) {
    totalDonation += Number(i.price);
  }
  console.log(totalDonation);
  const data = [
    { name: "total DOnation", value: totalDonation },
    { name: "your Donation", value: getValueFromLocal },
  ];

  const COLORS = ["#FF0000", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="flex flex-col justify-center items-center w-2/3 mx-auto md:max-w-4xl">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col md:flex-row lg:flex-row  items-center justify-center md:gap-4 ">
        <h1 className="text-2xl text-[#FF0000]">total donation </h1>
        <h1 className="text-2xl text-[#00C49F]">Your donation </h1>
      </div>
    </div>
  );
}
