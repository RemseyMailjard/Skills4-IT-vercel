import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import FBIcon from "@/public/icons/Facebook.svg";
import TWIcon from "@/public/icons/Twitter.svg";
import MSGIcon from "@/public/icons/Message.svg";
import { CustomLink } from "@/components/common";
import HomeHeading from "./HomeHeading";

export default function HomeTeam() {
  const teamData = [
    {
      name: "Remsey Mailjard",
      img: "/images/remseyProfile.jpg",
      profession: "IT trainer and developer",
      links: ["#", "#", "#"],
    },
    {
      name: "Maaike",
      img: "/images/newmaaike.jpg",
      profession: "Java Developer and trainer",
      links: ["#", "#", "#"],
    },
  ];
  return (
    <Box className="text-white body-font p-5">
      <HomeHeading
        title="The experienced trainers and consultants"
        subtitle="All trainers are certified trainers with extensive practical
          experience."
      />
      <Box className="px-5 py-24 mx-auto flex flex-wrap justify-center">
        {teamData.map((data, index) => {
          return (
            <Box
              key={index}
              className="p-4 h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <Image
                width={1000}
                height={1000}
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={data.img}
              />
              <Box className="flex-grow text-center m-2">
                <h2 className="title-font font-medium text-lg">{data.name}</h2>
                <h3 className=" mb-3">{data.profession}</h3>

                <span className="inline-flex gap-2">
                  <CustomLink to={data.links[0]}>
                    <FBIcon />
                  </CustomLink>
                  <CustomLink to={data.links[1]}>
                    <TWIcon />
                  </CustomLink>
                  <CustomLink to={data.links[2]}>
                    <MSGIcon />
                  </CustomLink>
                </span>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
