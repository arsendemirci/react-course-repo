import { Card as Section, TaskForm } from "@components";
import { useAxiosApi } from "@hooks";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useAxiosApi();

  const createTask = (taskText, taskData) => {
    console.log("taskText", taskText);
    console.log("taskData", taskData);
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, title: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "tasks.json",
        method: "POST",
        body: { title: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
