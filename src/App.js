import React, { useState, useEffect } from "react";

import { Controlled as CodeMirror } from "react-codemirror2";
import hypermd from "hypermd";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// import { Draft } from "./Editor";

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
        <CodeMirror
          value={content}
          options={{
            mode: "javascript",
            theme: "material",
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setContent(value);
          }}
          onChange={(editor, data, value) => {}}
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
