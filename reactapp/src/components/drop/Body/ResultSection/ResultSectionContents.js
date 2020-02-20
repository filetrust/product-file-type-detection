import React from "react";

import ResultSectionTable from "./ResultSectionTable";
import ResultSectionContentsHeader from "./ResultSectionContentsHeader";

var ResultSectionContents = ({ results }) => {
    return (
      <div className="file-attributes table-container">
        <ResultSectionContentsHeader />
        <ResultSectionTable results={results} />
      </div>
    );
  }

  export default ResultSectionContents;