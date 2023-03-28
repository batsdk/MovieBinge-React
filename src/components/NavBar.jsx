import React from "react";

const NavBar = () => {
  return (
    <>
      <section className="px-4 bg-[#063b74]">
        <div className="flex justify-between items-center h-[70px] max-w-7xl mx-auto">
          <div className="inline-flex">
            <p className="text-[#ffff] mx-[10px] ">Movies</p>
            <p className="text-[#fff] mx-[10px] ">TV Shows</p>
            <p className="text-[#fff] mx-[10px] ">People</p>
          </div>
          <div className="inline-flex">
            <p className="text-[#fff] mx-[10px]     ">Login</p>
            <p className="text-[#fff] mx-[10px] ">Create Account</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
