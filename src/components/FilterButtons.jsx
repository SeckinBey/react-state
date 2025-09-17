export default function FilterButtons({ filterButton, setFilterbutton }) {
  return (
    <div className="border rounded p-3 mb-3">
      <button
        item-filter="all"
        className={`btn me-1 ${
          filterButton == "all" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilterbutton("all")}
      >
        All
      </button>
      <button
        item-filter="incomplete"
        className={`btn me-1 ${
          filterButton == "incomplete" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilterbutton("incomplete")}
      >
        Incomplete
      </button>
      <button
        item-filter="completed"
        className={`btn me-1 ${
          filterButton == "completed" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilterbutton("completed")}
      >
        Completed
      </button>
    </div>
  );
}
