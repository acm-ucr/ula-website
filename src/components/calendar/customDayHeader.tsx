const CustomDayHeader = ({ date }: { date: Date }) => {
  const isToday = (() => {
    const now = new Date();
    return (
      now.getFullYear() === date.getFullYear() &&
      now.getMonth() === date.getMonth() &&
      now.getDate() === date.getDate()
    );
  })();

  const day = date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();
  const dayNum = date.getDate().toString().padStart(2, "0");

  return (
    <div
      className={`cursor-default px-4 pt-3 text-xl xl:px-10 xl:text-3xl ${isToday ? "rounded-md bg-ula-blue-primary pb-2 text-white" : "text-black"}`}
    >
      {day}
      &nbsp;
      {dayNum}
    </div>
  );
};

export default CustomDayHeader;
