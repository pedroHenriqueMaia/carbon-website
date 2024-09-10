"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[163399],{28463:function(e,t,n){n.r(t);var a=n(28453),i=n(296540),o=n(815929);n(169613);function s(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",span:"span",ul:"ul",li:"li",a:"a"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:s,AnchorLink:c,Row:g,Column:r,Caption:d,DoDontRow:b,DoDont:p}=t;return c||l("AnchorLink",!0),s||l("AnchorLinks",!0),d||l("Caption",!0),r||l("Column",!0),p||l("DoDont",!0),b||l("DoDontRow",!0),n||l("PageDescription",!0),g||l("Row",!0),i.createElement(i.Fragment,null,i.createElement(n,null,i.createElement(t.p,null,"No accessibility annotations are needed for toggles, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),"\n",i.createElement(s,null,i.createElement(c,null,"What Carbon provides"),i.createElement(c,null,"Design recommendations"),i.createElement(c,null,"Development considerations")),"\n",i.createElement(t.h2,null,"What Carbon provides"),"\n",i.createElement(t.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via keyboard. Carbon also incorporates other\naccessibility considerations, some of which are described below."),"\n",i.createElement(t.h3,null,"Keyboard interaction"),"\n",i.createElement(t.p,null,"Each toggle is in the tab order. Pressing ",i.createElement(t.code,null,"Enter")," or ",i.createElement(t.code,null,"Space")," changes the\ntoggle’s state between off and on."),"\n",i.createElement(g,null,i.createElement(r,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA10lEQVR42mNgoDcIZVjFHMoQyswwKEG8/XyOKP15NX5KUzMgIv8Zyfeq1io2EA7Xne7vozDRjWLX5apMZAcayzxtUbdYeX2enJ9VEi8oPIFSjFBMWkSk+czkYmAo5t67+2Dt9JlTe4DCHGS5zN5+P4uP5Eyu/2BXhDJnOC5piTadmhtpMMUr1nB+mwqnhwxQGTex4ckYKtPLycBQzwTh1jOFac8M9lGZah+qMc04VH1WgrFgGj9Qgokob4O8ai8/n4NqyaQe6CIPcGSgiv0Heg+E6+Euxw0AOiY4wdZx+NwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="illustration showing tab and other keyboard operation"\n        title=""\n        src="/static/d56802b3e9cfad2185f3c2665f0b3a72/3cbba/toggle-accessibility-1.png"\n        srcset="/static/d56802b3e9cfad2185f3c2665f0b3a72/7fc1e/toggle-accessibility-1.png 288w,\n/static/d56802b3e9cfad2185f3c2665f0b3a72/a5df1/toggle-accessibility-1.png 576w,\n/static/d56802b3e9cfad2185f3c2665f0b3a72/3cbba/toggle-accessibility-1.png 1152w,\n/static/d56802b3e9cfad2185f3c2665f0b3a72/92c65/toggle-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Toggles are reached by Tab and activated by Space or Enter keys.")))),"\n",i.createElement(t.h3,null,"Redundant state information"),"\n",i.createElement(t.p,null,"Carbon’s default toggle uses both color and text to indicate on or off. Where\nspace constraints make a smaller toggle desirable, Carbon adds a tickmark to the\ntoggle’s “on” state so that if the text is not included, the component’s on/off\nstate can be distinguished without relying on use of color. The state is also\ncaptured programmatically for users who cannot see or understand the visual\nindicators."),"\n",i.createElement(b,null,i.createElement(p,{type:"do",caption:"Do include the on/off text for the toggle's state whenever space permits."},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 578px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 99.65277777777779%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAiUlEQVR42mNgGAWjYJADvwg/Ka/YAM309HRpqBAjRQb+Bxrwn1JDwKC+nglEqS30DJea67C/99z8g6vubE8ACrHZ29vzkG7gqlBmEKW6yLNSeo7917mX1/zY+uBgC1CI39jeWIQSPzMaz/ThYjCW5GKgiteRDPn//z8jNQxlBIcnJEwZR9P9EAUAXWcia1KZ1HcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="The alert toggle shows &quot;off&quot; and &quot;on&quot; to indicate state"\n        title=""\n        src="/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/778f8/toggle-accessibility-2-do.png"\n        srcset="/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/7fc1e/toggle-accessibility-2-do.png 288w,\n/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/a5df1/toggle-accessibility-2-do.png 576w,\n/static/e8bb7c20b8cbb4f7a38b3ddeeb14018b/778f8/toggle-accessibility-2-do.png 578w"\n        sizes="(max-width: 578px) 100vw, 578px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),i.createElement(p,{type:"do",caption:"Where space is confined, use the tickmark variation in lieu of on/off text."},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 576px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100.34722222222223%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABZklEQVR42u2UwU7CQBRFMfof/oj2c/wMWPgHLg07V7Jh4Yq4EElYNnGBK6HQAoVgaZtpp9BpX65vujBqGsASd05zM2kzc3Lvm9ep1f6HHgBOWGdV9PfO9GxZ1rlt29eu69Zns1nDcZwGfztI34CtVutUz0III45jjEYjmkwmmM/nCMMQQRDsVSmQAZfD4RDtdjvtdDpZv9/P2HHGDrLxeLxTpUCOaHieh8ViQcvlsnA4nU4P0s8afkbO8xzr9Zp83we/I4qig1QKVEoZ2+0WvV6Pms0mVqsVkiQpNuja7lIpkDcbWZ7B5ciOYxcO94F2AnVkyglQIHZbLDwqMoOMcCNw9VinG/MO76GHRHLkuGJklShDqg1uX+7p4e0JvgggY1kdWEQmjpyD+ClgIhLVI+tD0bUbvA6o+9yFbh0pZfVT1m2TpilM0yT+W6Cb/Oi20ZF5Ael+1O4qtc2Xy+GC3RCDRPzL8QEbM5Kl7gVpJgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Toggles in the Alert column of a table show their &quot;on&quot; state with a green tickmark"\n        title=""\n        src="/static/4b7b806cf4ab7635a193610f777f2ebe/a5df1/toggle-accessibility-3-do.png"\n        srcset="/static/4b7b806cf4ab7635a193610f777f2ebe/7fc1e/toggle-accessibility-3-do.png 288w,\n/static/4b7b806cf4ab7635a193610f777f2ebe/a5df1/toggle-accessibility-3-do.png 576w"\n        sizes="(max-width: 576px) 100vw, 576px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",i.createElement(t.h2,null,"Design recommendations"),"\n",i.createElement(t.p,null,"Design annotations are not needed, but keep the following point in mind."),"\n",i.createElement(t.h3,null,"Do not change the toggle’s label based on its state"),"\n",i.createElement(t.p,null,"It is essential that designers distinguish between the text indicating the\non/off state of the toggle and the text that is the toggle’s label. The label’s\ntext should not change based on the on/off state."),"\n",i.createElement(b,null,i.createElement(p,{type:"do",caption:"Do keep the label consistent. Only change the state text between On and Off."},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 578px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 99.65277777777779%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVR42mNgGAVDC4SGhrK5xrhy28fHc1DFQK9QL4lQ11DFIp80EagQIxSTB+z327NorfKS4KoSkWQIZWAj32mrQplBlNpCrzrJOXa/519d/2/Hw8OdQCF+U2dTYdINrK9nAlHqi739pOc6bGo7NWvLkhtbw4FCrFr29jyDKJr/AyMAiP///8+0atUqZoojJT4+XiIhIUEVmHwkkGKZIgAygBWImSkypR4aKRcuXLA5cuRIT2dnZ/+kSZNcgEIs6urqvKQH3f//YBddv36988mTJ/+nT5/+f/LkyVOBQsIKCgryZHs/NzeXvbu7WxHoOkWgqzloEe+M1IoYxgFLuwAOJksiqNLgmgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="the same &#39;Alerts&#39; toggle keeping its label in both states"\n        title=""\n        src="/static/3843e8142bb9c6bd10dcaeee11b08aff/778f8/toggle-accessibility-4-do.png"\n        srcset="/static/3843e8142bb9c6bd10dcaeee11b08aff/7fc1e/toggle-accessibility-4-do.png 288w,\n/static/3843e8142bb9c6bd10dcaeee11b08aff/a5df1/toggle-accessibility-4-do.png 576w,\n/static/3843e8142bb9c6bd10dcaeee11b08aff/778f8/toggle-accessibility-4-do.png 578w"\n        sizes="(max-width: 578px) 100vw, 578px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),i.createElement(p,{type:"dont",caption:"Do not change the label text as a way of indicating the toggle's on/off state."},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 578px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 99.65277777777779%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAA+ElEQVR42mNgGAVDC4SGhrK5xrhyhxaGcqalpbFSbKBXqJdEuLu/QoF7mmRGTIxYfX09E0UG2u+3Z9Fa5SXBVSUiyRDKwEa+SatCmUGU2kKvOsk5dr/nX13/b+vdA90gsf///zOTbiDUa+qLvf2k5zpsajs1a8uia5sjoAYyDaJo/s/ACMJAV4ExxebFx8dLxMTEqERHR8vExsbK2dvbs1BqJshVoPTHbGxsDKLJCz9Yertw4YLNkSNHerq6uvomTJjgjCxHWtBBk8b169c7nzx58n/69On/gQbOgBpIvrdzc3PZu7u7FSdNmqQINIhj0JYRjFA8MAAAQc5ZAjoOHOIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="The toggle changing its label from &#39;Alerts on&#39; to &#39;Alerts off&#39;"\n        title=""\n        src="/static/1976c42e3b5762c84778383c9e70781a/778f8/toggle-accessibility-4-dont.png"\n        srcset="/static/1976c42e3b5762c84778383c9e70781a/7fc1e/toggle-accessibility-4-dont.png 288w,\n/static/1976c42e3b5762c84778383c9e70781a/a5df1/toggle-accessibility-4-dont.png 576w,\n/static/1976c42e3b5762c84778383c9e70781a/778f8/toggle-accessibility-4-dont.png 578w"\n        sizes="(max-width: 578px) 100vw, 578px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",i.createElement(t.h2,null,"Development considerations"),"\n",i.createElement(t.p,null,"Keep this in mind if you’re modifying Carbon or creating a custom component."),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Toggle is implemented as a button with a role of ",i.createElement(t.code,null,"switch"),"."),"\n",i.createElement(t.li,null,"“On” and “off” text is ",i.createElement(t.code,null,"aria-hidden"),"; the state of the toggle is surfaced with\n",i.createElement(t.code,null,"aria-checked")," set to “true” or “false”."),"\n",i.createElement(t.li,null,"The toggle’s ",i.createElement(t.code,null,"label")," is set with ",i.createElement(t.code,null,"for")),"\n",i.createElement(t.li,null,"See the\n",i.createElement(t.a,{href:"https://w3c.github.io/aria-practices/#switch"},"ARIA authoring practices guidance on switch"),"\nfor more considerations."),"\n"),"\n",i.createElement(o.A,{layout:"table",components:"Toggle"}))}function l(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?i.createElement(t,e,i.createElement(s,e)):s(e)}}}]);