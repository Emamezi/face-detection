import React from "react";

const Rank = ({ username, entries }) => {
  return (
    <>
      <div className="f3 white">{`${username} your rank is `}</div>
      <div className="white f1">{`${entries}`}</div>
    </>
  );
};

export default Rank;
