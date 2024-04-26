import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";
import bucketService from '../appwrite/bucketService';
import {easeOut, motion as m} from "framer-motion";
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
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const book = useRef();
  const { magazinefile } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (magazinefile) {
      bucketService.getMagazineFile(magazinefile).then((file) => {
        if (file) {
          setPdf(file.href);
        }
        else navigate("/");
      });
    } else navigate("/");
  }, [magazinefile, navigate]);


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }
  const pagesArray = Array.from(Array(numPages).keys());


  if (pdf) {

    return (
      <>
        <m.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7, ease:easeOut}}
        className="w-full h-[80vh] sm:h-[70vh] flex items-start justify-center relative overflow-hidden mt-5">

          <HTMLFlipBook width={300} height={550} showCover={true} useMouseEvents={false} ref={book}  usePortrait={true} flippingTime={2000} >
            {pagesArray.map((n) => (
              <Pages key={n + 1}>
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={n + 1} renderAnnotationLayer={false} renderTextLayer={false} width={300} className='border-3 border-black' />
                </Document>

              </Pages>
            ))}
          </HTMLFlipBook>
          <button className='text-black bg-red-700 p-2 rounded-full absolute top-1/2 right-0 lg:right-10' onClick={() => book.current.pageFlip().flipNext()}><ArrowBigRightDash /></button>

          <button className='text-black bg-red-700 p-2 rounded-full absolute top-1/2 left-0 lg:left-10' onClick={() => book.current.pageFlip().flipPrev()}><ArrowBigLeftDash /></button>

        </m.div>
      </>
    )
  }
}

export default Magazine;