"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "./Toolbar";
import Event from "./Event";
import Modal from "../Modal";
import Tag from "../Tag";
import { calendars } from "@/data/calendars";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [modalEvent, setModalEvent] = useState(null);
  const [events, setEvents] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    Promise.all(
      calendars.map(({ calendar }) =>
        fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?key=${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
          }&singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}`,
          {
            method: "GET",
          }
        )
      )
    )
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((output) => {
        const finalEvents = output.map(({ items }, index) =>
          items.map((a) => {
            if (a.start && a.end) {
              a.start = new Date(a.start.dateTime);
              a.end = new Date(a.end.dateTime);
              a.color = calendars[index].color;
              a.textColor = calendars[index].text;
              a.border = calendars[index].border;
            }
            return a;
          })
        );

        setEvents(finalEvents);
      });
  }, []);

  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col mt-[6vh]">
        <Tag name={calendars[current].name} />
        <div className="w-10/12 flex justify-center items-center">
          <div className="w-full h-[80vh] relative">
            <Calendar
              className="font-lexend w-full m-0 p-0"
              events={events[current]}
              localizer={mLocalizer}
              defaultView="week"
              min={new Date(0, 0, 0, 9, 0, 0)}
              max={new Date(0, 0, 0, 21, 0, 0)}
              components={{
                event: Event,
                toolbar: (props) => (
                  <Toolbar
                    {...props}
                    setCalendar={setCurrent}
                    calendar={{ name: calendars[current].name }}
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
        <div className="flex justify-end w-10/12 my-2">
          <Link
            href={calendars[current].share}
            target="_blank"
            className="flex items-center rounded-lg px-3 py-2 no-underline text-black font-semibold hover:bg-ula-yellow"
          >
            <FaPlus className="mr-2" />
            Add to Calendar
          </Link>
        </div>
      </section>
    )
  );
};

export default CalendarEvents;
