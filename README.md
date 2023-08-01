# SpringMicroHost Template Forms

Uses [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/) and theming heavily inspired by [https://github.com/xtivia/rjsf-tailwind-daisyui-example/tree/main](https://github.com/xtivia/rjsf-tailwind-daisyui-example/tree/main)

## Usage

```tsx
import { FormProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { DaisyUIForm } from "smhost-template-forms";

function MyForm(props: FormProps) {
  return <DaisyUIForm {...props} validator={validator} schema={props.schema} />;
}
```
