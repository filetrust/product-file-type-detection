import React from "react";
import FileAttributes from "./FileAttributes";

function ResultSection(props) {
  return (
    <section className="results-section">
    <div className="file-attributes table-container">
      <h1 className="table-header">File Attributes</h1>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr className="header-row">
          <th>File Name</th>
          <th>Declared File Type</th>
          <th>Actual File Type</th>
          <th>File Size</th>
          </tr>
        </thead>
        <tbody>
          {props.results && props.results.map((result, index) => <FileAttributes key={`result-${index}`} {...result} />)}
        </tbody>
        </table>
        </div>
        </section>
  );
}

export default ResultSection;
