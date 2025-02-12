export default function Pagination({
  totalFlats,
  totalFlatsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalFlats / totalFlatsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pagination">
        {pages.map((page) => {
          return (
            <button
              className={page == currentPage ? "active" : ""}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {" "}
              {page}{" "}
            </button>
          );
        })}
      </div>
    </>
  );
}
