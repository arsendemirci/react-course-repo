import React, { useState, useCallback, useMemo } from "react";

import { Button, DemoOutput, DemoList } from "@components";

import "./App.scss";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  console.log("APPP RUNNING");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prev) => !prev);
  };
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <h1>Hi There</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler} className={`${allowToggle ? "red" : "green"}`}>
        {`${allowToggle ? "Disable" : "Enable"}`} Toggling
      </Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>

      <DemoList title={listTitle} items={listItems}></DemoList>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
