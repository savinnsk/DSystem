import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { theme, GlobalStyles } from "@busca-milhas-ui/react/src/styles";
import { ThemeProvider } from "styled-components";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: "default",
    Provider: ThemeProvider,
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

export default preview;
