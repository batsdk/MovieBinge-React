import { useEffect, useState } from "react";
import { getTrendingToday } from "../services/TrendingRepository";

import { NavBar } from "../components";

const HomePage = () => {

  const [trendingToday, setTrendingToday] = useState([])

  const getData = async () => {
    const { data : {results}} = await getTrendingToday();
    setTrendingToday(results);
    console.log(trendingToday);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="max-w-[1300px] min-h-[300px] bg-slate-700 mx-auto flex flex-col justify-center p-[30px]">
        <h1 className="text-[#fff] text-[50px] font-bold ">Welcome .</h1>
        <h3 className="text-[#fff] text-[25px] font-semibold ">
          Millions of Movies, TV Shows and More to Explore..
        </h3>
      </section>
    </>
  );
};

export default HomePage;
