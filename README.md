# SpringMicroHost Template Forms

Uses [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/) and theming heavily inspired by [https://github.com/xtivia/rjsf-tailwind-daisyui-example/tree/main](https://github.com/xtivia/rjsf-tailwind-daisyui-example/tree/main)

## Usage

```tsx
import { FormProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { Form } from "smhost-template-forms";

function MyForm(props: FormProps) {
  return <Form {...props} validator={validator} schema={props.schema} />;
}
```
