import type { AppProps } from "next/app";
import { DatadogBrowserRum } from "@/components/datadog/browser-rum";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DatadogBrowserRum>
      <Component {...pageProps} />;
    </DatadogBrowserRum>
  );
}
