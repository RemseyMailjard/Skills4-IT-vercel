"use client";
import {
  CustomIconButton,
  CustomInput,
  CustomLoadingButton,
  CustomSelect,
} from "@/components/common";
import { Box } from "@mui/material";
import React, { FormEvent } from "react";
import TrainingSearchFilters from "./TrainingCoursesFilters";

export default function TrainingCoursesSearchBar() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      subject: formData.get("subject"),
    };
    console.log(data);
  };
  return (
    <>
      <Box className="m-5">
        <Box>
          <Box className="text-center text-3xl font-medium uppercase text-[white]">
            Choose your topic
          </Box>
          <Box
            className="inputs flex justify-center gap-5"
            component="form"
            onSubmit={onSubmit}
          >
            <CustomInput
              required
              name="subject"
              type="text"
              className="!w-80 max-md:!w-full"
              label="Training or subject?"
              placeholder="Select training or subject"
            />
            <CustomSelect
              required
              name="topic"
              label="Choose your topic"
              formClassName="!w-80 max-md:!w-full"
              options={[
                { name: "Microsoft 365", value: "365" },
                { name: "Microsoft Azure", value: "azure" },
                { name: "Microsoft Power Platform", value: "power" },
              ]}
            />
            <CustomLoadingButton className="!mt-2 !mb-1" type="submit">
              Search
            </CustomLoadingButton>
          </Box>
        </Box>
        <TrainingSearchFilters />
      </Box>
    </>
  );
}
