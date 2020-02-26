import React, { useState } from "react";
import "../../../App.css";

import DragAndDropTitle from "./DragAndDropTitle";
import DragAndDropContainer from "./DropArea/DragAndDropContainer";
import ResultSection from "./ResultSection/ResultSection";
import LoadingIndicator from "../../shared/LoadingIndicator";
import { FileDropService } from "../../Helpers/FileDropEventHandler"

function DropAndDropBody(props) {
    var [results, setResults] = useState(null);
    var [filesProcessed, setFilesProcessed] = useState(false);
    var [loading, setLoading] = useState(false);

    return (
        <div className="app filedrop">
          <div className="app-body">
            <DragAndDropTitle />
            <DragAndDropContainer handleDrop={(files) => FileDropService.handleDrop(files, props, setResults, setFilesProcessed, setLoading)}>
                <div className="loading-container">
                    <LoadingIndicator key={6} loading={loading} />
                </div>
            </DragAndDropContainer>
            <ResultSection results={results} filesProcessed={filesProcessed}/>
          </div>
        </div>
    );
}

export default DropAndDropBody;