import React from "react";
import "./facerecognition.css";
const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="image"
          src={imageUrl}
          alt=""
          srcSet=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            left: box.left_col,
            top: box.top_row,
            right: box.right_col,
            bottom: box.bottom_row,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
