"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[946],{17113:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return g},default:function(){return y}});var i=a(45987),n=(a(67294),a(3905)),o=a(3624);a(38238);const s=["components"],g={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=l("PageDescription"),r=l("AnchorLinks"),d=l("AnchorLink"),p=l("Row"),b=l("Column"),A=l("Caption"),m=l("DoDontRow"),h=l("DoDont"),f={_frontmatter:g},k=o.Z;function y(e){let{components:t}=e,a=(0,i.Z)(e,s);return(0,n.kt)(k,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c,{mdxType:"PageDescription"},(0,n.kt)("p",null,"No accessibility annotations are needed for toggles, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),(0,n.kt)(r,{mdxType:"AnchorLinks"},(0,n.kt)(d,{mdxType:"AnchorLink"},"What Carbon provides"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Design recommendations"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Development considerations")),(0,n.kt)("h2",null,"What Carbon provides"),(0,n.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via keyboard. Carbon also incorporates other\naccessibility considerations, some of which are described below."),(0,n.kt)("h3",null,"Keyboard interaction"),(0,n.kt)("p",null,"Each toggle is in the tab order. Pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," changes the\ntoggle’s state between off and on."),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABjUlEQVQoz2NgoDXwV5zGkO+1kmHdrHMM0QZzGWKM5jH7KUxl9FOYCpYDYZINLPBazVAWuA5sYKzRfAY/+ekMfsoTGP2VJzEEBQeSbmC0wTyGBLOFDJF6cwUidGZP9FecFgcyzF95MmNwrDPxBsHw8XO7GbykprDFmszmjtCb5e4p3a9vz3CKwZVhC0NwjBtDrNoGhnCVZcQZBsYKMxiC1KZxMDDMZJg4r0a6tCZbwdUomaPE+gyjgogxWM//0v/EGxisMY052mgmhxHDBKHdOw7093T3Nfz//58hUHkmAzODBMTAPOINZA1QmsYZqDSbwVd2GmeM0ZxpwZpTYiJ0Z8aGa83uFGcyE2RgYGBvMf9NlIGM/orTONzFJzGEaMxgCNaYyppqs9QjUG2yTpz5LMMYw3kePAwqPCADjwQR50IWqAsZgtSmM4RoTmVIt1vGEKA6mSHecjY4CXExKIH1PI4nzkBmf8VpbCC2j+wUhkDVaQzp9kuZgjQnM8ZbzGaMNZrPxM2gDNZzIwq7gQAVjIyztfcn0gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"illustration showing tab and other keyboard operation",title:"illustration showing tab and other keyboard operation",src:"/static/d56802b3e9cfad2185f3c2665f0b3a72/3cbba/toggle-accessibility-1.png",srcSet:["/static/d56802b3e9cfad2185f3c2665f0b3a72/7fc1e/toggle-accessibility-1.png 288w","/static/d56802b3e9cfad2185f3c2665f0b3a72/a5df1/toggle-accessibility-1.png 576w","/static/d56802b3e9cfad2185f3c2665f0b3a72/3cbba/toggle-accessibility-1.png 1152w","/static/d56802b3e9cfad2185f3c2665f0b3a72/92c65/toggle-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(A,{mdxType:"Caption"},"Toggles are reached by Tab and activated by Space or Enter keys."))),(0,n.kt)("h3",null,"Redundant state information"),(0,n.kt)("p",null,"Carbon’s default toggle uses both color and text to indicate on or off. Where\nspace constraints make a smaller toggle desirable, Carbon adds a tickmark to the\ntoggle’s “on” state so that if the text is not included, the component’s on/off\nstate can be distinguished without relying on use of color. The state is also\ncaptured programmatically for users who cannot see or understand the visual\nindicators."),(0,n.kt)(m,{mdxType:"DoDontRow"},(0,n.kt)(h,{type:"do",caption:"Do include the on/off text for the toggle's state whenever space permits.",mdxType:"DoDont"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"578px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8UlEQVQ4y2NgGAUjFAQFBeHF1DEwGEL///+fdAP9IgLB2D8iSMI3PEAjPilBGizBzsCgo6XDICYsyiAmJkaCiS/swJj3lgcDww9JsKtuvrsPltIlx0Dlhe5MygvdGTSW+HhIzLXb3nRq2p7Vd3amMzAwsJjbWHCTbKDKAg9mlQUeDJqLffLEZ9v+mnpx+b89T45PZ2Bg4DcwMhQTEyHVwIUeDCoLPRkMlgWBsABDOoMQODIUGRg0+BVJ9zLEQA8G29WxDDpL/BgYqqASekwMauyy5BuotsiLQXG+K6PBsiBGp3WJDMFb8xm8NqaPZtShBgBiMlPItVMfrgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:'The alert toggle shows "off" and "on" to indicate state',title:'The alert toggle shows "off" and "on" to indicate state',src:"/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/778f8/toggle-accessibility-2-do.png",srcSet:["/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/7fc1e/toggle-accessibility-2-do.png 288w","/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/a5df1/toggle-accessibility-2-do.png 576w","/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/778f8/toggle-accessibility-2-do.png 578w"],sizes:"(max-width: 578px) 100vw, 578px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)(h,{type:"do",caption:"Where space is confined, use the tickmark variation in lieu of on/off text.",mdxType:"DoDont"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100.34722222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABu0lEQVQ4y+WSy27aQBSGp+5D9FEs9ZWQuulTdNFdt3RXlQXLijUblKpC3SAkggRzMcZ2hcncPIbYnFONkypxIkHibT36dWZhf3O+OSbk/34YY4RS2lTG2NsueQZcr9dNOOckyzKSpimJ4/jxQWfzFPjmHviOc/4hSZLedrvtbTabHqW0xxi7mKfAQAhBhBDvV6sVzmYznM/nuFgskDGGlNKmnksLSCkNvGaSJKGHDIfDajQa1ePxuOac15TSi2kBhRCBvzvOeSiEwDiOT3EcQxRFwDkHIcTFtIBa60BrTZRSodYa9/s9SCnB71+aFtBaG9R1TY7HYyilxMlkAv1+H9I0xbIs0RiD1tqzaQGNMYFzjhRF0XQYbSJYLpe+y+ZlD7yUZ8o3ShKpZGiNRbxFON3W4PedlbFCAoc63MkcP44/wZff3+CP3KGzxeuVG+ARSV1W4V7d4OdfX+H7/AfsVN4N+KCs7pRPCH4V9k7ZaPM6ZT+UsiyboSilcLG8hqufV5DnebeheOWqqsjhcGiA0+kUBoMBZFmGzrluyv7H1lqH/mOlFDjnwNqOU/bKxhhfw/tuwBgDL1H9p/wXH7DkbaPpSy8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:'Toggles in the Alert column of a table show their "on" state with a green tickmark',title:'Toggles in the Alert column of a table show their "on" state with a green tickmark',src:"/static/4b7b806cf4ab7635a193610f777f2ebe/a5df1/toggle-accessibility-3-do.png",srcSet:["/static/4b7b806cf4ab7635a193610f777f2ebe/7fc1e/toggle-accessibility-3-do.png 288w","/static/4b7b806cf4ab7635a193610f777f2ebe/a5df1/toggle-accessibility-3-do.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h2",null,"Design recommendations"),(0,n.kt)("p",null,"Design annotations are not needed, but keep the following point in mind."),(0,n.kt)("h3",null,"Do not change the toggle’s label based on its state"),(0,n.kt)("p",null,"It is essential that designers distinguish between the text indicating the\non/off state of the toggle and the text that is the toggle’s label. The label’s\ntext should not change based on the on/off state."),(0,n.kt)(m,{mdxType:"DoDontRow"},(0,n.kt)(h,{type:"do",caption:"Do keep the label consistent. Only change the state text between On and Off.",mdxType:"DoDont"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"578px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAB30lEQVQ4y2NgGAUgEBQUhBcPvIE+MYEM3rEBDP7hgSyeCQHsXulBbP8ZGBgCGQQZvDamk25giF8wQ4hfEENQcJBouHuwQqlHhgiDMgODoKUMowqnLIOYiCiDmJgY8QbKr3JnUFrmwWA6K4jBYEWQAEMGg9D///8ZGBQZGFQF5Ek3UGWhB7PKQg8GzcU+ueKzbX9Nu7j87+4nx6czMDDwGZkYi5JjIBPUQA/JOfY7G09O27vm7i5Q4LEZmRnzkmyg4hJ3BqUl7ozqy30Y+OdZMFz9eJfh/penYDlNNQ3SvfyWoZjhP0Mfw1WGVIa1DCVgsVP3LzCBaA1yDIyPj2dISkpiiImJEUlISFCKjIyUAEWKhIQEg5KSEoOoKIkGgjSDYxUCmEDsrq4uSAqQlyfdwEuXLjE+evSI4ezZs7rHjx+v7+7ubu3r63MDGa6qqspDsoG3bt1ifvXqFcOFCxdqr169+r+rq+t/f3//GgYGBiFFRUVlERER0gycO3cuw4oVKxgmTpzINn36dNWuri7Nnp4ensTERLC8sLAwaQauXbuWYdeuXQxLlixhWLx4MUNnZydDb28vQ15eHnkGHjx4EORdhr179zJs3bqVqauri6mvrw8cUS4uLmDDSDKQEgAAazGzNCCtmUoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"the same 'Alerts' toggle keeping its label in both states",title:"the same 'Alerts' toggle keeping its label in both states",src:"/static/3843e8142bb9c6bd10dcaeee11b08aff/778f8/toggle-accessibility-4-do.png",srcSet:["/static/3843e8142bb9c6bd10dcaeee11b08aff/7fc1e/toggle-accessibility-4-do.png 288w","/static/3843e8142bb9c6bd10dcaeee11b08aff/a5df1/toggle-accessibility-4-do.png 576w","/static/3843e8142bb9c6bd10dcaeee11b08aff/778f8/toggle-accessibility-4-do.png 578w"],sizes:"(max-width: 578px) 100vw, 578px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)(h,{type:"dont",caption:"Do not change the label text as a way of indicating the toggle's on/off state.",mdxType:"DoDont"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"578px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAB3UlEQVQ4y2NgGAUgEBQURBAPrIE+MYEM3rEBDP7hgSyeiQHs3qlBbAFxISxBrn4MwS7+pBsY4hfMEOIXxBAUHCQa4RaskO+VIpEckSDmGuLJ7BbqBRInzUD5Ve4MSss8GExnBTEYrAgSYEhnEPr//z8DgzsDA0MYA4NBjzdpBqos9GBWWejBoLnYJ1d8tu2vaZeW/9358MhMkKFPv7xkUlnoSbKBTFADPSTn2O9sOjlt76pb2zM+/fzCcPrlFSZVUg1UXOLOoLTEnVF9uQ8D/zwLhuuf7zM8+v6CAeRCsNf/m5Nm4FuGYob/DH0MZxlSGLYwlMHFp7ZNZOhsbAdHGEkgPj6eISkpiSEmJkY0ISFBKTIyUio8PFwmICCANSAggPRkA/caBDBC2YzJyclMKSkpDCBDSQKXLl1ifPToEcPZs2d1jx8/3tDT09MyYcIE546ODobOzk5GLS0t0gy8desW86tXrxguXLhQe/Xq1f9dXV3/e3t713d1dTH09vYyg2iSwNy5cxlWrFjBMHHiRLbp06erdnV1afb39/P09fWBDARjksDatWsZdu3axbBkyRKGxYsXg7zJ0N/fz0C2gQcPHgR5l2Hv3r0MW7duZerq6mICGdbT00O6YZQCAPkU1//o8GV5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"The toggle changing its label from 'Alerts on' to 'Alerts off'",title:"The toggle changing its label from 'Alerts on' to 'Alerts off'",src:"/static/1976c42e3b5762c84778383c9e70781a/778f8/toggle-accessibility-4-dont.png",srcSet:["/static/1976c42e3b5762c84778383c9e70781a/7fc1e/toggle-accessibility-4-dont.png 288w","/static/1976c42e3b5762c84778383c9e70781a/a5df1/toggle-accessibility-4-dont.png 576w","/static/1976c42e3b5762c84778383c9e70781a/778f8/toggle-accessibility-4-dont.png 578w"],sizes:"(max-width: 578px) 100vw, 578px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h2",null,"Development considerations"),(0,n.kt)("p",null,"Keep this in mind if you’re modifying Carbon or creating a custom component."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Toggle is implemented as a button with a role of ",(0,n.kt)("inlineCode",{parentName:"li"},"switch"),"."),(0,n.kt)("li",{parentName:"ul"},"“On” and “off” text is ",(0,n.kt)("inlineCode",{parentName:"li"},"aria-hidden"),"; the state of the toggle is surfaced with\n",(0,n.kt)("inlineCode",{parentName:"li"},"aria-checked")," set to “true” or “false”."),(0,n.kt)("li",{parentName:"ul"},"The toggle’s ",(0,n.kt)("inlineCode",{parentName:"li"},"label")," is set with ",(0,n.kt)("inlineCode",{parentName:"li"},"for")),(0,n.kt)("li",{parentName:"ul"},"See the\n",(0,n.kt)("a",{parentName:"li",href:"https://w3c.github.io/aria-practices/#switch"},"ARIA authoring practices guidance on switch"),"\nfor more considerations.")))}y.isMDXComponent=!0}}]);