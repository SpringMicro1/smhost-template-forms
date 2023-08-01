import React from "react";
import { GenericObjectType, getTemplate, WidgetProps } from "@rjsf/utils";

/** The `TextWidget` component uses the `BaseInputTemplate`.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function TextWidget<T = any, F extends GenericObjectType = any>(
  props: WidgetProps<T, F>
) {
  const { options, registry } = props;
  const BaseInputTemplate = getTemplate<"BaseInputTemplate", T, F>(
    "BaseInputTemplate",
    registry,
    options
  );
  return <BaseInputTemplate {...props} />;
}
