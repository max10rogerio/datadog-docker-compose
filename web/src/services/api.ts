import { envs } from "@/config/env";
import axios from "axios";

const makeApiUrl = () => {
  const isBrowser = typeof window !== "undefined";

  return isBrowser ? envs.api.front_url : envs.api.container_url;
};

export const api = axios.create({
  baseURL: makeApiUrl(),
});
