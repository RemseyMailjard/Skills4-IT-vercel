"use client";
import "./TrainingCoursesScreen.css";
import React from "react";
import TrainingRegister from "@/components/index/training-courses/TrainingCoursesRegister";
import TrainingPopularWork from "@/components/index/training-courses/TrainingCoursesPopularWork";
import TrainingInstagram from "@/components/index/training-courses/TrainingCoursesInstagram";
import TrainingCoursesSearchBar from "./TrainingCoursesSearchBar";
import TrainingCoursesCards from "./TrainingCoursesCards";

export default function TrainingCoursesScreen() {
  return (
    <React.Fragment>
      {/* <TrainingCoursesSearchBar /> */}
      <TrainingCoursesCards />
      <TrainingRegister />
      <TrainingPopularWork />
      <TrainingInstagram />
    </React.Fragment>
  );
}
