import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
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
}

const CalendarEventDialog = ({
  startDate,
  endDate,
  title,
  location,
  description,
  isDayView,
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

  return (
    <Dialog>
      <div className="ml-2 flex h-full flex-col rounded-2xl border-2 border-black bg-ula-blue-accent px-2 text-white">
        <DialogTrigger className="cursor-pointer whitespace-nowrap text-left hover:opacity-50">
          <div
            className={`overflow-hidden truncate ${isDayView ? "text-xs lg:text-sm" : "lg:text-md text-xs"}`}
          >
            {hasStartTime && timeRangeDisplay}
          </div>
          <div
            className={`overflow-hidden truncate ${isDayView ? "text-xs lg:text-sm" : "lg:text-md text-xs"}`}
          >
            {title}
          </div>
          <div
            className={`overflow-hidden truncate ${isDayView ? "text-xs lg:text-sm" : "lg:text-md text-xs"}`}
          >
            {location && location}
          </div>
        </DialogTrigger>
      </div>
      <DialogOverlay className="bg-gray-400/50">
        <DialogContent className="z-50 w-1/2 bg-white p-0 shadow-md md:w-2/5 2xl:w-1/3">
          <div className="text-wrap rounded-t-md bg-ula-blue-accent px-4 py-0 text-[10px] text-white md:px-10 md:py-3 md:text-xl">
            {title}
          </div>
          <div className="rounded-b-xl bg-white px-6 text-[10px] md:px-10 md:text-lg">
            <ul className="list-disc marker:text-lg marker:text-ula-blue-accent md:space-y-4 md:pb-4 md:pl-10 md:marker:text-2xl">
              {hasStartTime && <li>{timeRangeDisplay}</li>}
              {hasLocation && <li>{location}</li>}
              {description && <li>{description}</li>}
            </ul>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default CalendarEventDialog;
