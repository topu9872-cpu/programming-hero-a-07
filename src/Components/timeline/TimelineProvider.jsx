import React, { createContext } from "react";
import { useState } from "react";

export const Context = createContext();
const TimelineProvider = ({ children }) => {
  // const [text, setText] = useState([]);
  // const [call, setCall] = useState([]);
  // const [video, setVideo] = useState([]);
  const [timeline, setTimeline] = useState([]);
  
  // const addToText = item => {
  // setText((i) => [...i, item]);
  // };

  // const addToCall =  item => {
  // setCall((i) => [...i, item]);
  // };

  // const addToVideo = item => {
  // setVideo((i) => [...i, item]);
  // };
  const data = {
    // addToText,
    // setText,
    // text,
    // addToCall,
    // call,
    // setCall,
    // video,
    // setVideo,
    // addToVideo,
    
    timeline,
    setTimeline,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default TimelineProvider;
