import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Tag from "./Tag";
import { calendars } from "@/data/calendars";

const CustomToolbar = ({ date, onNavigate, setCalendar }) => {
  return (
    <div className="flex justify-center items-center w-full my-1">
      <div className="w-full flex justify-between items-center">
        <div className=" w-full flex justify-start items-center text-3xl font-lexend font-bold">
          <FaArrowLeft
            onClick={() => onNavigate("PREV")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
          <div className="text-center text-3xl p-1">
            {date.getMonth() + 1 < 10
              ? `0${date.getMonth() + 1}`
              : date.getMonth() + 1}
            <p className="mb-0 inline mx-2">/</p>
            {date.getFullYear() % 100}
          </div>
          <FaArrowRight
            onClick={() => onNavigate("NEXT")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
        </div>
        <div className="flex w-full justify-between">
          <Tag
            title="CS 009ABC"
            onClick={() => setCalendar(calendars["Python"])}
          />
          <Tag
            title="CS 010ABC"
            onClick={() => setCalendar(calendars["Software"])}
          />
          <Tag
            title="CS 011"
            onClick={() => setCalendar(calendars["Discrete"])}
          />
          <Tag
            title="CS 061"
            onClick={() => setCalendar(calendars["Architecture"])}
          />
          <Tag
            title="CS 100"
            onClick={() => setCalendar(calendars["Construction"])}
          />
          <Tag
            title="CS 111/141"
            onClick={() => setCalendar(calendars["Algorithms"])}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
