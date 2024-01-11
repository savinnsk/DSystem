import { StoryObj, Meta } from "@storybook/react";
import { H2, HeadingProps } from "@busca-milhas-ui/react"; // Update the import path to your Heading component
import { fontSize, fonts } from "@busca-milhas-ui/tokens";

export default {
  title: "Typography/H2",
  component: H2,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: Object.keys(fontSize),
      control: {
        type: "inline-radio",
      },
    },
    font: {
      options: Object.keys(fonts),
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    children: "Heading H1",
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: "Default H2",
  },
};
