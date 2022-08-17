import React from 'react'
import { CreateDoc } from '../utility/import'

const Avatar = () => {
  const data = {
    topics: ["avatar", "about", "algorithum"],
    content: [
      {

        h1: "Avatar",
        // h2:"welcome to Avatar",
        // h3:"welcome to Avatar",
        smallH1: "welcome to Avatar",
        // smallH2:"welcome to Avatar",
        // p1:"hii how are you guys",
        p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, facere! Cumque porro saepe alias qui totam enim placeat minima exercitationem amet, nam molestias deleniti quibusdam. Labore accusantium aut distinctio non!",
        // p3:"hii how are you guys",
        // codeH1:"hii how are you guys",
        codeH2: "hii how are you guys",
        codeP1: "hii how are you guys",
        codeP2: "hii how are you guys",
        codeTxt: `<CreateDoc data={data} />`,
        codeSmall1: "hii how are you guys",
        codeSmall2: "hii how are you guys",
        // smallP1:"This how it end",
        smallP2: "This how it end like some one is here in the bathroom",
        impPointHead: "Summary",
        impPoint: [`psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciati`, `hello`],
        hId: "avatar",
        modal: () => {
          return (
            <>
              <div className="bui-btn">
              hello
            </div>
              <div className="bui-btn-fancy">
              hello
            </div>
              
           
            </>
          )
        },
        code: `<div className="bui-btn">
        hello
      </div>Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Corrupti soluta officiis temporibus assumenda optio blanditii
      s cum a! Nam eum magnam earum atque esse? Pariatur, 
      optio accusantium odit mollitia voluptates architecto!`,
      },
      {

        // h1: "Avatar",
        h2:" ",
        // h3:"welcome to Avatar",
        // smallH1: "welcome to Avatar",
        // smallH2:"welcome to Avatar",
        // p1:"hii how are you guys",
        p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, facere! Cumque porro saepe alias qui totam enim placeat minima exercitationem amet, nam molestias deleniti quibusdam. Labore accusantium aut distinctio non!",
        // p3:"hii how are you guys",
        // codeH1:"hii how are you guys",
        codeH2: "hii how are you guys",
        codeP1: "hii how are you guys",
        codeP2: "hii how are you guys",
        codeTxt: `<CreateDoc data={data} />`,
        codeSmall1: "hii how are you guys",
        codeSmall2: "hii how are you guys",
        // smallP1:"This how it end",
        smallP2: "This how it end like some one is here in the bathroom",
        impPointHead: "Summary",
        impPoint: [`psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis mod sequi libero possimus doloribus! Minima aspernatur, cupiditate soluta nulla, impedit consequuntur reprehenderit et deserunt 
        psum dolor sit amet consectetur adipisicing elit. Soluta perspiciati`, `hello`],
        hId: "about",
        modal: () => {
          return (
            <>
              <div className="bui-btn">
              hello
            </div>
              <div className="bui-btn-fancy">
              hello
            </div>
              
           
            </>
          )
        },
        code: `<div className="bui-btn">
        hello
      </div>Lorem, ipsum dolor sit amet consectetur 
      adipisicing elit. Corrupti soluta officiis temporibus assumenda optio blanditii
      s cum a! Nam eum magnam earum atque esse? Pariatur, 
      optio accusantium odit mollitia voluptates architecto!`,
      }


    ],
    userTry:true,
  }
  return (
    <>
      {
        <CreateDoc data={data} />
      }

    </>
  )
}

export default Avatar