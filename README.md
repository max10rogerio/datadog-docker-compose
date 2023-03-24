# **Datadog Postgres**

Example with docker-compose using datadog

## Why?

Idk, just like for learnings purposes

## **Steps**

- Create datadog account
- Add postgres integrations
  - In datadog UI, go to Integrations -> integrations
  - Add postgres
- Create an api key
- copy datadog.env.example to datadog.env
- Paste your api key in datadog.env -> DD_API_KEY

## **Let's go**

```bash
docker-compose up
```

## **Link**:

- https://docs.datadoghq.com/integrations/postgres/?tab=docker
- https://docs.datadoghq.com/agent/guide/compose-and-the-datadog-agent/
- https://github.com/vercel/next.js/discussions/16600
