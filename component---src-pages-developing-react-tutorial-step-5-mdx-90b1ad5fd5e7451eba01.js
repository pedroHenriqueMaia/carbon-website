"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[598436],{552078:function(e,t,n){n.r(t);var a=n(28453),r=n(296540),l=n(725441);function o(e){const t=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code",strong:"strong"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:o,AnchorLink:i,InlineNotification:s}=t;return i||c("AnchorLink",!0),o||c("AnchorLinks",!0),s||c("InlineNotification",!0),n||c("PageDescription",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"This is an optional step that takes what we’ve built so far and optimizes the\napp for a production environment.")),"\n",r.createElement(o,null,r.createElement(i,null,"Fork, clone and branch"),r.createElement(i,null,"Build for production and deploy")),"\n",r.createElement(t.h2,null,"Preview"),"\n",r.createElement(t.p,null,"A ",r.createElement(t.a,{href:"https://carbon-tutorial-nextjs.vercel.app/"},"preview")," of what you’ll build\n(visually no different, but built for production):"),"\n",r.createElement(l.A,{height:"400",title:"Carbon Next Tutorial Step 5",src:"https://carbon-tutorial-nextjs.vercel.app/",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}),"\n",r.createElement(t.h2,null,"Fork, clone and branch"),"\n",r.createElement(t.p,null,"This tutorial has an accompanying GitHub repository called\n",r.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-nextjs"},"carbon-tutorial-nextjs"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",r.createElement(t.a,{href:"/developing/react-tutorial/step-1#fork-clone-and-branch"},"step 1 instructions"),"."),"\n",r.createElement(t.h3,null,"Branch"),"\n",r.createElement(t.p,null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"git fetch upstream\ngit checkout -b v11-next-step-5 upstream/v11-next-step-5\n")),"\n",r.createElement(s,null,r.createElement(t.p,null,r.createElement(t.strong,null,"Note:")," This builds on top of step 4, but be sure to check out the upstream\nstep 5 branch because it includes the static assets required to get through this\nstep.")),"\n",r.createElement(t.h3,null,"Build and start app"),"\n",r.createElement(t.p,null,"Install the app’s dependencies (in case you’re starting fresh in your current\ndirectory and not continuing from the previous step):"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"yarn\n")),"\n",r.createElement(t.p,null,"Then, start the app:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"yarn dev\n")),"\n",r.createElement(t.p,null,"You should see something similar to where the\n",r.createElement(t.a,{href:"/developing/react-tutorial/step-4"},"previous step")," left off."),"\n",r.createElement(t.h2,null,"Build for production and deploy"),"\n",r.createElement(t.p,null,"Before we deploy our app, we need to create an optimized production build with\nthis command. You may need to ",r.createElement(t.code,null,"CTRL-C")," to stop the development environment\nfirst."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"yarn build\n")),"\n",r.createElement(t.p,null,"Looking at ",r.createElement(t.code,null,"package.json"),", you’ll find ",r.createElement(t.code,null,"yarn build")," to run ",r.createElement(t.code,null,"next build"),". This\nbuilds the app for production to the ",r.createElement(t.code,null,"build")," folder. It bundles Next.js in\nproduction mode and optimizes the build for the best performance. It even goes\nso far to minify files and include hashes in filenames for caching."),"\n",r.createElement(t.p,null,"As a lot of this may seem like magic since the build configuration came from\nCreate Next App, go ahead and check out their\n",r.createElement(t.a,{href:"https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist"},"going to production checklist"),"\nfor a full description of what’s happening."),"\n",r.createElement(t.p,null,"Next you can deploy your application to your preferred host, such as\n",r.createElement(t.a,{href:"https://nextjs.org/learn/basics/deploying-nextjs-app/deploy"},"Vercel"),",\n",r.createElement(t.a,{href:"https://www.ibm.com/cloud/free?utm_content=SRCWW&p1=Search&p4=43700074971942949&p5=e&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBZSQ7ksqHmmFDCLGL-5erHPFytezo4q3fB6qJ13wkZROr3DYs95BGhoC6fUQAvD_BwE&gclsrc=aw.ds"},"IBM Cloud"),",\n",r.createElement(t.a,{href:"https://docs.github.com/en/pages/quickstart"},"GitHub Pages"),"."))}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)}},725441:function(e,t,n){n.d(t,{A:function(){return r}});var a=n(296540);var r=({title:e,...t})=>a.createElement("iframe",Object.assign({loading:"lazy",title:e},t,{className:"Preview-module--preview--3e1df"}))}}]);