import { StoryObj, Meta } from "@storybook/react";
import { H3, HeadingProps } from "@busca-milhas-ui/react"; // Update the import path to your Heading component
import { fontSize, fonts } from "@busca-milhas-ui/tokens";

export default {
  title: "Typography/H3",
  tags: ["autodocs"],
  component: H3, // Make sure this is of type ComponentType<any>
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
    children: "Heading H3",
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: "Default H3",
  },
};
