"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[815799],{282713:function(e,t,n){n.r(t);var a=n(28453),i=n(296540);function l(e){const t=Object.assign({h2:"h2",p:"p",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.R)(),e.components),{AnchorLinks:n,AnchorLink:l,DoDontRow:r,DoDont:c,Video:s}=t;return l||o("AnchorLink",!0),n||o("AnchorLinks",!0),c||o("DoDont",!0),r||o("DoDontRow",!0),s||o("Video",!0),i.createElement(i.Fragment,null,i.createElement(n,null,i.createElement(l,null,"Paths"),i.createElement(l,null,"Composition")),"\n",i.createElement(t.h2,null,"Paths"),"\n",i.createElement(t.p,null,"Elements in Carbon dance on the grid. Motion paths trace lines along the grid\nwhich never run diagonally."),"\n",i.createElement(r,null,i.createElement(c,{type:"do",colLg:12,colMd:8,caption:"When expanding or moving elements across the screen, stagger the timing of horizontal and vertical animations to create a path with a rounded corner."},i.createElement(s,{title:"Paths staggering horizontally",vimeoId:"310582887"}))),"\n",i.createElement("br"),"\n",i.createElement(r,null,i.createElement(c,{colLg:12,colMd:8,type:"dont",caption:"Not staggering horizontal and vertical animations create a straight diagonal path. It breaks the grid and is harsh to the eye."},i.createElement(s,{title:"Paths not staggering horizontally",vimeoId:"310582699"}))),"\n",i.createElement("br"),"\n",i.createElement(r,null,i.createElement(c,{type:"do",aspectRatio:"1:1",caption:"When removing an item from the grid, thumbnails on the edge existing and re-entering container create a smooth transition."},i.createElement(s,{title:"Thumbnails with smooth transition",vimeoId:"310582738"})),i.createElement(c,{type:"dont",aspectRatio:"1:1",caption:"Thumbnails moving on diagonal paths feels sporadic and harsh."},i.createElement(s,{title:"Thumbnails with sporadic transition",vimeoId:"310582775"}))),"\n",i.createElement(r,null,i.createElement(c,{type:"do",aspectRatio:"1:1",caption:"When sorting or shuffling items on the grid, always using rounded corner paths to visually organize the movements."},i.createElement(s,{title:"organized sort and shuffle",vimeoId:"310582816"})),i.createElement(c,{type:"dont",aspectRatio:"1:1",caption:"Criss cross sorting appears disorganized. Avoid this motion path."},i.createElement(s,{title:"disorganized criss crossing",vimeoId:"310582851"}))),"\n",i.createElement(t.h2,null,"Composition"),"\n",i.createElement(t.p,null,"When multiple animated elements coexist or interact with each other within the\nsame view, it is vital to make the many moving elements work together and form a\ncoherent experience, to better provide way-finding and focus."),"\n",i.createElement(t.h3,null,"Consistency"),"\n",i.createElement(t.h4,null,"Semantic consistency"),"\n",i.createElement(t.p,null,"When elements convey the same meaning or perform the same function, use the same\nmotion for them, and vice-versa. This helps to reinforce the meaning behind a\nmovement and improves the user’s proficiency using the interface."),"\n",i.createElement(t.p,null,"In the example below, both expanding a row of a data table and opening a\ndropdown use a chevron and share a similar intent—to reveal content hidden in a\nseam. Therefore, they should use the same motion style (productive) and easing\n(entrance, standard). However, they should use slightly different durations due\nto their difference in size."),"\n",i.createElement(r,null,i.createElement(c,{type:"do",colLg:12,colMd:8,caption:"Comparing data table expansion and dropdown"},i.createElement(s,{title:"Semantic consistency",vimeoId:"310581970"}))),"\n",i.createElement(t.h4,null,"Spatial consistency"),"\n",i.createElement(t.p,null,"Pay attention to the spatial relationships between elements and screens, and\ninformation hierarchy. Visually similar elements may need the different motions\nto clarify their respective spatial locations."),"\n",i.createElement(r,null,i.createElement(c,{type:"do",colLg:12,colMd:8,caption:"When the new content panel is on a higher layer, motion is “sliding”, moving content within with the panel.  Also always dim the content below when new layer is introduced above."},i.createElement(s,{title:"Spatial consistency",vimeoId:"310581999"}))),"\n",i.createElement(r,null,i.createElement(c,{type:"do",colLg:12,colMd:8,caption:"When the new content panel is on the same layer, motion is “pushing”, revealing content within with a mask."},i.createElement(s,{title:"new content panel",vimeoId:"310582064"}))),"\n",i.createElement(t.h4,null,"Intentional inconsistency"),"\n",i.createElement(t.p,null,"Conscientious use of inconsistency in motion highlights a difference in meaning\nor intent behind actions with similar visual appearance. Usually, forward motion\nin the direction of entrance signals affirmation, while reversing entrance\nmotion signals cancellation."),"\n",i.createElement(r,null,i.createElement(c,{type:"do",aspectRatio:"1:1",caption:"Use motion to reinforce meaning. Affirmative action here triggers a different exit motion for the modal than negation."},i.createElement(s,{title:"Intentional inconsistency",vimeoId:"310582134"})),i.createElement(c,{type:"dont",aspectRatio:"1:1"},i.createElement(s,{title:"incorrect intentional inconsistency",vimeoId:"310582167"}))),"\n",i.createElement(t.h3,null,"Continuity"),"\n",i.createElement(t.p,null,"Motion can help establish a sense of continuity between screens and experiences.\nPay attention to shared elements across screens, such as title panels or\nbuttons, to create a graceful transition."),"\n",i.createElement(r,null,i.createElement(c,{type:"do",colLg:12,colMd:8,caption:"Shared elements can effectively guide users through a multi-layered information architecture."},i.createElement(s,{title:"Continuity",vimeoId:"310582206"}))),"\n",i.createElement(r,null,i.createElement(c,{colLg:12,colMd:8,type:"dont",caption:"Continuous elements are for guidance and should not distract. Always finish a sequence with the important content on page."},i.createElement(s,{title:"Continuity should not distract",vimeoId:"310582279"}))),"\n",i.createElement(t.h3,null,"Sequence and stagger"),"\n",i.createElement(t.p,null,"When multiple elements need to animate, distribute their entrances over time\ninstead of introducing everything at once. This will help the user understand\nthe content and orientation."),"\n",i.createElement(t.p,null,"For example, staggering the entrance of table content by 20 ms significantly\nreduces the cognitive load. Depending on the number of staggered elements, the\ndelay should be adjusted to ensure that total time is still within 500 ms."),"\n",i.createElement(r,null,i.createElement(c,{type:"do",colLg:12,colMd:8,caption:"Table with rows loading in at staggered timing."},i.createElement(s,{title:"Sequence and stagger",vimeoId:"310582972"}))),"\n",i.createElement(t.p,null,"Sequence the loading of page content when possible. Start with the most stable\ncontent, such as static content and header, and end with the most important\ninformation, such as the primary button or a calculation result, to focus the\nuser’s attention on them."),"\n",i.createElement(r,null,i.createElement(c,{type:"do",colLg:12,colMd:8,caption:"Sequencing of this interface prioritizes the primary button, and reserves data visualization for later when users begin to scroll, indicating intention to dive deeper."},i.createElement(s,{title:"Sequencing",vimeoId:"310582919"}))),"\n",i.createElement(t.p,null,"Follow this recommended sequence of different types of content when\nchoreographing content entrance. Not all categories will be present in every\nexperience."),"\n",i.createElement(t.table,null,i.createElement(t.thead,null,i.createElement(t.tr,null,i.createElement(t.th,null,"Seq"),i.createElement(t.th,null,"Category"),i.createElement(t.th,null,"Examples"))),i.createElement(t.tbody,null,i.createElement(t.tr,null,i.createElement(t.td,null,"1"),i.createElement(t.td,null,"Static content"),i.createElement(t.td,null,"UI shell, top and side navigation")),i.createElement(t.tr,null,i.createElement(t.td,null,"2"),i.createElement(t.td,null,"Static content (body)"),i.createElement(t.td,null,"Headers, written content, images")),i.createElement(t.tr,null,i.createElement(t.td,null,"3"),i.createElement(t.td,null,"Dynamic content"),i.createElement(t.td,null,"Content of a data table, query results from database")),i.createElement(t.tr,null,i.createElement(t.td,null,"4"),i.createElement(t.td,null,"Primary action"),i.createElement(t.td,null,"Primary action button")),i.createElement(t.tr,null,i.createElement(t.td,null,"5"),i.createElement(t.td,null,"Animated content"),i.createElement(t.td,null,"Data visualizations")))))}function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?i.createElement(t,e,i.createElement(l,e)):l(e)}}}]);