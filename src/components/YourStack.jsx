function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="your-stack">
      <div className="stack-heading">
        <div>
          <span className="stack-label">YOUR BUILDER</span>
          <h2>Your Stack</h2>
          <p>
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
        <span className="count-bubble">{stack.length}</span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <h3>Your stack is empty</h3>
          <p>Add technologies from the list to start building your custom stack.</p>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map(function (technology) {
            return (
              <div className="stack-item" key={technology.id}>
                <img src={technology.icon} alt="" />
                <div>
                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>
                <button
                  className="remove-btn"
                  type="button"
                  aria-label={"Remove " + technology.name}
                  onClick={function () {
                    onRemove(technology.id);
                  }}
                >
                  ×
                </button>
              </div>
            );
          })}

          <button className="remove-all" type="button" onClick={onRemoveAll}>
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}

export default YourStack;