import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (markdown) {
      axios
        .post("http://localhost:3001/convert", { markdown })
        .then((response) => setHtml(response.data.html))
        .catch((error) => console.error("Error converting Markdown:", error));
    } else {
      setHtml("");
    }
  }, [markdown]);

  return (
    <div className="container">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown here..."
      />
      <div className="preview">
        <pre>{html}</pre>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </div>
  );
}

export default App;
