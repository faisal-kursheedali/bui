import React from 'react'
import { CodeInDoc } from './import';
import "./css/txtInDoc.css";
import {GiBulletBill} from "react-icons/gi"
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokai} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const smaple=monokai;
const TxtInDoc = ({ data }) => {
  return (
    <>
      <div className="doc-segment-container" id={
        data.hId ? data.hId : ""
      }>
        {/* for h 1 */}
        {
          data.h1 ? (<>
            <div className="doc-segment-h1">
              {data.h1}
            </div>
          </>) : ""
        }

        {/* for h 2 */}
        {
          data.h2 ? (<>
            <div className="doc-segment-h2">
              {data.h2}
            </div>
          </>) : ""
        }
        {/* for h 3 */}
        {
          data.h3 ? (<>
            <div className="doc-segment-h3">
              {data.h3}
            </div>
          </>) : ""
        }
        {/* for small h1 */}
        {
          data.smallH1 ? (<>
            <div className="doc-segment-smallH1">
              {data.smallH1}
            </div>
          </>) : ""
        }
        {/* for small h2 */}
        {
          data.smallH2 ? (<>
            <div className="doc-segment-smallH2">
              {data.smallH2}
            </div>
          </>) : ""
        }
        {/* for paragraph */}
        {
          data.p1 ? (<>
            <div className="doc-segment-p1">
              {data.p1}
            </div>
          </>) : ""
        }
        {/* for paragraph */}
        {
          data.p2 ? (<>
            <div className="doc-segment-p2">
              {data.p2}
            </div>
          </>) : ""
        }
        {/* for paragraph */}
        {
          data.p3 ? (<>
            <div className="doc-segment-p3">
              {data.p3}
            </div>
          </>) : ""
        }
        {/* for small p1 */}
        {
          data.smallP1 ? (<>
            <div className="doc-segment-smallP1">
              {data.smallP1}
            </div>
          </>) : ""
        }
        {/* for small p2 */}
        {
          data.smallP2 ? (<>
            <div className="doc-segment-smallP2">
              {data.smallP2}
            </div>
          </>) : ""
        }
        {/* for imp point*/}
        {
          data.impPointHead ? (<>
            <div className="doc-segment-impPoint-container">
              {data.impPointHead}
              <ul className="doc-segment-impPoint-list">

              {
                data.impPoint.map((i,index) => {
                  return (
                    <>
                    
                    <li className="doc-segment-impPoint-list-item" key={index}>
                    <GiBulletBill className='doc-segment-impPoint-list-item-bullet'/>{i}
                    </li>
                    </>
                  )
                })
              }
              </ul>
            </div>
          </>) : ""
        }
        {/* for head in code*/}
        {
          data.codeH1 ? (<>
            <div className="doc-segment-codeH1">
              {data.codeH1}
            </div>
          </>) : ""
        }
        {/* for head in code*/}
        {
          data.codeH2 ? (<>
            <div className="doc-segment-codeH2">
              {data.codeH2}
            </div>
          </>) : ""
        }

        {/* for code in para*/}
        {
          data.codeP1 ? (<>
            <div className="doc-segment-codeP1">
              {data.codeP1}
            </div>
          </>) : ""
        }
        {/* for code in para*/}
        {
          data.codeP2 ? (<>
            <div className="doc-segment-codeP2">
              {data.codeP2}
            </div>
          </>) : ""
        }
        {
          data.codeTxt ? (<>
            <SyntaxHighlighter language="jsx" style={smaple} className="doc-segment-codeTxt">
                {data.codeTxt}  
            </SyntaxHighlighter>
           
          </>) : ""
        }
        
        {
          data.codeSmall1 ? (<>
            <div className="doc-segment-codeSmall1">
              {data.codeSmall1}
            </div>
          </>) : ""
        }
        {/* for small text after ifraame*/}
        {
          data.codeSmall2 ? (<>
            <div className="doc-segment-codeSmall2">
              {data.codeSmall2}
            </div>
          </>) : ""
        }

        {/* to show code example and modal */}
        {
          data.modal ? (<>
            <div className="doc-segment-modal-head">
              Modal :
            </div>
          <div className="doc-segment-modal">
            <CodeInDoc code={data.code} modal={data.modal} />
            </div>
          </>) : ""
        }
      </div>

    </>
  )
}

export default TxtInDoc