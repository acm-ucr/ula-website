"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import CustomEvent from "./CustomEvent";
// import { useContext } from "react";
import Modal from "./Modal";
// import EventsContext from "./EventContext.js";
import axios from "axios";

const mLocalizer = momentLocalizer(moment);

// const colorMappings = {
//   "CS10 A,B,C": "!bg-ula-blue",
//   "CS10ABC WCH129": "!bg-ula-yellow",
//   general: "!bg-ula-darkblue",
// };

// const colorMappingsText = {
//   "CS10 A,B,C": "text-ula-blue",
//   "CS10ABC WCH129": "text-ula-yellow",
//   general: "text-ula-darkblue",
// };

// const colorMappingsBorder = {
//   "CS10 A,B,C": "border-ula-blue",
//   "CS10ABC WCH129": "border-ula-yellow",
//   general: "border-ula-darkblue",
// };

const CalendarEvents = () => {
  const [modalEvent, setModalEvent] = useState(null);
  // const { events } = useContext(EventsContext);
  const [events, setEvents] = useState([]);

  console.log(events);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.items);
        const calendarEvents = response.data.items
          .filter((a) => {
            console.log(a);
            if (a.start && a.end) {
              a.start = new Date(a.start.dateTime);
              a.end = new Date(a.end.dateTime);
              a.color = "!bg-ula-blue";

              a.textColor = "text-ula-blue";

              a.border = "border-ula-blue";

              return true;
            }
          })
          .sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
          });
        setEvents(calendarEvents);
        console.log("POG", calendarEvents);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col mt-[12vh]">
        <div className="mb-5 w-11/12 flex justify-center items-center">
          <div className="h-[110vh] w-full relative">
            <Calendar
              className="font-lexend w-full m-0 p-0"
              events={events}
              localizer={mLocalizer}
              defaultView="month"
              views={["month"]}
              components={{
                event: CustomEvent,
                toolbar: CustomToolbar,
              }}
              eventPropGetter={(event) => {
                return { className: `${event.color}` };
              }}
              dayPropGetter={(event) => {
                const bg =
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-ula-green"
                    : "!bg-ula-white";
                return {
                  className: `${bg}`,
                  style: {
                    margin: 0,
                    padding: 0,
                  },
                };
              }}
              onSelectEvent={(event) => {
                setModalEvent(event);
              }}
            />
            <Modal event={modalEvent} setState={setModalEvent} />
          </div>
        </div>
      </section>
    )
  );
};

export default CalendarEvents;
