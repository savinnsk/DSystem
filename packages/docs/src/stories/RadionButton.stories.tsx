import { RadioButton, RadioButtonProps } from "@busca-milhas-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  args: {
    label: "",
    isChecked: false,
  },
  argTypes: {
    variant: {
      options: ["disabled", "error", "primary"],
      control: {
        type: "inline-radio",
      },
    },
    isChecked: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<RadioButtonProps>;

export const Default: StoryObj<RadioButtonProps> = {
  args: {},
};

export const Disabled: StoryObj<RadioButtonProps> = {
  args: {
    variant: "disabled",
  },
};

export const Primary: StoryObj<RadioButtonProps> = {
  args: {
    variant: "primary",
  },
};

export const Error: StoryObj<RadioButtonProps> = {
  args: {
    variant: "error",
  },
};

export const WithLabel: StoryObj<RadioButtonProps> = {
  args: {
    label: "With label",
  },
};
