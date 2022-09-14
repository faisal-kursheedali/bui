import React from 'react'
// import Datasender from './datasender.tsx'
import {CreateDoc} from '../utility/import'


const Card = () =>{
//   Datasender({
    
//   })
    
// })
const data={
  topics:["card","note","code","modal","summary"],
  userTry:true,
  content:[
    {
      h1:"Card",
      smallH1:"About :",
      p1:`A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.`,
      hId:"card"
    },{
      h3:"note :",
      p2:`
      small cards Text+image,This card are used to dispaly some important information in samll space. This are mostely used to display discounts.
      Example of Vertical Card-Text+Image Below are 3 variations, card with badge, card with image default-container, card with close button. All the cards have like button.
      Example of Card with Text Overlay If you want to display some default not working card then, Use class names as per below code.
      This card are used to display catogory or some offers. Usualy it is used to represent bunch of card in single card. There is also text overlayed card for this type.

      `,
      hId:"note"
    },{
      codeH2:"code :",
      codeP2:`In this I had used React, so I used the syntax of react. If you use only HTML and CSS then use class insterd of className.`,
      codeTxt:`
      // small card
      <section className="bui-card-offer-container">
      <div className="bui-card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img8.jpg" alt='' className="bui-card-offer-img" />
        <div className="bui-card-offer-head">
          sample prod
        </div>
        <div className="bui-card-offer-txt">
          this is sample bui-card only
        </div>
        <a href="." className="bui-card-offer-link bui-link-fancy">from RS 200</a>
      </div>
      <div className="bui-card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img4.jpg" alt='' className="bui-card-offer-img" />
        <div className="bui-card-offer-head">
          sample prod
        </div>
        <div className="bui-card-offer-txt">
              this is sample bui-card only
            </div>
            <a href="." className="bui-card-offer-link bui-link-fancy">from RS 200</a>
        </div>
        </section>
        // normal card
        <div className="bui-card-normal">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="bui-card-normal-img" />
      <div className="bui-card-normal-info">
        <div className="bui-card-head">sample product</div>
        <div className="bui-card-sub">This is sample card only so don't copy this as hole</div>
        <div className="bui-card-normal-rating">3.5<span className="material-icons bui-card-normal-rating-icon">
            star
          </span></div>
        <div className="bui-card-normal-price">$200 <span className="bui-card-normal-oldprice">$2000</span></div>
        <div className="bui-card-normal-discount">
          save %68
        </div>
        <button className="bui-btn-fancy bui-card-normal-btn">Bye Now</button>
      </div>
    </div>
    // disabled card
    <div className="bui-card-normal bui-card-disable">
      <div className="bui-card-disable-txt">OUT OF STOCK</div>
      <span className="bui-card-badge badge-txt-red">hot</span>
      <img src="https://buildui.netlify.app/images/img-products/img13.jpg" alt='' className="bui-card-normal-img" />
      <div className="bui-card-normal-info">
        <div className="bui-card-head">sample product</div>
        <div className="bui-card-sub">This is sample product only so, plz don't copy this.</div>
        <div className="bui-card-normal-rating">3.5<span className="material-icons bui-card-normal-rating-icon">
            star
          </span></div>
        <div className="bui-card-normal-price">$200 <span className="bui-card-normal-oldprice">$2000</span></div>
        <div className="bui-card-normal-discount">
          save %68
        </div>
        <button className="bui-btn-fancy bui-card-normal-btn">Bye Now</button>
      </div>
    </div>
    // card medium
    <div className="bui-card-sm">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="bui-card-sm-img" />
      <div className="bui-card-sm-info">
        <div className="bui-card-sm-head">sample product</div>
        <div className="bui-card-sm-txt">all are at 50% discount</div>
        <div className="bui-card-sm-discount">63% discount</div>
        <div className="bui-card-sm-sub">Deal of the day</div>
        {/* <button class="bui-card-sm-btn btn-fancy">Buy</button> */}
      </div>
    </div>
   `,
      hId:"code"
    },{
      hId:"modal",
      modal:()=>{
        return(<>
          {/* // small card */}
          <section className="bui-card-offer-container">
          <div className="bui-card-offer">
            <img src="https://buildui.netlify.app/images/img-products/img8.jpg" alt='' className="bui-card-offer-img" />
            <div className="bui-card-offer-head">
              sample prod
            </div>
            <div className="bui-card-offer-txt">
              this is sample bui-card only
            </div>
            <a href="." className="bui-card-offer-link bui-link-fancy">from RS 200</a>
          </div>
          <div className="bui-card-offer">
            <img src="https://buildui.netlify.app/images/img-products/img4.jpg" alt='' className="bui-card-offer-img" />
            <div className="bui-card-offer-head">
              sample prod
            </div>
            <div className="bui-card-offer-txt">
              this is sample bui-card only
            </div>
            <a href="." className="bui-card-offer-link bui-link-fancy">from RS 200</a>
            </div>
            </section>
            {/* // normal card */}
            <div className="bui-card-normal">
          <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="bui-card-normal-img" />
          <div className="bui-card-normal-info">
            <div className="bui-card-head">sample product</div>
            <div className="bui-card-sub">This is sample card only so don't copy this as hole</div>
            <div className="bui-card-normal-rating">3.5<span className="material-icons bui-card-normal-rating-icon">
                star
              </span></div>
            <div className="bui-card-normal-price">$200 <span className="bui-card-normal-oldprice">$2000</span></div>
            <div className="bui-card-normal-discount">
              save %68
            </div>
            <button className="bui-btn-fancy bui-card-normal-btn">Bye Now</button>
          </div>
        </div>
        {/* // disabled card */}
        <div className="bui-card-normal bui-card-disable">
          <div className="bui-card-disable-txt">OUT OF STOCK</div>
          <span className="bui-card-badge badge-txt-red">hot</span>
          <img src="https://buildui.netlify.app/images/img-products/img13.jpg" alt='' className="bui-card-normal-img" />
          <div className="bui-card-normal-info">
            <div className="bui-card-head">sample product</div>
            <div className="bui-card-sub">This is sample product only so, plz don't copy this.</div>
            <div className="bui-card-normal-rating">3.5<span className="material-icons bui-card-normal-rating-icon">
                star
              </span></div>
            <div className="bui-card-normal-price">$200 <span className="bui-card-normal-oldprice">$2000</span></div>
            <div className="bui-card-normal-discount">
              save %68
            </div>
            <button className="bui-btn-fancy bui-card-normal-btn">Bye Now</button>
          </div>
        </div>
        {/* // card medium */}
        <div className="bui-card-sm">
          <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="bui-card-sm-img" />
          <div className="bui-card-sm-info">
            <div className="bui-card-sm-head">sample product</div>
            <div className="bui-card-sm-txt">all are at 50% discount</div>
            <div className="bui-card-sm-discount">63% discount</div>
            <div className="bui-card-sm-sub">Deal of the day</div>
            {/* <button class="bui-card-sm-btn btn-fancy">Buy</button> */}
          </div>
        </div>
       
</>
)
      },
      code:`
      // small card
      <section className="bui-card-offer-container">
      <div className="bui-card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img8.jpg" alt='' className="bui-card-offer-img" />
        <div className="bui-card-offer-head">
          sample prod
        </div>
        <div className="bui-card-offer-txt">
          this is sample bui-card only
        </div>
        <a href="." className="bui-card-offer-link bui-link-fancy">from RS 200</a>
      </div>
      <div className="bui-card-offer">
        <img src="https://buildui.netlify.app/images/img-products/img4.jpg" alt='' className="bui-card-offer-img" />
        <div className="bui-card-offer-head">
          sample prod
        </div>
        <div className="bui-card-offer-txt">
              this is sample bui-card only
            </div>
            <a href="." className="bui-card-offer-link bui-link-fancy">from RS 200</a>
        </div>
        </section>
        // normal card
        <div className="bui-card-normal">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="bui-card-normal-img" />
      <div className="bui-card-normal-info">
        <div className="bui-card-head">sample product</div>
        <div className="bui-card-sub">This is sample card only so don't copy this as hole</div>
        <div className="bui-card-normal-rating">3.5<span className="material-icons bui-card-normal-rating-icon">
            star
          </span></div>
        <div className="bui-card-normal-price">$200 <span className="bui-card-normal-oldprice">$2000</span></div>
        <div className="bui-card-normal-discount">
          save %68
        </div>
        <button className="bui-btn-fancy bui-card-normal-btn">Bye Now</button>
      </div>
    </div>
    // disabled card
    <div className="bui-card-normal bui-card-disable">
      <div className="bui-card-disable-txt">OUT OF STOCK</div>
      <span className="bui-card-badge badge-txt-red">hot</span>
      <img src="https://buildui.netlify.app/images/img-products/img13.jpg" alt='' className="bui-card-normal-img" />
      <div className="bui-card-normal-info">
        <div className="bui-card-head">sample product</div>
        <div className="bui-card-sub">This is sample product only so, plz don't copy this.</div>
        <div className="bui-card-normal-rating">3.5<span className="material-icons bui-card-normal-rating-icon">
            star
          </span></div>
        <div className="bui-card-normal-price">$200 <span className="bui-card-normal-oldprice">$2000</span></div>
        <div className="bui-card-normal-discount">
          save %68
        </div>
        <button className="bui-btn-fancy bui-card-normal-btn">Bye Now</button>
      </div>
    </div>
    // card medium
    <div className="bui-card-sm">
      <img src="https://buildui.netlify.app/images/img-products/img14.jpg" alt='' className="bui-card-sm-img" />
      <div className="bui-card-sm-info">
        <div className="bui-card-sm-head">sample product</div>
        <div className="bui-card-sm-txt">all are at 50% discount</div>
        <div className="bui-card-sm-discount">63% discount</div>
        <div className="bui-card-sm-sub">Deal of the day</div>
        {/* <button class="bui-card-sm-btn btn-fancy">Buy</button> */}
      </div>
    </div>
   
`
    },{
      hId:"summary",
      impPointHead:"summary :",
      impPoint:["ALWAYS USE 'bui-' IN PRIFIX IN CLASS NAME",
      `Example of small cards Text+image, This card are used to dispaly some important information in samll space. This are mostely used to display discounts.`,
      `Example of Vertical Card- Text+Image, Below are 3 variations, card with badge, card with image default-container, card with close button. All the cards have like button.`,
      `Example of Card with Text Overlay,If you want to display some default not working card then, Use class names as per below code.`
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

export default Card