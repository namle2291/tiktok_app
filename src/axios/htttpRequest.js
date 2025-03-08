import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn",
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTc0MTQwNjc1NywiZXhwIjoxNzQzOTk4NzU3LCJuYmYiOjE3NDE0MDY3NTcsImp0aSI6InVNaHM4SkFqMnJySk9xVGQiLCJzdWIiOjYzMzksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.8ulzXwlSpz8qEOV_kENXYPLk-N0jjHcjj4RO16mOG04`,
  },
});

httpRequest.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpRequest;
