import React from "react";
// import { taskApi } from "@services";
import { useFetchApi } from "@hooks";

function App() {
  // taskApi.getTasks().then((res) => {
  //   console.log("response", res);
  // });
  // useFetchApi("tasks.json", "POST", { title: "Convert the functions to hooks" });
  // const addTask = () => {
  //   // taskApi.addTask("Take the trash out");
  // };
  const [data] = useFetchApi("tasks.json");
  console.log(data);

  return (
    <div>
      <button> Add Task Test</button>
      <div>
        <ul>
          {Object.entries(data).map((ent) => (
            <li key={ent[0]}>{ent[1].title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
