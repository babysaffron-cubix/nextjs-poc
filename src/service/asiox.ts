import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    // Get the token from wherever it is stored (e.g., localStorage, sessionStorage)
    let token = localStorage.getItem("token");

    if (!token) {
      token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzOTIyMTc1MCwianRpIjoiYzhmNWE1OTktMjc0MS00MDI2LTgxNTgtZDUzZGYzZjJmYTkyIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmJhYmFsZWFzZUBhYWRoYWFyYXBpLmlvIiwibmJmIjoxNjM5MjIxNzUwLCJleHAiOjE5NTQ1ODE3NTAsInVzZXJfY2xhaW1zIjp7InNjb3BlcyI6WyJyZWFkIl19fQ.cYpUQlYOleMfa-AOV4qrn1HSkF0qPzve6Z83wsH3JGs";
      localStorage.setItem("token", token);
    }

    // If a token exists, add it to the headers
    if (token) {
      config.headers.token = `${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response?.status === 401) {
      //Add Logic to
      //1. Redirect to login page or
      //2. Request refresh token
    }
    return Promise.resolve({
      status: "failed",
      error,
    });
  }
);

function getRequest(URL: string) {
  return axiosClient.get(`/${URL}`).then((response) => response);
}

function postRequest(URL: string, payload: object) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

function patchRequest(URL: string, payload: object) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

function deleteRequest(URL: string) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}

export { getRequest, postRequest, patchRequest, deleteRequest };
