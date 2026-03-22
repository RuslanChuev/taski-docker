const TabList = ({ isShowCompleted, displayCompleted }) => {
  return (
    <div className="nav nav-tabs">
      <span
        onClick={() => displayCompleted(true)}
        className={isShowCompleted ? "nav-link active" : "nav-link"}
      >
        Complete_RCh_2
      </span>
      <span
        onClick={() => displayCompleted(false)}
        className={isShowCompleted ? "nav-link" : "nav-link active"}
      >
        Incomplete_RCh_2
      </span>
    </div>
  );
};

export default TabList;
