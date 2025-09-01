import { StaticImageData } from "next/image";
import Image from "next/image";

type ourGoalsProps = {
  image: StaticImageData;
  text: string;
};

const OurGoalsCard = ({ image, text }: ourGoalsProps) => {
  return (
    <div className="m-8 flex w-full flex-col items-center justify-center gap-y-4 border-y-4 border-ula-yellow-primary py-8 text-center text-xl font-medium">
      <Image src={image} alt="Goal Card Icon" className="w-1/4" />
      <div className="text-sm md:px-4 md:text-lg">{text}</div>
    </div>
  );
};

export default OurGoalsCard;
