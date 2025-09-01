import Amber from "@/public/ulas/amber.webp";
import Amshu from "@/public/ulas/amshu.webp";
import Angel from "@/public/ulas/angel.webp";
import Athena from "@/public/ulas/athena.webp";
import Ishaan from "@/public/ulas/ishan.webp";
import Joel from "@/public/ulas/joel.webp";
import Kevin from "@/public/ulas/kevin.webp";
import Natalie from "@/public/ulas/natalie.webp";
import Ramya from "@/public/ulas/ramya.webp";
import Sahana from "@/public/ulas/sahana.webp";
import Stanley from "@/public/ulas/stanley.webp";
import { StaticImageData } from "next/image";

export interface ULA {
  name: string;
  classes: string;
  image: StaticImageData;
  desc: string;
}

const ULAs: ULA[] = [
  {
    name: "Amber",
    classes: "CS10ABC",
    image: Amber,
    desc: "Hi, I'm Amber and I am a 4th year robotics major. I have received lots of help from other ULAs so I wanted to become a ULA to give back to the community. Outside of CS, I like audio production and cooking good food.",
  },
  {
    name: "Amshu",
    classes: "CS10ABC",
    image: Amshu,
    desc: "I am a third year computer science student. I wanted to become an ULA because I enjoy teaching other students and wanted to help others the same way other ULA’s have helped me in the past. In my free time I enjoy gardening, baking, and playing with my dog! ",
  },
  {
    name: "Angel",
    classes: "CS10ABC",
    image: Angel,
    desc: "Hi! My name is Angel Franco and I am a 4th year Math major with a concentration in Computational Math. I became a ULA because I like to help. If you ever need help with CS010ABC I got you! If you like One Piece we can always talk about that too! (Just don't spoil because I don't read the Manga)",
  },
  {
    name: "Athena",
    classes: "CS10ABC",
    image: Athena,
    desc: "Hi, I'm Athena and I am a third-year computer science major. I became a ULA because I want to help others the same way others have helped me and so that I can learn how to better communicate with other people. In my free time, I love to draw/paint and read fantasy series.",
  },
  {
    name: "Ishaan",
    classes: "CS10ABC",
    image: Ishaan,
    desc: "Hello, My name is Ishaan Venkatraman and I am currently a third-year Computer Science Major at UCR! I am interested in a variety of different things which include singing, dancing, acting and playing sports like badminton, tennis and basketball as well. Please feel free to reach out to me if you have any questions or just want to hang out!",
  },
  {
    name: "Joel",
    classes: "CS10ABC",
    image: Joel,
    desc: "Hey! I'm Joel, a fourth-year CS major. I always loved teaching and helping others with homework so I got into ULA to do just that. I love sports, gym, reading, listening to & playing music, and video games. Feel free to talk me and send me your favorite song!",
  },
  {
    name: "Kevin",
    classes: "CS10ABC",
    image: Kevin,
    desc: "Hi everyone! My name is Kevin, and I am a third year computer science major. I love getting to meet others interested in computing, and love getting to talk with others about computer science! I love cats, baking, Hamilton, and getting to watch new TV Shows in my spare time!",
  },
  {
    name: "Natalie",
    classes: "CS10ABC",
    image: Natalie,
    desc: "Hi, my name is Natalie! I'm a 4th-year CS major. I have always enjoyed helping others in school whether I had taken the class or not and ULA is a great place for me to help more people. I like to listen to music, take naps, and hang out with friends whenever I have free time.",
  },
  {
    name: "Ramya",
    classes: "CS10ABC",
    image: Ramya,
    desc: "Hi, my name is Ramya and I’m a fourth year CS major. I wanted to be a ULA because I enjoy tutoring and I want to do what ULA did for me. In my free time I love to spend time with my dog!",
  },
  {
    name: "Sahana",
    classes: "CS10ABC",
    image: Sahana,
    desc: "Hi! I'm Sahana, a third year computer science with business applications major! I joined ULA to be able to help a wider range of students in multiple classes. I love taking photos, crocheting, and reading :D Please feel free to reach out if you have any questions or you just want to talk!",
  },
  {
    name: "Stanley",
    classes: "CS10ABC",
    image: Stanley,
    desc: "Hello everyone, I'm Stanley, a 3rd year computer science major. I joined ULA because of the assistance I received throughout my time here at UCR during the CS010 series. Now, I want to pay it forward through my time as an ULA. In my free time, I love watching F1 (go papaya!), hitting the gym, and playing badminton.",
  },
];

export default ULAs;
