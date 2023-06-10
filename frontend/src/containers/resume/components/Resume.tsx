import React, { useCallback, useState } from "react";

import { Button } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import ZoomButtons from "../../../components/ZoomButtons";
import { isMobile } from "../../../utils";

type Props = {
  file: Blob | string;
};

const Resume = ({ file }: Props) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState<number>(1.25);
  const documentWidth = window.innerWidth;
  const mobileScreen = isMobile();
  const pageWidth = mobileScreen ? documentWidth / 1.35 : documentWidth / 2.25;

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
      const zoomLevel = mobileScreen ? 0.75 : zoom;
      setZoom(zoomLevel);
    },
    [mobileScreen],
  );

  const handlePageButton = useCallback(() => {
    const nextPage = pageNumber < numPages ? pageNumber + 1 : 0;
    setPageNumber(nextPage);
  }, [numPages, pageNumber, setPageNumber]);

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      renderMode="canvas"
      className="w-fit min-h-300"
    >
      <div className="relative">
        <Page
          pageNumber={pageNumber}
          onLoadSuccess={removeTextLayerOffset}
          scale={zoom}
          width={pageWidth}
        />
        <div className="hidden md:block">
          <ZoomButtons onZoom={handlePageZoom} />
        </div>
      </div>
      <ButtonContainer isMobile={mobileScreen}>
        <ButtonGroup zoom={zoom}>
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
        </ButtonGroup>
      </ButtonContainer>
    </Document>
  );
};

export default Resume;

const ButtonContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.isMobile ? "60px" : "20px")};
  margin-bottom: 30px;
`;
ButtonContainer.displayName = "ButtonContainer";

const ButtonGroup = tw.div<{ zoom: number }>`
button-groups
flex content-between
items-center
space-x-4
${(props) => props.zoom > 0.75 && "-mt-16"}
${(props) => props.zoom < 0.75 && "mt-4"}
`;
ButtonGroup.displayName = "ButtonGroup";
