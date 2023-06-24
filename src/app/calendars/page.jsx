import CalendarEvents from "@/components/CalendarEvents";
import Header from "@/components/Header";
import Tag from "@/components/Tag";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header title="Calendars" />
      <CalendarEvents />
      <Tag name="Software" />
      <Tag name="Algorithms" />
      <Tag name="Computer Systems" />
    </div>
  );
};

export default Page;
