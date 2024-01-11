import { StoryObj, Meta } from "@storybook/react";

import { Table, ITableProps } from "@busca-milhas-ui/react";

export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    columns: {
      description:
        "A propriedade columns contém como chaves obrigatórias o id (referente às chaves da prop data), label (nome a ser exibido no cabeçalho da tabela) e opicionais como align e sortable juntamente com direction.",
    },
    data: {
      description:
        "A propriedade data é referente aos dados a serem passados para popular a tabela.",
    },
  },
  args: {
    columns: [
      { id: "static1", label: "Static 1" },
      { id: "static2", label: "Static 2" },
      { id: "static3", label: "Static 3" },
      { id: "static4", label: "Static 4" },
    ],
    data: [
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
    ],
  },
} as Meta<ITableProps>;

export const DefaultTable: StoryObj<ITableProps> = {};

export const AlignTable: StoryObj<ITableProps> = {
  args: {
    columns: [
      { id: "static1", label: "Static 1" },
      { id: "static2", label: "Static 2" },
      { id: "static3", label: "Static 3", align: "right" },
      { id: "static4", label: "Static 4", align: "center" },
    ],
    data: [
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
    ],
  },
};

export const SortableTable: StoryObj<ITableProps> = {
  args: {
    columns: [
      { id: "static1", label: "Static 1", sortable: true, direction: "ASC" },
      { id: "static2", label: "Static 2", sortable: true, direction: "DSC" },
      { id: "static3", label: "Static 3", align: "right" },
      { id: "static4", label: "Static 4", align: "center" },
    ],
    data: [
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
      {
        static1: "value1",
        static2: "value2",
        static3: "value3",
        static4: "value4",
      },
    ],
  },
};
