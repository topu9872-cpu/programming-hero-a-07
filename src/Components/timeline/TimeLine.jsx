import { useContext, useState, useMemo } from "react";
import { Context } from "./TimelineProvider";

const TimeLine = () => {
  const { timeline } = useContext(Context);
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="mx-30 mt-10">
      <div className="grid space-y-5">
        <span className="text-4xl font-bold">Timeline</span>

        {/* Use onChange on the select itself */}
        <select
          className="select mb-20 border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Activities</option>
          <option value="Text">Text</option>
          <option value="Call">Call</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="mb-16">
        {filteredTimeline.length === 0 ? (
          <div className="flex w-full h-80 justify-center mx-auto bg-gray-300 items-center rounded-lg">
            <h1 className="text-4xl text-[#244d3f] text-center">
              No Cards Found
            </h1>
          </div>
        ) : (
          filteredTimeline.map((i, index) => (
            <ul
              key={index}
              className="shadow-sm px-6 border border-gray-100 rounded-md py-4 mb-5 list-none"
            >
              <li className="flex justify-start items-center">
                <span className="text-3xl">
                  {i.type === "Call" ? "📞" : i.type === "Text" ? "💬" : "📹"}
                </span>
                <span className="ml-4">
                  <h4 className="text-xl font-semibold">
                    {i.type}
                    <span className="ml-2 text-sm font-normal text-gray-600">
                      with {i.name}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-500">{today}</p>
                </span>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLine;
