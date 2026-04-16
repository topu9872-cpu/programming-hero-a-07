
import React, { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../../Components/timeline/TimelineProvider";
const AllFriends = ({ data }) => {
  const { search, setSearch } = useContext(Context);
  return (
    <div className="mt-6 ">
      <div className="flex justify-between mx-12 md:mx:16 lg:mx-26 mt-20">
        <h2 className="text-xl font-bold ">Your Friends</h2>
        <div className="join">
          <div>
            <label className=" join-item">
              <input
                className=" py-2 pl-2"
                type="text"
                placeholder="Search"
                 value={search}
            onChange={(e) => setSearch(e.target.value)}
                required
                
              />
            </label>
          </div>
          <button
            onChange={() => setSearch(e.target.value)}
            value={search}
            className=" btn bg-[#244d3f]  text-white font-semibold join-item"
          >
            Search
          </button>
        </div>
      </div>

      <div className=" justify-center mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 space-y-2 mx-auto items-center w-10/12">
        {data.length === 0 ? (
          <div className="mx-auto flex justify-center items-center">
            <span className="loading loading-spinner text-success"></span>
          </div>
        ) : (
          data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          ).map((card) => (
            <ul key={card.id}>
              <Link to={`/modal/${card.id}`}>
                <li className="text-center bg-[#f8fafc] py-10 rounded-xl shadow-md">
                  <div>
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
          ))
        )}
      </div>
    </div>
  );
};

export default AllFriends;
