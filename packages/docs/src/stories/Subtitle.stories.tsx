import { StoryObj, Meta } from "@storybook/react";
import { Subtitle, SubtitleProps } from "@busca-milhas-ui/react"; // Update the import path to your Subtitle component
import { fontSize, fonts } from "@busca-milhas-ui/tokens";

export default {
  title: "Typography/Subtitle",
  component: Subtitle,
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
    children: "Subtitle H1",
  },
} as Meta<SubtitleProps>;

export const Default: StoryObj<SubtitleProps> = {
  args: {
    children: "Subtitle1",
  },
};

export const Subtitle2: StoryObj<SubtitleProps> = {
  args: {
    children: "Subtitle2",
    isRegular: true,
  },
};
