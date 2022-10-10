import { axiosApi } from "@http";
class TaskApi {
  subdomain = "tasks.json";
  addTask(title) {
    axiosApi.postData(this.subdomain, { title });
  }
  getTasks() {
    return axiosApi.getData(this.subdomain);
  }
}

export default new TaskApi();
