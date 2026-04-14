import type { Meta, StoryObj } from '@storybook/react-vite';
import { CategoryCard } from '@/components/CategoryCard';
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';

const meta = {
    title: 'Components/CategoryCard',
    component: CategoryCard,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const router = createRouter({
                history: createMemoryHistory(),
                routeTree: createRootRoute({
                    component: Story,
                }),
            })
            return (
                <RouterProvider router={router} />
            )
        },
    ],
} satisfies Meta<typeof CategoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        category: {
            id: '1',
            title: 'Category 1',
            questions: []
        }
    }
}