import { datadogRum } from "@datadog/browser-rum";
import { envs } from "./env";

datadogRum.init({
  applicationId: envs.datadog.application_id,
  clientToken: envs.datadog.client_token,
  service: envs.datadog.service,
  sessionSampleRate: 100,
});
