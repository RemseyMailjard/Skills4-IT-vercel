import { CustomLink } from "@/components/common";
import { Box, Typography } from "@mui/material";
import React from "react";
import FBIcon from "@/public/icons/Facebook.svg";
import TWIcon from "@/public/icons/Twitter.svg";
import IGIcon from "@/public/icons/Instagram.svg";
import LIIcon from "@/public/icons/LinkedIn.svg";

export default function Footer() {
  const footerData = [
    {
      heading: "Useful links",
      links: [
        { name: "Home", to: "#" },
        { name: "Over Ons", to: "#" },
        { name: "Contact ", to: "#" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { name: "Phone: +639190218", to: "tel:+639190218" },
        {
          name: "Email: info@skills4-it.nl",
          to: "mailto:info@skills4-it.nl",
        },
        { name: "whatsapp ", to: "#" },
      ],
    },
    {
      heading: "Details",
      links: [
        { name: "Training", to: "training-courses" },
        { name: "Events", to: "#" },
        { name: "Gallery", to: "#" },
      ],
    },
  ];
  return (
    <Box
      component="footer"
      className="layout-footer text-white shadow-[0px_3px_10px] shadow-black"
    >
      <Box className="border-b border-black">
        <Box className="container px-5 py-8 flex flex-wrap mx-auto items-center justify-center">
          <Box className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <Box className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm ">
                To Register Yourself
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                id="footer-field"
                name="footer-field"
                className="w-full bg-white  rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </Box>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Register
            </button>
            <p className=" text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
              NEWSLETTERS :
              <br className="lg:block hidden" />
              Receive 5 useful links to the best IT learning resources every
              week
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="container px-5 py-24 mx-auto flex">
        <Box className=" py-4 px-5 flex flex-wrap flex-1 flex-col sm:flex-row">
          <Box className="logo_text justify-center m-5 text-white">
            Skills<Box component="span">4-</Box>IT
          </Box>
        </Box>
        <Box className="flex flex-wrap flex-1">
          {footerData.map((footData) => {
            return (
              <Box className=" px-4">
                <h2 className="font-bold text-md mb-3">{footData.heading}</h2>
                <nav className="list-none ">
                  {footData.links.map((item, index) => (
                    <li key={index}>
                      <CustomLink href={item.to}>{item.name}</CustomLink>
                    </li>
                  ))}
                </nav>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="border-t border-b border-black bg-[#00000036]">
        <Box className=" px-5 py-8 container mx-auto flex justify-between items-center">
          <Box>
            <Typography>
              Copyright ©2024 All rechten voorbehouden aan Skills4-IT
            </Typography>
          </Box>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto gap-3">
            <CustomLink>
              <FBIcon />
            </CustomLink>
            <CustomLink>
              <TWIcon />
            </CustomLink>
            <CustomLink>
              <IGIcon />
            </CustomLink>
            <CustomLink>
              <LIIcon />
            </CustomLink>
          </span>
        </Box>
      </Box>
    </Box>
  );
}
