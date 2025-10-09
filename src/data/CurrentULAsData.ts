import Aaryan from "@/public/ulas/aaryan.webp";
import Adithya from "@/public/ulas/adithya.jpg";
import Allen from "@/public/ulas/allen.jpg";
import Alton from "@/public/ulas/alton.webp";
import Amber from "@/public/ulas/amber.webp";
import Amshu from "@/public/ulas/amshu.webp";
import Angel from "@/public/ulas/angel.webp";
import Athena from "@/public/ulas/athena.webp";
import Ellie from "@/public/ulas/ellie.jpg";
import Gregory from "@/public/ulas/gregory.png";
import Ishaan from "@/public/ulas/ishan.webp";
import Jameel from "@/public/ulas/jameel.jpeg";
import Joel from "@/public/ulas/joel.webp";
import Joy from "@/public/ulas/joy.jpeg";
import KevinH from "@/public/ulas/kevinH.webp";
import KevinL from "@/public/ulas/kevinL.webp";
import Kyan from "@/public/ulas/kyan.JPEG";
import Livayaa from "@/public/ulas/livayaa.jpeg";
import Mailyn from "@/public/ulas/mailyn.webp";
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

/*
{
    name: "",
    classes: "CS",
    image: ,
    desc: "",
  },
*/

const ULAs: ULA[] = [
  {
    name: "Aaryan",
    classes: "CS61, 100",
    image: Aaryan,
    desc: "Hi, my name's Aaryan, and I'm a computer science major! I am passionate about computer science and enjoy video games. As a ULA, I strive to help others learn and grow in their understanding of technology and coding.",
  },
  {
    name: "Adi",
    classes: "CS061",
    image: Adithya,
    desc: "Hi hi ! I'm Adi, a third year Computer Engineering major. I see ULA as an opportunity to help those around me and learn more in the process. In my free time, I love watching sports (KTBFFH !), comic books, and video games.",
  },
  {
    name: "Allen",
    classes: "CS10ABC",
    image: Allen,
    desc: "Hi everyone! I'm Allen Biju, and I am a fourth-year computer science major with a business analytics minor. I wanted to become a ULA to ensure that everyone knows their questions are always heard. Feel free to reach out if you need any help with classes or if you need someone to talk to. :)",
  },
  {
    name: "Alton",
    classes: "CS100",
    image: Alton,
    desc: "Hey everyone! My name is Alton, and I am a second year CS major. I became a ULA because I want to use my personal experience with the challenging material and provide support to students currently struggling like I once did. In my free time, I like to climb, read mangas, and watch basketball.",
  },
  {
    name: "Amber",
    classes: "CS9C, 10ABC, 141",
    image: Amber,
    desc: "Hi, I'm Amber and I am a 4th year robotics major. I have received lots of help from other ULAs so I wanted to become a ULA to give back to the community. Outside of CS, I like audio production and cooking good food.",
  },
  {
    name: "Amshu",
    classes: "CS9ABC",
    image: Amshu,
    desc: "I am a third year computer science student. I wanted to become an ULA because I enjoy teaching other students and wanted to help others the same way other ULA’s have helped me in the past. In my free time I enjoy gardening, baking, and playing with my dog! ",
  },
  {
    name: "Angel",
    classes: "CS9C, CS10ABC",
    image: Angel,
    desc: "Hi! My name is Angel Franco and I am a 4th year Math major with a concentration in Computational Math. I became a ULA because I like to help. If you ever need help with CS010ABC I got you! If you like One Piece we can always talk about that too! (Just don't spoil because I don't read the Manga)",
  },
  {
    name: "Athena",
    classes: "CS11, 111",
    image: Athena,
    desc: "Hi, I'm Athena and I am a third-year computer science major. I became a ULA because I want to help others the same way others have helped me and so that I can learn how to better communicate with other people. In my free time, I love to draw/paint and read fantasy series.",
  },
  {
    name: "Ellie",
    classes: "CS9C, CS10ABC",
    image: Ellie,
    desc: "Hi! My name is Ellie, and I am a second-year computer science major. I became a ULA because I am passionate about helping others, both in their academic success and in finding confidence in their abilities. I love cooking, reading, drinking coffee, and being active!",
  },
  {
    name: "Gregory",
    classes: "CS10ABC",
    image: Gregory,
    desc: "Hi! I'm Gregory, and I am a second-year computer science major. I wanted to become a ULA to help others, and because teaching is something I really enjoy. Aside from CS, I like drawing, listening to and playing music, gaming, and game dev!",
  },
  {
    name: "Ishaan",
    classes: "CS100",
    image: Ishaan,
    desc: "Hello, My name is Ishaan Venkatraman and I am currently a third-year Computer Science Major at UCR! I am interested in a variety of different things which include singing, dancing, acting and playing sports like badminton, tennis and basketball as well. Please feel free to reach out to me if you have any questions or just want to hang out!",
  },
  {
    name: "Jameel",
    classes: "CS10ABC",
    image: Jameel,
    desc: "I'm a third year CEN student eager to learn many topics in EE, CS, and Math. I will help you become better lifelong learners in whatever subject you enjoy. I hope we can make each other better people and better engineers!",
  },
  {
    name: "Joel",
    classes: "CS9ABC",
    image: Joel,
    desc: "Hey! I'm Joel, a fourth-year CS major. I always loved teaching and helping others with homework so I got into ULA to do just that. I love sports, gym, reading, listening to & playing music, and video games. Feel free to talk me and send me your favorite song!",
  },
  {
    name: "Joy",
    classes: "CS10ABC",
    image: Joy,
    desc: "Hello, my name is Joy, and I'm a second year computer science major! I joined ULA to help others understand computer science better in a satisfying way. CS can be really fun when it feels like solving a difficult puzzle! In my free time, I like playing video games and taking pictures of flowers and cats.",
  },
  {
    name: "Kevin H.",
    classes: "CS10ABC",
    image: KevinH,
    desc: "Hey! My name is Kevin and I'm a senior majoring in CSBA. I'm excited to have the opportunity to be a ULA since I enjoy helping others out. If you have any questions about coursework, need clarification on anything, or just want to chat, just let me know! A little fun fact about me is that I just learned how to roller skate and I fall like only once every time I skate.",
  },
  {
    name: "Kevin L.",
    classes: "CS141",
    image: KevinL,
    desc: "Hi everyone! My name is Kevin, and I am a third year computer science major. I love getting to meet others interested in computing, and love getting to talk with others about cs, especially algorithms! I love cats, baking, Hamilton, and getting to watch new TV Shows in my spare time!",
  },
  {
    name: "Kyan",
    classes: "CS10ABC",
    image: Kyan,
    desc: "Hello! My name's Kyan and I'm a third year CSBA major. Having been raised by two teachers I've always held an appreciation for those who give through education. Throughout my undergrad I've been privileged enough to learn from some amazing ULA's, and I'm excited to pay that guidance forward. In my free time I like playing sports, listening to music, and reading manga. Feel free to reach out if you have any questions!",
  },
  {
    name: "Livayaa",
    classes: "CS10ABC",
    image: Livayaa,
    desc: "Hey! My name is Livayaa, and I’m a second-year Computer Science major. I joined ULA because I remember how much my own ULAs helped me feel more confident in class, and now I’d love to pass that same support forward. In my free time, I love reading, curating overly specific playlists, and watching Modern Family!",
  },
  {
    name: "Mailyn",
    classes: "CS10ABC",
    image: Mailyn,
    desc: "Hi everyone! My name is Mailyn and I'm a fourth year computer science major. I joined ULA because I really enjoy the program, and it always been really friendly and helpful to me when I came. I want to hopefully be able to do the same for other students. In my free time, I like to go to the gym and play the guitar!",
  },
  {
    name: "Natalie",
    classes: "CS9ABC",
    image: Natalie,
    desc: "Hi, my name is Natalie! I'm a 4th-year CS major. I have always enjoyed helping others in school whether I had taken the class or not and ULA is a great place for me to help more people. I like to listen to music, take naps, and hang out with friends whenever I have free time.",
  },
  {
    name: "Ramya",
    classes: "CS11, 111",
    image: Ramya,
    desc: "Hi, my name is Ramya and I'm a fourth year CS major. I wanted to be a ULA because I enjoy tutoring and I want to do what ULA did for me. In my free time I love to spend time with my dog!",
  },
  {
    name: "Sahana",
    classes: "CS61, 100",
    image: Sahana,
    desc: "Hi! I'm Sahana, a third year computer science with business applications major! I joined ULA to be able to help a wider range of students in multiple classes. I love taking photos, crocheting, and reading :D Please feel free to reach out if you have any questions or you just want to talk!",
  },
  {
    name: "Stanley",
    classes: "CS9C, 10ABC",
    image: Stanley,
    desc: "Hello everyone, I'm Stanley, a 3rd year computer science major. I joined ULA because of the assistance I received throughout my time here at UCR during the CS010 series. Now, I want to pay it forward through my time as an ULA. In my free time, I love watching F1 (go papaya!), hitting the gym, and playing badminton.",
  },
];

export default ULAs;
