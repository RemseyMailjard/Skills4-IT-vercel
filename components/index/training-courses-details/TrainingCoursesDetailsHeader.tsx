"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import "./TrainingCoursesDetailsScreen.css";
import {
  CustomLink,
  CustomLoadingButton,
  CustomSelect,
} from "@/components/common";
import StarIcon from "@/public/icons/Star.svg";
import FBIcon from "@/public/icons/Facebook.svg";
import TWIcon from "@/public/icons/Twitter.svg";
import MSGIcon from "@/public/icons/Message.svg";
import EnrollScreen from "@/components/auth/enrollModal/EnrollScreen";

interface TrainingCoursesDetailsHeaderProps {
  data?:any
}
export default function TrainingCoursesDetailsHeader( props: TrainingCoursesDetailsHeaderProps) {
 console.log(props?.data,"vvvvvvvvvvvhgvghvghvghvghvgh")
 const [open,setOpen]=useState(false)
  return (
    <Box className="training-courses-details-main">
      <Box component="section" className="section">
        <Box className="mx-auto flex flex-wrap">
          <Box className="flex md:w-full sm:w-full max-lg:justify-center w-full lg:w-1/2">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/lFd33jPTzRs?si=ffMggCQ0If2Blef_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Box>
          <Box className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font tracking-widest">{props?.data?.Product}</h2>
            <h1 className=" text-3xl title-font font-medium mb-1">
            {props?.data?.Coursetitle} - {props?.data?.Coursecode}
            </h1>
            <h3> {`Level: ${props?.data?.Level}`}</h3>
            <Box className="flex mb-4">
              <span className="flex items-center">
                <StarIcon fill="red" />
                <StarIcon fill="red" />
                <StarIcon fill="red" />
                <StarIcon fill="red" />
                <StarIcon fill="none" />
                <span className="ml-3">4 Reviews</span>
              </span>
              <Box
                component="span"
                className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s gap-2"
              >
                <CustomLink to={"#"}>
                  <FBIcon />
                </CustomLink>
                <CustomLink to={"#"}>
                  <TWIcon />
                </CustomLink>
                <CustomLink to={"#"}>
                  <MSGIcon />
                </CustomLink>
              </Box>
            </Box>
            <Box>
             {
              props?.data?.CourseDescriptionLong
             }
            </Box>
            <Box className="my-7 items-center">
              <Box className="relative">
                <CustomSelect
                  required
                  name="date"
                  label="Course date"
                  formClassName="!w-100 max-md:!w-full"
                  options={[
                    {
                      name: "Mon January 23, 2023, 9.30am - 4.30pm",
                      value: "1",
                    },
                    {
                      name: "Thu January 26, 2023, 9.30am - 4.30pm",
                      value: "2",
                    },
                    {
                      name: "Fri January 27, 2023, 9.30am - 4.30pm",
                      value: "3",
                    },
                  ]}
                />
              </Box>
            </Box>
            <Box className="flex items-center">
              <span className="title-font font-medium text-2xl ">
                € {props?.data?.Price},- euro excl. BTW per persoon
              </span>
              <Box className="flex ml-auto">
                <CustomLoadingButton  onClick={()=>{
                  setOpen(true)
                  
                }}>Enroll</CustomLoadingButton>
                <EnrollScreen open={open} handleClose={()=>{setOpen(false)}}/>
              </Box>
              {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
