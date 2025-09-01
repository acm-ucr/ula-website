interface infoButtonHeaderProps {
  text: string;
}
const InfoButtonHeader = ({ text }: infoButtonHeaderProps) => {
  return (
    <div className="m-4 border-l-8 border-ula-yellow-primary px-4 text-xl font-bold text-ula-blue-primary md:text-3xl xl:text-nowrap">
      {text}
    </div>
  );
};
export default InfoButtonHeader;
