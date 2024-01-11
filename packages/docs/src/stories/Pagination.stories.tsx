import {
  Pagination,
  PaginationProps,
} from "@busca-milhas-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "UserInterface/Pagination",
  component: Pagination,
  tags: ["autodocs"],

  args: {
    pages: 4,
    currentPage: 1,
    variant: "default",
  },

  argTypes: {
    variant: {
      options: ["default", "line", "button"],
      control: { type: "radio" },
      defaultValue: "default",
    },
    onButton: {
      action: "click",
      control: {
        type: null,
      },
    },
    onPage: {
      action: "click",
      control: {
        type: null,
      },
    },
  },
} as Meta<PaginationProps>;

export const Default: StoryObj<PaginationProps> = {
  args: {},
};

export const Line: StoryObj<PaginationProps> = {
  args: {
    variant: "line",
  },
};

export const Button: StoryObj<PaginationProps> = {
  args: {
    variant: "button",
  },
};
