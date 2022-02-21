import { Calendar } from "antd";
import React from "react";
import { IEvent } from "../hooks/IEvent";

type EventProps = {
  events: Array<IEvent>;
};

const EventCalendar: React.FC<EventProps> = () => {
  return <Calendar />;
};

export default EventCalendar;
