// import react dependency
import React from 'react';
// import presentational component
import MarkdownPreviewer from "./components/MarkdownPreviewer.js";
// import css style rules
import './App.css';

// app's main parent app w/o wrapper basically a container
export default function MDPApp() {
  return (
    <div className="MDPApp">
      <h1>A Simple React Markdown Previewer</h1>
      <MarkdownPreviewer />
    </div>
  );
}