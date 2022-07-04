/* eslint-disable no-unused-expressions */
import { isMobile } from '../../utils'
import ZoomButtons from '../subcomponents/ZoomButtons'
import ResumeTitle from './ResumeTitle'
import { Button } from '@mui/material'
import { PropTypes } from 'prop-types'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

const Resume = (props) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(0)
  const documentWidth = window.innerWidth
  const pageWidth = isMobile() ? documentWidth + 100 : documentWidth / 2.25

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll('.react-pdf__Page__textContent')
    textLayers.forEach((layer) => {
      const { style } = layer
      style.top = '0'
      style.left = '0'
      style.transform = ''
    })
  }

  const getZoom = (zoom) => {
    console.log({ zoom, documentWidth })
    const zoomLevel = isMobile() ? 0.75 : zoom
    setScale(zoomLevel)
  }

  return (
    <div className='container mx-auto px-lg-10'>
      <ResumeTitle />
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess}
        className='relative flex flex-col items-center pb-16 '
      >
        <div className='relative'>
          <Page
            pageNumber={pageNumber}
            onLoadSuccess={removeTextLayerOffset}
            {...props}
            scale={scale}
            width={pageWidth}
          />
          <ZoomButtons handleZoom={(value) => getZoom(value)} />
        </div>
        <div
          className={`button-groups flex content-between items-center space-x-4 ${
            scale > 0.75 ? '-mt-16' : 'mt-4'
          }`}
        >
          <Button
            size='small'
            variant='contained'
            disabled={pageNumber <= 1}
            onClick={() => {
              pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
            }}
          >
            Previous
          </Button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Button
            size='small'
            variant='contained'
            disabled={pageNumber >= numPages}
            onClick={() => {
              pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            }}
          >
            Next
          </Button>
        </div>
      </Document>
    </div>
  )
}

export default Resume

Resume.propTypes = {
  file: PropTypes.string.isRequired,
}
