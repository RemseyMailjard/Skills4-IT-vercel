import axiosInstance from "@/utils/api";
import TrainingCoursesDetailsHeader from "./TrainingCoursesDetailsHeader";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

interface TrainingCoursesDetailsScreenProps {
  slug: string;
}
export default function TrainingCoursesDetailsScreen(
  props: TrainingCoursesDetailsScreenProps
) {
const [loader,setLoader]=useState(false)
  const [courses,setCourses]=useState([])
const getCourseDetails=()=>{
  axiosInstance.get(`course/getCourseByCode/${props?.slug}`).then((e)=>{
    setCourses(e?.data?.data?.[0])
    setLoader(true)
   })
}

useEffect(()=>{
  getCourseDetails()
},[])
  return (
    <>
      {
        loader ?   <TrainingCoursesDetailsHeader data={courses}/> :
        <Box my={4} sx={{display:"flex",justifyContent:"center",mt:4}}>
          <CircularProgress sx={{
            color:"white"
          }}/>
        </Box>
      }
    </>
  );
}
