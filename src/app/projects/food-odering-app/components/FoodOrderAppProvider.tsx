"use client";
import { store } from "@/app/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const FoodOrderAppProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default FoodOrderAppProvider;
