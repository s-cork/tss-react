export type { CSSInterpolation, CSSObject, Css, Cx, CxArg } from "./types";
/** @see <https://docs.tss-react.dev/api-references> */
export { useCssAndCx } from "./cssAndCx";
export { useMergedClasses } from "./mergeClasses";
import { createMakeStyles } from "./makeStyles";
export { createMakeStyles };
import { createWithStyles } from "./withStyles";
export { createWithStyles };

/** @see <https://docs.tss-react.dev/v/v3-1/page-1/keyframes> */
export { keyframes } from "@emotion/react";

/** @see <https://docs.tss-react.dev/v/v3-1/page-1/globalstyles> */
export { GlobalStyles } from "./GlobalStyles";

/** @see <https://docs.tss-react.dev/v/v3-1/readme-1-1> */
export { getTssDefaultEmotionCache, TssCacheProvider } from "./cache";

/** @see <https://docs.tss-react.dev/v/v3-1/page-1/makestyles-usestyles> */
export function createMakeAndWithStyles<Theme>(params: {
    useTheme: () => Theme;
}) {
    return {
        ...createMakeStyles(params),
        ...createWithStyles(params),
    };
}
