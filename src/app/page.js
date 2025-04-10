import Button from "@/components/Button";
import Banner from "@/components/Banner";
import { FaCircle } from "react-icons/fa";
import { classes } from "@/data/classes";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full relative">
        <img
          className="w-screen h-[50vh] object-cover"
          src="https://admissions.ucr.edu/sites/default/files/styles/article_header_l/public/2021-10/ucr_submit-your-uc-application-to-ucr_blog.jpg?h=3f097dd9&itok=3qBGU0ZF"
        />
        <div className="absolute h-[50vh] w-[150vh] top-0 bg-ula-darkblue skew-x-[35deg] left-1/3 sm:left-1/2" />
        <div className="absolute right-12 top-8 items-end justify-center flex flex-col w-1/2 pt-12">
          <p className="font-bold text-base md:text-2xl text-ula-yellow p-0 m-0 text-right">
            Welcome to UCR CSE&apos;s
          </p>
          <p className="font-bold text-lg md:text-4xl text-white py-1 m-0 text-right">
            Undergraduate Learning Assistants
          </p>
          <div className="h-1 w-2/3 bg-ula-yellow m-1" />
          <p className="text-[7px] md:text-lg text-white py-1 m-0 text-right">
            Succeed in your lower-division CS classes!
          </p>
          <Button name="Attend Now!" link="/calendars" />
        </div>
      </div>
      <div className="w-10/12 my-12">
        {/* <div className="my-8">
          <Banner title="Call for Undergraduate Learning Assistants" />
          <div className="text-sm md:text-lg p-0 text-left w-11/12 md:w-10/12 mt-12">
            Undergraduate students currently enrolled at UCR are invited to
            apply for the Undergraduate Learning Assistant program. The goals of
            the program are to:
            <div className="my-2">
              <div className="flex flex-row items-center ml-3">
                <FaCircle className="text-[7px] mr-4" /> improve the learning
                experience of students in core CS courses
              </div>
              <div className="flex flex-row items-center ml-3">
                <FaCircle className="text-[7px] mr-4" />
                build a sense of community amongst undergraduate students
              </div>
              <div className="flex flex-row items-center ml-3">
                <FaCircle className="text-[7px] mr-4" /> create a supportive
                environment for underrepresented groups in CS
              </div>
              <div className="flex flex-row items-center ml-3">
                <FaCircle className="text-[7px] mr-4" /> empower students with
                confidence and new problem-solving approaches
              </div>
            </div>
            Towards this, students will be hired and trained as undergraduate
            learning assistants (ULAs) to act as peer tutors for selected CSE
            classes. Salary will be commensurate to the number of hours invested
            in the program. ULAs will provide open “help desk” hours at room 129
            in Winston Chung Hall, or online through Zoom, and assist students
            with course content, homework, labs, etc.
          </div>
          <div className="flex w-full justify-center">
            <Button
              name="Apply to become an ULA!"
              link="https://docs.google.com/forms/d/e/1FAIpQLSf-An4oXOWRpdOtpFmYXinS7eivYvhpJgupBTL8kWDwa5ascw/viewform"
            />
          </div>
        </div> */}
        <div className="my-8">
          <Banner title="Are you an undergrad who wants help in one of these CSE courses?" />
        </div>

        <div className="flex">
          <div className="flex flex-col items-center h-full">
            <div className=" w-10/12">
              {classes.map((cls, index) => (
                <div key={index} className="flex flex-row items-center ml-3">
                  <FaCircle className="text-[7px] mr-4" />
                  <p className="text-sm md:text-lg p-0 m-0">{cls}</p>
                </div>
              ))}
            </div>
            <img
              src="/map.webp"
              className="m-2 w-10/12 bg-cover sm:hidden block"
            />
            <p className="text-sm md:text-lg p-0 text-right w-11/12 md:w-10/12 mt-12">
              Your friendly neighborhood ULAs are ready to help! Just drop in to
              one of their help desk hours listed in the Calendar below with any
              questions you have. It&apos;s free, and no advance registration
              required. Some sessions are held online through Zoom and others in
              Winston Chung Hall 129, and will start in Week 2 of every quarter.
            </p>
            <div className=" w-10/12 flex justify-end">
              <Button name="Learn More!" link="overview" />
            </div>
          </div>
          <img src="/map.webp" className="w-1/3 bg-cover hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default Home;
