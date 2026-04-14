import React from "react";

const NonDynamicCards = () => {
  return (
    <div className=" flex justify-center mt-10 ">
      <ul className="grid  grid-cols-2 lg:grid-cols-4 gap-4 w-10/12">
        <li className="text-center bg-[#f8fafc] py-10 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">10</h3>
          <p className="text-gray-600">Total Friends</p>
        </li>
        <li className="text-center bg-[#f8fafc] py-10 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">3</h3>
          <p className="text-gray-600">On Track</p>
        </li>
        <li className="text-center bg-[#f8fafc] py-10 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">6</h3>
          <p className="text-gray-600">Need Attention</p>
        </li>
        <li className="text-center bg-[#f8fafc] py-10 rounded-xl shadow-md">
          <h3 className="font-semibold text-xl">12</h3>
          <p className="text-gray-600">Interractions This Month</p>
        </li>
      </ul>
    </div>
  );
};

export default NonDynamicCards;
