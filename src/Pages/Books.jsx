import React from 'react';
import Card from "../Components/Cards/Card";
import dataBooks from '../json/books.json';

function Books({handleMessage}) {
  return (
    <div className="bodyApp">

      {
        dataBooks && dataBooks.map( dataBooks => {
          return(
            <div>
            <Card key={dataBooks.id}
              srcImg={dataBooks.image}
              name={dataBooks.name}
              description={dataBooks.description}
              reference={dataBooks.pdf}
              textA={'Go to read'}
              handleMessage={handleMessage}
            />
            </div>
          )
        })
      }
          
        </div>
  )
}

export default Books