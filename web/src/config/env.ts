export const envs = {
  datadog: {
    application_id: process.env.DATADOG_APPLICATION_ID!,
    client_token: process.env.DATADOG_CLIENT_TOKEN!,
    service: process.env.DATADOG_SERVICE || "next-app",
  },
};
