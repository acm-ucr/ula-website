import CalendarEvents from "@/components/CalendarEvents";
import Header from "@/components/Header";
import { calendars } from "@/data/calendars";

const Page = () => {
  return (
    <div>
      <title>Calendars</title>
      <Header title="Calendars" />
      {calendars.map((calendar, index) => (
        <CalendarEvents
          key={index}
          calendar={calendar.calendar}
          name={calendar.name}
          color={calendar.color}
          text={calendar.text}
          border={calendar.border}
        />
      ))}
    </div>
  );
};

export default Page;
