import { calendars } from "@/data/calendars";
import Header from "../components/Header";
import Events from "@/components/calendar/Events";

const Page = ({ events, name, share, tag }) => {
  console.log(events);

  return (
    <div>
      <title>Calendars</title>
      <Header title="Calendars" />
      <Events events={events} name={name} share={share} tag={tag} />;
    </div>
  );
};

export default Page;

Page.getInitialProps = async ({ query }) => {
  const { calendar, text, border, color, name, share, tag } =
    calendars[query["current"] ?? "python"];

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?key=${
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
    }&singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}&timeMax=${new Date(
      new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString()}`,
    {
      method: "GET",
    }
  );

  const { items } = await response.json();

  const events = items.map((a) => {
    if (a.start && a.end) {
      a.start = new Date(a.start.dateTime);
      a.end = new Date(a.end.dateTime);
      a.color = color;
      a.textColor = text;
      a.border = border;
    }
    return a;
  });

  console.log(events);

  return { events, name, share, tag };
};
