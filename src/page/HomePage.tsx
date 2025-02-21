import React from "react";
import ImageBox from "../component/ImageBox";
import Detail from "../component/Detail";
import Banner from "../component/Banner";
import Claim from "../component/Claim";
import Question from "../component/Question";
import Bussiness from "../component/Bussiness";
import Content from "../component/Content";
import AppDetail from "../component/AppDetail";
import LatestListing from "../component/LatestListing";
import Article from "../component/Article";

const HomePage = () => {
  return (
    <>
      <ImageBox />
      <Banner />
      <Content />
      <LatestListing />
      <Claim />
      <Question />
      <Bussiness />
      <Detail />
      <Article />
      <AppDetail />
    </>
  );
};

export default HomePage;
