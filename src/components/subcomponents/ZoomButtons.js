import React, { useState } from "react";
import { ZoomOut, ZoomIn, RestartAlt } from "@mui/icons-material/";
import { PropTypes } from "prop-types";

const ZoomButtons = ({ handleZoom }) => {
  const ZOOM = 1.5;
  const [zoom, setZoom] = useState(ZOOM);

  // eslint-disable-next-line no-unused-vars
  const handleButton = React.useMemo(() => {
    handleZoom(zoom);
  }, [handleZoom, zoom]);

  return (
    <div id="zoom" className="sticky bottom-32 left-full w-32 mx-1">
      <div className="flex space-x-1">
        <button className="bg-gray-400 bg-opacity-20 hover:bg-opacity-50 rounded-md p-2" onClick={() => zoom > 0.75 && setZoom(zoom - 0.25)}>
          <ZoomOut color="#333" size="large" />
        </button>
        <button className="bg-gray-400 bg-opacity-20 hover:bg-opacity-50 rounded-md p-2" onClick={() => zoom < 3 && setZoom(zoom + 0.25)}>
          <ZoomIn color="#333" size="large" />
        </button>
        <button className="bg-gray-400 bg-opacity-20 hover:bg-opacity-50 rounded-md p-2" onClick={() => setZoom(ZOOM)}>
          <RestartAlt color="#333" size="large" />
        </button>
      </div>
      <div className="block bg-gray-400 bg-opacity-30  text-gray-600  text-center font-bold rounded-md my-1 p-1">Zoom: {(zoom - 0.5) * 100}%</div>
    </div>
  );
};

export default ZoomButtons;

ZoomButtons.prototype = {
  handleZoom: PropTypes.func.isRequired,
};
