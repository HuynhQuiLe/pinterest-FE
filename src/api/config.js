import axios from "axios";
import { userLocalStorage } from "./localStorage";
import { store } from "../redux/configStore";
import { setLoadingOff, setLoadingOn } from "../redux/loadingSlice";
import { authSer } from "./api";
import { notify } from "../config/toast/toast";

const token = userLocalStorage.get() || null;

export const BASE_URL = "http://localhost:8888/";
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    token,
  },
});

https.interceptors.request.use(
  (config) => {
    store.dispatch(setLoadingOn());
    return config;
  },
  (err) => {
    store.dispatch(setLoadingOff());
    return Promise.reject(err);
  }
);

https.interceptors.response.use(
  (res) => {
    store.dispatch(setLoadingOff());
    return res;
  },
  (err) => {
    store.dispatch(setLoadingOff());
    if (err.response.data.content === "TokenExpiredError") {
      // cal api refresh
      console.log("call refresh");
      authSer
        .refreshToken()
        .then((result) => {
          if (result.data.message === "LOGIN_AGAIN") {
            console.log("LOGIN_AGAIN");
            return;
          }
          userLocalStorage.set(result.data.content);
          window.location.reload();
        })
        .catch((error) => {
          //goi log out
          authSer
            .logout()
            .then(({ data }) => {
              notify.success(data.message);
              userLocalStorage.remove();
            })
            .catch((err) => {
              notify.error(err.response.data.message);
            });

          notify.error(error.response.data.message);
        });
    }
    return Promise.reject(err);
  }
);
