import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import LeftSidePage from "./LeftSidePage";



const Courses = () => {
    const courses = useLoaderData();
   




  return <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
       <div className="col-span-2">
        <LeftSidePage courses={courses}></LeftSidePage>
       </div>
       <div className="col-span-3">
       <Outlet ></Outlet>
       </div>
      
  </div>;
};

export default Courses;
