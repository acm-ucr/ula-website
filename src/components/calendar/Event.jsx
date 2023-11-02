const CustomEvent = ({ event }) => {
  return (
    <div className="font-lexend p-1">
      <p className="inline text-sm">
        {event.summary}
        <br />
      </p>
    </div>
  );
};

export default CustomEvent;
