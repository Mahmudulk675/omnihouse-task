import React from "react";
import PandELeft from "../PandELeft/PandELeft";
import PandERight from "../PandERight/PandERight";
import "./PreviewAndEditBody.css";

const PreviewAndEditBody = () => {
  return (
    <div className="previewAndEditBody">
      <PandELeft />
      <PandERight />
    </div>
  );
};

export default PreviewAndEditBody;
