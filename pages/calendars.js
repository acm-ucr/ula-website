import { calendars } from "@/data/calendars";
import Header from "../components/Header";
import Events from "@/components/calendar/Events";

const Page = ({ events, name, share, tag }) => {
  const jsonEvents = JSON.parse(events).map((event) => {
    event["start"] = new Date(event["start"]);
    event["end"] = new Date(event["end"]);

    return event;
  });

  return (
    <div>
      <title>Calendars</title>
      <Header title="Calendars" />
      <Events events={jsonEvents} name={name} share={share} tag={tag} />;
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
    const details = {};

    if (a.start && a.end) {
      details.start = new Date(a.start.dateTime);
      details.end = new Date(a.end.dateTime);
      details.color = color;
      details.textColor = text;
      details.border = border;
      details.summary = a.summary;
      details.description = a.description;
      details.location = a.location;
      details.htmlLink = a.htmlLink;
    }
    return details;
  });

  return { events: JSON.stringify(events), name, share, tag };
};
