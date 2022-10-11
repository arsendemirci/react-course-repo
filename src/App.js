import React, { useEffect, useState } from "react";
import { Tasks, NewTask } from "@components";
import { useFetchApi } from "@hooks";
import { taskApi } from "@services";

function App() {
  const { isLoading, error, sendRequest: fetchTasks } = useFetchApi();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = (tasks) => {
      setTasks(taskApi.loadTasks(tasks));
    };
    fetchTasks({ url: "tasks.json" }, loadTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  // console.log("tasks", tasks);
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} />
    </React.Fragment>
  );
}

export default App;
