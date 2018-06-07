import React from "react";

const CheatSheet = () => {
  const url = "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet";
  return (
    <div className="cheatsheet">
      <a href={url} target="_blank">Markdown Cheatsheet</a>
    </div>
  );
};

export default CheatSheet;
