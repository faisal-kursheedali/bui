import React from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
import {AiOutlineInfoCircle,AiOutlineClose} from "react-icons/ai"

const Alert = () =>{
//   Datasender({
    
//   })
    
// })
const data={
  topics:["alert","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Alert",
      smallH1:"About :",
      p1:"Responsive Alerts built with the BUI CSS.Alerts deliver appropriate feedback messages for common user behaviors with a handful and flexible alert boxes.",
      hId:"alert"
    },{
      h3:"note :",
      p2:`Everything inside the alert is kept inside the element of alert-red/green/yellow or alert class name. All the content inside the alert is given inside this element. Any icon can be used like Figma or react icon or any other but the icon should have to be given inside the element that has the class name of alert-icn,
      similarly, for close icon or exit icon, it should be kept inside the element that has the class name of
      alert-close.`,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`<div className="bui-alert-red">
      <div className="bui-alert-icn">
        <AiOutlineInfoCircle />
      </div>
      <div className="bui-alert-close">
        <AiOutlineClose />
      </div>
      Error : Something went wrong
</div>
`,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<div className="bui-alert-red">
        <div className="bui-alert-icn">
          <AiOutlineInfoCircle />
        </div>
        <div className="bui-alert-close">
          <AiOutlineClose />
        </div>
        Error : Something went wrong
</div>
)
      },
      code:`<div className="bui-alert-red">
      <div className="bui-alert-icn">
        <AiOutlineInfoCircle />
      </div>
      <div className="bui-alert-close">
        <AiOutlineClose />
      </div>
      Error : Something went wrong
</div>`
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME","everything inside the alert is kept inside the element of alert-red/green/yellow or alert class name","all the content inside the alert is given inside this element",`any icon can be used like Figma or react icon or any other but the icon should have 
      to be given inside the element that has the class name of alert-icn`,`similarly, for close icon or exit icon, it should be kept inside the element that has the class name of
      alert-close`]
    }
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Alert