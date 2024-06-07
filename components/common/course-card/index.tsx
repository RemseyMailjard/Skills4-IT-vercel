import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { CustomLink, CustomLoadingButton } from "..";
import { EventAvailable, PriceCheck } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  data?: any;
}
const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  const router = useRouter();
  const hanldleRoute = () => {
    router.push(`/training-courses-details/${data?.Coursecode}`);
  };

  return (
    <Box className="!w-1/4 max-xl:!w-1/3 max-lg:!w-1/2 max-sm:!w-full p-2">
      <Box className="!p-4 !rounded-md shadow-[rgba(0,0,0,0.24)_0px_3px_8px] !bg-[white] min-h-[460px] flex flex-col">
        <Box className=" relative h-48 rounded overflow-hidden flex flex-col items-center">
          <Image
            width={100}
            height={100}
            alt="ecommerce"
            className="object-cover object-center w-auto  h-full block"
            src="images/courseimg.svg"
          />
        </Box>
        <Box className="mt-4 flex flex-col gap-[15px] flex-1 justify-between">
          <Box className="flex flex-col gap-[15px]">
            <Box>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {data?.Product}
              </h3>
              <h2 className=" title-font text-lg cursor-pointer text-[#2196F3] font-semibold">
                {data?.Coursetitle} - {data?.Coursecode}
              </h2>
            </Box>
            <Box className="flex justify-between gap-1">
              <Box className=" w-[100px] flex gap-2.5 items-center">
                <EventAvailable />
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Duration: {data?.Duration_in_days} Day
                </h3>
              </Box>
              <Box className=" w-[130px] flex gap-2.5 items-center">
                <PriceCheck />
                <h3 className="font-bold text-[large] text-[black] tracking-widest title-font mb-1">
                  €{data?.Price}
                </h3>
              </Box>
            </Box>
          </Box>
          <CustomLoadingButton className="mt-1 " onClick={hanldleRoute}>
            View training
          </CustomLoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;
