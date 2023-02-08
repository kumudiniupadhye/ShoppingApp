import React from "react";
import { data } from "../Data";


function Home() {
  return (
    <div className="flex justify-content-between m-6">
      {data.map((item, index) => (
        <div key={index} className=" flex">
          <div className=" w-52 bg-slate-300 rounded shadow-xl m-4 break:words text-md p-2">
            <img src={item.filename} className=" h-32 w-32 m-auto "></img>
            <p className="text-lg font-medium capitalize mt-2">{item.title}</p>
            <p className="mt-2 p-2">{item.description}</p>
            <p className="mt-2"> Rs. {item.price}</p>
            <p className="flex flex-col p-2 justify-end content-end ">
              {item.rating}❤
            </p>
          </div>
        </div>
      ))}
     
    </div>
    
  );
}

export default Home;
