import React, { useState, useEffect } from "react";

import { Draft } from "./Editor";

import logo from "./logo.svg";
// import "./App.css";

function App() {
  const [content, setContent] = useState("");

  function createMarkup() {
    return { __html: content };
  }

  return (
    <>
      <div className="App">
        <Draft
          onChange={c => setContent(c)}
          node_id="EditorID"
          content=""
          placeholder="Enter your text here..."
          stylable={true}
        />
      </div>
      <h4>The generated HTML code:</h4>
      <div>{content}</div>
      <h4>The generated output:</h4>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </>
  );
}

export default App;
