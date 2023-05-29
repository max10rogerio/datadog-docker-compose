export const envs = {
  env: process.env.NODE_ENV || "development",
  datadog: {
    application_id: process.env.DATADOG_APPLICATION_ID!,
    client_token: process.env.DATADOG_CLIENT_TOKEN!,
    service: process.env.DATADOG_SERVICE! || "web",
    browserRum: {
      applicationId:
        process.env.NEXT_PUBLIC_DATADOG_BROWSER_RUM_APPLICATION_ID!,
      clientToken: process.env.NEXT_PUBLIC_DATADOG_BROWSER_RUM_CLIENT_TOKEN!,
      site:
        process.env.NEXT_PUBLIC_DATADOG_BROWSER_RUM_SITE! ||
        "us5.datadoghq.com",
      service: process.env.NEXT_PUBLIC_DATADOG_BROWSER_RUM_SERVICE! || "web",
      version: process.env.NEXT_PUBLIC_DATADOG_BROWSER_RUM_VERSION! || "1.0.0",
    },
    browserLogs: {
      clientToken: process.env.NEXT_PUBLIC_DATADOG_BROWSER_LOGS_CLIENT_TOKEN!,
      site: process.env.NEXT_PUBLIC_DATADOG_BROWSER_LOGS_SITE!,
    },
  },
  api: {
    front_url: process.env.API_FRONT_URL! || "http://localhost:3333",
    container_url: process.env.API_CONTAINER_URL! || "http://api:3333",
  },
};
