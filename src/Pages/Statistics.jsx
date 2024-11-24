import React from "react";

import Heading from "../Components/Heading";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Helmet } from "react-helmet";

const Statistics = () => {
  const productsData = useLoaderData();
  console.log(productsData);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadged Haven/Statistics</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Heading
        title={"Statistics"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Heading>
      <div className="flex justify-center">
        <BarChart width={800} height={500} data={productsData}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="title"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
