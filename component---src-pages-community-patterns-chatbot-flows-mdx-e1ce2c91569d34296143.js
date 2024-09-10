"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[413432],{320252:function(e,a,t){t.r(a);var n=t(28453),s=t(296540);function i(e){const a=Object.assign({p:"p",strong:"strong",h2:"h2",span:"span",h3:"h3"},(0,n.R)(),e.components),{PageDescription:t,InlineNotification:i,AnchorLinks:o,AnchorLink:l}=a;return l||c("AnchorLink",!0),o||c("AnchorLinks",!0),i||c("InlineNotification",!0),t||c("PageDescription",!0),s.createElement(s.Fragment,null,s.createElement(t,null,s.createElement(a.p,null,"Depending on the complexity of the use case and user needs, chatbots may require\nother interactions that supplement the conversational experience.")),"\n",s.createElement(i,null,s.createElement(a.p,null,s.createElement(a.strong,null,"Note:")," This page documents some common chatbot scenarios in IBM products and\ntheir recommended best practices. Flows still under consideration are marked\nwith “Experimental”.")),"\n",s.createElement(o,null,s.createElement(l,null,"Launching a bot"),s.createElement(l,null,"Multiple threads"),s.createElement(l,null,"Expanding cards"),s.createElement(l,null,"Error states")),"\n",s.createElement(a.h2,null,"Launching a bot"),"\n",s.createElement(a.p,null,"Bots should be launched from a button positioned at the bottom right of the\nscreen, or from a button embedded within the UI. See Carbon Chatbot Add-on\nDesign Kit for the appropriate variants."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0klEQVR42pWSWwrCMBBFu/+N+OFCxDVIwbYW/RAhj+adXJsWtIlpiwOXQJg5mTuZCn9GCCFRHtU3cVShcBne+x/lOSkwpMC8wDkHa22imFMElqzlQK01OOcYhuEjY8waMGBpugxUIISAUgrG2HTGRzYspwPPgUrpqSshxKQI3QCGXaAUCl3XoW0b9H0PRgnsumVkPxogdAqMXdV1jWsTgTc8nhRC7QDn+oAX9zicVDLX+AERKmW89zieNS53u6grAmer1nlwadf3cFwhZTycT/fwDY86FUkA6ELgAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Launching a bot"\n        title=""\n        src="/static/e5b4f571dfb3845d9b14adc51ee6ca3c/3cbba/chatbot-5.png"\n        srcset="/static/e5b4f571dfb3845d9b14adc51ee6ca3c/7fc1e/chatbot-5.png 288w,\n/static/e5b4f571dfb3845d9b14adc51ee6ca3c/a5df1/chatbot-5.png 576w,\n/static/e5b4f571dfb3845d9b14adc51ee6ca3c/3cbba/chatbot-5.png 1152w,\n/static/e5b4f571dfb3845d9b14adc51ee6ca3c/0b124/chatbot-5.png 1728w,\n/static/e5b4f571dfb3845d9b14adc51ee6ca3c/4ea69/chatbot-5.png 2304w,\n/static/e5b4f571dfb3845d9b14adc51ee6ca3c/25a5b/chatbot-5.png 2400w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h2,null,"Multiple threads (Experimental)"),"\n",s.createElement(a.p,null,"When a bot cannot complete a request, the bot detects frustration, or the user\nwould simply prefer interacting with a person, it becomes necessary to connect\nthe user to a human agent."),"\n",s.createElement(a.h3,null,"User initiates change"),"\n",s.createElement(a.p,null,"Sometimes, a user indicates that they would like to chat with a human. Other\ntimes, this process can be suggested if a bot is repeatedly unsuccessful in\nanswering a user’s question."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0klEQVR42qWSPQ6DMAyFuTgjN+AiHIEBiYGtLN2oiqhUaBEhP0BCXmPaoUtBBUsZEsuf37PjYSW0sWi5gdEa1loYY7AV3lpy1BaXW4f2+YBSEpxzzPO8H0jFUnBIqSCEWM5uIFmkKMsSQRDA932EYQjt7H/n/1JIRVVVIUkSxHGMLMs257gKJDWMMeR5jiiKkKbpMSDNq67rxXZRFKib5thSyHLHenC3jLsDC9HS6wGgU9OLwQEV6UVyHty/nD/NdirU04RxnNzF4HR1DdSb9EvnC/j+Dys6K9gOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="User initiates change"\n        title=""\n        src="/static/7d5036d55a193da011d303f158aa4b0f/3cbba/chatbot-12.png"\n        srcset="/static/7d5036d55a193da011d303f158aa4b0f/7fc1e/chatbot-12.png 288w,\n/static/7d5036d55a193da011d303f158aa4b0f/a5df1/chatbot-12.png 576w,\n/static/7d5036d55a193da011d303f158aa4b0f/3cbba/chatbot-12.png 1152w,\n/static/7d5036d55a193da011d303f158aa4b0f/0b124/chatbot-12.png 1728w,\n/static/7d5036d55a193da011d303f158aa4b0f/99571/chatbot-12.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h3,null,"Notify the user"),"\n",s.createElement(a.p,null,"Use a toast notification bar to indicate when the user is in a new conversation\ncontext, or that a new user has joined the the chat. Call out any significant\nchanges with in-conversation status messages."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAr0lEQVR42s1SywrCQAzsj3vx0G/xKOgv+AcePKmIKGpL203b3e4j49ZHpeDbHhwYQoZkSGACPIFzFkoWTc++f4Xgnsh8rqI06A1ihCONcOzQH2rkilszbxleYa3Dal9iuSUsNoS5r8ZrH194e9lBFgKqpIa19pMhEbX4f4ZZlp0ohIDowjCOIkSHHZI0hVZUZ6ebl9lWmMwkktx9Hxv2W8YYVFrX9piuGSQvOXxw4RG75hPNLXH2QQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Notify the user"\n        title=""\n        src="/static/7c4f2a84e1d9dd043b87efca322263a7/3cbba/chatbot-13.png"\n        srcset="/static/7c4f2a84e1d9dd043b87efca322263a7/7fc1e/chatbot-13.png 288w,\n/static/7c4f2a84e1d9dd043b87efca322263a7/a5df1/chatbot-13.png 576w,\n/static/7c4f2a84e1d9dd043b87efca322263a7/3cbba/chatbot-13.png 1152w,\n/static/7c4f2a84e1d9dd043b87efca322263a7/0b124/chatbot-13.png 1728w,\n/static/7c4f2a84e1d9dd043b87efca322263a7/99571/chatbot-13.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h3,null,"Multiple users"),"\n",s.createElement(a.p,null,"Combining two or more human agents into the same thread is a common practice.\nWhere necessary, call out significant changes in who the user is addressing\n(particularly if they have different purposes)."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABR0lEQVR42pWSv07DMBDG+7iZOzHxAslDMJGqgrKBUBhYWBDtBFIHoBJKmpQmrZ1/dpzEXy8GhEAZ0ptOJ/v33X13I/REXdcQojR527bQWkOpCk2t/tT6YtRXLMsSmyiEkAJ5XkBVAmf3HCcug3NT4/RSYr6qv+B6AFApRaAcaZqCc24Egs8UHxHHhlWI8xaFbIZ3WFUVUgJ10CzLDLDIOO5urzGdnONi6iKOt+bt/9F7gVJK7JKEYCmNLY1/Qgi4kwls24bjOAiCYDiw6/D97RXzp0csFgvzuSgKJCTCGDOWNM3AkX8UPc/DeDyGZVmYza5IRCIKQwNkjEOS6FEexnGMKIrMUqDJU/JyvV5TPTFb180RwF8PORKW42EpKc+x3+8hywxLv8SLr74nGgA0h0zHrdsGUmk8+9p41nlHl4dg12K11b3AA7RXAYnajcSrAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Multiple users"\n        title=""\n        src="/static/93489695aae43e7f2c98739080335372/3cbba/chatbot-14.png"\n        srcset="/static/93489695aae43e7f2c98739080335372/7fc1e/chatbot-14.png 288w,\n/static/93489695aae43e7f2c98739080335372/a5df1/chatbot-14.png 576w,\n/static/93489695aae43e7f2c98739080335372/3cbba/chatbot-14.png 1152w,\n/static/93489695aae43e7f2c98739080335372/0b124/chatbot-14.png 1728w,\n/static/93489695aae43e7f2c98739080335372/99571/chatbot-14.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h3,null,"Incoming messages"),"\n",s.createElement(a.p,null,"For new messages appearing in another thread, be sure to use dots above the\nThreads icon to alert the user of new messages. Then, within the menu, indicate\nthe amount of new messages on the specific thread. Visually distinguish threads\nwith new messages."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABPUlEQVR42pWSTW7CMBCFe3sW0FMgAheoWLKqWMGmqoSqSpWqBAgBJ8TE//arPW03bRbBkiXrefzNvBk/oGc5Z6GUorP3Hs4HWKNJ/9YcQgh9T/HQJwopcDgccOtuaFsOrQTePhl27zlY04JzHhPq4UApJZqmJpB1jiqqzg0YY3SXqrbWDge6CNluNshmM0ynU2y2WxitsFw+YT7PsFgsUFUVxf61/g/4G7BerzGZPGI0GmG1WpE2yzKMx+OoT1AUxTBgWmkg7HKJthsIIchi217JctNcYYwhF8OHIjqUxyPquqbdRWgdYafTiZKkrfQdQ9ExuCxLHCM0wYOTNNn9fo9zrNxoGbU7gCl7qozzFuza4Xmn4/lGmhIcu1zgNTc/PRwATI02xiLE7yKNx0seYs889S5+axTM46MKvcAv/HsDvo9Boo4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Incoming messages"\n        title=""\n        src="/static/205db7c5224c1b9be270bc38b1a62127/3cbba/chatbot-15.png"\n        srcset="/static/205db7c5224c1b9be270bc38b1a62127/7fc1e/chatbot-15.png 288w,\n/static/205db7c5224c1b9be270bc38b1a62127/a5df1/chatbot-15.png 576w,\n/static/205db7c5224c1b9be270bc38b1a62127/3cbba/chatbot-15.png 1152w,\n/static/205db7c5224c1b9be270bc38b1a62127/0b124/chatbot-15.png 1728w,\n/static/205db7c5224c1b9be270bc38b1a62127/99571/chatbot-15.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h2,null,"Expanding cards (Experimental)"),"\n",s.createElement(a.p,null,"Where needed, use expanding cards to progressively disclose content. Use a full\npage view to show a very large amount of content to the user."),"\n",s.createElement(a.h3,null,"Default state"),"\n",s.createElement(a.p,null,"Call out critical information in the default state. Provide a trigger to expand\nthe card."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAApUlEQVR42q2R2wrCMAyG9/4v5gN45514IQzW1vSwtWn7m26C3jhhNRBCEvLlNGBHOFcYl5Ezo9YqNuOXDHvJyAXX+wNKTwghwDmHUspxYJXi4O0KIqJVu4CtmMjC2rd2Az9hfwG2db33sGK7ge2zWimM44ggwKUBJdYFNIYwKQ1mlpGzxHpv6Bf4OYmTcLpEaFdezQ5OyCkhxtjwON+kwbyRvi3+BA7aFzazV2EhAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Default state"\n        title=""\n        src="/static/8a5416789797b5e86202f444571900ec/3cbba/chatbot-16.png"\n        srcset="/static/8a5416789797b5e86202f444571900ec/7fc1e/chatbot-16.png 288w,\n/static/8a5416789797b5e86202f444571900ec/a5df1/chatbot-16.png 576w,\n/static/8a5416789797b5e86202f444571900ec/3cbba/chatbot-16.png 1152w,\n/static/8a5416789797b5e86202f444571900ec/0b124/chatbot-16.png 1728w,\n/static/8a5416789797b5e86202f444571900ec/99571/chatbot-16.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h3,null,"Expanded state"),"\n",s.createElement(a.p,null,"Provide more detailed information in the expanded state. Only if absolutely\nnecessary, provide a way to access the full view of the content."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAsElEQVR42qWSzQrDIBCE8/4v1gforadCoYcaYuJf1XWdrrb01hTigggrfs7sOGGnqFSsrqAUQq1V9oJ/Ne0dJqq43jcsy4wQApxzYObjwHY5BAfvPay1MLKGgM3mthlorREEGhtQekPABlNKgXIGE40rbHOLMX5DGbe8aszq0aFFYINAhvEZ9snoo6ul944DRY1xUaBJIs84XRK0489jBy0TZeSc2ifC+cai9k36lfUL8FAX7bhsmx8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Expanded state"\n        title=""\n        src="/static/12f7b07d0076764f4244a259626eac51/3cbba/chatbot-17.png"\n        srcset="/static/12f7b07d0076764f4244a259626eac51/7fc1e/chatbot-17.png 288w,\n/static/12f7b07d0076764f4244a259626eac51/a5df1/chatbot-17.png 576w,\n/static/12f7b07d0076764f4244a259626eac51/3cbba/chatbot-17.png 1152w,\n/static/12f7b07d0076764f4244a259626eac51/0b124/chatbot-17.png 1728w,\n/static/12f7b07d0076764f4244a259626eac51/99571/chatbot-17.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h3,null,"Full view"),"\n",s.createElement(a.p,null,"The full view is a generic container that can be used to display long-form\ncontent that would otherwise crowd a conversation thread."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAkUlEQVR42q2SWQoEIQxE+/7HdF9QwUZQXDIkMDBfLbQTCBiij6qYCzYx54TeOyWe11qP96+nJj5OKYHWGu77phqhR0BjDAghQCkFpZSdoT0QYZjWWsg5n1tGhSEEGGNQfQTEeeH8nHPgvT+3jEApJTDGgHNOSo8VxhhpdvjLtdb/WEaVv6vzGojRWqP8LvcO+AGDThWaWiNiRwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Full view"\n        title=""\n        src="/static/ab95d9039ed5c64f85783ebf6a26d2e6/3cbba/chatbot-18.png"\n        srcset="/static/ab95d9039ed5c64f85783ebf6a26d2e6/7fc1e/chatbot-18.png 288w,\n/static/ab95d9039ed5c64f85783ebf6a26d2e6/a5df1/chatbot-18.png 576w,\n/static/ab95d9039ed5c64f85783ebf6a26d2e6/3cbba/chatbot-18.png 1152w,\n/static/ab95d9039ed5c64f85783ebf6a26d2e6/0b124/chatbot-18.png 1728w,\n/static/ab95d9039ed5c64f85783ebf6a26d2e6/99571/chatbot-18.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.h2,null,"Error states (Experimental)"),"\n",s.createElement(a.p,null,"Be sure to indicate to a user when their message has not been sent due to a\nconnectivity or server problem. When in a connected state, temporarily show the\nsuccess notification, and then remove it along with any message error\nindicators."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 48.958333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVR42o1Sy07DMBDsBzecOMBvlK+ouHPmgsSJkKRCRQptmtKSkKS0fuVpD1sHcWmlZq3RyiPveL2eEc7EXhk0jYah1RljOVYCVUMM7fUR2pwrxeiU0ghXEeLoDaXYoi2/YVqGePuFxccM+2IJXWeoVW7FLwoao1HLDOKQQbKckKFUDG2Vk1iMn3wNxRNUsrBnBwgacC7BuKAswBhHWZaQqiZOQghlM6c8sEMDKUQPSYWcQyllRYXgxAnKPQYKArtihzRNLYqiQFVVttMkSSyXZdlwwWNsNhu4rosgCBBFKxJs6JICnufB932EYYgDE8OfzBjD3WSC8djB7c01/XZqO59Op3AcB1fOGMvw9f/85RnS7Obzd8x8F4/PAR5c+gDdYLFY2s5fXA/3TzSK9q/m0pO7riP0luBk6OCTSsgine65o6e9mMzfnhr7F5fcAUO6i8/3AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Chatbot error notification"\n        title=""\n        src="/static/34af964999a53cfc8a2884c35865ee05/3cbba/chatbot-6.png"\n        srcset="/static/34af964999a53cfc8a2884c35865ee05/7fc1e/chatbot-6.png 288w,\n/static/34af964999a53cfc8a2884c35865ee05/a5df1/chatbot-6.png 576w,\n/static/34af964999a53cfc8a2884c35865ee05/3cbba/chatbot-6.png 1152w,\n/static/34af964999a53cfc8a2884c35865ee05/0b124/chatbot-6.png 1728w,\n/static/34af964999a53cfc8a2884c35865ee05/99571/chatbot-6.png 2240w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))}function c(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}a.default=function(e={}){const{wrapper:a}=Object.assign({},(0,n.R)(),e.components);return a?s.createElement(a,e,s.createElement(i,e)):i(e)}}}]);