import { useContext } from "react";
import { Context } from "./TimelineProvider";

const TimeLine = () => {
  const { timeline } = useContext(Context);
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <div className="mx-30 mt-10">
        <div className="grid space-y-5">
          <span className="text-4xl font-bold">Timeline</span>
          <select className="select mb-20">
            <option className="text-gray-500 ">Filter Timeline</option>
            <option>Text</option>
            <option>Call</option>
            <option>Video</option>
          </select>
        </div>
        <div className="mb-16">
        {timeline.map((i) => (
          <ul className="shadow-sm px-6 rounded-md py-2 mb-5">
            <li className="flex justify-start items-center">
              <span className="flex text-3xl items-center">
                <h3>hjm,</h3>
                <span className="ml-4">
                
                  <h4 className="text-xl">
                    Meetup<span className="ml-2 text-sm">with {i.name}</span>
                  </h4>
                  <p className="text-sm text-gray-500">
                   {today}
                  </p>
                </span>
              </span>
            </li>
          </ul>
          
        ))}
        
        </div>
        
      </div>
    </div>
  );
};

export default TimeLine;
