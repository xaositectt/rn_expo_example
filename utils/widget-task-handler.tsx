import React from "react";
import type { WidgetTaskHandlerProps } from "react-native-android-widget";
import { Widget } from "@/src/components/Widget";

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  Hello: Widget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  console.log("props", props);
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  switch (props.widgetAction) {
    case "WIDGET_ADDED":
      props.renderWidget(<Widget />);
      break;

    case "WIDGET_UPDATE":
      // Not needed for now
      break;

    case "WIDGET_RESIZED":
      // Not needed for now
      break;

    case "WIDGET_DELETED":
      // Not needed for now
      break;

    case "WIDGET_CLICK":
      // Not needed for now
      break;

    default:
      break;
  }
}
