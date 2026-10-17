//* minimum rating for "Top Rated" ("4.5+" means 4.5 itself is included)
export const TOP_RATED_MIN = 4.5;

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

//* "1 restaurant" / "5 restaurants"
const restaurants = (n) => `${n} restaurant${n === 1 ? "" : "s"}`;

//* presentational component: Body owns the on/off state and passes it down
//* count = how many top rated restaurants there are, total = how many before filtering
const TopRatedFilter = ({ isActive, count, total, onToggle }) => (
  <div className="mx-auto mb-6 flex max-w-[1400px] flex-wrap items-center gap-x-4 gap-y-2">
    <button
      type="button"
      aria-pressed={isActive}
      //* screen readers would otherwise read the badge as "Rated 4.5+5"
      aria-label={`Rated ${TOP_RATED_MIN}+ (${restaurants(count)})`}
      onClick={onToggle}
      className={`flex cursor-pointer items-center gap-2 rounded-full border py-2 pr-3 pl-3.5 font-[inherit] text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 ${
        isActive
          ? "border-primary bg-primary text-on-primary shadow-lg shadow-primary/30"
          : "border-line bg-surface text-main hover:border-primary"
      }`}
    >
      <StarIcon className={`size-4 ${isActive ? "" : "text-primary"}`} />
      Rated {TOP_RATED_MIN}+
      {/* how many you'll get, shown before you click */}
      <span
        className={`min-w-6 rounded-full px-1.5 py-0.5 text-center text-xs font-bold ${
          isActive ? "bg-on-primary/20" : "bg-primary/10 text-primary"
        }`}
      >
        {count}
      </span>
      {/* the ✕ tells the user the chip is on and can be removed */}
      {isActive && <CloseIcon className="size-3.5" />}
    </button>

    {/* aria-live: screen readers announce the new count when it changes */}
    <p className="text-sm text-muted" aria-live="polite">
      {isActive
        ? `Showing ${count} of ${restaurants(total)} rated ${TOP_RATED_MIN}★ and above`
        : restaurants(total)}
    </p>
  </div>
);

export default TopRatedFilter;
