import React, { Component, useState } from "react";
import "../styles/App.css";
import Heading from "./Heading";
import InputQuery from "./InputQuery";
import SubHeading from "./SubHeading";
import SubmitButton from "./SubmitButton";

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  );
};

export default App;

export { default as Heading } from "./Heading";
export { default as SubHeading } from "./SubHeading";
export { default as InputQuery } from "./InputQuery";
export { default as SubmitButton } from "./SubmitButton";
