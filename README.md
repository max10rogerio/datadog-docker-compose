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
- Paste your api key in docker-compose -> datadog -> environments -> DD_API_KEY

## **Let's go**

```bash
docker-compose up
```

## **Link**:

- https://docs.datadoghq.com/integrations/postgres/?tab=docker
- https://docs.datadoghq.com/agent/guide/compose-and-the-datadog-agent/
