import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={`bar${i + 1}`}></div>
      ))}
    </div>
  );
};

export default Loader;
