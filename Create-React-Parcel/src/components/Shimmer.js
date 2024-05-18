const Shimmer = () => {
  return (
    // <h2>Shimmer UI is Loading...</h2>

    <>
      <input type="text" />
      &nbsp;
      <button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
      <div className="restuarantList">
        {/* In this way we can create an array instantly & replicate the components */}
        {Array(10)
          .fill("")
          .map((i, index) => (
            <div className="shimmer-card" key={index}></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
