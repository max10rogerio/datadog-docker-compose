export const envs = {
  datadog: {
    application_id: process.env.DATADOG_APPLICATION_ID!,
    client_token: process.env.DATADOG_CLIENT_TOKEN!,
    service: process.env.DATADOG_SERVICE || "next-app",
  },
  api: {
    front_url: process.env.API_FRONT_URL || "http://localhost:3333",
    container_url: process.env.API_CONTAINER_URL || "http://api:3333",
  },
};
