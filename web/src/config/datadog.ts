import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";
import { envs } from "./env";

export const startDatadogBrowserRum = () => {
  console.log("DatadogBrowserRum");
  datadogRum.init({
    ...envs.datadog.browserRum,
    env: envs.env,
    sessionSampleRate: 100,
    premiumSampleRate: 100,
    trackUserInteractions: true,
    defaultPrivacyLevel: "mask-user-input",
  });

  datadogRum.startSessionReplayRecording();
  datadogRum.startView();
};

export const startDatadogBrowserLogs = () => {
  console.log("DatadogBrowserLogs");
  datadogLogs.init({
    ...envs.datadog.browserLogs,
    env: envs.env,
    service: envs.datadog.service,
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
  });
};
