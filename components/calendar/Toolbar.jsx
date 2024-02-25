import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Tag from "./Tag";
import Link from "next/link";
import { calendars } from "../../data/calendars";

const CustomToolbar = ({ date, onNavigate, current }) => {
  return (
    <div className="flex justify-center items-center w-full my-3">
      <div className="w-full flex justify-between items-center flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center text-3xl font-lexend font-bold">
          <FaArrowLeft
            onClick={() => onNavigate("PREV")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
          <div className="text-center text-3xl p-1">
            {new Date(
              date.setDate(date.getDate() - date.getDay())
            ).toLocaleString("default", {
              month: "short",
              day: "2-digit",
            })}{" "}
            -{" "}
            {new Date(
              date.setDate(date.getDate() - date.getDay() + 6)
            ).toLocaleString("default", { month: "short", day: "2-digit" })}
          </div>
          <FaArrowRight
            onClick={() => onNavigate("NEXT")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
        </div>
        <div className="flex w-full justify-center md:justify-end flex-wrap md:flex-nowrap">
          {Object.entries(calendars).map(([search, { tag }], index) => (
            <Link
              href={`/calendars/${search}`}
              key={index}
              className="no-underline text-ula-black"
            >
              <Tag title={tag} selected={current === tag} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
