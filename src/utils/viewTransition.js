import { flushSync } from "react-dom";

//* Runs a React state update inside the View Transitions API:
//* the browser takes a picture of the old page, runs the update, then animates
//* to the new page (cross-fade, and elements with a view-transition-name glide
//* to their new position). Used by the theme switcher and the Top Rated filter.
export const withViewTransition = (update) => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  //* no browser support, or the user asked for less motion: just update
  if (!document.startViewTransition || reduceMotion) {
    update();
    return;
  }

  //* flushSync makes React apply the update right now, inside the callback,
  //* so the browser's "after" picture already has the new UI
  document.startViewTransition(() => flushSync(update));
};
