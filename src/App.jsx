import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3 xl:gap-4 my-10">
      <h2 className="text-xl font-semibold text-slate-600 md:col-start-4 md:row-start-2 md:flex">
        <span className="self-center md:ml-3 xl:ml-14 "> Welcome Den </span>
      </h2>
      <h2 className="text-lg font-semibold text-slate-600 md:col-start-2  mb-5 md:row-start-2 md:flex">
        <span className="self-end xl:mb-1 xl:ml-3">@Denxdwp_</span>
      </h2>

      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/1.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/2.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/3.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/4.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/5.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-2 overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/6.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4 overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/7.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/8.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/9.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-30 md:h-50 xl:h-45 bg-lime-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./img/10.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export default App;
