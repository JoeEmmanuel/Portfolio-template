import React from "react";
import Swiperjs from "../components/swiper/Swiper";

const Project = () => {
  return (
    <section>
      <div className=" text-white text-center grid place-content-center">
      
        <div className="grid place-content-center">
          <Swiperjs />
        </div>

        <div className="">
        
          <button className="text-xs shadow-lg shadow-black p-2 mt-6 px-8 py-3 hover:shadow-slate-50 hover:shadow-md">
            VIEW PROJECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
