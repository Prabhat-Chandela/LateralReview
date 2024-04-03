import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Magazines() {
  const [numPages, setNumPages] = useState(null);
  const width = 300;
  const height = 300;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="bg-black text-red-700 w-full flex flex-col justify-center items-center">
    <div className="w-full sm:w-1/2 flex items-center justify-center relative ">
      <Document file="/testPdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <HTMLFlipBook width={width} height={height} showCover={true}>
          {[...Array(numPages).keys()].map((pageIndex) => (
            <div key={pageIndex}>
              <Page
                key={`page_${pageIndex + 1}`}
                pageNumber={pageIndex + 1}
                width={width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                canvasBackground="transparent"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>

    </div>
  </div>
  );
};

export default Magazines;