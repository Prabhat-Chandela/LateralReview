import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import bucketService from '../appwrite/bucketService';
import {easeOut, motion as m} from "framer-motion";
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

function Blogpost() {
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const { blogfile } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (blogfile) {
      bucketService.getBlogFile(blogfile).then((file) => {
        if (file) {
          setPdf(file.href);
        }
        else navigate("/");
      });
    } else navigate("/");
  }, [blogfile, navigate]);

 

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
        className="w-full flex flex-col gap-2 items-center justify-center overflow-hidden mt-5 sm:hidden">
           
            {pagesArray.map((n) => (
              <Pages key={n + 1}>
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={n + 1} renderAnnotationLayer={false} renderTextLayer={false} width={400} />
                </Document>

              </Pages>
            ))}

        </m.div>

        <m.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7, ease:easeOut}}
        className=" hidden lg:hidden w-full sm:flex flex-col gap-2 items-center justify-center overflow-hidden mt-5">
           
            {pagesArray.map((n) => (
              <Pages key={n + 1}>
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={n + 1} renderAnnotationLayer={false} renderTextLayer={false} width={700} />
                </Document>

              </Pages>
            ))}

        </m.div>

        <m.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7, ease:easeOut}}
        className=" hidden w-full lg:flex flex-col items-center justify-center overflow-hidden mt-5">
           
            {pagesArray.map((n) => (
              <Pages key={n + 1}>
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={n + 1} renderAnnotationLayer={false} renderTextLayer={false} width={1000} />
                </Document>

              </Pages>
            ))}

        </m.div>
      </>
    )
  }
}

export default Blogpost;