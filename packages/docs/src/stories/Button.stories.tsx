import { StoryObj, Meta } from "@storybook/react";
import { FaChessBoard } from "react-icons/fa";

import { Button, ButtonProps } from "@busca-milhas-ui/react";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      options: ["primary", "secondary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
      control: {
        type: null,
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    children: "BTN CTA",
    kind: "primary",
    size: "md",
    disabled: false,
  },
} as Meta<ButtonProps>;

export const Main: StoryObj = {};

export const MainIcon: StoryObj = {
  args: {
    children: (
      <>
        <FaChessBoard />
        BTN CTA
      </>
    ),
  },
};

export const Secondary: StoryObj = {
  args: {
    kind: "secondary",
  },
};

export const SecondaryIcon: StoryObj = {
  args: {
    children: (
      <>
        <FaChessBoard />
        BTN CTA
      </>
    ),
    kind: "secondary",
  },
};
