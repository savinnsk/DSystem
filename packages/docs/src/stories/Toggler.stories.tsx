import { StoryObj, Meta } from "@storybook/react";

import { Toggler, TogglerProps } from "@busca-milhas-ui/react";

export default {
  title: "Components/Toggler",
  component: Toggler,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      options: ["default", "with-label"],
      control: {
        type: "inline-radio",
      },
    },
    isChecked: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onChange: {
      action: "click",
      control: {
        type: null,
      },
    },
  },
  args: {
    kind: "default",
    disabled: false,
    isChecked: false,
  },
} as Meta<TogglerProps>;

export const Default: StoryObj = {};

export const DefaultDisabled: StoryObj = {
  args: {
    disabled: true,
  },
};

export const WithLabel: StoryObj = {
  args: {
    kind: "with-label",
  },
};

export const WithLabelDisabled: StoryObj = {
  args: {
    kind: "with-label",
    disabled: true,
  },
};
