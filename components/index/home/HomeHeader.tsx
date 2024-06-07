"use client";
import {
  CustomInput,
  CustomLoadingButton,
  CustomSelect,
} from "@/components/common";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import "./HomeScreen.css";
import { levelOptions, productOptions } from "@/utils/filterOptions";
import { useRouter } from "next/navigation";
import { Search } from "@mui/icons-material";

export default function HomeHeader() {
  const router = useRouter();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      search: formData.get("search"),
      topic: formData.get("topic"),
      level: formData.get("level"),
    };
    router.push(
      `/training-courses?${
        data.search !== "" ? `search=${data.search}&` : ""
      }topic=${data.topic}&level=${data.level}`
    );
  };
  return (
    <Box className="header-container">
      <Box component="section">
        <Box className="main">
          <Typography variant="h3" className="heading-main">
            IT-trainingen in Microsoft 365, Azure & Power Platform.
          </Typography>
          <Box className="inputs" component="form" onSubmit={onSubmit}>
            <CustomInput
              name="search"
              type="text"
              className="!w-80 max-md:!w-full"
              label="Training or subject?"
              placeholder="Select training or subject"
            />
            <CustomSelect
              required
              name="topic"
              defaultValue="All"
              label="Choose your topic"
              formClassName="!w-80 max-md:!w-full"
              options={productOptions}
            />
            <CustomSelect
              required
              name="level"
              defaultValue="All"
              label="What is your skill level?"
              formClassName="!w-80 max-md:!w-full"
              options={levelOptions}
            />
            <CustomLoadingButton className="!mt-2 !mb-1" type="submit">
              Search
            </CustomLoadingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
