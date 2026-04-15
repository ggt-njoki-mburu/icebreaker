import type { Meta, StoryObj } from "@storybook/react-vite";
import { NextBtn } from "@/components/NextBtn";

const meta = {
  title: "Components/NextBtn",
  component: NextBtn,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NextBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    onNext: () => alert("Next clicked"),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    onNext: () => alert("Next clicked"),
    disabled: true,
  },
};
