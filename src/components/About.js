import React from "react";

function About(props) {
  const Newsrc =
    props.image === undefined ? "https://via.placeholder.com/215" : props.image;

  return (
    <aside>
      <img src={Newsrc} alt="blog logo"></img>
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
