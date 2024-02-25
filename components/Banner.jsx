const Banner = ({ title }) => {
  return (
    <div className="border-l-8 border-ula-yellow">
      <p className="mb-0 text-ula-blue text-lg md:text-2xl font-medium mx-2">
        {title}
      </p>
    </div>
  );
};

export default Banner;
