import { CheckBox, CheckBoxProps } from "@busca-milhas-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  args: {
    inputValue: "1",
    label: "label",
    isChecked: false,
    isUndefined: false,
  },
  argTypes: {
    variant: {
      options: ["disabled", "error", "default"],
      control: {
        type: "inline-radio",
      },
    },
    isChecked: {
      control: {
        type: "boolean",
      },
    },
    isUndefined: {
      control: {
        type: "boolean",
      },
    },
    inputValue: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },

  },
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {
  args: {},
};

export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    variant: "disabled",
  },
};

export const Error: StoryObj<CheckBoxProps> = {
  args: {
    variant: "error",
  },
};
