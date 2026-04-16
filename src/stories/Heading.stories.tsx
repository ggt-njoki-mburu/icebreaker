import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@/components/Heading';

const meta = {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        children: 'The quick brown fox',
    },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: { level: 1 },
};

export const H2: Story = {
    args: { level: 2 },
};

export const H3: Story = {
    args: { level: 3 },
};

export const H4: Story = {
    args: { level: 4 },
};

export const H5: Story = {
    args: { level: 5 },
};

export const H6: Story = {
    args: { level: 6 },
};

export const AllLevels: Story = {
    // added args **required** to prevent Storybook from reusing the default args and rendering only H1
  args: {
    level: 1,
  },
    render: () => (
        <div className="flex flex-col gap-4">
            <Heading level={1}>H1 — The quick brown fox</Heading>
            <Heading level={2}>H2 — The quick brown fox</Heading>
            <Heading level={3}>H3 — The quick brown fox</Heading>
            <Heading level={4}>H4 — The quick brown fox</Heading>
            <Heading level={5}>H5 — The quick brown fox</Heading>
            <Heading level={6}>H6 — The quick brown fox</Heading>
        </div>
    ),
};
