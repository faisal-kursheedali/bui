import React from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'
// import {AiOutlineClose} from "react-icons/ai"

const List = () =>{
//   Datasender({
    
//   })
    
// })
const data={
  topics:["list","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"List",
      smallH1:"About :",
      p1:`Lists can be used at so many places, navigation bar, stacked notifications, article pages, etc.`,
      hId:"list"
    },{
      h3:"note :",
      p2:`
      Add class according to bullet style. Copy html code below and add your desired list items. To reverse the order of ordered list, add reversed attribute to ol element.
      If you want list stacked but with no bullet and indentation, then you can add list-no-style class. Class list-item-space applies padding between two list items.
      If you want list items in same line instead of stacked, you can add list-inline class to make it inline.
      `,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`
      <div className="bui-inline-block">
      <ul className="bui-list-rnd-dark  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="bui-inline-block">
      <ul className="bui-list-rnd-lite  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="bui-inline-block">
      <ul className="bui-list-sqr  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    // list with bullet
    <div className="bui-inline-block">
      <ol className="bui-list-num  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-abc  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-cap  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-smroman  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-lrgroman  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    // with no bullet
    <div className="">
      <ul className="bui-list-no-style pad-1 bui-list-item-space">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
   `,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<>
            <div className="bui-inline-block">
            <ul className="bui-list-rnd-dark  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="bui-inline-block">
            <ul className="bui-list-rnd-lite  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="bui-inline-block">
            <ul className="bui-list-sqr  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          {/* // list with bullet */}
          <br/>
          <div className="bui-inline-block">
            <ol className="bui-list-num  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ol>
          </div>
          <div className="bui-inline-block">
            <ol className="bui-list-abc  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ol>
          </div>
          <div className="bui-inline-block">
            <ol className="bui-list-cap  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ol>
          </div>
          <div className="bui-inline-block">
            <ol className="bui-list-smroman  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ol>
          </div>
          <div className="bui-inline-block">
            <ol className="bui-list-lrgroman  bui-inline-block ">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ol>
          </div>
          {/* // with no bullet */}
          <div className="">
            <ul className="bui-list-no-style pad-1 bui-list-item-space">
              <li>Item 1</li>
              <li>Itrm 2</li>
              <li>Item 3</li>
            </ul>
          </div>
         
</>
)
      },
      code:`
      <div className="bui-inline-block">
      <ul className="bui-list-rnd-dark  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="bui-inline-block">
      <ul className="bui-list-rnd-lite  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div className="bui-inline-block">
      <ul className="bui-list-sqr  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    // list with bullet
    <div className="bui-inline-block">
      <ol className="bui-list-num  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-abc  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-cap  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-smroman  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    <div className="bui-inline-block">
      <ol className="bui-list-lrgroman  bui-inline-block ">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ol>
    </div>
    // with no bullet
    <div className="">
      <ul className="bui-list-no-style pad-1 bui-list-item-space">
        <li>Item 1</li>
        <li>Itrm 2</li>
        <li>Item 3</li>
      </ul>
    </div>
   
`
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`Add class according to bullet style. Copy html code below and add your desired list items. To reverse the order of ordered list, add reversed attribute to ol element`,
        `If you want list stacked but with no bullet and indentation, then you can add list-no-style class. Class list-item-space applies padding between two list items.`,
        `If you want list items in same line instead of stacked, you can add list-inline class to make it inline.`
    ]
    },
  ],
}
return (
  <>
<CreateDoc data={data}/>
  </>
)
}

export default List