import { CircularProgress } from "@mui/material";
import React from "react";

const InitialLoading = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      {/* <CircularProgress color="success" /> */}
      {/* /* From Uiverse.io by JkHuger /  */}
      <div class="loader">
        <div class="square" id="sq1"></div>
        <div class="square" id="sq2"></div>
        <div class="square" id="sq3"></div>
        <div class="square" id="sq4"></div>
        <div class="square" id="sq5"></div>
        <div class="square" id="sq6"></div>
        <div class="square" id="sq7"></div>
        <div class="square" id="sq8"></div>
        <div class="square" id="sq9"></div>
      </div>
    </div>
  );
};

export default InitialLoading;
