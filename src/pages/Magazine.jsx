import React, { useState, useRef } from 'react';
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";
import HTMLFlipBook from 'react-pageflip';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Pages = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} >
      <div>{props.children}</div>
    </div>
  );
});

function Magazine() {

  const [numPages, setNumPages] = useState(null);
  const book = useRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }
  const pagesArray = Array.from(Array(numPages).keys());

  return (
       <>
      <div className="w-full flex items-center justify-center relative ">

        <HTMLFlipBook width={300} height={300} showCover={true} useMouseEvents={false} ref={book} >
          {pagesArray.map((n) => (
            <Pages key={n + 1}>
              <Document
                file="/testPdf.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={n + 1} renderAnnotationLayer={false} renderTextLayer={false} width={300} className='border-3 border-black' />
              </Document>

            </Pages>
          ))}
        </HTMLFlipBook>
        <button className='text-black bg-red-700 p-2 rounded-full absolute top-1/2 right-0 lg:right-10' onClick={() => book.current.pageFlip().flipNext()}><ArrowBigRightDash /></button>

        <button className='text-black bg-red-700 p-2 rounded-full absolute top-1/2 left-0 lg:left-10' onClick={() => book.current.pageFlip().flipPrev()}><ArrowBigLeftDash /></button>

      </div>

    </>
  )
}

export default Magazine;