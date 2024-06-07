import { useEffect, useState } from "react";
import axiosInstance from "@/utils/api";
import {
  Box,
  CircularProgress,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import CourseCard from "@/components/common/course-card";
import {
  CustomCircularProgress,
  CustomInput,
  CustomLoadingButton,
  CustomSelect,
} from "@/components/common";
import { useSearchParams } from "next/navigation";

const productOptions = [
  { name: "All", value: "All" },
  { name: "Microsoft Azure", value: "Microsoft Azure" },
  { name: "Windows", value: "Windows" },
  { name: "Microsoft Power Platform", value: "Microsoft Power Platform" },
  { name: "Dynamics 365", value: "Dynamics 365" },
  { name: "Microsoft 365", value: "Microsoft 365" },
  { name: "Microsoft Power BI", value: "Microsoft Power BI" },
  { name: "Security", value: "Security" },
  { name: "SQL Server", value: "SQL Server" },
];

const levelOptions = [
  { name: "All", value: "All" },
  { name: "Intermediate", value: "Intermediate" },
  { name: "Beginner", value: "Beginner" },
  { name: "Advanced", value: "Advanced" },
];

export default function TrainingCoursesCards() {
  const [courses, setCourses] = useState<any>([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<string>("All");
  const searchParams = useSearchParams();

  const getCourses = async () => {
    try {
      const response = await axiosInstance.get("course/getAllCourses");
      setCourses(response?.data?.data[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (searchParams.has("topic") && searchParams.has("level")) {
      setSelectedTopic(searchParams.get("topic") || "All");
      setSelectedSkill(searchParams.get("level") || "All");
      if (searchParams.has("search")) {
        setSearchValue(searchParams.get("search") || "");
      }
    } else {
      setSelectedTopic("All");
      setSelectedSkill("All");
    }
  }, [searchParams]);

  useEffect(() => {
    if (!loading) {
      filterCourses();
      setCurrentPage(1);
    }
  }, [loading, selectedTopic, selectedSkill, searchValue]);

  const filterCourses = () => {
    let filtered = courses;
    if (selectedTopic !== "All") {
      filtered = filtered.filter(
        (course: any) => course.Product === selectedTopic
      );
    }
    if (selectedSkill !== "All") {
      filtered = filtered.filter(
        (course: any) => course.Level === selectedSkill
      );
    }
    if (searchValue !== "") {
      filtered = filtered.filter((course: any) =>
        course.Coursetitle.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filtered);
    }
    setFilteredCourses(filtered);
  };

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };
  const handleTopicChange = (event: any) => {
    setSelectedTopic(event.target.value);
  };
  const handleSkillChange = (event: any) => {
    setSelectedSkill(event.target.value);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const displayedCourses =
    selectedTopic === "All" && selectedSkill === "All" && searchValue === ""
      ? courses.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : filteredCourses.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );

  const totalDisplayedCourses =
    selectedTopic === "All" && selectedSkill === "All" && !searchValue
      ? courses.length
      : filteredCourses.length;

  const pageCount = Math.ceil(totalDisplayedCourses / itemsPerPage);

  return (
    <Box className="training-cards-main ">
      <Box className="training-cards-main-header ">
        <Typography fontSize="28px" fontWeight="700">
          Trainings & courses
        </Typography>
      </Box>
      <Box className="training-cards-main-container ">
        {loading ? (
          <Box className="flex justify-center w-full">
            <CircularProgress className="!text-white" />
          </Box>
        ) : (
          <>
            <Box className="flex items-center flex-col">
              <Typography fontSize="24px" fontWeight="700">
                Filter Courses
              </Typography>
              <Box className="flex justify-center gap-2 w-full max-md:flex-wrap">
                <CustomInput
                  name="search"
                  type="text"
                  className="!w-80 max-md:!w-full"
                  label="Training or subject?"
                  placeholder="Select training or subject"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <CustomSelect
                  required
                  name="topic"
                  label="Choose your topic"
                  formClassName="!w-80 max-md:!w-full"
                  options={productOptions}
                  value={selectedTopic}
                  onChange={handleTopicChange}
                />
                <CustomSelect
                  required
                  name="skills"
                  label="What is your skill level?"
                  formClassName="!w-80 max-md:!w-full"
                  options={levelOptions}
                  value={selectedSkill}
                  onChange={handleSkillChange}
                />
                {/* <CustomLoadingButton
                className="!mt-2 !mb-1"
                onClick={handleApplyFilter}
              >
                Apply
              </CustomLoadingButton> */}
              </Box>
            </Box>
            <Box className="courses-main">
              {displayedCourses?.map((item: any, index: number) => {
                return <CourseCard key={index} data={item} />;
              })}
            </Box>
            <Box className="pagination-main">
              <Pagination
                count={pageCount}
                page={currentPage}
                shape="rounded"
                size="large"
                onChange={handlePageChange}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    className={`pagination-item 
                  ${
                    item.type !== "start-ellipsis" &&
                    item.type !== "end-ellipsis"
                      ? "pagination-item-hover"
                      : ""
                  } 
                  ${item.selected ? "pagination-item-selected" : ""}`}
                  />
                )}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
