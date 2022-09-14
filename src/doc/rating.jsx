import React,{useState} from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
import {AiFillStar} from "react-icons/ai"

const Rating = () =>{
    // const [click, setClick] = useState(initialState);
    const [val, setVal] = useState(0);
//   Datasender({
    
//   })
    
// })
const data={
  topics:["rating","code","modal"],
  userTry:true,
  content:[
    {
      h1:"Rating",
      smallH1:"About :",
      p1:`Rating components can be used as read-only badge or in reviews section. Can be used in reviews section as form too.`,
      hId:"rating"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`
      <div class="bui-rating-container">
          <label>
              <input type="checkbox"  disabled class="bui-rating-input">
              <span class="material-icons bui-rating-star-icn">
                  star
              </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="bui-rating-input">
              <span class="material-icons bui-rating-star-icn">
                  star
                  </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="bui-rating-input">
              <span class="material-icons bui-rating-star-icn">
                  star
                  </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="bui-rating-input">
              <span class="material-icons bui-rating-star-icn">
                  star
                  </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="bui-rating-input">
              <span class="material-icons bui-rating-star-icn">
                  star
                  </span>
          </label>
          <div class="bui-rating-example-display"></div>
      <div class="bui-rating-old-rnd">
          3.5
          <span class="material-icons bui-rating-old-icn">
              star
              </span>
      </div>
      </div>`,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<>
        <div style={{margin:"1rem 1rem"}}>
            {
                [1,2,3,4,5].map((i)=>{
                    if (i<=val) {
                        return(<>
                        <div  style={{display:"inline-block",cursor:"pointer"}}  onClick={()=>{
                            if (i===1) {
                                setVal(prev=>prev=0)
                            }else{

                                setVal(prev=>prev=i)
                            }
                        }}><AiFillStar style={{color:"gold"}} /></div>
                        </>)
                    }else{
                        return<div  style={{display:"inline-block",cursor:"pointer"}}  onClick={()=>setVal(prev=>prev=i)}><AiFillStar style={{color:"gray"}}/></div>
                    }
                })
            }
            <br/>
            <div class="bui-rating-old-rnd" style={{color:"white"}}>
          {val}<AiFillStar style={{color:"gold",marginLeft:"6px"}} />
      </div>
        </div>
</>
)
      },
      code:`
      <div class="rating-container">
          <label>
              <input type="checkbox"  disabled class="rating-input">
              <span class="material-icons rating-star-icn">
                  star
              </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="rating-input">
              <span class="material-icons rating-star-icn">
                  star
                  </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="rating-input">
              <span class="material-icons rating-star-icn">
                  star
                  </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="rating-input">
              <span class="material-icons rating-star-icn">
                  star
                  </span>
          </label>
          <label>
              <input type="checkbox" checked disabled class="rating-input">
              <span class="material-icons rating-star-icn">
                  star
                  </span>
          </label>
          <div class="rating-example-display"></div>
      <div class="rating-old-rnd">
          3.5
          <span class="material-icons rating-old-icn">
              star
              </span>
      </div>
      </div>`
    }
    // ,{
    //   hId:"summary",
    //   impPointHead:"summary :",
    //   impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`for badge on avatar you need to keep avatar(image/text) inside the element that has class name of => badge-avatar badge-btm-right/-btm-left/-top-right/-top-left  badge-(colors=>cta1,cta2,cta3,green,yellow,red,gray)`,`size of the avatar is given inside the avatar class name`,`for badge icon we have to put icon and the conent of the badge insid ethe element of
    //   class name badge-icn-container`,`icon should have to be kept inside the element of class name badge-icn`,`and content of badge is kept inside the element of class name badge-icn-content`,`for badged text the text is given inside the the element of class name badge-txt this will be gray in default and font-size is size of its parent`,`you can change the font size physically or using text utility`,`about color you can change using various color in class name as given here : badge-txt-red/green/yellow/gray/cta1/cta2/cta3/cta4
    //   `]
    // //   impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",]
    // },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default Rating