"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[265484],{590632:function(e,n,a){a.r(n);var t=a(28453),o=a(296540);function l(e){const n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,t.R)(),e.components),{PageDescription:a,InlineNotification:l,Row:r,Column:s,ResourceCard:i,MdxIcon:m}=n;return s||c("Column",!0),l||c("InlineNotification",!0),m||c("MdxIcon",!0),a||c("PageDescription",!0),i||c("ResourceCard",!0),r||c("Row",!0),o.createElement(o.Fragment,null,o.createElement(a,null,o.createElement(n.p,null,"The Carbon color package helps teams build engaging digital experiences through\nconsistent application of color.")),"\n",o.createElement(l,null,o.createElement(n.p,null,"If you’re using ",o.createElement(n.code,null,"@carbon/react"),", you probably don’t need need to install the\ncolor package separately. See our ",o.createElement(n.a,{href:"/developing/frameworks/react/"},"Carbon React"),"\nguide to start building.")),"\n",o.createElement(n.h2,null,"Usage"),"\n",o.createElement(n.h3,null,"Sass"),"\n",o.createElement(n.p,null,"The ",o.createElement(n.code,null,"@carbon/colors")," package enables you to access colors from the IBM Design\nLanguage in Sass. You can access a color directly from the package by writing\nthe following:"),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-scss"},"@use '@carbon/colors';\n\n.selector {\n  background: colors.$blue-50;\n}\n")),"\n",o.createElement(n.p,null,"For a full list of colors exported, refer to the\n",o.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/colors/docs/sass.md#api"},"API"),"\nsection in the package’s Sass Documentation."),"\n",o.createElement(n.p,null,"In addition to individual colors, you can access all colors in a ",o.createElement(n.code,null,"Map")," using the\n",o.createElement(n.code,null,"$colors")," variable."),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-scss"},"@use '@carbon/colors';\n@each $swatch, $grades in colors.$colors {\n  @each $grade in $grades {\n    //\n  }\n}\n")),"\n",o.createElement(n.p,null,"Each key in the ",o.createElement(n.code,null,"$colors")," map is the name of a group of colors, also known as a\nswatch. The value of each entry is a ",o.createElement(n.code,null,"Map")," where the keys are the color grade\nand the values are the hex codes for the color at that grade. For example:"),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-scss"},"$colors: (\n  blue: (\n    10: #edf5ff,\n    20: #d0e2ff,\n    30: #a6c8ff,\n    40: #78a9ff,\n    50: #4589ff,\n    60: #0f62fe,\n    70: #0043ce,\n    80: #002d9c,\n    90: #001d6c,\n    100: #001141,\n  ),\n);\n")),"\n",o.createElement(n.h3,null,"JavaScript"),"\n",o.createElement(n.p,null,"For JavaScript, you can import and use this module by doing the following in\nyour code:"),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-js"},"// ESM\nimport { black, blue, warmGray } from '@carbon/colors';\n\n// CommonJS\nconst { black, blue, warmGray } = require('@carbon/colors');\n")),"\n",o.createElement(n.p,null,"Each color swatch is exported as a variable, and each color name is also\nexported as an object that can be called by specifying grade, for example:"),"\n",o.createElement(n.pre,null,o.createElement(n.code,{className:"language-js"},"black;\nblue[50]; // Using the `blue` object.\nwarmGray100; // Using the `warmGray100` variable.\n")),"\n",o.createElement(n.h2,null,"Resources"),"\n",o.createElement(r,{className:"resource-card-group"},o.createElement(s,{colMd:4,colLg:4,noGutterSm:!0},o.createElement(i,{subTitle:"Carbon color package",href:"https://github.com/carbon-design-system/carbon/tree/main/packages/colors"},o.createElement(m,{name:"github"}))),o.createElement(s,{colMd:4,colLg:4,noGutterSm:!0},o.createElement(i,{subTitle:"Color package demo",href:"https://carbon-elements.netlify.app/colors/examples/preview/"},o.createElement(m,{name:"bee"})))))}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,t.R)(),e.components);return n?o.createElement(n,e,o.createElement(l,e)):l(e)}}}]);