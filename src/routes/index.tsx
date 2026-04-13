import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: function HomePage() {
    const categories = [
      { id: "work", name: "Work", icon: "💼", count: 30 },
      { id: "fun", name: "Fun", icon: "🎉", count: 30 },
    ];

    return (
      <div className="min-h-screen bg-base-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
              Icebreaker App
            </h1>
            <p className="text-base-content/70">
              Choose a category to get started
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/categories/$categoryId"
                params={{ categoryId: category.id }}
                className="bg-base-100 rounded-xl p-6 text-center hover:shadow-xl transition-shadow border border-base-300 hover:border-primary"
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h2 className="text-xl font-semibold text-base-content mb-1">
                  {category.name}
                </h2>
                <p className="text-sm text-base-content/60">
                  {category.count} icebreakers
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  },
});
