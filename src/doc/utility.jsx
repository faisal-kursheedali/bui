import React from 'react';
import {CreateDoc} from '../utility/import'

const TxtUtility = () => {
  return (
    <>
    
    <div className="bui-box-center" style={{padding:".5rem"}}>
  <div className="bui-head2 bui-pad-1 " style={{backgroundColor:'violet',padding:"5rem 2rem",borderRadius:".5rem"}}> Text utility </div>
  <div className="bui-head4 bui-pad-0-5">type of font size :</div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-list-sqr">
    <li className="bui-head1">Type one</li>
    <li className="bui-head2">Type two</li>
    <li className="bui-head3">Type three</li>  
    <li className="bui-head4">Type four</li>
  </ul>
  <div className="bui-p2 bui-pad-1"><span className=" bui-head1 bui-inline">hello world</span>this is the biggest font size for headings, to use
    this you need to add <span className="bui-txt-code">class="bui-head1"</span> in your tag.</div>
  <div className="bui-p2 bui-pad-1"><span className="bui-head2 bui-inline">hello world</span>this font sizes are used for headings, to use this you
    need to add <span className="bui-txt-code">class="bui-head2"</span> in your tag.</div>
  <div className="bui-p2 bui-pad-1"><span className="bui-head3 bui-inline">hello world</span>this font sizes are used for headings, to use this you
    need to add <span className="bui-txt-code">class="bui-head3"</span> in your tag.</div>
  <div className="bui-p2 bui-pad-1"><span className="bui-head4 bui-inline">hello world</span>this font sizes are used for headings, to use this you
    need to add <span className="bui-txt-code">class="bui-head4"</span> in your tag.</div>
  <div className="bui-head4 bui-pad-1 bui-txt-underline"> How to use :</div>
  <div className="bui-p2 bui-pad-0-5 bui-txt-bold"> things to note :</div>
  <div className="bui-p2 bui-pad-0-5">you need to add this names in your tag, to get that properties </div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-list-sqr">
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> largest </span> font size use - <span className="bui-txt-code">class="bui-head1"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> large </span> font size use - <span className="bui-txt-code">class="bui-head2"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> normal </span> font size use - <span className="bui-txt-code">class="bui-head3"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> bui-small </span> font size use - <span className="bui-txt-code">class="bui-head4"</span> </li>
  </ul>
  {/* <xmp className="bui-xmp-box">
    &lt;ul class="bui-list-sqr"&gt;
    &lt;li class="bui-head1"&gt;Type one&lt;/li&gt;
    &lt;li class="bui-head2"&gt;Type two&lt;/li&gt;
    &lt;li class="bui-head3"&gt;Type three&lt;/li&gt;
    &lt;li class="bui-head4"&gt;Type four&lt;/li&gt;
    &lt;/ul&gt;
  </xmp> */}
  <hr />
  <div className="bui-head3 bui-txt-underline"> normal texts :</div>
  <div className="bui-head4">type of font size :</div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-list-sqr">
    <li className="bui-p1">Type one</li>
    <li className="bui-p2">Type two</li>
    <li className="bui-p3">Type three</li>
    <li className="bui-small">Type four</li>
  </ul>
  <div className="bui-p2 bui-pad-1"><span className="bui-p1 bui-highlighted bui-inline">h1</span>this is the biggest font size for headings,
    to use this you need to add <span className="bui-txt-code">class="bui-p1"</span> in your tag.</div>
  <div className="bui-p2 bui-pad-1"><span className="bui-p2 bui-highlighted bui-inline">h2</span>this font sizes are used for headings, to use
    this you need to add <span className="bui-txt-code">class="bui-p2"</span> in your tag.</div>
  <div className="bui-p2 bui-pad-1"><span className="bui-p3 bui-highlighted bui-inline">h3</span>this font sizes are used for headings, to use
    this you need to add <span className="bui-txt-code">class="bui-p3"</span> in your tag.</div>
  <div className="bui-p2 bui-pad-1"><span className="bui-small bui-highlighted bui-inline">bui-small</span>this font sizes are used for headings,
    to use this you need to add <span className="bui-txt-code">class="bui-small"</span> in your tag.</div>
  <div className="bui-head4 bui-pad-1 bui-txt-underline"> How to use :</div>
  <div className="bui-p2 bui-pad-0-5 bui-txt-bold"> things to note :</div>
  <div className="bui-p2 bui-pad-0-5">you need to add this names in your tag, to get that properties </div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-list-sqr">
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> largest </span> font size use - <span className="bui-txt-code">class="bui-p1"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> large </span> font size use - <span className="bui-txt-code">class="bui-p2"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> normal </span> font size use - <span className="bui-txt-code">class="bui-p3"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> bui-small </span> font size use - <span className="bui-txt-code">class="bui-small"</span> </li>
  </ul>
  {/* <xmp className="bui-xmp-box">
    &lt;ul class="bui-list-sqr"&gt;
    &lt;li class="bui-p1"&gt;Type one&lt;/li&gt;
    &lt;li class="bui-p2"&gt;Type two&lt;/li&gt;
    &lt;li class="bui-p3"&gt;Type three&lt;/li&gt;
    &lt;li class="bui-small"&gt;Type four&lt;/li&gt;
    &lt;/ul&gt;
  </xmp> */}
  <hr />
  <div className="bui-head3 bui-txt-underline">colored texts :</div>
  <li className=" bui-p1 bui-cta1">CTA color 1</li>
  <li className=" bui-p1 bui-cta2">CTA color 2</li>
  <li className=" bui-p1 bui-cta3">CTA color 3</li>
  <li className=" bui-p1 bui-txt-black">black</li>
  <li className=" bui-p1 bui-txt-gray">gray</li>
  <li className=" bui-p1"><span className="bui-txt-white bui-highlighted-cta2"> white</span></li>
  <li className=" bui-p1 bui-txt-green">green</li>
  <li className=" bui-p1 bui-txt-red">red</li>
  <li className=" bui-p1 bui-txt-yellow">yellow</li>
  <div className="bui-head4 bui-pad-1 bui-txt-underline"> How to use :</div>
  <div className="bui-p2 bui-pad-0-5 bui-txt-bold"> things to note :</div>
  <div className="bui-p2 bui-pad-0-5">you need to add this names in your tag, to get that properties </div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-list-sqr">
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> CTA colour 1 </span>txt use - <span className="bui-txt-code">class="bui-cta1"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> CTA colour 2 </span>txt use - <span className="bui-txt-code">class="bui-cta2"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> CTA colour 3 </span>txt use - <span className="bui-txt-code">class="bui-cta3"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> Red coloured </span>txt use - <span className="bui-txt-code">class="bui-txt-red"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> GREEN coloured </span>txt use - <span className="bui-txt-code">class="bui-txt-green"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> YELLOW coloured </span>txt use - <span className="bui-txt-code">class="bui-txt-yellow"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> GRAY coloured </span>txt use - <span className="bui-txt-code">class="bui-txt-gray"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> BLACK coloured </span>txt use - <span className="bui-txt-code">class="bui-txt-black"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> WHITE coloured </span>txt use - <span className="bui-txt-code">class="bui-txt-white"</span> </li>
  </ul>
  {/* <xmp className="bui-xmp-box">
    &lt;/ul class="list-rnd"&gt;
    &lt;li class=" bui-p1 bui-cta1"&gt;CTA color 1&lt;/li&gt;
    &lt;li class=" bui-p1 bui-cta2"&gt;CTA color 2&lt;/li&gt;
    &lt;li class=" bui-p1 bui-cta3"&gt;CTA color 3&lt;/li&gt;
    &lt;li class=" bui-p1 bui-txt-black"&gt;black&lt;/li&gt;
    &lt;li class=" bui-p1 bui-txt-gray"&gt;gray&lt;/li&gt;
    &lt;li class=" bui-p1"&gt;&lt;span class="bui-txt-white bui-highlighted-cta2"&gt; white&lt;/span&gt;&lt;/li&gt;
    &lt;li class=" bui-p1 bui-txt-green"&gt;green&lt;/li&gt;
    &lt;li class=" bui-p1 bui-txt-red"&gt;red&lt;/li&gt;
    &lt;li class=" bui-p1 bui-txt-yellow"&gt;yellow&lt;/li&gt;
    &lt;/ul&gt;
  </xmp> */}
  <hr />
  <div className="bui-head3 bui-txt-underline"> types of texts :</div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-p2">
    <li className="bui-txt-bold">bold</li>
    <li className="bui-txt-del">deleted</li>
    <li className="bui-txt-underline">underlined</li>
    <li><span className="bui-highlighted">bui-highlighted</span></li>
    <li><span className="bui-highlighted-cta1">bui-highlighted</span></li>
    <li><span className="bui-highlighted-cta2">bui-highlighted</span></li>
    <li><span className="bui-highlighted-cta3">bui-highlighted</span></li>
  </ul>
  <div className="bui-head4 bui-pad-1 bui-txt-underline"> How to use :</div>
  <div className="bui-p2 bui-pad-0-5 bui-txt-bold"> things to note :</div>
  <div className="bui-p2 bui-pad-0-5">you need to add this names in your tag, to get that properties </div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-list-sqr">
    <li className="bui-pad-0-5">for <span className="bui-highlighted">bui-Highlighted CTA colour 1 </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-highlighted-cta1"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted">bui-Highlighted CTA colour 2 </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-highlighted-cta2"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> bui-Highlighted CTA colour 3 </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-highlighted-cta3"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> bui-Highlighted </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-highlighted"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> Underlined </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-txt-underline"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> Deleted </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-txt-del"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> Bold </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-txt-bold"</span> </li>
  </ul>
  {/* <xmp className="bui-xmp-box">
    &lt;ul class="bui-p2"&gt;
    &lt;li class="bui-txt-bold"&gt;bold&lt;/li&gt;
    &lt;li class="bui-txt-del"&gt;deleted&lt;/li&gt;
    &lt;li class="bui-txt-underline"&gt;underlined&lt;/li&gt;
    &lt;li&gt;&lt;span class="bui-highlighted"&gt;bui-highlighted&lt;/span&gt;&lt;/li&gt;
    &lt;li&gt;&lt;span class="bui-highlighted-cta1"&gt;bui-highlighted&lt;/span&gt;&lt;/li&gt;
    &lt;li&gt;&lt;span class="bui-highlighted-cta2"&gt;bui-highlighted&lt;/span&gt;&lt;/li&gt;
    &lt;li&gt;&lt;span class="bui-highlighted-cta3"&gt;bui-highlighted&lt;/span&gt;&lt;/li&gt;
    &lt;/ul&gt;
  </xmp> */}
  <hr />
  <div className="bui-head3 bui-txt-underline">Texts alignment :</div>
  <div className="bui-p2">Text alignments are used to align the text to right/lrft/center of container.</div>
  <div className="bui-p2 bui-txt-left bui-litegray-bg bui-pad-1" style={{backgroundColor:"lightgreen"}}>Left text</div>
  <div className="bui-p2 bui-txt-center bui-pad-1 bui-litegray-bg"  style={{backgroundColor:"limegreen"}}>Center text</div>
  <div className="bui-p2 bui-txt-right bui-darkgray-bg bui-pad-1" style={{backgroundColor:"green",color:'white'}}>Right text</div>
  <div className="bui-head4 bui-pad-1 bui-txt-underline"> How to use :</div>
  <div className="bui-p2 bui-pad-0-5 bui-txt-bold"> things to note :</div>
  <div className="bui-p2 bui-pad-0-5">you need to add this names in your tag, to get that properties </div>
  <ul style={{backgroundColor:"blueviolet",color:"white",paddingTop:"1rem",paddingBottom:"1rem"}} className="bui-list-sqr">
    <li className="bui-pad-0-5">for <span className="bui-highlighted">Centered</span>txt use - <span className="bui-txt-code marg-0-5">class="bui-txt-center"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted">Right aligned </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-txt-right"</span> </li>
    <li className="bui-pad-0-5">for <span className="bui-highlighted"> Left aligned </span>txt use - <span className="bui-txt-code marg-0-5">class="bui-txt-left"</span> </li>
  </ul>
  {/* <xmp className="bui-xmp-box">
    &lt;div class="bui-p2 bui-txt-left bui-darkgray-bg bui-pad-1"&gt;Left text&lt;/div&gt;
    &lt;div class="bui-p2 bui-txt-center bui-pad-1 litegray-bg"&gt;Center text&lt;/div&gt;
    &lt;div class="bui-p2 bui-txt-right bui-darkgray-bg bui-pad-1"&gt;Right text&lt;/div&gt;
  </xmp> */}
  <CreateDoc data={{
        topics:[],
        userTry:false,
        content:[]
    }}/>
</div>

    
    </>
  )
}

export default TxtUtility