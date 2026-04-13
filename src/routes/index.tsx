import { createFileRoute, Link } from "@tanstack/react-router";

import "../App.css";

export const Route = createFileRoute("/")({
  component: function HomePage() {
    const categories = [
      { id: "work", name: "Work", icon: "💼", count: 30 },
      { id: "fun", name: "Fun", icon: "🎉", count: 30 },
    ];

    return (
      <div className="homepage">
        <h1>Icebreaker App</h1>
        <p>Choose a category to get started</p>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/categories/$categoryId"
              params={{ categoryId: category.id }}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h2>{category.name}</h2>
              <p>{category.count} icebreakers</p>
            </Link>
          ))}
        </div>
      </div>
    );
  },
});
