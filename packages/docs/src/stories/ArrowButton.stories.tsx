import { ArrowButton, ArrowButtonProps } from "@busca-milhas-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/ArrowButton",
  component: ArrowButton,
  tags: ["autodocs"],
  args: {
    direction: "right",
  },
  argTypes: {
    direction: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
} as Meta<ArrowButtonProps>;

export const Default: StoryObj<ArrowButtonProps> = {
  args: {},
};

export const DisabledLeft: StoryObj<ArrowButtonProps> = {
  args: {
    direction: "left",
    isDisabled: true,
  },
};
