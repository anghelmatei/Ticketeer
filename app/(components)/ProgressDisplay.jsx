const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full rounded-full h-2.5 bg-page">
      <div
        className="h-2.5 rounded-full bg-bluey"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
