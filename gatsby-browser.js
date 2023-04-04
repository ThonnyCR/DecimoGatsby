import React from "react";
import { ScrollProvider } from "./src/contexts/ScrollContext";

//wrapRootElement is useful to set up any context providers that will wrap your application.
export const wrapRootElement = ({ element }) => {
  return <ScrollProvider>{element}</ScrollProvider>;
};