import Adithya from "@/public/ulas/adithya.webp";
import Ava from "@/public/ulas/ava.webp";
import Benito from "@/public/ulas/benito.webp";
import Chiagoziem from "@/public/ulas/Chiagoziem.webp";
import Dennis from "@/public/ulas/dennis.webp";
import Felicia from "@/public/ulas/felicia.webp";
import Gina from "@/public/ulas/gina.webp";
import Glen from "@/public/ulas/glen.webp";
import Gregory from "@/public/ulas/gregory.webp";
import Haokun from "@/public/ulas/haokun.webp";
import Hrishu from "@/public/ulas/hrishu.webp";
import Jameel from "@/public/ulas/jameel.webp";
import Jackson from "@/public/ulas/jackson.webp";
import Jade from "@/public/ulas/jade.webp";
import Joao from "@/public/ulas/joao.webp";
import Joy from "@/public/ulas/joy.webp";
import Justin from "@/public/ulas/justin.webp";
import Kevin from "@/public/ulas/kevin.webp";
import Kian from "@/public/ulas/kian.webp";
import Konstantin from "@/public/ulas/konstantin.webp";
import Livayaa from "@/public/ulas/livayaa.webp";
import Luis from "@/public/ulas/luis.webp";
import Marilyn from "@/public/ulas/marilyn.webp";
import Neha from "@/public/ulas/neha.webp";
import Nitesh from "@/public/ulas/nitesh.webp";
import Pratheek from "@/public/ulas/pratheek.webp";
import Riley from "@/public/ulas/riley.webp";
import Selina from "@/public/ulas/selina.webp";
import Simon from "@/public/ulas/simon.webp";
import Stanley from "@/public/ulas/stanley.webp";
import Vignesh from "@/public/ulas/vignesh.webp";
import { StaticImageData } from "next/image";

export interface ULA {
  name: string;
  classes: string;
  image: StaticImageData;
  desc: string;
}

