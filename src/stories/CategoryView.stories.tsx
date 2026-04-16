import type { Meta, StoryObj } from "@storybook/react-vite";
import { CategoryView } from "@/components/CategoryView";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

const meta = {
  title: "Components/CategoryView",
  component: CategoryView,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const router = createRouter({
        history: createMemoryHistory(),
        routeTree: createRootRoute({
          component: Story,
        }),
      });
      return <RouterProvider router={router} />;
    },
  ],
} satisfies Meta<typeof CategoryView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Category",
    currentQuestion: "What is your favorite icebreaker question?",
    previousQuestion: "What is your favorite color?",
    onNext: () => alert("Next clicked"),
    onPrevious: () => alert("Previous clicked"),
    currentIndex: 0,
    totalQuestions: 5,
    onRandom: () => alert("Random clicked"),
  },
};

export const FirstQuestion: Story = {
  args: {
    title: "Getting to Know You",
    currentQuestion: "What is your name?",
    previousQuestion: "What do you do for fun?",
    onNext: () => alert("Next clicked"),
    onPrevious: () => alert("Previous clicked"),
    currentIndex: 0,
    totalQuestions: 3,
    onRandom: () => alert("Random clicked"),
  },
};

export const LastQuestion: Story = {
  args: {
    title: "Deep Questions",
    currentQuestion: "What is your biggest fear?",
    previousQuestion: null,
    onNext: () => alert("Next clicked"),
    onPrevious: () => alert("Previous clicked"),
    currentIndex: 4,
    totalQuestions: 5,
    onRandom: () => alert("Random clicked"),
  },
};
