import React from "react";
import loadingSVG from "../asset/loadingSVG.svg";

function Loading() {
  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      <img
        className="m-auto"
        src={loadingSVG}
        alt="Loading"
        style={{ width: "100px" }}
      />
    </div>
  );
}

export default Loading;
