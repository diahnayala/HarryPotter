import React from "react";
import Card from "../Components/Cards/Card";
import data from "../json/books.json";

function Books() {
  return (
    <div className="bodyApp">
      {data.booksharry &&
        data.booksharry.map((book) => {
          return (
            <Card
              identifierBooks={book.id}
              key={book.id}
              srcImg={book.image}
              name={book.name}
              description={book.description}
              reference={book.pdf}
            />
          );
        })}
    </div>
  );
}

export default Books;
