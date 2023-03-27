"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
  isHamburgerMenuActive: false,
  reservationStartDate: "",
  reservationEndDate: "",
  numberOfAdults: 0,
  numberOfChild: 0,
  numberOfBabies: 0,
  reservationFilter: "",
};

const globalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    changeHamburgerMenuState: (state, action) => {
      state.isHamburgerMenuActive = action.payload;
    },
    changeDate: (state, action) => {
      let data = action.payload.split("*");
      state.reservationStartDate = data[0];
      state.reservationEndDate = data[1];
    },
    changeNumberOfPeople: (state, action) => {
      const type = action.payload[0];
      const operation = action.payload[1];
      if (type == "adult") {
        operation == "+"
          ? (state.numberOfAdults = state.numberOfAdults + 1)
          : (state.numberOfAdults = state.numberOfAdults - 1);
      } else if (type == "child") {
        operation == "+"
          ? (state.numberOfChild = state.numberOfChild + 1)
          : (state.numberOfChild = state.numberOfChild - 1);
      } else {
        operation == "+"
          ? (state.numberOfBabies = state.numberOfBabies + 1)
          : (state.numberOfBabies = state.numberOfBabies - 1);
      }
    },
    changeReservationFilter: (state, action) => {
      state.reservationFilter = action.payload;
    },
  },
});

export const {
  changeLang,
  changeHamburgerMenuState,
  changeDate,
  changeNumberOfPeople,
  changeReservationFilter,
} = globalState.actions;
export default globalState.reducer;
