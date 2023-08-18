import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center w-full my-3">
      <Row className=" w-full flex justify-start items-center">
        <Col
          xs={4}
          className=" w-full flex justify-start items-center text-3xl font-lexend  font-bold"
        >
          <FaArrowLeft
            onClick={() => event.onNavigate("PREV")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
          <div className="text-center text-3xl p-1">
            {event.date.getMonth() + 1 < 10
              ? `0${event.date.getMonth() + 1}`
              : event.date.getMonth() + 1}
            <p className="mb-0 inline mx-2">/</p>
            {event.date.getFullYear() % 100}
          </div>
          <FaArrowRight
            onClick={() => event.onNavigate("NEXT")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
        </Col>
      </Row>
    </div>
  );
};

export default CustomToolbar;
