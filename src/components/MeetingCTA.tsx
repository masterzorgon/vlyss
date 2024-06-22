"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const MeetingCTA = ({ children }: any) => {
    useEffect(() => {
        (async function () {
          const cal = await getCalApi({});
          cal("floatingButton", { "calLink": "hello-vlyss/15min", "config": { "layout": "month_view" }, "buttonColor": "#e087dd", "buttonTextColor": "#fff", "hideButtonIcon": false, "buttonText": "Book a Meeting" });
          cal("ui", { "theme": "dark", "styles": { "branding": { "brandColor": "#e087dd" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
      }, [])

      return (
        <div>
            {children}
        </div>
      )
};