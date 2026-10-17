import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, THEMES } from "../utils/themeSlice";
import { withViewTransition } from "../utils/viewTransition";

//* small circle split in two: the theme's background + its accent colour
const Swatch = ({ colors: [background, accent] }) => (
  <span
    aria-hidden="true"
    className="size-5 shrink-0 rounded-full ring-1 ring-main/20"
    style={{
      background: `linear-gradient(135deg, ${background} 50%, ${accent} 50%)`,
    }}
  />
);

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  //* subscribe to just the theme id ("default" | "zomato" | "swiggy")
  const theme = useSelector((state) => state.theme.mode);
  const currentTheme = THEMES.find(({ id }) => id === theme) ?? THEMES[0];

  //* local UI state: is the dropdown open? (no other component needs it, so not Redux)
  const [isOpen, setIsOpen] = useState(false);

  //* refs = the real DOM nodes, needed for "was the click outside?" and focus()
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  //* write the theme on <html data-theme="..."> and remember it
  //* useLayoutEffect runs right after React updates the DOM and before the browser paints,
  //* so the new colours show up in the same frame as the re-render
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      //* storage blocked: theme still works, it just won't survive a refresh
    }
  }, [theme]);

  //* while the menu is open: close it on a click outside or on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e) => {
      if (!wrapperRef.current.contains(e.target)) setIsOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    //* cleanup: remove the listeners when the menu closes (or the component unmounts)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  //* close when keyboard focus moves out of the switcher (Tab away)
  const handleBlur = (e) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const chooseTheme = (id) => {
    setIsOpen(false);
    buttonRef.current.focus();
    if (id === theme) return;

    //* cross-fade the whole page to the new theme (see utils/viewTransition.js)
    withViewTransition(() => dispatch(setTheme(id)));
  };

  //* Tailwind colour names (bg-surface, border-line, text-main, bg-primary/10...)
  //* are defined in themes.css with @theme inline, so they follow the active theme
  return (
    <div ref={wrapperRef} className="theme-switcher relative" onBlur={handleBlur}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="theme-menu"
        aria-label={`Theme: ${currentTheme.label}`}
        onClick={() => setIsOpen((open) => !open)}
        className="flex cursor-pointer items-center gap-2 rounded-full border border-line bg-surface py-1.5 pr-3 pl-1.5 font-[inherit] text-sm font-semibold text-main transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-expanded:border-primary"
      >
        <Swatch colors={currentTheme.swatch} />
        {currentTheme.label}
        <ChevronIcon
          className={`size-4 text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* always rendered, so it can animate open/closed;
          "invisible" also hides it from the keyboard and screen readers */}
      <div
        id="theme-menu"
        className={`absolute top-full right-0 z-50 mt-3 w-64 origin-top-right rounded-2xl border border-line bg-surface p-1.5 shadow-2xl transition-all duration-150 ease-out ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-95 opacity-0"
        }`}
      >
        <p className="px-2.5 pt-1 pb-1.5 text-[11px] font-semibold tracking-wider text-muted uppercase">
          Choose theme
        </p>

        {THEMES.map(({ id, label, description, swatch }) => {
          const isActive = id === theme;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => chooseTheme(id)}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border-0 px-2.5 py-2 text-left font-[inherit] text-main transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                isActive ? "bg-primary/10" : "bg-transparent hover:bg-main/5"
              }`}
            >
              <Swatch colors={swatch} />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block text-xs text-muted">{description}</span>
              </span>
              {isActive && <CheckIcon className="size-4 shrink-0 text-primary" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
