"use client";
import { useState, useRef, useEffect } from "react";
import { StarIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function FeedBackCard({ feedback }) {
  const { name, star, description, location, profile_image } = feedback || {};

  const totalStars = 5;
  const filledStars = Math.floor(star || totalStars);
  const hasHalfStar = star % 1 !== 0;

  const rating = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      rating.push(
        <StarIcon
          className="h-4 w-4 md:h-5 md:w-5 text-yellow-700 dark:text-yellow-300"
          key={i}
        />,
      );
    } else if (i === filledStars && hasHalfStar) {
      rating.push(
        <StarIcon
          className="h-4 w-4 md:h-5 md:w-5 text-gray-300 dark:text-gray-600"
          key={i}
        />,
      );
    } else {
      rating.push(
        <StarIcon
          className="h-4 w-4 md:h-5 md:w-5 text-gray-300 dark:text-gray-600"
          key={i}
        />,
      );
    }
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const [showViewMore, setShowViewMore] = useState(false);
  const descRef = useRef(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const checkDescriptionHeight = () => {
      if (descRef.current) {
        const element = descRef.current;
        const lineHeight = parseInt(
          window.getComputedStyle(element).lineHeight,
          10,
        );
        const maxHeight = lineHeight * 4;
        if (element.scrollHeight > maxHeight) {
          setShowViewMore(true);
        } else {
          setShowViewMore(false);
        }
      }
    };

    checkDescriptionHeight();
    const element = descRef.current;
    const resizeObserver = new ResizeObserver(() => checkDescriptionHeight());
    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [description]);

  return (
    <div className="mx-2 mb-8 mt-2 h-[320px]">
      <Card
        color="transparent"
        shadow={false}
        className="w-full h-full max-w-[50rem] mx-auto px-6 py-6 shadow-lg dark:bg-[#1a1f2e] bg-white border border-gray-100 dark:border-gray-800 dark:text-white rounded-2xl relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
      >
        {/* Decorative Quote Icon Background */}
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none text-blue-500 dark:text-blue-400">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
          </svg>
        </div>

        <div>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-start gap-4 pt-0 pb-4 border-b border-gray-50 dark:border-gray-800/50 relative z-10"
          >
            <Avatar
              size="lg"
              variant="circular"
              src={
                profile_image
                  ? profile_image
                  : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              }
              alt={name}
              className="border-2 border-green-50 object-cover"
            />
            <div className="flex w-full flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="dark:text-gray-200 font-bold"
                >
                  {name}
                </Typography>
                <CheckCircleIcon
                  className="w-4 h-4 text-[#1dbf73]"
                  title="Verified Buyer"
                />
                <span className="ml-auto flex items-center gap-1 bg-[#1dbf73]/10 px-2 py-0.5 rounded-full">
                  <span className="text-[#1dbf73] font-bold text-xs tracking-tighter">
                    fiverr
                  </span>
                </span>
              </div>
              <Typography
                color="blue-gray"
                className="dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-0.5"
              >
                {location ? location : "United States"}
              </Typography>
              <div className="flex items-center gap-0.5 mt-1">{rating}</div>
            </div>
          </CardHeader>
          <CardBody className="p-0 pt-4 relative z-10">
            <Typography
              ref={descRef}
              className={`text-left text-gray-700 dark:text-gray-300 font-medium italic ${
                isExpanded ? "" : showViewMore ? "line-clamp-4" : "line-clamp-5"
              }`}
            >
              &quot;{description}&quot;
            </Typography>

            {showViewMore && (
              <div className="text-left mt-2">
                <button
                  onClick={toggleExpand}
                  className="text-blue-500 hover:text-blue-600 text-sm font-semibold transition-colors"
                >
                  {isExpanded ? "View Less" : "Read More"}
                </button>
              </div>
            )}
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
