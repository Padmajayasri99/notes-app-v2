import React, { useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./NoteEditor.css";

function NoteEditor({ value, onUpdate }) {
  const [selectedTab, setSelectedTab] = useState("write");

  const handleChange = (newValue) => {
    onUpdate(newValue);
  };

  return (
    <div className="note-editor">
      <ReactMde
        value={value}
        onChange={handleChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
        }
      />
    </div>
  );
}

export default NoteEditor;
