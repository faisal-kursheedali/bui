import React from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
// import {AiOutlineClose} from "react-icons/ai"

const Input = () =>{
//   Datasender({
    
//   })
    
// })
const data={
  topics:["input","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Input",
      smallH1:"About :",
      p1:`Inputs are used to get the value from the user. There are huge verieties of input boxes all af them are listed below, read them and fallow the code to use in your code.`,
      hId:"input"
    },{
      h3:"note :",
      p2:`
      you just need to add input in the class name to getthe default Input box.
      And you need to add input-rnd in the class name to get the default round Input box.
      you just need to add input-sm or input-md or input-lrg in the class name to get the different sizes of Input box.
      you just need to add input-rnd in the class name to get the default round Input box.
      you just need to add input-sm or input-md or input-lrg in the class name to get the different sizes of Input box.
      you just need to add input-yellow or input-green or input-red or input-blue or input-gray in the class name to get the different color of Input box.
      Since it has two different stuffs you have to create a container tage with name as input-icn-container.In this containner you can also give class name of input-shape, input-size and input-color to thos properties respectively. Inside this container tag you have to give class name as input inside the input tag. And inside the icon element you have to give class name as input-icn.
      `,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`<input type="text" className="bui-input-green" />
      <input type="text" className="bui-input-yellow" />
      <input type="text" className="bui-input-red" />
      <input type="text" className="bui-input-blue" />
      <input type="text" className="bui-input-gray" />
`,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<><input type="text" className="bui-input-green" />
        <input type="text" className="bui-input-yellow" />
        <input type="text" className="bui-input-red" />
        <input type="text" className="bui-input-blue" />
        <input type="text" className="bui-input-gray" />
</>
)
      },
      code:`<input type="text" className="bui-input-green" />
      <input type="text" className="bui-input-yellow" />
      <input type="text" className="bui-input-red" />
      <input type="text" className="bui-input-blue" />
      <input type="text" className="bui-input-gray" />
`
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`you just need to add input in the class name to getthe default Input box.`,`you just need to add input-rnd in the class name to get the default round Input box.`,`you just need to add input-sm or input-md or input-lrg in the class name to get the different sizes of Input box.`,`you just need to add input-yellow or input-green or input-red or input-blue or input-gray in the class name to get the different color of Input box.`,`Since it has two different stuffs you have to create a container tage with name as input-icn-container.In this containner you can also give class name of input-shape, input-size and input-color to thos properties respectively. Inside this container tag you have to give class name as input inside the input tag. And inside the icon element you have to give class name as input-icn.`]
    },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Input;