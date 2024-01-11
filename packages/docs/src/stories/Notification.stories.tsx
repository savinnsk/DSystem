import { Notification, NotificationProps } from "@busca-milhas-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "UserInterface/Notification",
  component: Notification,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "warning", "success", "danger"],
      control: { type: "radio" },
    },
    onClose: {
      action: "click",
      control: {
        type: null,
      },
    },
  },
  args: {
    message: "",
    isOpen: true,
    variant: "primary",
  },
} as Meta<NotificationProps>;

export const Primary: StoryObj<NotificationProps> = {
  args: {
    message: "Primary, chamada curta, opção para fechar",
  },
};

export const Success: StoryObj<NotificationProps> = {
  args: {
    message: "Success, chamada curta, opção para fechar",
    variant: "success",
  },
};

export const Danger: StoryObj<NotificationProps> = {
  args: {
    message: "Danger, chamada curta, opção para fechar",
    variant: "danger",
  },
};

export const Warning: StoryObj<NotificationProps> = {
  args: {
    message: "Warning, chamada curta, opção para fechar",
    variant: "warning",
  },
};
