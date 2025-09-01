import Book from "@/public/about/book.svg";
import People from "@/public/about/people.svg";
import InfinityIcon from "@/public/about/infinity.svg";
import { StaticImageData } from "next/image";

interface cardItem {
  image: StaticImageData;
  text: string;
}

export const ourGoalsCard: cardItem[] = [
  {
    image: Book,
    text: "Improve the learning experience of students in core CS courses",
  },
  {
    image: People,
    text: "Build a sense of community amongst undergraduate students",
  },
  {
    image: InfinityIcon,
    text: "Create a supportive environment for underrepresented groups in CS",
  },
];
