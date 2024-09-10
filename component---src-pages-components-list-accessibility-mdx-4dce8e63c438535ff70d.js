"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[43835],{31571:function(e,n,t){t.r(n);var r=t(28453),l=t(296540),o=t(815929);t(169613);function a(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",code:"code",ul:"ul",li:"li"},(0,r.R)(),e.components),{PageDescription:t,AnchorLinks:a,AnchorLink:s}=n;return s||i("AnchorLink",!0),a||i("AnchorLinks",!0),t||i("PageDescription",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"No accessibility annotations are needed for lists, but keep these considerations\nin mind if you are modifying Carbon or creating a custom component.")),"\n",l.createElement(a,null,l.createElement(s,null,"What Carbon provides"),l.createElement(s,null,"Development considerations")),"\n",l.createElement(n.h2,null,"What Carbon provides"),"\n",l.createElement(n.p,null,"Carbon incorporates many accessibility considerations, some of which are\ndescribed below."),"\n",l.createElement(n.h3,null,"Keyboard interaction"),"\n",l.createElement(n.p,null,"Lists are not keyboard operable, unless the list items themselves are operable.\nIn such a situation, the list items will retain the component’s default keyboard\ninteraction. For example, in a list of links, each\n",l.createElement(n.a,{href:"https://carbondesignsystem.com/components/link/usage"},"link")," will be in the tab\norder and can be activated by ",l.createElement(n.code,null,"Enter"),"."),"\n",l.createElement(n.h2,null,"Development considerations"),"\n",l.createElement(n.p,null,"Keep this in mind if you’re modifying Carbon or creating a custom component:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Carbon uses native\n",l.createElement(n.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/content/#lists"},"HTML")," ordered\n(",l.createElement(n.code,null,"ol"),") and unorder (",l.createElement(n.code,null,"ul"),") lists and list items (",l.createElement(n.code,null,"li"),"), then styles them with\nCSS."),"\n",l.createElement(n.li,null,"Carbon uses ",l.createElement(n.code,null,"::before")," and ",l.createElement(n.code,null,"::marker")," CSS pseudo-elements for the numbering\nand bulleting of lists, which are properly read by assistive technologies such\nas ",l.createElement(n.a,{href:"https://www.ibm.com/able/toolkit/verify/screen-reader/"},"screen readers"),"."),"\n"),"\n",l.createElement(o.A,{layout:"table",components:["Ordered list","Unordered list"]}))}function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,r.R)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)}}}]);