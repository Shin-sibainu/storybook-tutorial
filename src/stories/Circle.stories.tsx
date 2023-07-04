import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["orange", "green", "yellow"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジ色の円です。
 */
export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};

/**
 * A simple circle component that can have different colors based on the variant prop
 */
export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};

/**
 * A simple circle component that can have different colors based on the variant prop
 */
export const YellowGreen: Story = {
  args: {
    variant: "yellow",
  },
};

/**
 * A simple circle component that can have different colors based on the variant prop
 */
export const Grouped: Story = {
  render: (args) => (
    <div style={{ padding: 10 }}>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};
