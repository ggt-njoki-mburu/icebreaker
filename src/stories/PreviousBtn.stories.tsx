import type { Meta, StoryObj } from "@storybook/react-vite";
import { PreviousBtn } from "@/components/PreviousBtn";

const meta = {
  title: "Components/PreviousBtn",
  component: PreviousBtn,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PreviousBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-ignore
  args: {
    onPrevious: () => alert("Previous clicked"),
  },
};
