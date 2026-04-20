import { useContext } from "react";
import { BiMessageDots } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { LuTimerReset, LuVideo } from "react-icons/lu";
import { useLoaderData } from "react-router";
import { Context } from "../timeline/TimelineProvider";
import { toast } from "react-toastify";

const Modal = () => {
  const { timeline, setTimeline } = useContext(Context);
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const handleClick = (friend, Interacrionstype) => {
    const data = {
      name: friend.name,
      type: Interacrionstype,
      date: friend.next_due_date,
    };
    setTimeline([...timeline, data]);
    if (card) {
      toast.success(`${data.type} with ${data.name}`, {
        position: "top-center",
      });
    }
  };

  const card = useLoaderData();

  if (!card) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-16 p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 space-y-4">
          <div className="bg-[#f8fafc] p-8 rounded-2xl shadow-md text-center border-gray-100 h-98">
            <img
              src={card.picture}
              alt={card.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
            />

            <div
              className="inline-block text-white text-sm px-4 py-1 rounded-full mb-2 uppercase font-bold"
              style={{
                backgroundColor:
                  card.status === "overdue"
                    ? "#ef4444"
                    : card.status === "On-Track"
                      ? "#244d3f"
                      : "#efad44",
              }}
            >
              {card.status}
            </div>

            <h3 className="font-bold text-2xl text-gray-800">{card.name}</h3>

            <div className="flex justify-center gap-2 my-3">
              {card.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#cbfadb] px-3 py-1 text-xs font-bold rounded-full text-green-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 italic mt-4">"{card.bio}"</p>
            <p className="text-gray-400 text-sm mt-1">{card.email}</p>
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full btn bg-white py-3 rounded-xl shadow-md font-semibold hover:bg-gray-50 transition">
              Snooze 2 Weeks
            </button>
            <button className="w-full btn bg-white py-3 rounded-xl shadow-md font-semibold hover:bg-gray-50 transition">
              Archive
            </button>
            <button className="w-full btn bg-white py-3 rounded-xl shadow-md font-semibold text-red-600 hover:bg-red-50 transition">
              Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {card.days_since_contact}
              </h2>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h2 className="text-3xl font-bold text-gray-800">{card.goal}</h2>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h2 className="text-lg font-bold text-gray-800 mt-2">
                {card.next_due_date}
              </h2>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-700">Relationship Goal</h4>
              <p className="text-gray-500">
                Connect every
                <span className="text-black font-bold">{card.goal} days</span>
              </p>
            </div>
            <button className="btn hover:bg-gray-50">Edit</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="font-bold text-gray-700 mb-4">Quick Check-In</h4>
            {/* i can`t set the icons if i am doing that icons set wite text */}
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleClick(card, "Call")}
                className="items-center shadow-sm px-10 py-4 gap-1 w-50 grid grid-rows-1  justify-center text-2xl  mx-auto p-4 bg-gray-100 rounded-xl text-center cursor-pointer hover:border-green-500"
              >
                <FiPhoneCall />
                Call
              </button>
              <button
                onClick={() => handleClick(card, "Text")}
                className="items-center shadow-sm px-10 py-4 gap-1 w-50 grid grid-rows-1  justify-center text-2xl mx-auto p-4 bg-gray-100 rounded-xl text-center cursor-pointer hover:border-green-500"
              >
                <BiMessageDots />
                Text
              </button>
              <button
                onClick={() => handleClick(card, "Video")}
                className="items-center shadow-sm px-10 py-4 gap-1 w-50 grid grid-rows-1  justify-center text-2xl mx-auto p-4 bg-gray-100 rounded-xl text-center cursor-pointer hover:border-green-500"
              >
                <LuVideo />
                Video
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
            <div className="flex justify-between">
              <span className="text-2xl">Recent Interacrions</span>
              <span className="btn">
                <LuTimerReset /> full History
              </span>
            </div>
            <ul className="mt-4 shadow-sm px-6 rounded-md py-2">
              <li className="flex justify-between items-center">
                <span className="flex text-3xl items-center">
                  <BiMessageDots />
                  <span className="ml-4">
                    <h4 className="text-2xl">Text</h4>
                    <p className="text-sm text-gray-500">
                      Asked for career advice
                    </p>
                  </span>
                </span>
                <span>{today}</span>
              </li>
            </ul>
            <ul className="shadow-sm px-6 rounded-md py-2">
              <li className="flex justify-between items-center">
                <span className="flex text-3xl items-center">
                  <FiPhoneCall />
                  <span className="ml-4">
                    <h4 className="text-2xl">Meetup</h4>
                    <p className="text-sm text-gray-500">
                      Industry conference meetup
                    </p>
                  </span>
                </span>
                <span>{today}</span>
              </li>
            </ul>
            <ul className=" shadow-sm px-6 rounded-md py-2">
              <li className="flex justify-between items-center">
                <span className="flex text-3xl items-center">
                  <LuVideo />
                  <span className="ml-4">
                    <h4 className="text-2xl">Video</h4>
                    <p className="text-sm text-gray-500">
                      Asked for career advice
                    </p>
                  </span>
                </span>
                <span>{today}</span>
              </li>
            </ul>
            <ul className=" shadow-sm px-6 rounded-md py-2">
              <li className="flex justify-between items-center">
                <span className="flex text-3xl items-center">
                  <FiPhoneCall />
                  <span className="ml-4">
                    <h4 className="text-2xl">Text</h4>
                    <p className="text-sm text-gray-500">
                      Asked for career advice
                    </p>
                  </span>
                </span>
                <span>{today}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
