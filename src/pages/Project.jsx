import React from "react";

const Project = () => {
  return (
    <section>
      <div className=" text-white text-center">
        {/* project images section */}
        <div className="flex gap-1 items-center justify-center">
          <div className="w-44 h-52 bg-black"></div>
          <div className="w-44 h-60 bg-black"></div>
          <div className="w-44 h-52 bg-black"></div>
        </div>

        <div className="">
          <h1 className="text-5xl font-extrabold ">KEET CAFE</h1>
          <p className="text-xs pt-6 text-gray-400 px-8 lg:w-[45%] lg:mx-auto">
            Duis aute irure dololr in reprehendrit in volupate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaevat non
            proident , sunt in culpa qui ifficia deserunt mollit.
          </p>
          <button className="text-xs shadow-lg shadow-black p-2 mt-6 px-8 py-3 hover:shadow-slate-50 hover:shadow-md">
            VIEW PROJECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
