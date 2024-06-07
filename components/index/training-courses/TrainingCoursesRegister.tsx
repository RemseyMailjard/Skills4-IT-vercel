"use client";
import EnrollScreen from "@/components/auth/enrollModal/EnrollScreen";
import { CustomLoadingButton } from "@/components/common";
import { Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function TrainigRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleEnrollClick = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };
  return (
    <>
      <Box>
        <Box className="container  px-5 py-24 mx-auto flex flex-wrap ">
          <Box className="lg:w-2/3 mx-auto">
            <Box className="flex flex-col items-center flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 hover:bg-blue-500">
              <Image
                width={1000}
                height={1000}
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="/images/banner_1.jpg"
              />
              <Box className="text-center relative z-10 w-full" />
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Register For Training Course
              </h2>

              <CustomLoadingButton onClick={handleEnrollClick}  className="m-5 bg-black inline-flex items-center">
                To Enroll
              </CustomLoadingButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <EnrollScreen open={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
}
