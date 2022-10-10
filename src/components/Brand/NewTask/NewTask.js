import { Card, TaskForm } from "@components";
import { useFetchApi } from "@hooks";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useFetchApi();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const createTask = (taskText, task) => {
    const generatedId = task.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, title: taskText };
    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      { url: "tasks.json", method: "POST", body: { title: taskText } },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Card>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Card>
  );
};

export default NewTask;
