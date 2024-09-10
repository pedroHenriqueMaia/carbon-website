"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[169689],{590891:function(e,t,n){n.r(t);var a=n(28453),l=n(296540),o=n(725441);function r(e){const t=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",h4:"h4"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:r,AnchorLink:s,InlineNotification:u}=t;return s||c("AnchorLink",!0),r||c("AnchorLinks",!0),u||c("InlineNotification",!0),n||c("PageDescription",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Starting with our Vue CLI generated app, let’s install Carbon and begin using\nCarbon components. By the end you will have a Vue app that uses the UI Shell to\nnavigate between pages.")),"\n",l.createElement(r,null,l.createElement(s,null,"Fork, clone and branch"),l.createElement(s,null,"Build and start"),l.createElement(s,null,"Install Carbon"),l.createElement(s,null,"Other dependencies"),l.createElement(s,null,"Add UI Shell"),l.createElement(s,null,"Create pages"),l.createElement(s,null,"Add routing"),l.createElement(s,null,"Submit pull request")),"\n",l.createElement(t.h2,null,"Preview"),"\n",l.createElement(t.p,null,"A ",l.createElement(t.a,{href:"https://vue-step-2--carbon-tutorial-vue.netlify.com"},"preview")," of what you\nwill build:"),"\n",l.createElement(o.A,{height:"200",title:"Carbon Tutorial Step 1",src:"https://vue-step-2--carbon-tutorial-vue.netlify.com",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}),"\n",l.createElement(t.h2,null,"Fork, clone and branch"),"\n",l.createElement(t.p,null,"This tutorial has an accompanying GitHub repository called\n",l.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-vue"},"carbon-tutorial-vue"),"\nthat we’ll use as a starting point for each step."),"\n",l.createElement(t.h3,null,"Fork"),"\n",l.createElement(t.p,null,"To begin, fork\n",l.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-vue"},"carbon-tutorial-vue"),"\nusing your GitHub account."),"\n",l.createElement(t.h3,null,"Clone"),"\n",l.createElement(t.p,null,"Go to your forked repository, copy the SSH or HTTPS URL and in your terminal run\nthe two commands to get the repository in your local file system and enter that\ndirectory."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git clone [your fork SSH/HTTPS]\ncd carbon-tutorial-vue\n")),"\n",l.createElement(t.h3,null,"Add upstream remote"),"\n",l.createElement(t.p,null,"Add a remote called ",l.createElement(t.code,null,"upstream")," so we can eventually submit a pull request once\nyou have completed this tutorial step."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git remote add upstream git@github.com:carbon-design-system/carbon-tutorial-vue.git\n")),"\n",l.createElement(t.p,null,"Or, if you prefer to use HTTPS instead of SSH with your remotes:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git remote add upstream https://github.com/carbon-design-system/carbon-tutorial-vue.git\n")),"\n",l.createElement(t.p,null,"Verify that your forked repository remotes are correct:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git remote -v\n")),"\n",l.createElement(t.p,null,"Your terminal should output something like this:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"origin\t[your forked repo] (fetch)\norigin\t[your forked repo] (push)\nupstream\tgit@github.com:carbon-design-system/carbon-tutorial-vue.git (fetch)\nupstream\tgit@github.com:carbon-design-system/carbon-tutorial-vue.git (push)\n")),"\n",l.createElement(t.h3,null,"Branch"),"\n",l.createElement(t.p,null,"Now that we have our repository set up, let’s check out the branch for this\ntutorial step’s starting point. Run the two commands:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git fetch upstream\ngit checkout -b vue-step-1 upstream/vue-step-1\n")),"\n",l.createElement(t.h2,null,"Build and start"),"\n",l.createElement(t.p,null,"We have the repository forked to your GitHub account, cloned down to your\nmachine, and the starting branch checked out. Next, install the Vue app’s\ndependencies with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn\n")),"\n",l.createElement(t.p,null,"After the dependencies are installed, you can start the app with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn serve\n")),"\n",l.createElement(t.p,null,"Your default browser should open up with an empty page that says:\n",l.createElement(t.code,null,"Hello Carbon! Well, not quite yet. This is the starting point for the Carbon tutorial.")),"\n",l.createElement(t.p,null,"OK. So we made a small change to the Vue CLI generated app replacing the\nHelloWorld component and replaced it with our own message and swapped out the\nfavicon."),"\n",l.createElement(t.h2,null,"Install Carbon"),"\n",l.createElement(t.p,null,"Even though we installed existing dependencies, we’ve yet to install the Carbon\npackages."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"carbon-components")," - component styles"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"@carbon/vue")," - Vue components"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"@carbon/icons-vue")," - Vue icons"),"\n"),"\n",l.createElement(t.p,null,"Stop your development server with ",l.createElement(t.code,null,"CTRL-C")," and install Carbon dependencies with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn add carbon-components @carbon/vue @carbon/icons-vue\n")),"\n",l.createElement(t.h2,null,"Other dependencies"),"\n",l.createElement(t.p,null,"If you check out the file ",l.createElement(t.code,null,"package.json"),", you’ll notice a few dependencies\nbeyond those listed above. These were installed as part of the project creation\nusing the Vue CLI. These include:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"vue-router"),": Used to make routing in Vue apps simpler"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"@vue/cli-plugin-babel"),": To ensure we produce well supported code."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"@vue/cli-plugin-eslint"),": To allow us to catch potential errors."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"@vue/cli-plugin-unit-jest"),": To allow us to unit test our code."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"sass-loader"),": To allow us to use the sass css precompiler."),"\n"),"\n",l.createElement(t.p,null,"NOTE: We could have installed these separately but using the CLI to set this up\nfor us ensures a good base config for these dependencies."),"\n",l.createElement(t.p,null,"To avoid having to add the ",l.createElement(t.code,null,"~")," prefix when importing SCSS files from\n",l.createElement(t.code,null,"node_modules"),", create a ",l.createElement(t.code,null,".env")," file at the project root that contains:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash",metaData:"path=.env"},'SASS_PATH="node_modules"\n')),"\n",l.createElement(t.p,null,"For the Windows operating system, use:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash",metaData:"path=.env"},"SASS_PATH=./node_modules\n")),"\n",l.createElement(t.p,null,"Then, start the app again. If your app’s currently running, you’ll need to\nrestart it for the new environment variable to be used."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn serve\n")),"\n",l.createElement(t.p,null,"The app looks as it did before. Next, let’s add Carbon styling."),"\n",l.createElement(t.h3,null,"Import carbon-component styles"),"\n",l.createElement(t.p,null,"In the ",l.createElement(t.code,null,"src")," directory, create a sub-directory ",l.createElement(t.code,null,"styles")," and add a new file\n",l.createElement(t.code,null,"_carbon.scss")," to it. Then in ",l.createElement(t.code,null,"App.vue")," edit the style tag to import it."),"\n","\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss",metaData:"path=src/App.vue"},'<style lang="scss">\n@import "./styles/carbon";\n</style>\n')),"\n","\n",l.createElement(t.p,null,"In ",l.createElement(t.code,null,"styles/_carbon.scss"),", import the Carbon styles by adding the following at\nthe top of the file:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss",metaData:"path=src/styles/_carbon.scss"},"@import 'carbon-components/scss/globals/scss/styles';\n")),"\n",l.createElement(t.p,null,"This will take a moment for the Sass to compile. Once compiled, you’ll notice\nthat the Carbon base styling is applied (IBM Plex Sans font family, font size,\nweight, colors, etc.)"),"\n",l.createElement(t.p,null,"Because any change to ",l.createElement(t.code,null,"_carbon.scss")," will re-compile all of the Carbon Sass,\navoid making changes here unless instructed to do so. it is better to make them\nin the component files or a separate file if needed."),"\n",l.createElement(t.p,null,"Next we’ll create a Carbon ",l.createElement(t.code,null,"Button")," to test that our dependencies are working\nproperly."),"\n",l.createElement(t.p,null,"After the other imports in main.js and before the Vue instance is created add\nthe following."),"\n","\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/main.js"},'import CarbonComponentsVue from "@carbon/vue";\nVue.use(CarbonComponentsVue);\n')),"\n","\n",l.createElement(t.p,null,"This is a quick way to pull in all @carbon/vue components and register them for\nuse in your project. Individual components can be imported to a project or\ncomponent."),"\n",l.createElement(t.p,null,"e.g. Instead of modifying src/main.js we could have added the following to\nsrc/App.vue:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/App.vue"},"<script>\nimport { CvButton } from '@carbon/vue';\n\nexport default {\n  components: {\n    CvButton,\n  }\n};\n<\/script>\n")),"\n",l.createElement(t.p,null,"See the Carbon Vue Components\n",l.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-components-vue/blob/master/packages/core/README.md#using-the-components-directly-or-individually"},"documentation"),"\nfor other ways to load components from @carbon/vue components."),"\n",l.createElement(t.p,null,"In this tutorial we will stick to importing all of the components at once so we\ncan focus on our use of @carbon/vue."),"\n",l.createElement(t.p,null,"Now open the ",l.createElement(t.code,null,"App.vue")," component and replace:"),"\n","\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/App.vue"},"  Hello Carbon! Well, not quite yet. This is the starting point for the Carbon tutorial.\n")),"\n","\n",l.createElement(t.p,null,"with:"),"\n","\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/App.vue"},"<CvButton>Button</CvButton>\n")),"\n",l.createElement(t.p,null,"or"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},"<cv-button>Button</cv-button>\n")),"\n","\n",l.createElement(t.p,null,"Congratulations, you’ve imported your first component! You should see a Carbon\nstyled button on the page."),"\n",l.createElement(t.p,null,"NOTE: In this tutorial you can use either tag format. The\n",l.createElement(t.a,{href:"https://vuejs.org/v2/style-guide/"},"Vue style guide")," recommend sticking to\neither Pascal or kebab case. The examples from here will use Pascal case for\nfile and component names with kebab case in the HTML."),"\n",l.createElement(t.h2,null,"Add UI Shell"),"\n",l.createElement(t.p,null,"Next we’re going to create a Vue component called ",l.createElement(t.code,null,"TutorialHeader")," to use with\nthe UI Shell Carbon component. Create a new directory ",l.createElement(t.code,null,"src/components"),". In the\n",l.createElement(t.code,null,"src/components")," directory, create ",l.createElement(t.code,null,"TutorialHeader")," directory. Create the\nfollowing files inside ",l.createElement(t.code,null,"src/components/TutorialHeader"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"src/components/TutorialHeader\n├──index.js\n└──TutorialHeader.vue\n")),"\n",l.createElement(t.h3,null,"Import and export the header"),"\n",l.createElement(t.p,null,"In ",l.createElement(t.code,null,"src/components/TutorialHeader/index.js"),", import and export our\n",l.createElement(t.code,null,"TutorialHeader")," component like so:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/components/TutorialHeader/index.js"},"import TutorialHeader from './TutorialHeader';\nexport default TutorialHeader;\n")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," This index.js files import/export is simply a convenience to shorten\nthe path used to import the component and potentially import multiple components\nfrom one folder. The folder also provides us a handy location to add tests or\ndocumentation for the component.")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," We could have simply created a file src/components/TutorialHeader.vue\nwithout the above benefits.")),"\n",l.createElement(t.h4,null,"Lazyness - VSCode users only"),"\n",l.createElement(t.p,null,"If you are using VSCode then you might want to add the following snippet which\nwill when you type ‘index’ generate an index file for you based on the folder\nname."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json",metaData:"path=javascript.json"},'  "index-file": {\n    "prefix": "index",\n    "body": [\n      "import ${TM_DIRECTORY/.*[\\\\/]//gm} from \'./${TM_DIRECTORY/.*[\\\\/]//gm}\';",\n      "export { ",\n      "\\t${TM_DIRECTORY/.*[\\\\/]//gm},",\n      "};",\n      "export default ${TM_DIRECTORY/.*[\\\\/]//gm}",\n      ""\n    ],\n    "description": "Index file"\n  }\n')),"\n",l.createElement(t.p,null,"You can also use the following to create a skeleton component. To use this one,\nstart typing the word template in your template file and it will generate a\nfile, making assumptions based on the component file name."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json",metaData:"path=vue.json"},'  "Vue_Component": {\n    "prefix": "template",\n    "body": [\n      "<template>",\n      "\\t$0",\n      "</template>",\n      "",\n      "<script>",\n      "export default {",\n      "\\tname: \'${TM_FILENAME/[\\\\.]vue//}\'",\n      "};",\n      "<\/script>",\n      "",\n      "<style lang=\\"scss\\">",\n      "</style>",\n      ""\n    ],\n    "description": "Single file template"\n  }\n')),"\n",l.createElement(t.p,null,"OK, back to using Carbon components. Let’s make use of our Carbon UI Shell\ncomponents in ",l.createElement(t.code,null,"TutorialHeader.vue"),". Set up the file like so:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/components/TutorialHeader/TutorialHeader.vue"},'<template>\n  <cv-header aria-label="Carbon tutorial">\n    <cv-skip-to-content href="#main-content"\n      >Skip to content</cv-skip-to-content\n    >\n\n    <cv-header-name href="/" prefix="IBM">Carbon Tutorial</cv-header-name>\n\n    <cv-header-nav>\n      <cv-header-menu-item href="/repos">Repositories</cv-header-menu-item>\n    </cv-header-nav>\n\n    <template slot="header-global" />\n  </cv-header>\n</template>\n')),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," You can find a description of the different components used in UI\nShell in our\n",l.createElement(t.a,{href:"http://vue.carbondesignsystem.com/?path=/story/components-cvuishell-header"},"carbon-components-vue"),"\npackage.")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," When creating navigation headers, it’s important to have a\n",l.createElement(t.code,null,"Skip to content")," link so keyboard users can skip the navigation items and go\nstraight to the main content.")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," It’s important that the ",l.createElement(t.code,null,"TutorialHeader")," has the Carbon ",l.createElement(t.code,null,"CvHeader")," as\nit’s containing element, as we’ll later be rendering ",l.createElement(t.code,null,"TutorialHeader")," in\n",l.createElement(t.code,null,"App.vue")," as a preceding sibling of ",l.createElement(t.code,null,"Content"),", another UI Shell component. Those\ncomponents need to live one after another for the UI Shell to properly render.")),"\n",l.createElement(t.h3,null,"Import icons"),"\n",l.createElement(t.p,null,"Now let’s import the icons from our ",l.createElement(t.code,null,"@carbon/icons-vue")," elements package. After\nthe closing template tag in the ",l.createElement(t.code,null,"TutorialHeader.vue")," file, we need to import\neach individual icon we will use."),"\n","\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/components/TutorialHeader/TutorialHeader.vue"},"<script>\nimport { Notification20, UserAvatar20, AppSwitcher20 } from '@carbon/icons-vue';\n\nexport default {\n  name: \"TutorialHeader\",\n  components: { Notification20, UserAvatar20, AppSwitcher20 }\n};\n<\/script>\n")),"\n","\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," We’ve given our component a name here as part of the default export.\nThis is optional in Vue but very useful in the\n",l.createElement(t.a,{href:"https://github.com/vuejs/vue-devtools"},"Vue developer tools"),".")),"\n",l.createElement(t.p,null,"Then we need to add content to the ",l.createElement(t.code,null,"header-global")," slot where we will use our\nicons. These represent actions in the header a user can make. Replace:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/components/TutorialHeader/TutorialHeader.vue"},'<template slot="header-global" />\n')),"\n",l.createElement(t.p,null,"With:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/components/TutorialHeader/TutorialHeader.vue"},'<template slot="header-global">\n  <cv-header-global-action aria-label="Notifications">\n    <notification-20 />\n  </cv-header-global-action>\n  <cv-header-global-action aria-label="User avatar">\n    <user-avatar-20 />\n  </cv-header-global-action>\n  <cv-header-global-action aria-label="App switcher">\n    <app-switcher-20 />\n  </cv-header-global-action>\n</template>\n')),"\n",l.createElement(t.h3,null,"Render the header"),"\n",l.createElement(t.p,null,"Next we’ll render our UI Shell by importing our ",l.createElement(t.code,null,"TutorialHeader")," component and\n",l.createElement(t.code,null,"CvContent")," into ",l.createElement(t.code,null,"App.vue"),". Add a script tag if you don’t have one, then update\nit as follows:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/App.vue"},'<script>\nimport TutorialHeader from "./components/TutorialHeader";\n\nexport default {\n  name: "App",\n  components: {\n    TutorialHeader\n  }\n};\n<\/script>\n')),"\n",l.createElement(t.p,null,"In addition to importing the ",l.createElement(t.code,null,"TutorialHeader")," component, we have also declared\nit for use in our template by adding it to the ",l.createElement(t.code,null,"components")," property of our\ncomponent."),"\n",l.createElement(t.p,null,"As our template currently just contains a ",l.createElement(t.code,null,"Button")," it is still not rendering\nanything more interesting so let’s update that to include our imported\ncomponents. This should look like the following:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/App.vue"},'<template>\n  <div id="app">\n    <tutorial-header />\n    <cv-content id="#main-content">\n      <cv-button>Button</cv-button>\n    </cv-content>\n  </div>\n</template>\n')),"\n",l.createElement(t.p,null,"You should now see a styled UI Shell header and a button below it."),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," We’ve also sneaked in use of ",l.createElement(t.code,null,"CvContent")," which needs to follow\n",l.createElement(t.code,null,"CvHeader")," to ensure the correct formatting. We could have included it as part\nof a shell component with TutorialHeader but have chosen not to in this case.")),"\n",l.createElement(t.h2,null,"Create pages"),"\n",l.createElement(t.p,null,"Next thing we need to do is create the files for our views."),"\n",l.createElement(t.p,null,"Since our app will have two pages, we’ll create two folders in ",l.createElement(t.code,null,"src/views"),".\nClear out the files currently in the views folder and add the following folders."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"src/views\n├── LandingPage\n└── RepoPage\n")),"\n",l.createElement(t.p,null,"Create the following files in the ",l.createElement(t.code,null,"LandingPage")," folder:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"src/view/LandingPage\n├── index.js\n└── LandingPage.vue\n")),"\n",l.createElement(t.p,null,"Create the following files in the ",l.createElement(t.code,null,"RepoPage")," folder:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"src/view/RepoPage\n├── index.js\n└── RepoPage.vue\n")),"\n",l.createElement(t.h3,null,"Import and export content pages"),"\n",l.createElement(t.p,null,"Starting with ",l.createElement(t.code,null,"LandingPage"),", just like with our header, we need to export the\ncomponent in ",l.createElement(t.code,null,"src/view/LandingPage/index.js")," by adding:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/view/LandingPage/index.js"},"import LandingPage from './LandingPage';\nexport default LandingPage;\n")),"\n",l.createElement(t.p,null,"Next in ",l.createElement(t.code,null,"LandingPage.vue")," we’ll create our component."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/view/LandingPage/LandingPage.vue"},"<template>\n  <div>LANDING PAGE</div>\n</template>\n")),"\n",l.createElement(t.p,null,"We’ll repeat this process with ",l.createElement(t.code,null,"RepoPage"),"."),"\n",l.createElement(t.p,null,"In ",l.createElement(t.code,null,"src/view/RepoPage/index.js"),", import and export the ",l.createElement(t.code,null,"RepoPage")," component like\nso:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/view/RepoPage/index.js"},"import RepoPage from './RepoPage';\nexport default RepoPage;\n")),"\n",l.createElement(t.p,null,"Then in ",l.createElement(t.code,null,"RepoPage.vue")," create the component."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/view/RepoPage/RepoPage.vue"},"<template>\n  <div>REPO PAGE</div>\n</template>\n")),"\n",l.createElement(t.p,null,"Awesome! We’ve just created our content pages. Next thing we need to do is\nrender them with our router."),"\n",l.createElement(t.h2,null,"Add routing"),"\n",l.createElement(t.p,null,"Lucky for you, as part of the Vue CLI project set up we added vue-router. This\ncreated the views folder and also added, ",l.createElement(t.code,null,"src/router.js")," and imported that into\n",l.createElement(t.code,null,"src/main.js")," for us."),"\n",l.createElement(t.p,null,"We need to adjust it by replacing the contents of ",l.createElement(t.code,null,"src/router.js")," with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/router.js"},"import Vue from 'vue';\nimport Router from 'vue-router';\nimport LandingPage from './views/LandingPage';\n\nVue.use(Router);\n\nexport default new Router({\n  routes: [\n    {\n      path: '/',\n      name: 'landing-page',\n      component: LandingPage,\n    },\n    {\n      path: '/repos',\n      name: 'repo-page',\n      // route level code-splitting\n      // this generates a separate chunk (repo-page.[hash].js) for this route\n      // which is lazy-loaded when the route is visited.\n      component: () =>\n        import(/* webpackChunkName: \"repo-page\" */ './views/RepoPage'),\n    },\n  ],\n});\n")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," The landing page is loaded immediately, with the RepoPage loaded only\nonce needed. This is one simple way to create webpackChunks and is the default\nsuggestion from the CLI plugin for vue-router.")),"\n",l.createElement(t.p,null,"If you click on ",l.createElement(t.code,null,"Repositories")," and then on ",l.createElement(t.code,null,"IBM Carbon Tutorial")," you’ll notice a\nflicker as we hop from one page to another. We can fix this by using vue-router\nto manage our views."),"\n",l.createElement(t.p,null,"Next we need to update ",l.createElement(t.code,null,"src/App.vue")," to render these views."),"\n",l.createElement(t.p,null,"In the template section remove the ",l.createElement(t.code,null,"<cv-button />")," and replace it with\n",l.createElement(t.code,null,"<router-view />")," as follows"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/App.vue"},'<cv-content id="#main-content">\n  <router-view />\n</cv-content>\n')),"\n",l.createElement(t.p,null,"After that we need to do a couple quick fixes to the UI Shell to have it work\nwith the vue-router."),"\n",l.createElement(t.p,null,"In ",l.createElement(t.code,null,"src/components/TuturialHeader/TutorialHeader.vue")," simply replace the ",l.createElement(t.code,null,"href"),"\nattributes used in the ",l.createElement(t.code,null,"cv-header-name")," and ",l.createElement(t.code,null,"cv-header-menu-item")," components\nwith ",l.createElement(t.code,null,"to"),". @carbon/vue will under the covers switch from use of an ",l.createElement(t.code,null,"a")," tag to\n",l.createElement(t.code,null,"router-link"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/components/TutorialHeader/TutorialHeader.vue"},'<cv-header-name to="/" prefix="IBM">Carbon Tutorial</cv-header-name>\n')),"\n",l.createElement(t.p,null,"and"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<cv-header-menu-item to="/repos">Repositories</cv-header-menu-item>\n')),"\n",l.createElement(t.p,null,"You should now have a working header that routes to different pages without full\npage reload!"),"\n",l.createElement(t.h2,null,"Submit pull request"),"\n",l.createElement(t.p,null,"We’re going to submit a pull request to verify completion of this tutorial step\nand demonstrate a couple of related concepts."),"\n",l.createElement(t.h3,null,"Continuous integration (CI) check"),"\n",l.createElement(t.p,null,"We have a ",l.createElement(t.code,null,"ci-check")," script defined in ",l.createElement(t.code,null,"package.json")," that verifies file\nformatting for files that have been touched since the last Git commit with a\ntool called ",l.createElement(t.a,{href:"https://prettier.io"},"Prettier"),". You’d typically also have that\nscript run your test suite as part of your CI build. Go ahead and make sure\neverything looks good with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn ci-check\n")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," If the ",l.createElement(t.code,null,"ci-check")," is giving an error, it’s likely that some of your\nsource files are not properly formatted. This could happen if your text editor\nisn’t formatting with Prettier on save.")),"\n","\n","\n",l.createElement(t.h3,null,"Git commit and push"),"\n",l.createElement(t.p,null,"Before we can create a pull request, stage and commit all of your changes:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'git add --all && git commit -m "feat(tutorial): complete step 1"\n')),"\n","\n","\n",l.createElement(t.p,null,"Then, push to your repository:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git push origin vue-step-1\n")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," If your Git remote protocol is HTTPS instead of SSH, you may be\nprompted to authenticate with GitHub when you push changes. If your GitHub\naccount has two-factor authentication enabled, we recommend that you follow\nthese instructions to\n",l.createElement(t.a,{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"},"create a personal access token for the command line"),".\nThat lets you use your token instead of password when performing Git operations\nover HTTPS.")),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," If you receive a ",l.createElement(t.code,null,"non-fast-forward")," error, it’s likely that your\nforked repository is behind the original repository and needs updated. This can\nhappen if the tutorial was updated after you began working on it. To fix, run\n",l.createElement(t.code,null,"git pull upstream vue-step-1")," to merge the changes into your branch, then you\ncan try pushing again. Or, you can\n",l.createElement(t.a,{href:"https://help.github.com/en/articles/syncing-a-fork"},"manually merge")," in the\nupstream changes.")),"\n",l.createElement(t.h3,null,"Pull request (PR)"),"\n",l.createElement(t.p,null,"Finally, visit\n",l.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-vue"},"carbon-tutorial-vue"),"\nto “Compare & create pull request”. In doing so, make sure that you are\ncomparing your repository’s ",l.createElement(t.code,null,"vue-step-1")," branch into ",l.createElement(t.code,null,"base: vue-step-1"),". Take\nnotice of the ",l.createElement(t.a,{href:"https://www.netlify.com"},"Netlify")," bot that deploys a preview of\nyour PR every time that you push new commits. These previews can be shared and\nviewed by anybody to assist the PR review process."),"\n",l.createElement(u,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Expect your tutorial step PRs to be reviewed by the Carbon team but\nnot merged. We’ll close your PR so we can keep the repository’s remote branches\npristine and ready for the next person!")))}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)}},725441:function(e,t,n){n.d(t,{A:function(){return l}});var a=n(296540);var l=({title:e,...t})=>a.createElement("iframe",Object.assign({loading:"lazy",title:e},t,{className:"Preview-module--preview--3e1df"}))}}]);