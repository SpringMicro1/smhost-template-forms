import React, { FocusEvent, useCallback } from "react";
import { WidgetProps, GenericObjectType } from "@rjsf/utils";

/** The `TextareaWidget` is a widget for rendering input fields as textarea.
 *
 * @param props - The `WidgetProps` for this component
 */
function TextareaWidget<T = any, F extends GenericObjectType = any>({
  id,
  name,
  options = {},
  placeholder,
  value,
  required,
  disabled,
  readonly,
  autofocus = false,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps<T, F>) {
  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) =>
      onChange(value === "" ? options.emptyValue : value),
    [onChange, options.emptyValue]
  );

  const handleBlur = useCallback(
    ({ target: { value } }: FocusEvent<HTMLTextAreaElement>) =>
      onBlur(id, value),
    [onBlur, id]
  );

  const handleFocus = useCallback(
    ({ target: { value } }: FocusEvent<HTMLTextAreaElement>) =>
      onFocus(id, value),
    [id, onFocus]
  );

  return (
    <textarea
      id={id}
      name={name}
      className="textarea textarea-bordered"
      value={value ? value : ""}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
      rows={options.rows}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
    />
  );
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {},
};

export default TextareaWidget;
