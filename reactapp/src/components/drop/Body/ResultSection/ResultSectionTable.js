import React from "react";
import ResultSectionTableRow from "./ResultSectionTableRow";

var ResultSectionTable = ({results}) => {
    return (
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
            {results && results.map((result, index) => <ResultSectionTableRow key={`result-${index}`} {...result} />)}
        </tbody>
        </table>
    );
}

export default ResultSectionTable;