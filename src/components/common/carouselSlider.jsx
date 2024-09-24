import { useState, useRef, useEffect } from "react";
import { data } from "../../utills/data/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Carousel = ({ resources }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel-container my-12 mx-auto w-full relative">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top-0 left-0 w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <FontAwesomeIcon icon={FaArrowAltCircleRight} />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg> */}
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-yellow-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <FontAwesomeIcon icon={FaArrowAltCircleLeft} />
            {/* <
            svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg> */}
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-track flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x w-full h-full"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item relative w-full h-full snap-start"
                style={{ flex: "1 0 100%" }}
              >
                <a
                  href={resource.link}
                  className="block w-full h-full bg-origin-padding bg-left-top bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                >
                  <img
                    src={resource.imageUrl || ""}
                    alt={resource.title}
                    className="w-full h-full object-cover hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className="absolute top-0 left-0 w-full h-full bg-blue-800/75 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="text-white py-6 px-3 text-center text-xl">
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
