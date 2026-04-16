import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Moon, Sun } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-end p-2">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
