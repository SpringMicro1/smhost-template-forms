import React, { useCallback, useEffect } from "react";
import { getTemplate, WidgetProps, GenericObjectType } from "@rjsf/utils";
// @ts-ignore
import DatePicker from "react-datepicker";

/** The `DateWidget` component uses the `BaseInputTemplate` changing the type to `date` and transforms
 * the value to undefined when it is falsy during the `onChange` handling.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function DateWidget<T = any, F extends GenericObjectType = any>(
  props: WidgetProps<T, F>
) {
  const { onChange } = props;

  const handleChange = useCallback(
    (selectedDate: Date) => {
      onChange(selectedDate?.toISOString().split("T")[0] || undefined);
    },
    [onChange]
  );

  const getValue = () => {
    const offset = new Date().getTimezoneOffset();
    return props.value ? new Date(`${props.value}T19:00:00.${offset}Z`) : null;
  };

  return (
    <DatePicker
      selected={getValue()}
      className="w-full input input-bordered"
      onChange={handleChange}
    />
  );
}
