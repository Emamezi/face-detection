import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <>
      <div className="f3 white">{`${name} your current entry count is..... `}</div>
      <div className="white f1">{entries}</div>
    </>
  );
};

export default Rank;
