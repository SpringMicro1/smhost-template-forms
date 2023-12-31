import React from "react";
import {
  getSubmitButtonOptions,
  SubmitButtonProps,
  GenericObjectType,
} from "@rjsf/utils";

/** The `SubmitButton` renders a button that represent the `Submit` action on a form
 */
export default function SubmitButton<T, F extends GenericObjectType = any>({
  uiSchema,
}: SubmitButtonProps<T, F>) {
  const {
    submitText,
    norender,
    props: submitButtonProps = {},
  } = getSubmitButtonOptions(uiSchema);
  if (norender) {
    return null;
  }
  return (
    <div>
      <button
        type="submit"
        {...submitButtonProps}
        className={`btn btn-primary ${submitButtonProps.className}`}
      >
        {submitText}
      </button>
    </div>
  );
}
