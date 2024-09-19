/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import store from "@/redux/store";
import _ from "lodash";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) return response.data;
    return response;
  },
  (err) => {
    // logout a user automatically
    if (err?.response?.status === 401) {
      //   toast.error(err.response.statusText);
      //   store.dispatch(logoutUser());
      //   localforage.removeItem("authState");
      //   window.location.href = getLocalizedRoute("/login");
    } else if (err?.response?.status === 500) {
      //   toast.error("Internal server error");
    } else if (err?.response?.data?.errorMessage) {
      //   toast.error(err?.response?.data?.errorMessage);
    } else {
      if (!err?.config.url.includes("/auth") && err?.code === "ERR_NETWORK") {
        // store.dispatch(logoutUser());
        // localforage.removeItem("authState");
        // window.location.href = getLocalizedRoute("/login");
      }
      //   toast.error(err?.message);
    }

    return Promise.reject(err);
  }
);

axiosInstance.interceptors.request.use(async (config) => {
//   const { token } = store.getState().auth.authState;

//   if (token) {
    // config.headers.Authorization = token;
//   }

  const data = _.cloneDeep(_.get(config, "data", {}));
  const keysArray = Object.keys(data);
  const updatedData: any = {};

  for (const key of keysArray) {
    const item = data[key];

    if (typeof item === "string" && _.isEmpty(item)) {
      updatedData[key] = null;
    } else {
      updatedData[key] = item;
    }
  }

  config.data = updatedData;

  return config;
});

export default function request(options: any) {
  return axiosInstance(options);
}
