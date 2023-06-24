"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import CustomEvent from "./CustomEvent";
import Modal from "./Modal";
import axios from "axios";
import Tag from "./Tag";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = ({ calendar, name, color, text, border }) => {
  const [modalEvent, setModalEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
      )
      .then((response) => {
        const calendarEvents = response.data.items.sort((a, b) => {
          if (a.start && a.end) {
            a.start = new Date(a.start.dateTime);
            a.end = new Date(a.end.dateTime);
            a.color = color;

            a.textColor = text;

            a.border = border;
          }
          return new Date(a.start) - new Date(b.start);
        });
        setEvents(calendarEvents);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col mt-[12vh]">
        <Tag name={name} />
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
