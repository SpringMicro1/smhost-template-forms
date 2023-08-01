import React from "react";
import { getTemplate, WidgetProps, GenericObjectType } from "@rjsf/utils";

/** The `PasswordWidget` component uses the `BaseInputTemplate` changing the type to `password`.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function PasswordWidget<
  T = any,
  F extends GenericObjectType = any
>(props: WidgetProps<T, F>) {
  const { options, registry } = props;
  const BaseInputTemplate = getTemplate<"BaseInputTemplate", T, F>(
    "BaseInputTemplate",
    registry,
    options
  );
  return <BaseInputTemplate type="password" {...props} />;
}
