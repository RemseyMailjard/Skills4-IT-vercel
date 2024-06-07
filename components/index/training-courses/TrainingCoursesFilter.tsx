// ShopCategory.js
import React from "react";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { Box, Collapse } from "@mui/material";
import { useRef } from "react";

export default function TrainingCoursesFilter({
  category,
  selectCategory,
  setSelectCategory,
  selectSubCategory,
  setSelectSubCategory,
}: any) {
  const { name, items, param } = category;
  const active = selectCategory === param;
  const containerRef = useRef<any>(null);
  const handleChange = () => {
    if (active) {
      setSelectCategory("");
      return;
    }
    setSelectCategory(param);
  };

  const SubFilter = ({
    item,
    selectSubCategory,
    setSelectSubCategory,
  }: any) => {
    const { name, items, param } = item;
    const subActive = selectSubCategory === param;

    const handleSubChange = () => {
      if (subActive) {
        setSelectSubCategory("");
        return;
      }
      setSelectSubCategory(param);
    };

    return (
      <Box
        onClick={handleSubChange}
        className={`flex justify-between text-lg cursor-pointer ${
          subActive && "font-bold underline decoration-brand-blue"
        } `}
      >
        {name}
      </Box>
    );
  };

  return (
    <>
      <Box
        onClick={handleChange}
        className={`flex justify-between text-lg mt-4 cursor-pointer 
        ${active && "font-bold underline decoration-brand-blue"}`}
      >
        {name}
        {active ? <KeyboardArrowDownRounded /> : <KeyboardArrowRightRounded />}
      </Box>
      <Box ref={containerRef}>
        <Collapse
          in={active}
          // container={containerRef?.current || undefined}
          mountOnEnter
          unmountOnExit
        >
          <Box component="ul" className="ml-6 mt-4">
            {items.map((item: any, index: any) => {
              return (
                <SubFilter
                  key={index}
                  item={item}
                  selectSubCategory={selectSubCategory}
                  setSelectSubCategory={setSelectSubCategory}
                />
              );
            })}
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
