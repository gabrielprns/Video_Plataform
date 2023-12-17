import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../until/constants";

const selectedCategory = "New";

const SideBar = () => {
  return (
    <Stack
    direction="row"
    sx={{
      overflowY:"auto", 
      height:{sx: 'auto', md: '95%'},
      flexDirection:{md:"column"}
    }}>
      {categories.map((category)=>(
        <button className="category-btn" 
          style={{
          background: category.name === selectedCategory && "#0339fc",
          color: "white",
          }}>
          
          <span style={{ color: category.name === selectedCategory ? "white" : "#0339fc", 
          marginRight: "15px" }}>
            {category.icon}
          </span>
          
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" 
          }}>
            {category.name}
          </span>
        </button>


      ))}

    </Stack>
  )
}

export default SideBar
