import React from "react";

const MyParagraph = (props) => {
  console.log("MYParagrapgh Running");
  return <p>{props.children}</p>;
};

export default MyParagraph;
