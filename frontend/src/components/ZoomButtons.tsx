import React, { useCallback, useState } from "react";

import { RestartAlt, ZoomIn, ZoomOut } from "@mui/icons-material/";
import tw from "tailwind-styled-components";

const Button = tw.button`
'bg-gray-400
bg-opacity-20
rounded-md p-2
hover:bg-opacity-50
`;

Button.displayName = "Button";

type Props = {
  onZoom?: (value: number) => void;
};

const ZoomButtons = ({ onZoom }: Props) => {
  const InitialZoom = 1.5;
  const maxZoom = 2; // 150%
  const minZoom = 0.5; // 0%
  const [zoom, setZoom] = useState(InitialZoom);

  const handleZoom = useCallback(
    (zoomLevel: number) => {
      !!onZoom && onZoom(zoomLevel);
    },
    [onZoom],
  );
  const handleNegativeZoom = useCallback(() => {
    if (zoom > minZoom) {
      const zoomLevel = zoom - 0.25;
      setZoom(zoomLevel);
      handleZoom(zoomLevel);
    }
  }, [zoom, setZoom, handleZoom]);

  const handlePositiveZoom = useCallback(() => {
    if (zoom < maxZoom) {
      const zoomLevel = zoom + 0.25;
      setZoom(zoomLevel);
      handleZoom(zoomLevel);
    }
  }, [zoom, setZoom, handleZoom]);

  const handleResetZoom = useCallback(() => {
    setZoom(InitialZoom);
    handleZoom(InitialZoom);
  }, [setZoom, handleZoom]);

  return (
    <div id="zoom" className="sticky bottom-32 left-full w-32 mx-1">
      <div className="flex space-x-1">
        <Button onClick={handleNegativeZoom}>
          <ZoomOut />
        </Button>
        <Button onClick={handlePositiveZoom}>
          <ZoomIn />
        </Button>
        <Button onClick={handleResetZoom}>
          <RestartAlt />
        </Button>
      </div>
      <div className="block bg-gray-400 bg-opacity-30  text-gray-600  text-center font-bold rounded-md my-1 p-1">
        Zoom: {(zoom - 0.5) * 100}%
      </div>
    </div>
  );
};

export default ZoomButtons;
