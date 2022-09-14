import React,{useState} from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
import {AiOutlineClose} from "react-icons/ai"

const Modal = () =>{
    const [click, setClick] = useState(false);
//   Datasender({
    
//   })
    
// })
const data={
  topics:["intro","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Modal",
      smallH1:"About :",
      p1:`Responsive modal built with Tailwind CSS. Use Modal to add dialogs to your site for lightboxes, user notifications, or completely custom content.`,
      hId:"intro"
    },{
      h3:"note :",
      p2:`Keep every thing inside the elem with class name of modal-container and put the heading inside the elem class name => modal-head and pull all the content then keep all the btn inside the modal-btn-container element 
      In btn it can be styled using buildui style and close btn/icn is kept inside the elem with the name modal-close. 
      `,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`<div className="bui-modal-container">
      <div className="bui-modal-head">hello</div>
      content here!!!
      <div className="bui-modal-btn-container"><button className="bui-btn bui-btn-sm">click</button>
      <button className="bui-btn bui-btn-sm bui-btn-sec">click</button></div>
      <div className="bui-modal-close">
        <AiOutlineClose/>
      </div>
</div>
`,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<>
        {click?(<div className="bui-modal-container">
        <div className="bui-modal-head">hello</div>
        content here!!!
        <div className="bui-modal-btn-container"><button className="bui-btn bui-btn-sm">click</button>
        <button className="bui-btn bui-btn-sm bui-btn-sec">click</button></div>
        <div className="bui-modal-close" onClick={()=>setClick(prev=>prev=false)}>
            
          <AiOutlineClose/>
        </div>
  </div>):""}
  <button className='bui-btn-fancy' onClick={()=>setClick(prev=>prev=!prev)}>try the modal</button>
</>
)
      },
      code:`<div className="bui-modal-container">
      <div className="bui-modal-head">hello</div>
      content here!!!
      <div className="bui-modal-btn-container"><button className="bui-btn bui-btn-sm">click</button>
      <button className="bui-btn bui-btn-sm bui-btn-sec">click</button></div>
      <div className="bui-modal-close">
        <AiOutlineClose/>
      </div>
</div>
`
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`keep every thing inside the elem with class name of modal-container`,`put the heading inside the elem class name => modal-head`,`pull all the content`,`keep all the btn inside the modal-btn-container element`,`btn can be styled using buildui style `,`close btn/icn is kept inside the elem with the name modal-close`]
    },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Modal