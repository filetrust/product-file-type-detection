import React from "react";
import { CSSTransition } from "react-transition-group";
import ResultSectionContents from "./ResultSectionContents";

 var ResultSection = ({ results, filesProcessed }) => {
  return (
    <CSSTransition in={filesProcessed} timeout={{ enter: 500, exit: 500 }} classNames="results">
      <section className="results-section">
        {filesProcessed && <ResultSectionContents results={results} />}
      </section>
    </CSSTransition>
  );
}

export default ResultSection;
 