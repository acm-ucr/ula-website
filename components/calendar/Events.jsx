import { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "./Toolbar";
import Event from "./Event";
import Modal from "../Modal";
import Tag from "../Tag";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = ({ events, name, tag, share }) => {
  const [modalEvent, setModalEvent] = useState(null);

  return (
    <section className="w-full flex justify-center items-center flex-col mt-[6vh]">
      <Tag name={name} />
      <div className="w-10/12 flex justify-center items-center">
        <div className="w-full h-[80vh] relative">
          <Calendar
            className="font-lexend w-full m-0 p-0"
            events={events}
            localizer={mLocalizer}
            defaultView="week"
            min={new Date(0, 0, 0, 9, 0, 0)}
            max={new Date(0, 0, 0, 21, 0, 0)}
            components={{
              event: Event,
              toolbar: (props) => <Toolbar {...props} current={tag} />,
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
          href={share}
          target="_blank"
          className="flex items-center rounded-lg px-3 py-2 no-underline text-black font-semibold hover:bg-ula-yellow"
        >
          <FaPlus className="mr-2" />
          Add to Calendar
        </Link>
      </div>
    </section>
  );
};

export default CalendarEvents;
