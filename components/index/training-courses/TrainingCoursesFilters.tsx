import { CustomLinkButton, CustomLoadingButton } from "@/components/common";
import { Box } from "@mui/material";
import React from "react";

export default function TrainingCoursesSearchFilters() {
  const searchFilters = [
    {
      courseFilter: "Microsoft Azure",
    },
    {
      courseFilter: "Microsoft 365",
    },
    {
      courseFilter: "Power Apps",
    },
    {
      courseFilter: "Power BI",
    },
    {
      courseFilter: "Exel",
    },
    {
      courseFilter: "Web Development",
    },
  ];
  return (
    <>
      <Box className="flex justify-center gap-5 flex-wrap m-2.5">
        {searchFilters.map((searchData) => {
          return (
            <CustomLoadingButton>{searchData.courseFilter}</CustomLoadingButton>
          );
        })}
      </Box>
    </>
  );
}
