import React,{useState} from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
import {AiOutlineClose,AiOutlineInfoCircle} from "react-icons/ai"

const Toast = () =>{
  const [click, setClick] = useState(false);
//   Datasender({
    
//   })
    
// })
const data={
  topics:["toast","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Toast",
      smallH1:"About :",
      p1:`Responsive Tailwind Toast built with Tailwind CSS. Toasts are a non-disruptive message in the corner of the interface. It provides quick 'at-a-glance' feedback on the outcome of an action.`,
      hId:"toast"
    },{
      h3:"note :",
      p2:`Keep every thing inside the toast container and add icon inside the toast-icn class named element then add head text inside the element with class name toast-txt-head then add the normal text inside the elem of class name toast-txt thenadd close icon inside the elem of class name toast-close, and keep all link(primary,secondary) of toast inside the elem of class name toast-link-container
      For the link add this class name inside the a tag toast-link-primary/sec. 
      `,
      hId:"note"
    },
    {
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`<div className="bui-toast-container" >
      <div className="toast bui-toast-yellow">
        <AiOutlineInfoCircle className="bui-toast-icn" />
        <div className="bui-toast-txt-head">Error</div>
        <div className="bui-toast-txt">
          You got 404 error
        </div>
        <AiOutlineClose className="bui-toast-close" onClick={() => setToastIsShown((bool) => bool = false)} />
        <div className="bui-toast-link">

          <a href="" className="bui-toast-link-sec">Read more</a>
          <a href="" className="bui-toast-link-primary">Buy now</a>
        </div>
      </div>
    </div>

`,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<>
        {click?(<div className="bui-toast-container" style={{display:"block"}} >
        <div className="toast bui-toast-yellow" style={{zIndex:5,right:"initial"}}>
          <AiOutlineInfoCircle className="bui-toast-icn" />
          <div className="bui-toast-txt-head">Error</div>
          <div className="bui-toast-txt">
            You got 404 error
          </div>
          <AiOutlineClose className="bui-toast-close" onClick={()=>setClick(prev=>prev=false)} />
          <div className="bui-toast-link">
  
            <a href="" className="bui-toast-link-sec">Read more</a>
            <a href="" className="bui-toast-link-primary">Buy now</a>
          </div>
        </div>
      </div>):""}
      <button className='bui-btn-fancy' onClick={()=>setClick(prev=>prev=!prev)}>try the toast</button>
</>
)
      },
      code:`<div className="bui-toast-container" >
      <div className="toast bui-toast-yellow">
        <AiOutlineInfoCircle className="bui-toast-icn" />
        <div className="bui-toast-txt-head">Error</div>
        <div className="bui-toast-txt">
          You got 404 error
        </div>
        <AiOutlineClose className="bui-toast-close" onClick={() => setToastIsShown((bool) => bool = false)} />
        <div className="bui-toast-link">

          <a href="" className="bui-toast-link-sec">Read more</a>
          <a href="" className="bui-toast-link-primary">Buy now</a>
        </div>
      </div>
    </div>
`
    },
    {
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`keep every thing inside the toast container`,`add icon inside the toast-icn class named element`,`add head text inside the element with class name toast-txt-head`,`add the normal text inside the elem of class name toast-txt`,`add close icon inside the elem of class name toast-close`,`keep all link(primary,secondary) of toast inside the elem of clkass name
      toast-link-container`,`for link add this class name inside the a tag toast-link-primary/sec`]
    },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Toast