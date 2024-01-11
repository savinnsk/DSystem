import { createGlobalStyle } from "styled-components";
import {
  colors,
  fontSize,
  fontWeight,
  fonts,
  lineHeight,
  radii,
  space,
} from "@busca-milhas-ui/tokens";

type Colors = typeof colors;
type FontSizes = typeof fontSize;
type FontWeight = typeof fontWeight;
type Fonts = typeof fonts;
type Radii = typeof radii;
type LineHeight = typeof lineHeight;
type Space = typeof space;

type Theme = {
  colors: Colors;
  fontSizes: FontSizes;
  fontWeight: FontWeight;
  fonts: Fonts;
  radii: Radii;
  lineHeight: LineHeight;
  space: Space;
};

const GlobalStyles = createGlobalStyle`
  /* Your global styles go here */
`;

const theme: Theme = {
  colors,
  fontSizes: fontSize,
  fontWeight,
  fonts,
  radii,
  lineHeight,
  space,
};

export { GlobalStyles, theme };
