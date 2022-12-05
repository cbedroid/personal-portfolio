import React, { useCallback, useState } from "react";

import { Button } from "@mui/material";
import classNames from "classnames";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import ZoomButtons from "../../../components/ZoomButtons";
import { isMobile } from "../../../utils";

type Props = {
  file: Blob | string;
  className?: string;
};

const Resume = ({ file, className }: Props) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState<number>(1.25);
  const documentWidth = window.innerWidth;
  const pageWidth = isMobile() ? documentWidth + 100 : documentWidth / 2.25;

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll<HTMLElement>(
      ".react-pdf__Page__textContent",
    )!;
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  const handlePageZoom = useCallback(
    (zoom: number) => {
      const zoomLevel = isMobile() ? 0.75 : zoom;
      setZoom(zoomLevel);
    },
    [setZoom],
  );

  const handlePageButton = useCallback(() => {
    const nextPage = pageNumber < numPages ? pageNumber + 1 : 0;
    setPageNumber(nextPage);
  }, [numPages, pageNumber, setPageNumber]);

  return (
    <div className="container mx-auto px-lg-10">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="relative flex flex-col items-center pb-16 "
      >
        <div className="relative">
          <Page
            className={className}
            pageNumber={pageNumber}
            onLoadSuccess={removeTextLayerOffset}
            scale={zoom}
            width={pageWidth}
          />
          <ZoomButtons onZoom={handlePageZoom} />
        </div>
        <div
          className={classNames(
            "button-groups flex content-between items-center space-x-4",
            {
              "-mt-16": zoom > 0.75,
              "mt-4": zoom < 0.75,
            },
          )}
        >
          <Button
            size="small"
            variant="contained"
            disabled={pageNumber <= 1}
            onClick={() => {
              setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
            }}
          >
            Previous
          </Button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Button
            size="small"
            variant="contained"
            disabled={!numPages || pageNumber >= numPages}
            onClick={handlePageButton}
          >
            Next
          </Button>
        </div>
      </Document>
    </div>
  );
};

export default Resume;
