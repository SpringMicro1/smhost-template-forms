import React from "react";
import { GenericObjectType, getTemplate, WidgetProps } from "@rjsf/utils";

/** The `URLWidget` component uses the `BaseInputTemplate` changing the type to `url`.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function URLWidget<T = any, F extends GenericObjectType = any>(
  props: WidgetProps<T, F>
) {
  const { options, registry } = props;
  const BaseInputTemplate = getTemplate<"BaseInputTemplate", T, F>(
    "BaseInputTemplate",
    registry,
    options
  );
  return <BaseInputTemplate type="url" {...props} />;
}
