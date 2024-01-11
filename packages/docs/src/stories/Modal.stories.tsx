import { Modal, ModalProps } from "@busca-milhas-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "UserInterface/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      options: ["primary", "warning", "success", "danger"],
      control: { type: "radio" },
    },
    onClose: {
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
    message: "",
    children: null,
    isOpen: true,
    kind: "primary",
  },
} as Meta<ModalProps>;

export const Primary: StoryObj<ModalProps> = {
  args: {
    message: "Primary",
  },
};

export const Success: StoryObj<ModalProps> = {
  args: {
    message: "Success",
    kind: "success",
  },
};

export const Danger: StoryObj<ModalProps> = {
  args: {
    message: "Danger",
    kind: "danger",
  },
};

export const Warning: StoryObj<ModalProps> = {
  args: {
    message: "Warning",
    kind: "warning",
  },
};
