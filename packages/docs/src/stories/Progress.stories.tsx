import { StoryObj, Meta } from "@storybook/react";

import { Progress, ProgressProps } from "@busca-milhas-ui/react";

export default {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      options: ["default", "percent", "completed", "error"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    percentage: {
      control: null,
    },
  },
  args: {
    kind: "default",
    size: "md",
  },
} as Meta<ProgressProps>;

export const Default: StoryObj = {
  argTypes: {
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
  args: {
    percentage: 10,
  },
};

export const Percent: StoryObj = {
  argTypes: {
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
  args: {
    kind: "percent",
    percentage: 10,
  },
};

export const Completed: StoryObj = {
  args: {
    kind: "completed",
  },
};

export const Error: StoryObj = {
  args: {
    kind: "error",
  },
};
