import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ToolbarProps, Navigate } from "react-big-calendar";
import type { CalendarEvent } from "./CalendarCall";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CustomToolbarProps extends ToolbarProps<CalendarEvent, object> {
  selectedClass: string[];
  setSelectedClass: (types: string[]) => void;
  allClassTypes: string[];
}
const CustomToolbar: React.FC<CustomToolbarProps> = ({
  date,
  onNavigate,
  selectedClass,
  setSelectedClass,
  allClassTypes,
  view,
}) => {
  const monthNums = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const isToday = (() => {
    const now = new Date();
    return (
      now.getFullYear() === date.getFullYear() &&
      now.getMonth() === date.getMonth() &&
      now.getDate() === date.getDate()
    );
  })();

  return (
    <div>
      <div className="mx-auto flex w-full flex-col items-center justify-between pb-4 lg:flex-row">
        <div className="flex justify-start">
          <ToggleGroup
            type="multiple"
            value={selectedClass}
            onValueChange={(types) => {
              const toggledType =
                selectedClass.find((type) => !types.includes(type)) ??
                types.find((type) => !selectedClass.includes(type));
              if (
                selectedClass.length === allClassTypes.length &&
                types.length === allClassTypes.length - 1
              ) {
                setSelectedClass([toggledType!]);
              } else if (types.length === 0) {
                setSelectedClass(allClassTypes);
              } else {
                setSelectedClass(types);
              }
            }}
            className="flex w-full flex-wrap md:flex-nowrap"
          >
            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 009ABC"
            >
              CS 009ABC
            </ToggleGroupItem>
            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 010ABC"
            >
              CS 010ABC
            </ToggleGroupItem>
            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 011"
            >
              CS 011
            </ToggleGroupItem>
            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 061"
            >
              CS 061
            </ToggleGroupItem>
            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 100"
            >
              CS 100
            </ToggleGroupItem>
            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 111"
            >
              CS 111
            </ToggleGroupItem>
            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 141"
            >
              CS 141
            </ToggleGroupItem>

            <ToggleGroupItem
              className="md:text-md flex w-1/5 justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary px-3 py-3 text-xs text-black data-[state=on]:bg-ula-yellow-primary"
              value="CS 153"
            >
              CS 153
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex w-full justify-center text-wrap py-3 lg:justify-end lg:space-x-4 lg:py-0">
          <button
            onClick={() => onNavigate(Navigate.PREVIOUS)}
            className="order-1 text-2xl text-ula-blue-primary transition hover:-translate-x-1 lg:text-3xl"
          >
            <BsArrowLeft className="scale-150 lg:scale-100" />
          </button>
          <div className="order-2 w-fit px-4 text-5xl text-ula-blue-primary lg:px-0 lg:text-4xl">
            {monthNums[date.getMonth()]} /{" "}
            {date.getFullYear().toString().substring(2)}
          </div>
          <button
            onClick={() => onNavigate(Navigate.NEXT)}
            className="order-3 text-2xl text-ula-blue-primary transition hover:translate-x-1 lg:text-3xl"
          >
            <BsArrowRight className="scale-150 lg:scale-100" />
          </button>
        </div>
      </div>
      {view == "week" && (
        <div className="pb-4 text-center md:text-left">
          *Note that the calendar is updated weekly
        </div>
      )}
      {view == "day" && (
        <div
          className={`text-center text-3xl font-bold text-black ${isToday ? "rounded-md bg-ula-blue-primary text-white" : "rounded-md border-2 border-black"}`}
        >
          {date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()}
          <br />
          {date.getDate()}
        </div>
      )}
    </div>
  );
};

export default CustomToolbar;
