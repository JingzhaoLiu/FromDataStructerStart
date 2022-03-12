import axios from "axios";

const service = axios.create({});

service.interceptors.request.use(config => {
  return config;
});

service.interceptors.response.use(response => {
  return response;
});

export default axios;
