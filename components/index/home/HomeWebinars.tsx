import { CustomLoadingButton } from "@/components/common";
import { Box, CardActionArea, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeHeading from "./HomeHeading";

export default function Webinars() {
  return (
    <Box className="text-white body-font">
      <Box className="container p-5 mx-auto">
        <HomeHeading
          title="Upcoming webinars and trainings"
          subtitle="Follow one of our knowledge sessions here"
        />

        <Box className="h-[calc(100vh_-_110px)] max-md:h-full items-center flex justify-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
          {[1, 2, 3].map(() => {
            return (
              <Box className="p-4 md:w-1/3 flex flex-col items-center">
                <Image
                  alt="webinar"
                  width={500}
                  height={500}
                  className="aspect-video w-full h-full rounded-md object-cover"
                  src="/images/webinarImgOne.jpg"
                />

                <Box className="flex mt-2 gap-2">
                  <Paper
                    elevation={3}
                    sx={{
                      p: 1,
                      textAlign: "center",
                      height: "fit-content",
                      width: "100px",
                    }}
                  >
                    <b>24</b>
                    <br />
                    September
                  </Paper>
                  <Box>
                    <h2 className=" text-lg title-font font-medium mb-3">
                      Webinar: Applying AI in Power Apps and Power Automate
                    </h2>
                    <p className="leading-relaxed text-base">
                      Learn how to apply AI in your work.
                    </p>
                    <a className="mt-3 text-white cursor-pointer hover:text-black inline-flex items-center">
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
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
