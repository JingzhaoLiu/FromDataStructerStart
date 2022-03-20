import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: { "content-type": "application/json" },
});

service.interceptors.request.use(config => {
  return config;
});

service.interceptors.response.use(response => {
  return response;
});

export const Get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const Post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service
      .post(url, {
        data: data,
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
