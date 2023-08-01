import React from "react";
import {
  getTemplate,
  getUiOptions,
  ArrayFieldDescriptionProps,
  GenericObjectType,
  UiSchema,
  Registry,
} from "@rjsf/utils";

/** The `ArrayFieldDescriptionTemplate` component renders a `DescriptionFieldTemplate` with an `id` derived from
 * the `idSchema`.
 *
 * @param props - The `ArrayFieldDescriptionProps` for the component
 */
export default function ArrayFieldDescriptionTemplate<
  T = any,
  F extends GenericObjectType = any
>(props: ArrayFieldDescriptionProps) {
  const { schema, idSchema, description, registry, uiSchema } = props;
  if (!description || !uiSchema) {
    return null;
  }
  const options = getUiOptions<T, F>(uiSchema as UiSchema<T, F, any>);
  const DescriptionFieldTemplate = getTemplate<
    "DescriptionFieldTemplate",
    T,
    F
  >(
    "DescriptionFieldTemplate",
    registry as unknown as Registry<T, F, any>,
    options
  );
  const id = `${idSchema.$id}__description`;
  return (
    <DescriptionFieldTemplate
      schema={schema as F}
      id={id}
      description={description}
      registry={registry as unknown as Registry<T, F, any>}
    />
  );
}
