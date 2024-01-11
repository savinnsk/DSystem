import { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@busca-milhas-ui/react"; // Update the import path to your Text component
import { fontSize, fonts } from "@busca-milhas-ui/tokens";

export default {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: Object.keys(fontSize),
      control: {
        type: "inline-radio",
      },
    },
    font: {
      options: Object.keys(fonts),
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fugit iste esse nemo vitae amet doloremque harum quaerat autem, quos distinctio atque ducimus rem minima nobis molestias placeat voluptate nihil!",
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const Body2: StoryObj<TextProps> = {
  args: {
    isBold: true,
    underline: false,
    size: "lg",
  },
};

export const Body3: StoryObj<TextProps> = {
  args: {
    size: "md",
    underline: false,
  },
};

export const Body4: StoryObj<TextProps> = {
  args: {
    size: "md",
    isBold: true,
    underline: false,
  },
};

export const Caption1: StoryObj<TextProps> = {
  args: {
    size: "sm",
    underline: false,
  },
};

export const Caption2: StoryObj<TextProps> = {
  args: {
    size: "sm",
    isBold: true,
    underline: false,
  },
};

export const Caption3: StoryObj<TextProps> = {
  args: {
    size: "xxs",
    underline: false,
  },
};

export const Caption4: StoryObj<TextProps> = {
  args: {
    size: "xxs",
    isBold: true,
    underline: false,
  },
};

export const button1: StoryObj<TextProps> = {
  args: {
    children: "button 1",
    size: "md",
    font: "montserrat",
  },
};

export const button2: StoryObj<TextProps> = {
  args: {
    children: "button2",
    size: "sm",
    font: "montserrat",
  },
};

export const button3: StoryObj<TextProps> = {
  args: {
    children: "button3",
    size: "md",
    isBold: true,
    font: "montserrat",
  },
};

export const button4: StoryObj<TextProps> = {
  args: {
    children: "button4",
    size: "sm",
    isBold: true,
    font: "montserrat",
  },
};

export const PlaceHolder: StoryObj<TextProps> = {
  args: {
    size: "lg",
    placeHolder: true,
  },
};
