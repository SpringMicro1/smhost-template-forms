import {
  GenericObjectType,
  RJSFSchema,
  UIOptionsType,
  asNumber,
  guessType,
} from "@rjsf/utils";
import get from "lodash/get";

const nums = new Set<any>(["number", "integer"]);

/** DEPRECATED in V5, copied from V4.
 * https://raw.githubusercontent.com/rjsf-team/react-jsonschema-form/97bda160aeca8684770da6f3fed5b01b3828a1fa/packages/utils/src/processSelectValue.ts
 * Returns the real value for a select widget due to a silly limitation in the DOM which causes option change event
 * values to always be retrieved as strings. Uses the `schema` to help determine the value's true type. If the value is
 * an empty string, then the `emptyValue` from the `options` is returned, falling back to undefined.
 *
 * @param schema - The schema to used to determine the value's true type
 * @param [value] - The value to convert
 * @param [options] - The UIOptionsType from which to potentially extract the emptyValue
 * @returns - The `value` converted to the proper type
 */
export default function processSelectValue<
  T = any,
  F extends GenericObjectType = any
>(schema: RJSFSchema, value?: any, options?: UIOptionsType<T, F>) {
  const { enum: schemaEnum, type, items } = schema;
  if (value === "") {
    return options && options.emptyValue !== undefined
      ? options.emptyValue
      : undefined;
  }
  if (type === "array" && items && nums.has(get(items, "type"))) {
    return value.map(asNumber);
  }
  if (type === "boolean") {
    return value === "true";
  }
  if (nums.has(type)) {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (Array.isArray(schemaEnum)) {
    if (schemaEnum.every((x: any) => nums.has(guessType(x)))) {
      return asNumber(value);
    }
    if (schemaEnum.every((x: any) => guessType(x) === "boolean")) {
      return value === "true";
    }
  }

  return value;
}
