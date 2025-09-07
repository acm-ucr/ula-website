"use client";
import { useState, useEffect, useMemo } from "react";
import {
  Calendar as RBCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "@/components/calendar/customToolBar";
import CustomEventPopover from "@/components/calendar/customEvent";
import CustomDayHeader from "@/components/calendar/customDayHeader";

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

export type TypedGoogleEventProps = GoogleEventProps & {
  eventType: string;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: TypedGoogleEventProps;
};

export const calendarSources = [
  {
    id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_PYTHON,
    eventType: "CS 009ABC",
  },
  {
    id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SOFTWARE,
    eventType: "CS 010ABC",
  },
  {
    id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_DISCRETE,
    eventType: "CS 011",
  },
  {
    id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_COMPUTER_ARCHITECTURE,
    eventType: "CS 061",
  },
  {
    id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SOFTWARE_ENGINEERING,
    eventType: "CS 100",
  },
  {
    id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_DISCRETE_STRUCTURES,
    eventType: "CS 111",
  },
  {
    id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ALGORITHMS,
    eventType: "CS 141",
  },
];

const localizer = momentLocalizer(moment);

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDay, setIsDay] = useState<boolean>(false);
  const currentMonth = date?.toLocaleDateString("en-US", {
    month: "long",
  });

  const currentYear = date?.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const [selectedClass, setSelectedClass] = useState<string[]>(
    calendarSources.map((source) => source.eventType),
  );
  const isMobile = useWindowWidth() < 1024;

  useEffect(() => {
    setIsDay(isMobile);
  }, [isMobile]);

  const { data, isLoading } = useQuery<{
    allEvents: TypedGoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date();
      const fiveWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
      ).toISOString();
      const fiveWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 5 * 1000,
      ).toISOString();

      const results = await Promise.all(
        calendarSources.map(async ({ id, eventType }) => {
          try {
            const res = await fetch(
              `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${fiveWeeksAgo}&timeMax=${fiveWeeksAhead}`,
            );

            if (!res.ok) {
              console.warn(`Failed to fetch ${eventType} calendar`);
              return [];
            }

            const data = await res.json();

            return (data.items || []).map((item: GoogleEventProps) => ({
              ...item,
              eventType,
            }));
          } catch (err) {
            console.error(`Error fetching ${eventType} events`, err);
            return [];
          }
        }),
      );

      const allEvents: TypedGoogleEventProps[] = results.flat();

      return { allEvents };
    },
  });

  const calendarEvents = useMemo(() => {
    if (!data?.allEvents) return [];
    return data.allEvents
      .map((event) => {
        const startString = event.start?.dateTime || event.start?.date;
        const endString = event.end?.dateTime || event.end?.date;
        if (!startString || !endString) return null;
        return {
          title: event.summary ?? "Untitled Event",
          start: new Date(startString),
          end: new Date(endString),
          allDay: !event.start?.dateTime,
          resource: event,
        };
      })
      .filter(
        (
          e,
        ): e is {
          title: string;
          start: Date;
          end: Date;
          allDay: boolean;
          resource: TypedGoogleEventProps;
        } => e !== null,
      );
  }, [data]);

  const CustomEvent = ({ event }: { event: CalendarEvent }) => {
    const resource = event.resource;
    return (
      <CustomEventPopover
        startDate={resource.start}
        endDate={resource.end}
        title={event.title}
        location={resource.location}
        description={resource.description}
        isDayView={isDay}
        eventType={resource.eventType}
      />
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="mx-auto my-4 flex w-11/12 flex-col text-nowrap text-center text-4xl font-bold text-ula-blue-primary md:justify-between lg:flex-row lg:text-6xl"
      >
        <div className="pb-2 md:pb-0">
          {currentMonth}, {currentYear}
        </div>
        <div className="hidden rounded-xl border-2 border-black px-2 text-xl text-black lg:flex lg:justify-center">
          <button
            onClick={() => setIsDay(false)}
            className={`my-1 rounded-lg px-8 py-2 transition-colors duration-200 ${
              !isDay ? "bg-ula-yellow-primary" : "bg-transparent"
            }`}
          >
            WEEK
          </button>
          <button
            onClick={() => setIsDay(true)}
            className={`my-1 rounded-lg px-8 py-2 transition-colors duration-200 ${
              isDay ? "bg-ula-yellow-primary" : "bg-transparent"
            }`}
          >
            DAY
          </button>
        </div>
      </motion.div>
      {isLoading || !data ? (
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, z: -50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-calendar-top mx-auto h-[120vh] w-11/12 pb-8"
        >
          <RBCalendar
            key={isDay ? "CalendarDay" : "CalendarWeek"}
            localizer={localizer}
            events={calendarEvents.filter((event) =>
              selectedClass.includes(event.resource.eventType),
            )}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultView={isDay ? Views.DAY : Views.WEEK}
            views={["day", "week"]}
            min={new Date(1970, 1, 1, 8, 0, 0)}
            max={new Date(1970, 1, 1, 21, 0, 0)}
            date={date}
            onNavigate={setDate}
            formats={{
              eventTimeRangeFormat: () => "",
              timeGutterFormat: (date) =>
                isMobile
                  ? moment(date).format("hA")
                  : moment(date).format("h:mm A"),
            }}
            components={{
              toolbar: (props) => (
                <CustomToolbar
                  {...props}
                  selectedClass={selectedClass}
                  setSelectedClass={setSelectedClass}
                  allClassTypes={calendarSources.map((s) => s.eventType)}
                />
              ),
              event: CustomEvent,
              header: CustomDayHeader,
            }}
            eventPropGetter={() => ({
              style: {
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                padding: 0,
                margin: 0,
              },
            })}
          />
        </motion.div>
      )}
    </div>
  );
};

export default CalendarCall;
