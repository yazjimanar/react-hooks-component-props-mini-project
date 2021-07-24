import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const test = blogData.posts.map((e) => e);
console.log(test);

function App() {
  return (
    <div className="App">
      <Header BlogName={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList
        // key={blogData.posts.map((e, index) => e)}
        post={blogData.posts.map((e) => e)}
      />
    </div>
  );
}

export default App;
