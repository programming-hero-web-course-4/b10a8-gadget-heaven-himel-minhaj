import React from "react";

import Banner from "../Components/Banner";
import Header from "../Components/Header";

import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";

import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadged Haven/Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Heading
        title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Heading>
      <Banner></Banner>
      <Header></Header>
      <div className="md:flex  justify-center gap-5 my-5">
        <div>
          <Categories categories={categories}></Categories>
        </div>
        <div className="w-10/12 mx-auto ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
