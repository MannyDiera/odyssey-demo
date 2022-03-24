import React from "react";
import { Box } from "@okta/odyssey-react";
import { withTheme } from "@okta/odyssey-react-theme";
import { theme } from "./HelloWorld.theme";
import styles from "./HelloWorld.module.css";

const HelloWorld = () => (
  <Box as="p" display="flex" alignItems="center" justifyContent="center" className={styles.root}>
    <Box as="strong" className={styles.text} color={false} fontSize={false} children="Hello World!" />
  </Box >
);

export default withTheme(
  theme,
  styles
)(HelloWorld);
