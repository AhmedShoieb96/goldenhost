export default function SearchField({
  title,
  type,
  onChange,
  clickStatus,
  setClicked,
  value,
}) {


  return (
    <>
      <div
        style={{textAlign: "center",  }}>
         
        {!clickStatus && (
          <button className="button" onClick={setClicked}>
            {title}
          </button>
        )}
        {clickStatus && (
          <input
            className="inputt"
            onChange={onChange}
            name={title}
            type={type}
            value={value}
            placeholder={`Search by ${title}`}
          />
        )}
      </div>
    </>
  );
}
