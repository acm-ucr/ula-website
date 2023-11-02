"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "./Toolbar";
import Event from "./Event";
import Modal from "../Modal";
import axios from "axios";
import Tag from "../Tag";
import { calendars } from "@/data/calendars";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [modalEvent, setModalEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [calendar, setCalendar] = useState(calendars["Python"]);

  useEffect(() => {
    setEvents([]);
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          calendar.calendar
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}&timeMax=${new Date(
          new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
        ).toISOString()}`
      )
      .then((response) => {
        const calendarEvents = response.data.items.map((a) => {
          if (a.start && a.end) {
            a.start = new Date(a.start.dateTime);
            a.end = new Date(a.end.dateTime);
            a.color = calendar.color;
            a.textColor = calendar.text;
            a.border = calendar.border;
          }
          return a;
        });
        setEvents(calendarEvents);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [calendar]);

  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col mt-[6vh]">
        <Tag name={calendar.name} />
        <div className="w-11/12 flex justify-center items-center">
          <div className="w-11/12 h-[80vh] relative">
            <Calendar
              className="font-lexend w-full m-0 p-0"
              events={events}
              localizer={mLocalizer}
              defaultView="week"
              min={new Date(0, 0, 0, 9, 0, 0)}
              max={new Date(0, 0, 0, 21, 0, 0)}
              components={{
                event: Event,
                toolbar: (props) => (
                  <Toolbar
                    {...props}
                    setCalendar={setCalendar}
                    calendar={calendar}
                  />
                ),
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
