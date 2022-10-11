import React, { useState, useEffect } from "react";
import { useAxiosApi } from "@hooks";
import { taskApi } from "@services";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: getTasks } = useAxiosApi();

  useEffect(() => {
    const loadTasks = (tasks) => {
      setTasks(taskApi.loadTasks(tasks));
    };
    getTasks({ url: "tasks.json" }, loadTasks);
  }, [getTasks]);
  return (
    <React.Fragment>
      <div>Welcome To React</div>
      <ul>
        {isLoading && <p>Loading Data Please Wait...</p>}
        {!isLoading && tasks.length
          ? tasks.map((task) => <li key={task.id}>{task.title}</li>)
          : null}
        {!isLoading && error && <p>{error}</p>}
      </ul>
    </React.Fragment>
  );
}

export default App;
