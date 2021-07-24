import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

const title = blogData.posts.map((e) => e.title);
const date = blogData.posts.map((e) => e.date);
const preview = blogData.posts.map((e) => e.preview);

// console.log(title);
// console.log(date);
// console.log(preview);

function ArticleList(key, test) {
  return (
    <main>
      <Article
        // key={key}
        title={title}
        date={date !== undefined ? date : "January 1, 1970"}
        preview={preview}
      />
    </main>
  );
}
export default ArticleList;
