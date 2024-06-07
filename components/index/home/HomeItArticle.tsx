"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeHeading from "./HomeHeading";

export default function HomeItArticle() {
  return (
    <>
      <Box className=" body-font p-5">
        <HomeHeading
          title="Latest IT knowledge articles"
          subtitle="Learn IT skills every day!"
        />
        <Box className="container py-24 mx-auto flex flex-wrap">
          <Box className="lg:w-2/3 mx-auto">
            <Box className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <Image
                width={1000}
                height={1000}
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="/images/articlebg.jpg"
              />
              <Box className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-[rgb(133_100_100)] shadow  font-medium title-font mb-2 ">
                  "Manage Microsoft Teams Settings using Power Automate and
                  Microsoft Graph API"
                </h2>
                <p className="leading-relaxed">
                  Remsey Mailjard | January 2023
                </p>
                <a className="mt-3 cursor-pointer text-indigo-500 inline-flex items-center hover:text-black">
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
    </>
  );
}
