import React from "react";
import "./imageLinkForm.css";
// import ".App/css";
const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div>
      <p>{"Brain detects faces in your pictures. Try Me"}</p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="w-70 pa2 f4 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib bg-light-purple"
            onClick={onBtnSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
