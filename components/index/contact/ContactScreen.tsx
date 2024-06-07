"use client";
import { CustomInput, CustomLoadingButton } from "@/components/common";
import { CustomTextArea } from "@/components/common/custom-inputs/CustomInputs";
import { Box, Typography } from "@mui/material";

export default function ContactScreen() {
  return (
    <Box className="text-gray-600 body-font relative">
      <Box className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <Box className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504814.632727164!2d2.6398484262055306!3d52.186908843042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNetherlands!5e0!3m2!1sen!2s!4v1714299949803!5m2!1sen!2s"
          />
          <Box className="bg-white w-full relative flex flex-wrap py-6 rounded shadow-md">
            
            <Box className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <Typography className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </Typography>
              <a className="text-indigo-500 leading-relaxed">
                info@skills4-it.nl
              </a>
              <Typography className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </Typography>
              <Typography className="leading-relaxed">+31 639190218</Typography>
            </Box>
          </Box>
        </Box>
        <Box className=" p-5 rounded-[10px] lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
          <Typography className="!text-gray-900 !text-lg mb-1 font-medium title-font">
            Contact details
          </Typography>
          
          <CustomInput type="text" label="Name" placeholder="Enter you name" />
          <CustomInput
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomTextArea minRows={2} label="Message" />
          <CustomLoadingButton>Submit</CustomLoadingButton>
          <Typography className="text-xs text-gray-500 mt-3">
            After completing your form you will receive a response within 24
            hours.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
