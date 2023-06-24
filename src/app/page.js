import Button from "@/components/Button";
import Banner from "@/components/Banner";
import { FaCircle } from "react-icons/fa";
const Home = () => {
  const classes = [
    "Software: CS 10A, 10B, 10C",
    "Algorithms: CS 111, 141",
    "Computer systems: CS 61",
    "Software construction: CS 100",
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full relative">
        <img
          className="w-screen h-[50vh] object-cover"
          src="https://admissions.ucr.edu/sites/default/files/styles/article_header_l/public/2021-10/ucr_submit-your-uc-application-to-ucr_blog.jpg?h=3f097dd9&itok=3qBGU0ZF"
        />
        <div className="absolute h-[50vh] w-full right-0 top-0 bg-ula-darkblue skew-x-[35deg] left-1/2" />
        <div className="absolute right-12 top-8 items-end justify-center flex flex-col w-1/2">
          <p className="font-bold text-2xl text-ula-yellow p-0 m-0 text-right">
            Welcome to UCR CSE&apos;s
          </p>
          <p className="font-bold text-4xl text-white py-1 m-0 text-right">
            Undergraduate Learning Assistants
          </p>
          <div className="h-1 w-2/3 bg-ula-yellow m-1" />
          <p className="text-lg text-white py-1 m-0 text-right">
            Succeed in your lower-division CS classes!
          </p>
          <Button name="Attend Now!" />
        </div>
      </div>
      <div className="w-10/12 my-12">
        <div className="my-8">
          <Banner title="Are you an undergrad who wants help in one of these CSE courses?" />
        </div>
        <div className="flex">
          <div className="flex flex-col items-center h-full">
            <div className=" w-10/12">
              {classes.map((cls, index) => (
                <div key={index} className="flex flex-row items-center ml-3">
                  <FaCircle className="text-xs mr-4" />
                  <p className="text-lg p-0 m-0">{cls}</p>
                </div>
              ))}
            </div>
            <p className="text-lg p-0 text-right w-10/12 mt-12">
              Your friendly neighborhood ULAs are ready to help! Just drop in to
              one of their help desk hours listed in the Calendar below with any
              questions you have. It&apos;s free, and no advance registration
              required. Some sessions are held online through Zoom and others in
              Winston Chung Hall 129, and will start in Week 2 of the Winter
              2023 quarter (Jan. 16, 2023).
            </p>
            <div className=" w-10/12 flex justify-end">
              <Button name="learn more" />
            </div>
          </div>
          <img src="/map.png" className="w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
