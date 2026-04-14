import type { Meta, StoryObj } from '@storybook/react-vite';
import { Categories } from '@/components/Categories';
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';

const meta = {
    title: 'Components/Categories',
    component: Categories,
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
} satisfies Meta<typeof Categories>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        categories: [],
    },
};

export const FewCategories: Story = {
    args: {
        categories: [
            { id: '1', title: 'Science', questions: [] },
            { id: '2', title: 'History', questions: [] },
            { id: '3', title: 'Geography', questions: [] },
        ],
    },
};

export const FullGrid: Story = {
    args: {
        categories: [
            { id: '1',  title: 'Science',           questions: [] },
            { id: '2',  title: 'History',            questions: [] },
            { id: '3',  title: 'Geography',          questions: [] },
            { id: '4',  title: 'Mathematics',        questions: [] },
            { id: '5',  title: 'Literature',         questions: [] },
            { id: '6',  title: 'Technology',         questions: [] },
            { id: '7',  title: 'Art',                questions: [] },
            { id: '8',  title: 'Music',              questions: [] },
            { id: '9',  title: 'Philosophy',         questions: [] },
            { id: '10', title: 'Economics',          questions: [] },
            { id: '11', title: 'Biology',            questions: [] },
            { id: '12', title: 'Chemistry',          questions: [] },
            { id: '13', title: 'Physics',            questions: [] },
            { id: '14', title: 'Psychology',         questions: [] },
            { id: '15', title: 'Political Science',  questions: [] },
        ],
    },
};
