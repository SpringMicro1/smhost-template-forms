import React from "react";
import {
  getTemplate,
  getUiOptions,
  ArrayFieldTitleProps,
  TemplatesType,
  GenericObjectType,
  Registry,
  UiSchema,
} from "@rjsf/utils";

/** The `ArrayFieldTitleTemplate` component renders a `TitleFieldTemplate` with an `id` derived from
 * the `idSchema`.
 *
 * @param props - The `ArrayFieldTitleProps` for the component
 */
export default function ArrayFieldTitleTemplate<
  T = any,
  F extends GenericObjectType = any
>(props: ArrayFieldTitleProps) {
  const { schema, idSchema, title, uiSchema, required, registry } = props;
  if (!title) {
    return null;
  }
  const options = getUiOptions<T, F>(
    uiSchema as unknown as UiSchema<T, F, any>
  );
  const TitleFieldTemplate: TemplatesType<T, F>["TitleFieldTemplate"] =
    getTemplate<"TitleFieldTemplate", T, F>(
      "TitleFieldTemplate",
      registry as unknown as Registry<T, F, any>,
      options
    );
  const id = `${idSchema.$id}__title`;
  return (
    <TitleFieldTemplate
      schema={schema as unknown as F}
      id={id}
      title={title}
      required={required}
      uiSchema={uiSchema as unknown as UiSchema<T, F, any>}
      registry={registry as unknown as Registry<T, F, any>}
    />
  );
}
