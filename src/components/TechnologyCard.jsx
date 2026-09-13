function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <article className="tech-card">
      <div className="card-top">
        <div className="icon-wrap">
          <img src={technology.icon} alt={technology.name + " logo"} />
        </div>
        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="card-description">{technology.description}</p>

      <div className="card-meta">
        <span className="chip category-chip">{technology.category}</span>
        <span className="chip difficulty-chip">{technology.difficulty}</span>
      </div>

      <div className="card-bottom">
        <span className="rating">★ {technology.rating}</span>

        <button
          className={isAdded ? "add-btn added" : "add-btn"}
          type="button"
          disabled={isAdded}
          onClick={function () {
            onAdd(technology);
          }}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;