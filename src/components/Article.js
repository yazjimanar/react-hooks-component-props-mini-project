import React from "react";

function Article(e) {
  return (
    <article>
      <h3>{e.title}</h3>
      <small>{e.date}</small>
      <p>{e.preview}</p>
    </article>
  );
}
export default Article;
