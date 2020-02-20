import React, { useState } from "react";
import "../../../App.css";

import DragAndDropTitle from "./DragAndDropTitle";
import DragAndDropContainer from "./DropArea/DragAndDropContainer";
import ResultSection from "./ResultSection/ResultSection";
import { engineApi } from "../../shared/api/engineApi";
import LoadingIndicator from "../../shared/LoadingIndicator";
import JSZip from "jszip";
const readZipAsync = (blob) => {
    var zip = new JSZip();
    return new Promise((resolve, reject) => {
        zip.loadAsync(blob).then(loadedZip => {
            const fileRefs = Object.values(loadedZip.files);
            var zipFileReaders = [];
            Array.from(fileRefs).forEach(async (zf) => {
                if (!zf.dir) {
                    zipFileReaders.push(zf.async("blob").then(blob => {
                        blob.name = zf.name;
                        return blob;
                    }));
                }
            });
            Promise.all(zipFileReaders).then(resolve, reject);
        }, reject);
    })
}

const zipHelper = {
    readZipAsync
};

function DropAndDropBody(props) {
    var [results, setResults] = useState(null);
    var [filesProcessed, setFilesProcessed] = useState(false);
    var [loading, setLoading] = useState(false);

    var handleDrop = files => {
        setLoading(true);
        setFilesProcessed(false);
        setResults([]);

        var zipUnpackingTasks = [];
        var fileTypeDetectionCalls = [];
        var getFileTypeAsync = (file, extension) => 
        {
          return new Promise((resolve) => {
            var result = { 
                fileName: file.name,
                fileExtension: extension,
                fileType: "Unknown",
                fileSize: 0
              };

            var handleBlob = async () => {
                try {
                    const response = await engineApi.getFileType(props.apiKey, file);
                    const json = await responseToJson(response);
                    getResultFromDeserialised(json, file);
                }
                catch (error) {
                    console.log(error);
                }

                resolve(result);
            };

            var responseToJson = response => {
                if (response.status !== 200) {
                    console.log(response);
                    return { fileType: "Error", fileSize: 0, status: response.status };
                }

                return response.json();
            };

            var getResultFromDeserialised = (deserialised) => {
                result.fileType = deserialised.fileType.toLowerCase();
                result.fileSize = deserialised.fileSize;  
                return deserialised;
            };

            handleBlob();
        });
      }

        Array.from(files).forEach(file => {
            var extension = file.name.split(".").pop().toLowerCase();

            if (extension === "zip") {
                var zipHandleTask = zipHelper.readZipAsync(file).then((zippedFiles) => {
                    zippedFiles.forEach(zf => {
                      extension = zf.name.split(".").pop().toLowerCase();
                      zf.name = "[" + file.name + "] -> " + zf.name;
                      fileTypeDetectionCalls.push(getFileTypeAsync(zf, extension));
                    });
                }, error => {
                  console.log(error);
                  fileTypeDetectionCalls.push(getFileTypeAsync(file, extension));

                });
                zipUnpackingTasks.push(zipHandleTask);
            }
            else {
                fileTypeDetectionCalls.push(getFileTypeAsync(file, extension));
            }
        });

        Promise.all(zipUnpackingTasks).then((zt) => {
          Promise.all(fileTypeDetectionCalls).then(responses => {
            setResults(responses);
            setFilesProcessed(true);
            setLoading(false);
          });
        }, error => {
          console.log(error);
        });
    };

    return (
        <div className="app filedrop">
          <div className="app-body">
            <DragAndDropTitle />
            <DragAndDropContainer handleDrop={handleDrop}>
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