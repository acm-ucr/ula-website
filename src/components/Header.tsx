interface headerProps {
  text: string;
}

const Header = ({ text }: headerProps) => {
  return (
    <div className="text-center text-3xl font-bold text-ula-blue-primary md:text-4xl lg:text-5xl">
      {text}
    </div>
  );
};
export default Header;
