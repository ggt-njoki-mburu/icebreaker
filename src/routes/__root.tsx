import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="fixed top-4 right-4 z-50">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
