import React, { useState } from "react";
import { Page, Document } from "react-pdf";

function PDFile() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  <div>
        return (
          <div>
            <Document
              file="../../pdf/Harry Potter and The Cursed Child.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page height="20vh" pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            { pageNumber > 1 && 
            <button onClick={changePageBack}>Previous Page</button>
            }
            {
                pageNumber < numPages && 
                <button onClick={changePageNext}>Next Page</button>
            }
          </div>
        );
  </div>;
}

export default PDFile;
