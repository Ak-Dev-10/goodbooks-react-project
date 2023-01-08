import "./styles.css";
import React, { useState } from "react";

const books = {
  javasript: [
    { name: "Eloquent Javascript", rating: "4.5/5" },
    { name: "Effective Javascript", rating: "4/5" }
  ],
  fiction: [
    { name: "Adventures of Sherlock Holmes", rating: "4.7/5" },
    { name: "The Alchemist", rating: "4.2/5" },
    { name: "The Silent Patient", rating: "4.7/5" }
  ],
  nonfiction: [
    { name: "Rich Dad Poor Dad", rating: "4.3/5" },
    { name: "The Psychology Of Money", rating: "4.6/5" },
    { name: "Think and Grow Rich", rating: "4.9/5" }
  ]
};

export default function App() {
  const [showGenre, setGenre] = useState("fiction");
  //const [variable , function] = useState(initial)
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div>
        {Object.keys(books).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {books[showGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
