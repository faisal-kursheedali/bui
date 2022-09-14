import React from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
import {AiOutlineClose} from "react-icons/ai"

const Badge = () =>{
//   Datasender({
    
//   })
    
// })
const data={
  topics:["badge","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Badge",
      smallH1:"About :",
      p1:`
      Responsive Badges built with BUI CSS. Badges add extra information like count or label to any content.
      `,
      hId:"badge"
    },{
      h3:"note :",
      p2:`The badge on avatar you need to keep avatar(image/text) inside the element that has class name of => badge-avatar badge-btm-right/-btm-left/-top-right/-top-left  badge-(colors=>cta1,cta2,cta3,green,yellow,red,gray) and size of the avatar is given inside the avatar class name. For badge icon we have to put icon and the conent of the badge insid ethe element of
      class name badge-icn-container and  icon should have to be kept inside the element of class name badge-icn and content of badge is kept inside the element of class name badge-icn-content. For badged text the text is given inside the the element of class name badge-txt this will be gray in default and font-size is size of its parent. We can change the font size physically or using text utility. About color you can change using various color in class name as given here : badge-txt-red/green/yellow/gray/cta1/cta2/cta3/cta4.
      `,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`<div className="bui-badge-avatar bui-badge-btm-right bui-badge-green">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="bui-avatar-rnd bui-avatar-lrg" />
</div>

<div className="bui-badge-txt bui-badge-txt-red">new</div>

<div className="bui-badge-icn-container">
<div className="bui-badge-icn"><AiOutlineClose /></div>
<div className="bui-badge-icn-content">100</div>
</div>
`,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<><div className="bui-badge-avatar bui-badge-btm-right bui-badge-green">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="bui-avatar-rnd bui-avatar-lrg" />
</div>

<div className="bui-badge-txt bui-badge-txt-red">new</div>

<div className="bui-badge-icn-container">
  <div className="bui-badge-icn"><AiOutlineClose /></div>
  <div className="bui-badge-icn-content">100</div>
</div>
</>
)
      },
      code:`<div className="bui-badge-avatar bui-badge-btm-right bui-badge-green">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="bui-avatar-rnd bui-avatar-lrg" />
</div>

<div className="bui-badge-txt bui-badge-txt-red">new</div>

<div className="bui-badge-icn-container">
<div className="bui-badge-icn"><AiOutlineClose /></div>
<div className="bui-badge-icn-content">100</div>
</div>
`
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`for badge on avatar you need to keep avatar(image/text) inside the element that has class name of => badge-avatar badge-btm-right/-btm-left/-top-right/-top-left  badge-(colors=>cta1,cta2,cta3,green,yellow,red,gray)`,`size of the avatar is given inside the avatar class name`,`for badge icon we have to put icon and the conent of the badge insid ethe element of
      class name badge-icn-container`,`icon should have to be kept inside the element of class name badge-icn`,`and content of badge is kept inside the element of class name badge-icn-content`,`for badged text the text is given inside the the element of class name badge-txt this will be gray in default and font-size is size of its parent`,`you can change the font size physically or using text utility`,`about color you can change using various color in class name as given here : badge-txt-red/green/yellow/gray/cta1/cta2/cta3/cta4
      `]
    //   impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",]
    },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Badge