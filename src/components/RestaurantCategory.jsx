import ItemList from "./ItemList";

const RestaurantCategory = ({ category, isOpen, onToggle }) => {
  const { title, itemCards } = category;
  const itemsCount = itemCards?.length ?? 0;

  return (
    <section className="menu-category category-accordion">
      <button
        type="button"
        className="category-header"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <div>
          <h3 className="category-title">{title}</h3>
          <p className="category-summary">
            {itemsCount} item{itemsCount !== 1 ? "s" : ""}
          </p>
        </div>
        <span className="collapse-icon">{isOpen ? "−" : "+"}</span>
      </button>

      <div className={`category-content ${isOpen ? "open" : ""}`}>
        {itemsCount > 0 ? (
          <ItemList itemCards={itemCards} />
        ) : (
          <p className="empty-category">No items available in this category.</p>
        )}
      </div>
    </section>
  );
};

export default RestaurantCategory;
