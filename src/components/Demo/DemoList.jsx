import React, { useMemo } from "react";

import classes from "./DemoList.module.scss";

const DemoList = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("items are sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("DEMO LIST IS RUNNING");
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
