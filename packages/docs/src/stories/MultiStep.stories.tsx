import { StoryObj, Meta } from "@storybook/react";
import { MultiStep, MultiStepProps } from "@busca-milhas-ui/react"; // Update the import path to your MultiStep component

export default {
  title: "UserInterface/MultiStep",
  component: MultiStep,
  tags: ["autodocs"],
} as Meta<MultiStepProps>;

export const Default: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 1,
    steps: 4,
    label: "etapa",
  },
};
