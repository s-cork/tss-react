import { useTheme } from "@mui/material/styles";
import { createMakeAndWithStyles } from "./index";

/** @see <https://docs.tss-react.dev/v/v3-1/readme-1> */
export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({
    useTheme,
});
