import React from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default ({ children }) => (
  <StylesProvider jss={jss}>
    {children}
  </StylesProvider>
);
