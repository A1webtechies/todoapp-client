import React from "react";
import { Link, Typography } from "@material-ui/core";

export const CopyRight = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Todo App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
