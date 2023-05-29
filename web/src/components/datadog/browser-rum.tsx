import { PropsWithChildren, useEffect, useRef } from "react";
import {
  startDatadogBrowserLogs,
  startDatadogBrowserRum,
} from "@/config/datadog";

export const DatadogBrowserRum = (props: PropsWithChildren) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      startDatadogBrowserRum();
      startDatadogBrowserLogs();
    }
  }, []);

  return <>{props.children}</>;
};
