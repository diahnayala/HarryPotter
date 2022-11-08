import { useState } from "react";
import { useEffect } from "react";
import { React } from "react";
import { useNavigate, useParams } from "react-router";
import "../css/player.css";

function MoreInfoBooks() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3003/booksharry`)
      .then((response) => response.json())
      .then((dataBooks) => {
        if (parseInt(id) === NaN) {
          return navigate("/nofound");
        }
        const foundBook = dataBooks.find(
          (elBook) => elBook.id === parseInt(id)
        );
        if (foundBook === undefined) {
          return navigate("/nofound");
        }
        setBook(foundBook);
      });
  }, [id]);

  if (book === undefined) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <div className="containerIframe">
        <iframe
          title="More info about books"
          src={book.pdf}
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="iframeComments"></div>
      <div className="info" key={book.id}>
        <div>{book.name}</div>
        <div>{book.time}</div>
        <div>{book.description}</div>
        <div>{book.year}</div>
        <div>{book.category}</div>
        <div>{book.director}</div>
      </div>
    </div>
  );
}

export default MoreInfoBooks;
