import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function TrainingPopularWork() {
    const popularWorkData =[
        {
          courseTitle : 'Azure Data Fundamentals DP-900',
          courseCost : '€495',
          workImg : '/images/event_1.jpg'
        },
        {
            courseTitle : 'Microsoft Azure Fundamentals AZ-900',
            courseCost : '€495',
            workImg : '/images/event_1.jpg'
        },
        {
            courseTitle : 'Endpoint manager training',
            courseCost : '€1295',
            workImg : '/images/event_1.jpg'
        }
    ]
  return (
    <>
      <Box className="flex flex-col items-center gap-[30px] bg-[rgb(99_102_241_/_22%)] py-10">
        <Box className="text-[xx-large] text-[white] uppercase font-semibold">
          Popular Workouts
        </Box>
        {popularWorkData.map((Data) => {
          return (
            <Box className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ">
              <Box className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Image
                width={1000}
                height={1000}
                alt="popular work"
                src={Data.workImg}
                className="text-transparent h-[120px] w-[120px] rounded-[60px]"
                />
              </Box>
              <Box className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2 hover:text-blue-200 cursor-pointer ">
                  {Data.courseTitle}
                </h2>
                <p className="leading-relaxed text-base text-[x-large] font-medium text-[mediumspringgreen]">
                  {Data.courseCost}
                </p>
                <a className="mt-3 text-white inline-flex items-center hover:text-black cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
