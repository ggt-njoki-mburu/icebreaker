import type { Meta, StoryObj } from '@storybook/react-vite';
import { CategoryGrid } from '@/components/CategoryGrid';
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';

const meta = {
    title: 'Components/CategoryGrid',
    component: CategoryGrid,
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
} satisfies Meta<typeof CategoryGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        categories: [],
    },
};

export const SingleCategory: Story = {
    args: {
        categories: [
            { id: '1', name: 'Science', questions: [] },
        ],
    },
};

export const FewCategories: Story = {
    args: {
        categories: [
            { id: '1', name: 'Science', questions: [] },
            { id: '2', name: 'History', questions: [] },
            { id: '3', name: 'Geography', questions: [] },
        ],
    },
};

export const FullGrid: Story = {
    args: {
        categories: [
            { id: '1',  name: 'Science',        questions: [] },
            { id: '2',  name: 'History',         questions: [] },
            { id: '3',  name: 'Geography',       questions: [] },
            { id: '4',  name: 'Mathematics',     questions: [] },
            { id: '5',  name: 'Literature',      questions: [] },
            { id: '6',  name: 'Technology',      questions: [] },
            { id: '7',  name: 'Art',             questions: [] },
            { id: '8',  name: 'Music',           questions: [] },
            { id: '9',  name: 'Philosophy',      questions: [] },
            { id: '10', name: 'Economics',       questions: [] },
            { id: '11', name: 'Biology',         questions: [] },
            { id: '12', name: 'Chemistry',       questions: [] },
            { id: '13', name: 'Physics',         questions: [] },
            { id: '14', name: 'Psychology',      questions: [] },
            { id: '15', name: 'Political Science', questions: [] },
        ],
    },
};
