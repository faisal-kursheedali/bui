import React from 'react'
// import Datasender from './datasender.tsx'
import { CreateDoc } from '../utility/import'
import {FaFilter } from "react-icons/fa"

const Button = () => {
    //   Datasender({

    //   })

    // })
    const data = {
        topics: ["button", "link", "note", "code", "modal", "summary"],
        userTry: true,
        content: [
            {
                h1: "Button",
                smallH1: "About :",
                p1: `Responsive buttons built with Tailwind CSS. Buttons provide predefined styles for multiple button types: outline, rounded, social, floating, fixed, and much more.`,
                hId: "button"
            }, {
                h1: "Link",
                smallH1: "About :",
                p1: `For the link you have to specify what type using class name as link or link-nostyle/underlined/fancy and for the color you sholud add the class name along with type name as link-cta1/cta2/cta3 and for link secondary you need to add at last link-sec insid the class name.`,
                //   p1:`For the link you have to specify what type using class name as link or link-nostyle/underlined/fancy and for the color you sholud add the class name along with type name as link-cta1/cta2/cta3 and for link secondary you need to add at last link-sec insid the class name.`,
                hId: "link"
            }, {
                h3: "note :",
                p2: `For normal types of btn we must put btn in class name and for outlined buttons you just need to put btn-outline and for btn or btn-outline are by defaultly primary button. For the secondary button we have to add btn-sec or btn-outline-sec. For sizes you 1st need to put the type of btn then put the class name as btn-sm or btn-md or btn-lg and for btn shape you 1st need to put the type of btn then put btn-rnd for curver button. For btn with icon put all the type,shape,size based on the need and add btn-icn-container inside the class and make the element with class name of btn-icn and keep the icon inside. For primary btn if you want to change color of only primary btn then put btn-cta1 or btn-cta2 or btn-cta3 or (btn-outline-cta1/cta2/cta3)=> this is only for outline only.`,
                hId: "note"
            }, {
                codeH2: "code :",
                codeP2: `In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
                codeTxt: `<button className='bui-btn-outline bui-btn-sm'>click</button>
                <button className='bui-btn-outline bui-btn-outline-cta3 bui-btn-outline-cta3 bui-btn-rnd bui-btn-lg bui-btn-icn-container'>click <div className="bui-btn-icn"><FaFilter/></div> </button>
              
        
                <a href="#" className="bui-link-underline  bui-link-cta1 bui-link-sec">click me</a>
        `,
                hId: "code"
            }, {
                hId: "modal",
                modal: () => {
                    return (<><button className='bui-btn-outline bui-btn-sm'>click</button>
                    <button className='bui-btn-outline bui-btn-outline-cta3 bui-btn-outline-cta3 bui-btn-rnd bui-btn-lg bui-btn-icn-container'>click <div className="bui-btn-icn"><FaFilter/></div> </button>
                  
            
                    <a href="#" className="bui-link-underline  bui-link-cta1 bui-link-sec">click me</a>
            
                    </>
                    )
                },
                code: `<button className='bui-btn-outline bui-btn-sm'>click</button>
                <button className='bui-btn-outline bui-btn-outline-cta3 bui-btn-outline-cta3 bui-btn-rnd bui-btn-lg bui-btn-icn-container'>click <div className="bui-btn-icn"><FaFilter/></div> </button>
              
        
                <a href="#" className="bui-link-underline  bui-link-cta1 bui-link-sec">click me</a>
        
`
            }, {
                hId: "summary",
                impPointHead: "summary :",
                  impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`for normal type of btn we must put btn in class name `,`for outlined button you just need to put btn-outline`,`btn or btn-outline are by defaultly primary button`,`for secondary button we have to add btn-sec or btn-outline-sec`,`for sizes you 1st need to put the type of btn then put the class name as btn-sm or btn-md or btn-lg`,`for btn shape you 1st need to put the type of btn then put btn-rnd for curver button`,`for btn with icon put all the type,shape,size based on the need and add btn-icn-container inside the class`,`and make the element with class name of btn-icn and keep the icon inside`,`for primary btn if you want to change color of only primary btn then put btn-cta1 or btn-cta2 or btn-cta3 or (btn-outline-cta1/cta2/cta3)=> this is only for outline only.`,`for link you have to specify what type using class name as link or link-nostyle/underlined/fancy`,`for color you sholud add the class name along with type name as link-cta1/cta2/cta3`,`for link secondary you need to add at last link-sec insid the class name`]
            },
        ],
    }
    return (
        <>
            <CreateDoc data={data} />
        </>
    )
}

export default Button