import { axiosApi } from "@http";
class TaskApi {
  subdomain = "tasks.json";
  addTask(title) {
    axiosApi.postData(this.subdomain, { title });
  }
  getTasks() {
    return axiosApi.getData(this.subdomain);
  }
  loadTasks(tasks) {
    const loadedData = [];

    for (const key in tasks) {
      loadedData.push({ id: key, title: tasks[key].title });
    }
    return loadedData;
  }
}

export default new TaskApi();
