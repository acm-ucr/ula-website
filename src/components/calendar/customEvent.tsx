import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogClose,
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
    <Dialog modal={false}>
      <div className="flex h-full flex-col rounded-2xl border-2 border-black bg-ula-blue-accent px-2 text-white">
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
      <DialogOverlay className="fixed inset-0 w-2/3 bg-gray-400/50 md:w-1/2" />
      <DialogContent className="fixed left-1/2 top-1/2 z-50 max-w-[90%] rounded-xl bg-white shadow-md">
        <DialogClose>
          <button className="absolute right-8 top-8 rounded-md bg-gray-100 p-1 text-gray-900">
            X
          </button>
        </DialogClose>

        <DialogTitle className="text-wrap rounded-t-md bg-ula-blue-accent px-4 py-2 text-white md:px-10 md:text-xl">
          {title}
        </DialogTitle>
        <div className="text-wrap break-words break-all rounded-b-xl bg-white px-6 text-sm md:px-10 md:text-lg">
          <ul className="list-disc marker:text-lg marker:text-ula-blue-accent md:space-y-4 md:pb-4 md:pl-10 md:marker:text-2xl">
            {hasStartTime && <li>{timeRangeDisplay}</li>}
            {hasLocation && <li>{location}</li>}
            {description && <li>{description}</li>}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarEventDialog;
