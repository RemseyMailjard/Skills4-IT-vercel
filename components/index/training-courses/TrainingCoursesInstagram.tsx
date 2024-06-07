import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function TrainingInstagram() {
  return (
    <>
      <Box >
        <Box className="text-center text-[xxx-large] text-[white]">Instagram</Box>
        <Box className="text-gray-600 body-font">
          <Box className="container px-5 py-8 mx-auto flex flex-wrap">
            <Box className="lg:w-2/3 mx-auto cursor-not-allowed">
              <Box className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                <Image
                  width={1000}
                  height={1000}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="/images/event_1.jpg"
                />
                <Box className="text-center relative z-10 w-full">
                  
                  <a className="mt-3 text-indigo-500 inline-flex text-2xl cursor-pointer items-center">
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
              <Box className="flex flex-wrap -mx-2">
                <Box className="px-2 w-1/2">
                  <Box className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image
                      width={1000}
                      height={1000}
                      alt="gallery"
                      className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                      src="/images/gallery_2_large.jpg"
                    />
                    <Box className="text-center relative z-10 w-full">
                      
                      <a className="mt-3 text-indigo-500 inline-flex cursor-pointer items-center">
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
                </Box>
                <Box className="px-2 w-1/2">
                  <Box className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image
                      width={1000}
                      height={1000}
                      alt="gallery"
                      className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                      src="/images/gallery_3.jpg"
                    />
                    <Box className="text-center relative z-10 w-full">
                      
                      <a className="mt-3 text-indigo-500  inline-flex items-center cursor-pointer">
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
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
