import { FaCircle, FaTimes } from "react-icons/fa";
import Link from "next/link";

const ListElement = ({ color, text }) => {
  return (
    <div className="flex items-center p-2">
      <FaCircle className={`${color} mr-2`} />
      {text.includes("https://") ? (
        <Link
          className="md:text-2xl text-lg no-underline text-navy-700"
          href={text}
        >
          {text}
        </Link>
      ) : (
        <div className="md:text-2xl text-lg">{text}</div>
      )}
    </div>
  );
};

const Modal = ({ event, setState }) => {
  if (!event) return event && <div>No Event</div>;
  const start = new Date(event.start).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const end = new Date(event.end).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      className={`font-lexend fixed top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 w-[75vw] md:w-[50vw] bg-white border-4 ${event.border} rounded-2xl z-10`}
    >
      <div className={`flex justify-between items-center`}>
        <p
          className={`text-black ${event.color} rounded-full m-0 font-bold py-2 md:py-3 px-3 md:px-4 text-lg md:text-3xl`}
        >
          {event.summary}
        </p>
        <button className="p-0 m-2 text-5xl" onClick={() => setState(null)}>
          <FaTimes className="text-black p-0 m-0 hover:!text-red-500" />
        </button>
      </div>
      <ListElement
        color={event.textColor}
        text={new Date(event.start).toLocaleDateString()}
      />
      <ListElement color={event.textColor} text={`${start} - ${end}`} />
      <ListElement
        color={event.textColor}
        text={event.location || "Location TBD"}
      />
      <div className="md:text-2xl text-lg p-2 break-words">
        {event.description || ""}
      </div>
    </div>
  );
};

export default Modal;
