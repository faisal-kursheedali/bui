import React,{useState} from 'react'
import "./css/codeInDoc.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import {lightfair} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeInDoc = ({modal,code}) => {
  return(<>
    <div className="example-modal">
      {modal()}
    </div>
    <div className="example-modal-code-container">
      <div className="example-modal-code-head">
        code for this☝️is:
      </div>
      <SyntaxHighlighter language="jsx" style={lightfair} className="example-modal-code">
      {
        code
      }
      </SyntaxHighlighter>
    </div>

  
  </>)
}

export default CodeInDoc