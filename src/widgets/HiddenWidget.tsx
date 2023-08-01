import React from "react";
import { WidgetProps, GenericObjectType } from "@rjsf/utils";

/** The `HiddenWidget` is a widget for rendering a hidden input field.
 *  It is typically used by setting type to "hidden".
 *
 * @param props - The `WidgetProps` for this component
 */
function HiddenWidget<T = any, F extends GenericObjectType = any>({
  id,
  value,
}: WidgetProps<T, F>) {
  return (
    <input
      type="hidden"
      id={id}
      value={typeof value === "undefined" ? "" : value}
    />
  );
}

export default HiddenWidget;
