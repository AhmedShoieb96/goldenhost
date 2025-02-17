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
if(!pages) return null;
  return (
    <>
      <div className="pagination">
        <h1 
        className="paginationBnt" onClick={()=>{
          if(currentPage==1){
            return
          }
          setCurrentPage(currentPage-1)
        }} >&lt;</h1>
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
        <h1 className="paginationBnt" onClick={()=>{
           if(currentPage==pages.length){
            return
          }
          setCurrentPage(currentPage+1)} }>&gt;</h1>

      </div>
    </>
  );
}
