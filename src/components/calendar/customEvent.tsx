import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

interface CalendarEventDialogProps {
  startDate: {
    dateTime?: string;
    date?: string;
  };
  endDate?: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  location?: string;
  description?: string;
  isDayView: boolean;
  eventType: string;
}

const CalendarEventDialog = ({
  startDate,
  endDate,
  title,
  location,
  description,
  isDayView,
  eventType,
}: CalendarEventDialogProps) => {
  let eventStartDate = new Date();
  let eventEndDate = new Date();
  let hasStartTime = false;
  let hasEndTime = false;
  let hasLocation = false;

  if (location) {
    hasLocation = true;
  }

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  if (endDate?.dateTime) {
    eventEndDate = new Date(endDate.dateTime);
    hasEndTime = true;
  } else if (endDate?.date) {
    eventEndDate = new Date(endDate.date);
  }

  let timeRangeDisplay = "";
  if (hasStartTime) {
    timeRangeDisplay = eventStartDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    if (hasEndTime) {
      timeRangeDisplay +=
        " - " +
        eventEndDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Los_Angeles",
        });
    }
  }

  const eventTypeColorMap: Record<string, string> = {
    "CS 009ABC": "bg-ula-9-series",
    "CS 010ABC": "bg-ula-10-series",
    "CS 011": "bg-ula-11",
    "CS 061": "bg-ula-61",
    "CS 100": "bg-ula-100",
    "CS 111": "bg-ula-111",
    "CS 141": "bg-ula-141",
  };

  return (
    <Dialog modal={false}>
      <div
        className={`flex h-full flex-col rounded-2xl border-2 border-black px-2 text-white ${
          eventTypeColorMap[eventType] || "bg-ula-blue-accent"
        }`}
      >
        <DialogTrigger className="h-full cursor-pointer text-left hover:opacity-50">
          <div
            className={`h-full overflow-hidden truncate ${isDayView ? "text-[12px] md:text-base lg:text-xl" : "text-xs lg:text-sm 2xl:text-xl"}`}
          >
            {hasStartTime && timeRangeDisplay} <br />
            {title} <br />
            {location && location}
          </div>
        </DialogTrigger>
      </div>
      <DialogOverlay className="fixed inset-0 w-2/3 bg-gray-400/50 md:w-1/2" />
      <DialogContent className="fixed left-1/2 top-1/2 z-50 max-w-[90%] rounded-xl bg-white shadow-xl">
        <DialogTitle
          className={`text-wrap rounded-t-md px-4 py-2 text-white md:px-10 md:text-xl ${
            eventTypeColorMap[eventType] || "bg-ula-blue-accent"
          }`}
        >
          {title}
        </DialogTitle>
        <div className="text-wrap break-words break-all rounded-b-xl bg-white px-6 text-sm md:px-10 md:text-lg">
          <ul className="list-disc marker:text-lg marker:text-ula-blue-accent md:space-y-4 md:pb-4 md:pl-10 md:marker:text-2xl">
            {hasStartTime && <li>{timeRangeDisplay}</li>}
            {hasLocation && <li>{location}</li>}
            {description && <li>{description}</li>}
            <li className="font-semibold text-ula-blue-accent">{eventType}</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarEventDialog;
