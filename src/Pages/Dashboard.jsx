import React from "react";
import Heading from "../Components/Heading";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadged Haven/Dashbord</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Heading
        title={"Dashboard"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Heading>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
