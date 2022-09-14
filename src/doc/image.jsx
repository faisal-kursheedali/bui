import React from 'react'
import {CreateDoc} from '../utility/import'

const Image = () =>{
//   Datasender({
    
//   })
    
// })
const data={
  topics:["image","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Image",
      smallH1:"About :",
      p1:`Responsive images built with Tailwind CSS. Use classes for images to make your pictures responsive and more beautiful.`,
      hId:"image"
    },{
      h3:"note :",
      p2:`For responsive square images you have to put this class name img-sqr of image tag and for responsive round images you first have to put everything inside the element of class name img-rnd-container. Inside that element we have to put image tag with the class name of img-rnd and here it is object-fit:"cover"; by default if you want to change it you can change it as per the need.You have to physically put max-width and min-width as per the need in css file or inline css for both sqr and rnd images. `,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`<img src="https://buildui.netlify.app/images/img11.jpg" alt="" className="bui-img-sqr" />
          
      <div className="bui-img-rnd-container">
                <img src="https://buildui.netlify.app/images/img11.jpg" alt="" className="bui-img-rnd" />
      
      </div>
      
`,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<><img src="https://buildui.netlify.app/images/img11.jpg" alt="" className="bui-img-sqr" />
          
        <div className="bui-img-rnd-container">
                  <img src="https://buildui.netlify.app/images/img11.jpg" alt="" className="bui-img-rnd" />
        
        </div>
        
</>
)
      },
      code:`<img src="https://buildui.netlify.app/images/img11.jpg" alt="" className="bui-img-sqr" />
          
      <div className="bui-img-rnd-container">
                <img src="https://buildui.netlify.app/images/img11.jpg" alt="" className="bui-img-rnd" />
      
      </div>
      
`
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`for responsive square images you have to put this class name img-sqr of image tag
      `,`for responsive round images you first have to put everything inside the element of class name img-rnd-container`,`inside that element we have to put image tag with the class name of img-rnd`,`here it is object-fit:"cover"; by default if you want to change it you can change it as per the need`,`you have to physically put max-width and min-width as per the need in css file or inline css for both sqr and rnd images`]
    },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Image