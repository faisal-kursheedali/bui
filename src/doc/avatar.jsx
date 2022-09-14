import React from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
// import {AiOutlineInfoCircle,AiOutlineClose} from "react-icons/ai"

const Avatar = () =>{
//   Datasender({
    
//   })
    
// })
const data={
  topics:["avatar","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Avatar",
      smallH1:"About :",
      p1:"Responsive avatar built with BUI CSS. Plenty of templates like a circle avatar, square, profile and many more.",
      hId:"avatar"
    },{
      h3:"note :",
      p2:`The avatar can have different shape and sizes so they are specified with the help of class names in img tag,
      and avatar-rnd/sqr for shapes and avatar-xsm/sm/md/lg/xl for sizes.
      For texted avatar the element is given with avatar-txt along with class name for required size.
      `,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`<img src="https://pacific-store.netlify.app/img/daydeal/vcollor2.jpg" alt="" className="bui-avatar-rnd avatar-xsm" /> 

      <div className="bui-avatar-txt avatar-xsm">hello</div>
      `,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<><img src="https://pacific-store.netlify.app/img/daydeal/vcollor2.jpg" alt="" className="bui-avatar-rnd avatar-xsm" /> 

        <div className="bui-avatar-txt avatar-xsm">hello</div>
        </>
)
      },
      code:`<img src="https://pacific-store.netlify.app/img/daydeal/vcollor2.jpg" alt="" className="bui-avatar-rnd avatar-xsm" /> 

      <div className="bui-avatar-txt avatar-xsm">hello</div>
      `
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`the avatar can have different shape and sizes so they are specified with the help of class names in img tag`,`avatar-rnd/sqr for shapes`,`avatar-xsm/sm/md/lg/xl for sizes`,`for texted avatar the element is given with avatar-txt along with class name for required size`]
    },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Avatar