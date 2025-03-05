"use client";
import feedbackList from "@/utils/feedbackList.json";
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:text-gray-500 dark:before:text-gray-400 before:content-['→'] !hidden lg:!block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:text-gray-500 dark:before:text-gray-400 before:content-['←'] !hidden lg:!block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function FeedbackSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [          // Make it responsive for smaller screens
      {
        breakpoint: 1024,   // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,    // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings} className="h-full">
          {feedbackList.map((feedback, idx) => {
            return (
              <div key={idx} className="flex h-full">
                <FeedbackCard feedback={feedback}/>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
