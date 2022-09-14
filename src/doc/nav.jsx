import React from 'react'
// import Datasender from './datasender.tsx'
import { CreateDoc } from '../utility/import'
// import { AiOutlineClose } from "react-icons/ai"

const NavDoc = () => {
    //   Datasender({

    //   })

    // })
    const data = {
        topics: ["navigation","side-nav", "note", "code", "modal", "summary"],
        userTry: true,
        content: [
            {
                h1: "Navigation",
                smallH1: "About :",
                p1: `The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.
      `,
                hId: "navigation"
            },
            {
                h1: "Side-Navigation",
                smallH1: "About :",
                p1: `Everything come inside .bui-sidenav and in bui-sidenav-header element we put the cmpny name ect, and in .bui-sidenav-header we can have 2 elements, One is bui-sidenav-header-btn - for button on the header of side nav and bui-sidenav-header-logo- for cmpny logo. Inside the .bui-sidenav-list(ul) element all the item are kept and each item has class name of bui-sidenav-list-item. If the item has any icon then keep them inside the element with class name bui-sidenav-list-item-icn and for hr in sidenav with some additional style use hr tag with class name of bui-sidenav-list-hr.`,
                hId: "side-nav"
            }, {
                h3: "note :",
                p2: `Add everything inside the .bui-nav class name then add all the item inside the list ul with class name of .bui-nav-list and each item li should have  class name of .bui-nav-list-item. If the li is for logo of the company then put that specific div with .bui-nav-logo. If the item in nav has to navigate then use this class name to that link tag (<a/> or <Link/>).`,
                hId: "note"
            }, 
//             {
//                 codeH2: "code :",
//                 codeP2: `In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
//                 codeTxt: `<div className="bui-badge-avatar bui-badge-btm-right bui-badge-green">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="bui-avatar-rnd bui-avatar-lrg" />
// </div>

// <div className="bui-badge-txt bui-badge-txt-red">new</div>

// <div className="bui-badge-icn-container">
// <div className="bui-badge-icn"><AiOutlineClose /></div>
// <div className="bui-badge-icn-content">100</div>
// </div>
// `,
//                 hId: "code"
//             }, {
//                 hId: "modal",
//                 modal: () => {
//                     return (<><div className="bui-badge-avatar bui-badge-btm-right bui-badge-green">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="bui-avatar-rnd bui-avatar-lrg" />
//                     </div>

//                         <div className="bui-badge-txt bui-badge-txt-red">new</div>

//                         <div className="bui-badge-icn-container">
//                             <div className="bui-badge-icn"><AiOutlineClose /></div>
//                             <div className="bui-badge-icn-content">100</div>
//                         </div>
//                     </>
//                     )
//                 },
//                 code: `<div className="bui-badge-avatar bui-badge-btm-right bui-badge-green">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt='' className="bui-avatar-rnd bui-avatar-lrg" />
// </div>

// <div className="bui-badge-txt bui-badge-txt-red">new</div>

// <div className="bui-badge-icn-container">
// <div className="bui-badge-icn"><AiOutlineClose /></div>
// <div className="bui-badge-icn-content">100</div>
// </div>
// `
//             }
            , {
                hId: "summary",
                impPointHead: "summary :",
                  impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",`add everything inside the .bui-nav class name`,`add all the item inside the list ul with class name of .bui-nav-list`,`each item li should have  class name of .bui-nav-list-item`,`if the li is for logo of the company then put that specific div with .bui-nav-logo`,`if the item in nav has to navigate then use this class name to that link tag (<a/> or <Link/>)`,`every thing come inside .bui-sidenav`,`in bui-sidenav-header element we put the cmpny name ect`,`in .bui-sidenav-header we can have 2 elements 1, bui-sidenav-header-btn - for button on the header of side nav
                  2, bui-sidenav-header-logo- for cmpny logo`,`inside the .bui-sidenav-list(ul) element all the item are kept`,`each item has class name of bui-sidenav-list-item`,`if the item has any icon then keep them inside the element with class name bui-sidenav-list-item-icn`,`for hr in sidenav with some additional style use hr tag with class name of bui-sidenav-list-hr`]
            },
        ],
    }
    return (
        <>
            <CreateDoc data={data} />
        </>
    )
}

export default NavDoc