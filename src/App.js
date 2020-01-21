import React, { useState } from "react";

import { Draft } from "./Editor";

import logo from "./logo.svg";
// import "./App.css";

function App() {
  const [content, setContent] = useState("");
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
      <div>{content}</div>
    </>
  );
}

export default App;
