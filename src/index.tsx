import widgets from "./widgets";
import templates from "./templates";
import fields from "./fields";
import { ThemeProps, withTheme } from "@rjsf/core";

export const rjsfDaisyUiTheme: ThemeProps = {
  fields,
  templates,
  widgets,
};

export const DaisyUIForm = withTheme(rjsfDaisyUiTheme);
