import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls the window to top whenever the route changes (e.g. opening a product). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
