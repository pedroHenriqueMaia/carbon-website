"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[715891],{733899:function(e,t,a){a.r(t);var n=a(28453),i=a(296540),s=a(815929);a(169613);function l(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",span:"span",code:"code",ul:"ul",li:"li",a:"a"},(0,n.R)(),e.components),{PageDescription:a,AnchorLinks:l,AnchorLink:o,DoDontRow:r,DoDont:b,Row:d,Column:m,Caption:p}=t;return o||c("AnchorLink",!0),l||c("AnchorLinks",!0),p||c("Caption",!0),m||c("Column",!0),b||c("DoDont",!0),r||c("DoDontRow",!0),a||c("PageDescription",!0),d||c("Row",!0),i.createElement(i.Fragment,null,i.createElement(a,null,i.createElement(t.p,null,"Design annotations are needed for specific instances shown below, but for the\nstandard tabs component, also called a tablist, Carbon already incorporates\naccessibility.")),"\n",i.createElement(l,null,i.createElement(o,null,"What Carbon provides"),i.createElement(o,null,"Design recommendations"),i.createElement(o,null,"Development considerations")),"\n",i.createElement(t.h2,null,"What Carbon provides"),"\n",i.createElement(t.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(t.h3,null,"Keyboard interactions"),"\n",i.createElement(t.p,null,"Tabs take at least two tabstops, one for the tablist and one for the tabpanel.\nWhen tabbing away from the tablist, focus will either go to the first operable\nelement in the tabpanel or, where there are no operable elements, the entire\ntabpanel will take focus to support scrolling of its content."),"\n",i.createElement(r,null,i.createElement(b,{type:"do",colMd:6,colLg:6,caption:"The tablist takes a single tabstop then focus moves to the first item in the tabpanel."},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 896px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB20lEQVR42q2UWW7bMBCGfbLepifpMdoj9LWPRXuF2tosW0uUJkGERLJFaqOWv5yJJEtOEDSwCXzg8vBphhzNClceq7cOu7ZHozr0XX+ZsFEteu34+d3E509f8e3LLz7/iHghLGTN8114wO8fHuw/MZR2VTrarjvRti3z1v5FOARQFQ1EWiI91gjjBG70CMN9QHQXY7t1NFtmt9thv9/z2nEcuK7Le5qnCFXdoszVQIn7vxG8nYvbKMDz8xNs24ZpmrAsi0VBEExntPd9n+UsbJsO5ZAujVopCCkhZc6kacocj0cIIZBl2bQmaD3CQoqKpNPjNA08z8N6veYICMMwONVRMiL1h/M8Z5bCdikMglCLLJ2WM2AzlNYcipxkJJ6EVC4kHQe9WBj6Oqo1bMuAZZ6gSEc2mw2SJHkt5Hurmin1XJQI/Ef4QcwEGk/vb6NYR5SwZGRM+5Ww0ynLrEKmyya+P8DZPmF/I3TZZHA8jZ/hJjqgLAsUxYlRtkxZl0whal2Y/XCHSqchkPOFy5dZCl7PBeewkCQkmw9FZTNLRcj3RQthVTb8KO8J5UeE9BDdrGSuImzPhL1uOfNm8L9Qua3oH64Kdd0GS23r/B4vElIDLXTqhVTcYC8R/gOTTAapYem5QAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="A user reaches the tablist with the Tab key. Pressing the Tab key again moves focus to a link inside the tabpanel&#39;s content"\n        title=""\n        src="/static/ba0b8b20dc68aee3393f59623f644111/6e9cd/tab-accessibility-1a-do.png"\n        srcset="/static/ba0b8b20dc68aee3393f59623f644111/7fc1e/tab-accessibility-1a-do.png 288w,\n/static/ba0b8b20dc68aee3393f59623f644111/a5df1/tab-accessibility-1a-do.png 576w,\n/static/ba0b8b20dc68aee3393f59623f644111/6e9cd/tab-accessibility-1a-do.png 896w"\n        sizes="(max-width: 896px) 100vw, 896px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),i.createElement(b,{colMd:6,colLg:6,type:"do",caption:"Where a tabpanel has no interactive items, the focus moves from the tablist to the entire tabpanel."},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 896px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB9ElEQVR42q2Ub3KbMBDFfbLepifJMdoj9Gs/dtIjNMYYMOC4adIUsBH/JBAIXlcixEObTJyxNfNGWs3Ob55WKy1w4bF4abNXA7q2x9AP5wG7VmEgxrcvNj5++ITPV9dm/z3gGVBU0swPuwzfv4ZwbmK0xGrIbd8fpZQyeimeAWsClqxGVkj8jBn8XzFW/iPufifYbFySB8/z4Ps+wjCAZ2KX4g3FodlfTDXT7pq6Q81bVIXA3W4Hz3Gx24aIIwJbNpY/LFjLFda2g8APx70by8T+JjDxYnKmOvXsNGcc+4SBHXKk+xzRn8QoiQ447Bn2cYokpjXlaCVRijTN4Nv3WCjVG1em+MNY/KqssSVnq5UF27bhOGszB0EAzqtnVXoW3Kw71eB28/gKsNDAW6zXGubM5LruTIwxVFWFRgpsPQJqhq6fruM0NDAIQiyXS3K5elWWZdFRUwLyI1ADVDe6bKUya7YvKZGZ5LdUliVJO6yPQD2k7JCnwii6H48hhHhTOk9DZ8BGtEbTKHKOoihN8imaAdtGmf4bL+UCQN2D/T9vtcyFqQvn/CRpqOyobTRQlPJIGqbGrqiBM7A0P0npITMuffuBgFX734/RdWMZZPMO0aUKLunI1C7677vYB6tfCqdjT6/knKERT42tzGuRT7d9jsO/2UUDhIJJz6QAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="A user tabs through a tablist. The focus goes from the tablist to the whole tabpanel, which contains only text."\n        title=""\n        src="/static/fde99d861b35f74c8c41aa239fc0a595/6e9cd/tab-accessibility-1b-do.png"\n        srcset="/static/fde99d861b35f74c8c41aa239fc0a595/7fc1e/tab-accessibility-1b-do.png 288w,\n/static/fde99d861b35f74c8c41aa239fc0a595/a5df1/tab-accessibility-1b-do.png 576w,\n/static/fde99d861b35f74c8c41aa239fc0a595/6e9cd/tab-accessibility-1b-do.png 896w"\n        sizes="(max-width: 896px) 100vw, 896px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",i.createElement(t.p,null,"Arrow keys are used to navigate between individual tab items in the tablist.\nWhen the end of the tablist is reached, the focus wraps to the opposite end of\nthe list. For scrollable tablists, where the number of tabs exceeds the\nhorizontal space, the keyboard navigation does not change. The user presses the\n",i.createElement(t.code,null,"Left")," or ",i.createElement(t.code,null,"Right")," arrow key, which moves the focus to the next tab item and,\nwhere necessary, scrolls the tablist to keep the selected item visible. For\nmouse users, clickable arrows appear at the end of the tablist to provide the\nsame scrolling, but these are not needed for keyboard users and they are not in\nthe focus order."),"\n",i.createElement(d,null,i.createElement(m,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABUUlEQVR42q1TTW+CQBD1//+LHntueuu1Hpo0aQwtdEGkJmpdFhBYvmTxlVm7RhO1tnWSlxnC7mNm3mOAK8fAFJvNRmc+yzAaBli3Naqq0qjrGk3T/I1w/rHC8MHDUggIEYFzjiiKkKapPkPouk7D3DlKuE/qzxbwphyTSQDHsTEej2HbNhhjsCxLZ0JZlucJKZpqDbGIUJWF7iwMQw3Rd0zPBnEco23bMyN32+48a4m7m2fkMkWSrHokGjTyr3a4P7ZS3W5PSqldfRGhOXwtDI59xah5Cl2/no7qS0a+mrFNkHKkKClLHjSZc1KbY/4pwCYhWBBCVurAbkcJ6a/wfV97z3EcuK6rPUjZZe94Yz4sb4qnF4Ykb78Jf1RZ7dSljk3u3yIWEve3r+BxgSwvtLmLYpvp7sU7NF2UeYPRY9ATSMg8R5plyHpIKU+r/B9RvgC7OpRgyr6nEwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="An image pair showing two views of the same tablist of 6 items. The user navigates between tab with left and right arrow keys. If the user presses the left arrow on the first item, the focus wraps around to item 6. Likewise arrowing right from tab item 6 moves to the first tab"\n        title=""\n        src="/static/a51628c2f57891386a983e8b9d286369/3cbba/tab-accessibility-4.png"\n        srcset="/static/a51628c2f57891386a983e8b9d286369/7fc1e/tab-accessibility-4.png 288w,\n/static/a51628c2f57891386a983e8b9d286369/a5df1/tab-accessibility-4.png 576w,\n/static/a51628c2f57891386a983e8b9d286369/3cbba/tab-accessibility-4.png 1152w,\n/static/a51628c2f57891386a983e8b9d286369/92c65/tab-accessibility-4.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(t.p,null,"Arrow keys move between tabs in the tablist (wrapping from last back to first)\nand scroll automatically to keep the focused tab visible.")))),"\n",i.createElement(t.p,null,"Automatic and manual tablists differ in how the tab items are activated. The\nfollowing illustration shows what will happen for each variant when a right\narrow key is pressed with the Overview tab selected and focused."),"\n",i.createElement(t.p,null,"For automatic tablists, focus and selection are synchronized. When the user\narrows to a tab, it is selected, and the tabpanel under the tab is updated in\nreal time."),"\n",i.createElement(t.p,null,"Manual tablists allow the user to arrow between the tab items without updating\nthe tabpanel underneath. When the user right arrows, the Overview tab remains\nselected while focus moves to the Details tab. In order to select the Details\ntab (and update the tabpanel under the tab), the user would press ",i.createElement(t.code,null,"Enter")," or\n",i.createElement(t.code,null,"Space"),"."),"\n",i.createElement(d,null,i.createElement(m,{colLg:12},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 49.30555555555556%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZElEQVR42o2S2ZLCIBRE/f/PmwdjzK5ZJ2hIiNlcemgsqPFNqjoLNIe7sMOX4/V6feXb8VEUBTzPw36/h+/7CILA6Xg8IooiAxRCON/hcPjwWRngMAy4XC4oyxJd12GeZ4zjiNvt5sTBN311XRs4ff893GOAy7IYIyVEi76XxjxNkxMjvN/vuF7pa7UEpOw+PIQa4DwvOu0ccRwjTjLUza9eHKGUMqdSBK7bhrJqEMYZgjBBXlRmzfr4NkD+nE4ZTnmFU62QlhJhGKJtWxepBYqrQi0U/KTFj3fW4Ail7gGjc8DH44Gh79EPClKtkP1kaknQuq6mJAS+096wabBUukzyXbtNe57PpymJAzJddps1TNPEdDfPc2RZZta4gYNRs5tnnVGaxEiSRNe8d1drZz+apjFSOn12kCaezkjZLHsPOV9VlZPdxz1SyjeQKfBkGjjJbxrsdbJARkkg1+y8PZBzrOEftVH6UJ6qd+cAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Automatic and manual versions of a tablist with tabs called Overview, Details, and Support. In the first, the Details tab is selected and focused. In the second the Overview tab is still selected and the Details tab has a focus indicator"\n        title=""\n        src="/static/37d1bf67ebcc0b0c6d30fdc1cd48b7dd/3cbba/tab-accessibility-2.png"\n        srcset="/static/37d1bf67ebcc0b0c6d30fdc1cd48b7dd/7fc1e/tab-accessibility-2.png 288w,\n/static/37d1bf67ebcc0b0c6d30fdc1cd48b7dd/a5df1/tab-accessibility-2.png 576w,\n/static/37d1bf67ebcc0b0c6d30fdc1cd48b7dd/3cbba/tab-accessibility-2.png 1152w,\n/static/37d1bf67ebcc0b0c6d30fdc1cd48b7dd/0b124/tab-accessibility-2.png 1728w,\n/static/37d1bf67ebcc0b0c6d30fdc1cd48b7dd/0c3f5/tab-accessibility-2.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(t.p,null,"After pressing the ",i.createElement(t.code,null,"Right Arrow")," key, the second tab is selected in an\nautomatic tablist. For the manual tablist, Details has focus but Overview is\nstill selected. Pressing the Space or Enter key will select Details.")))),"\n",i.createElement(t.h2,null,"Design recommendations"),"\n",i.createElement(t.h3,null,"Indicate which variant to implement"),"\n",i.createElement(t.p,null,"The automatic and manual tablists are visually indistinguishable in a wireframe,\nso designers should annotate which variant the team has decided to implement.\nSince the choice primarily concerns technical considerations about potential\nlatency when updating the tabpanel’s information, architects or developers\nshould be involved in the discussion."),"\n",i.createElement(d,null,i.createElement(m,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA90lEQVR42s1S7WoCMRC8N7Yv0HexP/sWFvoC/pCjcMhpqaAUktwlucvndBO1paDoQSgNLLsLYZjZmQqFX/Vri/FYeYzfdd6nA5ZiGEPIi3hZoZ3NqdfYdz2aZoNejdBagzGGQP9Sl1LeYHiSY3YM/esb9I6D6YhPZtCpAGstjDHw3mMcxzxfO0H1N6bcacBFwHSXkvXDMBHzAdGRQYHigv8Um8zAeejVO9Syhd0LWO8wKEkyfHbXOZf/pZ7264AnKb4fsH18RvvwBL6ocZAD1usPio3JORRCZCDOOZRS0yTTKUE40JbKRAI6HjwBnvt9OSwRm9KmfAG266C4yQQO7QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Two tabs, one with a pink annotation reading &quot;auto&quot;, the other with an annotation &quot;manual&quot;"\n        title=""\n        src="/static/56e64d5add0833648ee7c6c75cbf7f19/3cbba/tab-accessibility-3.png"\n        srcset="/static/56e64d5add0833648ee7c6c75cbf7f19/7fc1e/tab-accessibility-3.png 288w,\n/static/56e64d5add0833648ee7c6c75cbf7f19/a5df1/tab-accessibility-3.png 576w,\n/static/56e64d5add0833648ee7c6c75cbf7f19/3cbba/tab-accessibility-3.png 1152w,\n/static/56e64d5add0833648ee7c6c75cbf7f19/92c65/tab-accessibility-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(t.p,null,"Annotate whether the tabs should be implemented as automatic or manual.")))),"\n",i.createElement(t.h2,null,"Development considerations"),"\n",i.createElement(t.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Tabs are implemented as a ",i.createElement(t.code,null,"tablist"),", with each tab item implemented as a\n",i.createElement(t.code,null,"<button>")," with a role of ",i.createElement(t.code,null,"tab"),"."),"\n",i.createElement(t.li,null,"The selected tab has attributes ",i.createElement(t.code,null,'aria-selected="true"')," and ",i.createElement(t.code,null,'tabindex="0"'),". All\nother tabs have these attribute values set to ",i.createElement(t.code,null,'"false"')," and ",i.createElement(t.code,null,'"-1"'),"."),"\n",i.createElement(t.li,null,"Each tab is associated with its tabpanel through ",i.createElement(t.code,null,"aria-controls"),"."),"\n",i.createElement(t.li,null,"See the\n",i.createElement(t.a,{href:"https://w3c.github.io/aria-practices/#tabpanel"},"ARIA authoring practices guidance for tabs"),"\nfor more considerations."),"\n",i.createElement(t.li,null,"For accessibility considerations for manual tabs, see\n",i.createElement(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus"},"Deciding when to make selection automatically follow focus"),"."),"\n"),"\n",i.createElement(s.A,{layout:"table",components:"Tabs"}))}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,n.R)(),e.components);return t?i.createElement(t,e,i.createElement(l,e)):l(e)}}}]);