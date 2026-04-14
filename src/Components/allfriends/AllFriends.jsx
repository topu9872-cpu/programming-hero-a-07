import React from "react";
import { Link } from "react-router";

const AllFriends = ({ data }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold ml-26 mt-20">Your Friends</h2>

      <div className=" justify-center mt-4 grid grid-cols-4 gap-4 space-y-2 mx-auto items-center w-10/12">
        {data.map((card) => (
          <ul key={card.id}>
            <Link to={`/modal/${card.id}`}>
              <li className="text-center bg-[#f8fafc] py-10 rounded-xl shadow-md">
                <div className="">
                  <img
                    src={card.picture}
                    alt={card.name}
                    className="w-10 h-10 flex justify-center mx-auto rounded-full"
                  />
                </div>
                <h3 className="font-semibold text-xl">{card.name}</h3>
                <p className="text-gray-600">{card.days_since_contact}</p>
                <div className="flex justify-center  gap-2">
                  <p className="bg-[#cbfadb] px-3 font-semibold  py-1 rounded-full">
                    {card.tags[0]}
                  </p>
                  <p className="bg-[#cbfadb] px-3 font-semibold py-1 rounded-full">
                    {card.tags[1]}
                  </p>
                </div>
                <h2
                  className=" text-white rounded-full mt-2 mx-18"
                  style={{
                    backgroundColor:
                      card.status == "overdue"
                        ? "#ef4444"
                        : card.status == "On-Track"
                          ? "#244d3f"
                          : "#efad44",
                  }}
                >
                  {card.status}
                </h2>
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
