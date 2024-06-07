"use client";
import {
  CustomInput,
  CustomLoadingButton,
  CustomSelect,
} from "@/components/common";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FormEvent } from "react";
import "./HomeScreen.css";
import HomeHeader from "./HomeHeader";
import HomeCourses from "./HomeCourses";
import HomeWebinars from "./HomeWebinars";
import HomeTeam from "./HomeTeam";
import HomeItArticle from "./HomeItArticle";

export default function HomeScreen() {
  return (
    <>
      <HomeHeader />
      <HomeCourses />
      <HomeWebinars />
      <HomeTeam />
      <HomeItArticle />
    </>
  );
}
