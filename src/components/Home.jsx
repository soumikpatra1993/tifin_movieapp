import React from "react";
import MovieSearch from "./MovieSearch.jsx";
import TrendingPage  from "./TrendingPage.jsx";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <MovieSearch />
      <TrendingPage/>
      <Footer />
    </>
  );
};

export default Home;