const ULAs: ULA[] = [
  {
    name: "Adi",
    classes: "CS10ABC, 61, 100",
    image: Adithya,
    desc: "Hi hi ! I'm Adi, a fourth year Computer Engineering major. I see ULA as an opportunity to help those around me and learn more in the process. In my free time, I love watching sports (KTBFFH !), comic books, and video games.",
  },
  {
    name: "Ava",
    classes: "CS9ABC",
    image: Ava,
    desc: "Hi! My name is Ava, I am a fourth year Computer Science major. I wanted to be ULA so I can help others like how ULAs have helped me in the past. I love Dungeons & Dragons, drawing, weight-lifting, and playing video games!",
  },
  {
    name: "Benito",
    classes: "CS9ABC, 100",
    image: Benito,
    desc: "Hello! I'm Benito, and I am a third-year Computer Science major. Being a ULA is an opportunity to help people understand concepts and create a safe space to ask questions. For fun, I like watching professional wrestling (WWE), playing baseball, and going on hikes.",
  },
  {
    name: "Chiagoziem",
    classes: "CS10ABC",
    image: Chiagoziem,
    desc: "Hihi, My name is Chiagoziem and I'm a third-year computer science major. I became a ULA because I've relied a lot on ULA's in my time here and want to be someone others can rely on and ask for help too. Outside of ULA, I like dancing, graphic design, reading, and going to concerts.",
  },
  {
    name: "Dennis",
    classes: "CS10ABC, 100",
    image: Dennis,
    desc: "Hey everyone! My name is Dennis, and I'm a 4th year Computer Science student. I love teaching students, and ultimately, I believe any complex topic can be broken down into something understandable. In my free time, I enjoy learning languages, cooking, playing sports & video games, and hanging out with friends!",
  },
  {
    name: "Felicia",
    classes: "CS61",
    image: Felicia,
    desc: "Hello! My name is Felicia Ong and I am a third year computer science major. I am thankful to all of the ULAs that have helped me get to where I am today and now it is my time to pay it forward! When I am free, I love to play video games and go out with friends.",
  },
  {
    name: "Gina",
    classes: "CS9ABC, 10ABC",
    image: Gina,
    desc: "Hi everyone! My name is Gina, and I became a ULA because I want to help everyone succeed in classes that may feel challenging, especially beginner programmers who are just getting started with CS. I believe there are always more solutions than difficulties, so feel free to reach out if you ever get stuck on a problem or just want to chat about CS!",
  },
  {
    name: "Glen",
    classes: "CS10ABC, 61",
    image: Glen,
    desc: "Hi! I'm Glen, a double major in Computer Science and Mathematics with a concentration in General Applied Mathematics. I became a ULA because I like to help and support students struggling with computer science concepts. Besides CS and MATH, I like to compete and volunteer in VEX and FIRST Robotics competitions.",
  },
  {
    name: "Gregory",
    classes: "CS10ABC, 141",
    image: Gregory,
    desc: "Hi! I'm Gregory, and I am a third-year computer science major. I wanted to become a ULA to help others, and because teaching is something I really enjoy. Aside from CS, I like drawing, listening to and playing music, gaming, and game dev!",
  },
  {
    name: "Haokun",
    classes: "CS10ABC, 61, 100",
    image: Haokun,
    desc: "Hi I'm Haokun, a fourth-year Computer Engineering major. A ULA helped me a lot when I was taking these classes, so I wanted to do the same for others. Ask me questions if you're stuck on anything. In my free time I like watch nba and play overwatch!",
  },
  {
    name: "Hrishu",
    classes: "CS10ABC",
    image: Hrishu,
    desc: "Hello, my name is Hrishu, I am a 3rd year Computer Engineering major. As someone who has personally struggled allot in my initial years in CSE, I personally understand how the challenge of adapting to a new way of thinking. I aim to provide guidance and help for students not only become academically successful but confident in their capabilities as future software engineers.",
  },
  {
    name: "Jackson",
    classes: "CS10ABC",
    image: Jackson,
    desc: "Hi! My name is Jackson, and I am a third year CSBA major. I became a ULA to support other students in their learning, and because teaching is something I enjoy. In my free time, I also enjoy gaming, going to the gym, and watching shows or movies.",
  },
  {
    name: "Jade",
    classes: "CS10ABC, 61",
    image: Jade,
    desc: "Hello! I'm Jade, a 4th year Computer Science major. and I'm here to help with certain CS classes as a ULA. My current interests are Project Moon games, sewing, and LARPing.",
  },
  {
    name: "Jameel",
    classes: "CS111",
    image: Jameel,
    desc: "I'm a fourth year CEN student who wants to share my love of learning and solving Computer Science problems for the betterment of us all. I will help you become better lifelong learners in whatever subject you enjoy. I hope we can make each other better engineers and better people!",
  },
  {
    name: "João",
    classes: "CS10ABC",
    image: Joao,
    desc: "Hello! I am a second-year Computer Science major. I became a ULA because I had a lot of fun tutoring and teaching various subjects to people of all ages! Outside of class I like to play guitar and run.",
  },
  {
    name: "Joy",
    classes: "CS9ABC, 10ABC",
    image: Joy,
    desc: "Hello, my name is Joy, and I'm a third year computer science major! I joined ULA to help others understand computer science better in a satisfying way. CS can be really fun when it feels like solving a difficult puzzle! In my free time, I like playing video games and taking pictures of flowers and cats.",
  },
  {
    name: "Justin",
    classes: "CS9ABC",
    image: Justin,
    desc: "Hey! My name's Justin, and I'm a 3rd year Data Science Student. Outside of school I love playing tennis, weightlifting, watching tv shows, and making and trying different foods. In the past I utilized the ULA program heavily for the harder classes and that's why I'm participating in it on the other end to give back. Feel free to reach out!",
  },
  {
    name: "Kevin",
    classes: "CS111, 141",
    image: Kevin,
    desc: "Hi everyone! My name is Kevin, and I am a fourth year computer science major. I love getting to meet others interested in computing, and love getting to talk with others about cs, especially algorithms! I love cats, baking, Hamilton, and getting to watch new TV Shows in my spare time!",
  },
  {
    name: "Kian",
    classes: "CS10ABC",
    image: Kian,
    desc: "Hello, my name is Kian and I am a senior in Computer Science. I became a ULA to help students gain confidence in their Computer Science coursework, while also encouraging them to apply their knowledge to create something cool. I am an aspiring game programmer so on top of coursework-related questions, I can answer any questions related to game development. I enjoy photography, video games, cooking, watching Formula 1 and spending time with my Shiba Inu, Snoopy.",
  },
  {
    name: "Konstantin",
    classes: "CS100",
    image: Konstantin,
    desc: "I am a fourth-year CS student. I enjoy learning about the theory behind many CS sub-fields, and aim to help create real understanding. To me, the most long-term retention of information starts by truly understanding why something works.",
  },
  {
    name: "Livayaa",
    classes: "CS10ABC, 141",
    image: Livayaa,
    desc: "Hey! My name is Livayaa, and I'm a third-year Computer Science major. I joined ULA because I remember how much my own ULAs helped me feel more confident in class, and now I'd love to pass that same support forward. In my free time, I love reading, curating overly specific playlists, and watching Modern Family!",
  },
  {
    name: "Luis",
    classes: "CS9ABC",
    image: Luis,
    desc: "Hi everyone! My name is Luis Bojorquez I'm a fourth year CSBA major. As a ULA I strive to help others, the same way others have helped me. I am interested in running, going to the gym, and I love One Piece.",
  },
  {
    name: "Marilyn",
    classes: "CS10ABC, 61",
    image: Marilyn,
    desc: "Hello! My name is Marilyn and I am a third year Computer Science major. I wanted to become a ULA because I enjoy being able to help others and share what I have learned with them. I love baking and spending time with my family. Feel free to reach out if you need help with anything or if you have any questions!",
  },
  {
    name: "Neha",
    classes: "CS10ABC",
    image: Neha,
    desc: "Hi everyone! My name is Neha and I'm a 3rd year CSBA major. I wanted to become a ULA because of all the support I've gotten when I was there and I hope to be just as helpful to other students there as well. In my free time I love playing tennis with my friends and going on random shopping sprees! 🙂",
  },
  {
    name: "Nitesh",
    classes: "CS10ABC",
    image: Nitesh,
    desc: "Hi, I'm Nitesh. I'm a 2nd year Data Science major. During my free time, I like to go to gym, go hiking, and play sports. I became a ULA because I want to use my own struggling experiences to help students grow!",
  },
  {
    name: "Pratheek",
    classes: "CS9ABC, 111, 141",
    image: Pratheek,
    desc: "Hi, my name is Pratheek and I am a third year computer science major. I became a ULA because I wanted to help students the same way I received help from other ULAs in my freshman year. In my free time, I like playing badminton and watching soccer!",
  },
  {
    name: "Riley",
    classes: "CS9ABC",
    image: Riley,
    desc: "Hi everyone! My name is Riley, and I'm a third-year Data Science major at UCR. I'm working as a ULA tutor this year, and I'm really looking forward to helping students and meeting new people. Outside of school, I enjoy playing basketball, making art, and just exploring new interests.",
  },
  {
    name: "Selina",
    classes: "CS9ABC, 10ABC",
    image: Selina,
    desc: "Hi! My name is Selina Syed, and I am a third-year Robotics major with a minor in Data Science. I became a ULA because I enjoy helping others understand challenging concepts and feel more confident in their abilities. I want to create a welcoming space where students feel comfortable asking questions. Outside of school, I enjoy cafe hopping, going to the beach, and exploring new places with friends. I'm excited to support you all this quarter!",
  },
  {
    name: "Simon",
    classes: "CS61, 100",
    image: Simon,
    desc: "Hi, my name is Simon! I'm a 3rd year Computer Science major. I like reading novels, watching shows, and sleeping. I also enjoy helping people, so feel free to ask me for help with your classes.",
  },
  {
    name: "Stanley",
    classes: "CS9C, 10ABC",
    image: Stanley,
    desc: "Hello everyone, I'm Stanley, a 4th year computer science major. I joined ULA because of the assistance I received throughout my time here at UCR during the CS010 series. Now, I want to pay it forward through my time as an ULA. In my free time, I love watching F1 (go papaya!), hitting the gym, and playing badminton.",
  },
  {
    name: "Vignesh",
    classes: "CS10ABC",
    image: Vignesh,
    desc: "Hey everyone! I am Vignesh Thondikulam. I am a 3rd year Robotics Engineering student. Some things that I love: meeting new people, discussing data structures, cooking, playing badminton, and watching comedy shows! Don't hesitate to reach out if you need any help!",
  },
];

export default ULAs;
