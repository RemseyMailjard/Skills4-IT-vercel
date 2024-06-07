"use client";
import { CustomLinkButton, CustomLoadingButton } from "@/components/common";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import CourseCard from "@/components/common/course-card";
import HomeHeading from "./HomeHeading";
import axiosInstance from "@/utils/api";
import { useRouter } from "next/navigation";

export default function HomeCourses() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width:1280px)");
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const response = await axiosInstance.get("course/getAllCourses");
      setCourses(response?.data?.data[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewAllRoute = () => {
    router.push("/training-courses");
  };

  return (
    <>
      <Box className="flex flex-col justify-center">
        <HomeHeading
          title="Popular workouts"
          subtitle="These Microsoft training courses are the most followed"
        />
        {loading ? (
          <Box className="flex justify-center">
            <CircularProgress className="!text-white" />
          </Box>
        ) : (
          <>
            <Box className="flex flex-wrap mx-auto px-5 ">
              {courses.splice(0, isDesktop ? 8 : 6)?.map((course, index) => (
                <CourseCard key={index} data={course} />
              ))}
            </Box>
            <Box className="flex justify-center m-[25px] ">
              <CustomLoadingButton
                className="w-6/12 max-sm:w-full"
                onClick={handleViewAllRoute}
              >
                View All training Courses
              </CustomLoadingButton>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
