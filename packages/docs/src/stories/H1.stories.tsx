import { StoryObj, Meta } from "@storybook/react";
import { H1, HeadingProps } from "@busca-milhas-ui/react"; // Update the import path to your Heading component
import { fontSize } from "@busca-milhas-ui/tokens";

export default {
  title: "Typography/H1",
  component: H1,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: Object.keys(fontSize),
      control: {
        type: "inline-radio",
      },
    },
    font: {
      options: ["merriweather", "sfProDisplay", "montserrat"],
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
    children: "Default H1",
  },
};

export const Head1: StoryObj<HeadingProps> = {
  args: {
    children: "Head 1",
    size: "7xl",
  },
};

export const Head2: StoryObj<HeadingProps> = {
  args: {
    children: "Head 2",
    size: "6xl",
  },
};
