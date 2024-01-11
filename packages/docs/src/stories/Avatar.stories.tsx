import { Avatar, AvatarProps } from "@busca-milhas-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Headers/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    alt: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["small", "large", "medium"],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    src: "https://github.com/savinnsk.png",
    size: "medium",
  },
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: "",
  },
};

export const WithImage: StoryObj<AvatarProps> = {};

export const WithInitials: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: "Savinnsk",
  },
};

export const Small: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: "",
    size: "small",
  },
};

export const WithImageSmall: StoryObj<AvatarProps> = {
  args: {
    size: "small",
  },
};

export const WithInitialsSmall: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: "Savinnsk",
    size: "small",
  },
};

export const Large: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    size: "large",
  },
};

export const WithImageLarge: StoryObj<AvatarProps> = {
  args: {
    size: "large",
    src: "https://github.com/savinnsk.png",
  },
};

export const WithInitialsLarge: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: "Savinnsk",
    size: "large",
  },
};
