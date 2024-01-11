import { StoryObj, Meta } from "@storybook/react";
import { Tooltip, TooltipProps } from "@busca-milhas-ui/react"; // Update the import path to your ToolTip component

export default {
  title: "Typography/ToolTip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "inline-radio" },
    },
    text: {
      control: { type: "text" },
    },
    isVisible: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Lorem",
    text: "ipsum",
    kind: "bottom",
    isVisible: true,
  },
} as Meta<TooltipProps>;

export const Default: StoryObj<TooltipProps> = {};

export const Top: StoryObj<TooltipProps> = {
  args: {
    kind: "top",
  },
};

export const Left: StoryObj<TooltipProps> = {
  args: {
    kind: "left",
  },
};

export const Right: StoryObj<TooltipProps> = {
  args: {
    kind: "right",
  },
};
