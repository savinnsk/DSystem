import { StoryObj, Meta } from "@storybook/react";

import { Link, LinkProps } from "@busca-milhas-ui/react";

export default {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      options: ["default", "select", "disabled"],
      control: {
        type: "inline-radio",
      },
    },
    options: {
      options: ["link", "inline", "background"],
      control: {
        type: "inline-radio",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    kind: "default",
    options: "link",
    href: "",
    children: "Não selecionado",
  },
} as Meta<LinkProps>;

export const Default: StoryObj = {};

export const DefaultLine: StoryObj<LinkProps> = {
  args: {
    options: "inline",
  },
};

export const DefaultBackground: StoryObj<LinkProps> = {
  args: {
    options: "background",
  },
};

export const Select: StoryObj = {
  args: {
    kind: "select",
    children: "Selecionado",
  },
};

export const SelectLine: StoryObj<LinkProps> = {
  args: {
    kind: "select",
    options: "inline",
    children: "Selecionado",
  },
};

export const SelectBackground: StoryObj<LinkProps> = {
  args: {
    kind: "select",
    options: "background",
    children: "Selecionado",
  },
};

export const Disabled: StoryObj<LinkProps> = {
  args: {
    kind: "disabled",
    children: "Desabilitado",
  },
};

export const DisabledLine: StoryObj<LinkProps> = {
  args: {
    kind: "disabled",
    options: "inline",
    children: "Desabilitado",
  },
};

export const DisabledBackground: StoryObj<LinkProps> = {
  args: {
    kind: "disabled",
    options: "background",
    children: "Desabilitado",
  },
};
