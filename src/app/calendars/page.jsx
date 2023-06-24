import CalendarEvents from "@/components/CalendarEvents";
import Header from "@/components/Header";
import React from "react";

const SOFTWARE = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SOFTWARE;
const COMPUTER_ARCHITECTURE =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_COMPUTER_ARCHITECTURE;
const ALGORITHMS = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ALGORITHMS;
const SOFTWARE_ENGINEERING =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SOFTWARE_ENGINEERING;

const Page = () => {
  return (
    <div>
      <title>ULA Calendars</title>
      <Header title="Calendars" />
      <CalendarEvents
        calendar={SOFTWARE}
        name="Software (CS10A/B/C)"
        color="!bg-ula-blue"
        text="text-ula-blue"
        border="border-ula-blue"
      />
      <CalendarEvents
        calendar={COMPUTER_ARCHITECTURE}
        name="Algorithms (CS111/141)"
        color="!bg-ula-yellow"
        text="text-ula-yellow"
        border="border-ula-yellow"
      />
      <CalendarEvents
        calendar={ALGORITHMS}
        name="Computer Systems (CS61)"
        color="!bg-ula-darkblue"
        text="text-ula-darkblue"
        border="border-ula-darkblue"
      />
      <CalendarEvents
        calendar={SOFTWARE_ENGINEERING}
        name="Software Construction (CS100)"
        color="!bg-ula-darkblue"
        text="text-ula-darkblue"
        border="border-ula-darkblue"
      />
    </div>
  );
};

export default Page;
