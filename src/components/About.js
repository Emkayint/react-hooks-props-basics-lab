import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={props.gitHub}>{props.gitHub}</a>
      <a href={props.linkedIn}>{props.linkedIn}</a>
    </div>
  );
}

export default About;
