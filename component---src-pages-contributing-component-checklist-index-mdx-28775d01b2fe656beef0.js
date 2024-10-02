"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[967933],{697443:function(e,t,n){n.r(t);var l=n(28453),a=n(296540),r=n(942690);function o(e){const t=Object.assign({p:"p",h2:"h2",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",strong:"strong",h3:"h3",em:"em"},(0,l.R)(),e.components),{PageDescription:n,AnchorLinks:o,AnchorLink:c,Row:i,Column:m}=t;return c||s("AnchorLink",!0),o||s("AnchorLinks",!0),m||s("Column",!0),n||s("PageDescription",!0),i||s("Row",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"When building components in the Carbon ecosystem, it’s essential that we align\non a “definition of done” to ensure all components are being built with the same\nquality and assurance.")),"\n",a.createElement(o,null,a.createElement(c,null,"Definition of done"),a.createElement(c,null,"Design spec"),a.createElement(c,null,"Code"),a.createElement(c,null,"Documentation"),a.createElement(c,null,"Design kit")),"\n",a.createElement(t.h2,null,"Definition of done"),"\n",a.createElement(t.p,null,"By aligning on the requirements of component stability, we can easily prioritize\na backlog of work, share the status of assets with contributors and better\ndifferentiate when an asset is a component versus a pattern. We can also work\nbackward from this strict list of requirements to inform where a component\ncurrently is in the\n",a.createElement(t.a,{href:"https://w3.ibm.com/w3publisher/winning-products/how-we-work/product-development-lifecycle"},"Product Development Lifecycle"),"\n(PDLC). With each phase, the component should progress in its completeness. Once\nit has reached stable and all items in the following checklists have been\ncompleted, then the component will be considered done."),"\n",a.createElement(t.p,null,"Note: Although not all published assets currently meet these requirements,\nmoving forward, we’d like all new assets to adhere to them."),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Status"),a.createElement(t.th,null,"PDLC Phase"),a.createElement(t.th,null,"Description"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,"Draft")),a.createElement(t.td,null,"Discovery"),a.createElement(t.td,null,"Partially complete, ready for validation.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,"Preview candidate")),a.createElement(t.td,null,"Discovery"),a.createElement(t.td,null,"Partially complete, with measurable results, stakeholders, and clear business value.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,"Preview")),a.createElement(t.td,null,"Delivery"),a.createElement(t.td,null,"Mostly complete, changes possible based on feedback, available to use in production.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,"Stable")),a.createElement(t.td,null,"Launch and scale"),a.createElement(t.td,null,"Complete across code, kit, docs, design, and ready for production use.")))),"\n",a.createElement(t.h2,null,"Design spec"),"\n",a.createElement(t.p,null,"The design specification (spec) is the blueprint used by developers to build the\ncomponent in code and for designers making the component in Figma. It is\nreferenced as the source of truth for the visual appearance and functionality of\na component. Having an accurate and detailed design spec ensures the component\nwill be built and represented consistently across experiences."),"\n",a.createElement(i,{className:"table--component-checklist"},a.createElement(m,{colMd:8,colLg:12,noGutterSm:!0},a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Requirement"),a.createElement(t.th,null,"Details"),a.createElement(t.th,null,"Why this matters"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Color tokens")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null,"Design specs only use color tokens available in the system."),a.createElement(r.ckQ,null,"Design specs only contain colors that are tokenized."),a.createElement(r.ckQ,null,"Color token usage is correct according to our documentation and matches applications across the system. "))),a.createElement(t.td,null,"Color tokens are essential to the reusability and scalability of the system; they support a11y requirements and reduce the maintenance burden. They also allow for consistent application of color across the system, and make color functionalities like theming possible.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Type tokens")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null,"Design specs only use type tokens available in the system."),a.createElement(r.ckQ,null,"Design specs only contain type styles and sizes that are tokenized."),a.createElement(r.ckQ,null,"Type token usage is correct and consistent with matching applications across the system."))),a.createElement(t.td,null,"Type tokens are essential to the reusability and scalability of the system and they reduce the maintenance burden. They also allow for consistent type use across the system.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Structure and measurements")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null,"Design specs only use spacing tokens available in the system."),a.createElement(r.ckQ,null,"Clearly annotate spacing and alignment for all design elements."),a.createElement(r.ckQ,null,"Design specs include all possible configurations such as sizes and content configurations."))),a.createElement(t.td,null,"Detailed structure and measurement specs allow developers to build assets quicker and ensure that designs are accurately represented in the code.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Interaction states")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null,"Designs include specs for states such as hover, focus, selected, disabled, read-only, error, warning, etc."))),a.createElement(t.td,null,"Each state of the component needs to be represented in the specification to ensure that accessibility requirements and quality of the designs are accurately represented in the code.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Behaviors")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null,"Designs include specs for behaviors such as responsiveness, content overflow or reflow, expansion, scrolling, etc."))),a.createElement(t.td,null,"Developers need to understand how the asset will behave when a user interacts with it. Detailed annotations and specs of the various behaviors will ensure that the designs are accurately represented in the code.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Accessibility")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null,"All text colors pass 4.5:1 color contrast with the exceptions of disabled states."),a.createElement(r.ckQ,null,"All interactive non-text elements meet 3:1 contrast."),a.createElement(r.ckQ,null,"Flow of focus is clearly documented."))),a.createElement(t.td,null,"IBM products must meet WCAG AA accessibility standards.")))))),"\n",a.createElement(t.h2,null,"Code"),"\n",a.createElement(t.p,null,"In order for code to be stable, it must meet the requirements in the table\nbelow. Preview code should plan for these requirements, but does not need to\nmeet them in the discovery or delivery phases. For additional guidance how we\nprefer to write code for the Carbon Design System, see the\n",a.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon/blob/main/docs/style.md"},"Carbon Style Guide"),"."),"\n",a.createElement(i,{className:"table--component-checklist"},a.createElement(m,{colMd:8,colLg:12,noGutterSm:!0},a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Requirement"),a.createElement(t.th,null,"Details"),a.createElement(t.th,null,"Why this matters"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"API guiding principles")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Prioritize end user: emphasize the consumer/dev experience above difficulty of implementation."),a.createElement(r.ckQ,null," Interoperability: support wide band coverage of multiple React versions, node LTS versions, etc. and favor framework/library agnostic approaches to component APIs and designs."),a.createElement(r.ckQ,null,"Stability: always deprecate before removal, ensure long deprecation periods, consider the migration experience for developers. "),a.createElement(r.ckQ,null," Composition: components should be broken down into logical pieces to support the many disparate configurations that are required by the business. "),a.createElement(r.ckQ,null," Developer experience: consider how a developer will use this component; will they find it approachable or confusing? "))),a.createElement(t.td,null,"Careful consideration of API design ensures that future changes to the system can be made in an iterative way that minimizes disruption. Developer experience and productivity can be heavily influenced by needlessly complex APIs. The business has a wide range of requirements and should meet as many of them as possible. Prioritize the user wherever possible — if you can make things easier for them by writing extra code, handling complexity internally, or taking care of a common concern, do so. It’s our job to contain chaos so that it’s easier and faster to build excellent software products.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Built to spec")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Every interaction spec’d should be implemented. "),a.createElement(r.ckQ,null," The ",a.createElement(t.a,{href:"/contributing/component-checklist/#design-spec"},"design spec")," should match the implementation perfectly down to the pixel."))),a.createElement(t.td,null,"Thorough implementation with intense attention to detail is pivotal to maintaining pervasive design excellence within the system. This high bar of quality sets our system apart and drives adoption, user satisfaction, and overall outcomes.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Tokens")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Component styles use tokens available in the system. "),a.createElement(r.ckQ,null," Component styles do not contain magic numbers or colors that are not tokenized. "))),a.createElement(t.td,null,"Tokens are essential to the reusability and scalability of the system — they support a11y requirements and reduce the maintenance burden within the system.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Globalization")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," All strings are configurable and parameterized (props) in a way that is agnostic and compatible with a wide range of g11n i18n solutions/libraries. "))),a.createElement(t.td,null,"Ensures assets can be reused within products and offerings worldwide.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Responsiveness")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null,"Component layout, functionality, and ux works on all device sizes from very large to ~320px wide. "),a.createElement(r.ckQ,null," Component styles use media queries where needed."))),a.createElement(t.td,null,"Ensures assets work properly on small screens so that IBM products and offerings can be used on as many devices as possible.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Storybook")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," A default and playground story exists in Storybook. "))),a.createElement(t.td,null,"Ensures re-usable code and a demo are available.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Documentation")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Long-form documentation is provided in both storybook and the carbon website. "))),a.createElement(t.td,null,"Usage examples in the Storybook do not answer all questions, cover all interactions, or provide pointed helpful information regarding the intended component usage and configuration.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Fully Typed/JSDoc")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Component has an interface with all props typed. "),a.createElement(r.ckQ,null," Component interface is exported for use in consuming projects. "))),a.createElement(t.td,null,"Ensures that components and assets are built using Typescript to attain the inherent benefits of strongly typed programming language, but also provides a best-in-class developer experience (particularly through intellisense), even for those not using TypeScript in their projects.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Codemods")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," If the component/change will require migration by consuming teams, an automated code migration script should be written and made available through ",a.createElement(t.code,null,"@carbon/upgrade"),". "))),a.createElement(t.td,null,"Ensure that consumers using a given component will have a graceful experience when breaking changes occur. Also holds a lot of weight as to the perception of the system’s ability to adapt and innovate while maintaining a laser focus on stability. Reduces the cost spent by a team to migrate — compounded across all the teams we support across IBM this can have a significant impact on IBM’s bottom line in cost/productivity.")))))),"\n",a.createElement(t.h3,null,"Testing"),"\n",a.createElement(t.p,null,"A crucial aspect to ensure continued quality of production stable code is\ntesting. The following testing requirements must be met before a component can\nbe considered stable."),"\n",a.createElement(i,{className:"table--component-checklist"},a.createElement(m,{colMd:8,colLg:12,noGutterSm:!0},a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Requirement"),a.createElement(t.th,null,"Details"),a.createElement(t.th,null,"Why this matters"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Unit testing")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Component API and functionality should be thoroughly tested using jest and testing-library (therefore in a jsdom environment). "),a.createElement(r.ckQ,null," Component unit test coverage should meet and exceed 80% of functions, lines, statements, etc. "))),a.createElement(t.td,null,"Validates and ensures that components work as they’re expected to and regressions are not introduced as changes are made.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Visual regression tests (VRT)")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Component has at least one test on the default story for VRT using Percy. "),a.createElement(r.ckQ,null," Additional “problematic” or highly concerning component states, stories, viewport-widths can be covered by VRT. "))),a.createElement(t.td,null,"Ensures that components do not visually regress as changes are made. This catches bugs early, avoids disruptive mistakes, and supports the overall stability of the system.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Accessibility verification tests (AVT)")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Component has one test of it’s default state checked by the ",a.createElement(t.a,{href:"https://www.ibm.com/able/toolkit/tools/#develop"},"IBM Equal Access Accessibility Checker"),". "),a.createElement(r.ckQ,null," Component has all additional “complex” states (open, closed, highlighted, expanded, focused, hovered, clicked, etc) checked by IBM Equal Access Accessibility Checker. "))),a.createElement(t.td,null,"Ensures that components and assets are accessible. First and foremost this is a moral imperative; accessibility benefits everyone. It additionally supports the goal of IBM products and offerings being able to be sold and used in industries bound by law to have accessible experiences.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Screen reader/voiceover")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," Component has been manually tested to read appropriately in JAWS, VoiceOver, and NVDA."))),a.createElement(t.td,null,"Ensures that components and assets are able to be used by disabled users who utilize screenreaders. First and foremost this is a moral imperative; accessibility benefits everyone. It additionally supports the goal of IBM products and offerings being able to be sold and used in industries bound by law to have accessible experiences.")))))),"\n",a.createElement(t.h2,null,"Documentation"),"\n",a.createElement(t.p,null,"All components and patterns require usage, style, code, and accessibility\nguidance published on a Carbon ecosystem website. Carbon provides documentation\ntemplates to help ensure visual and content expectations. Additional guidance on\ncreating layouts and images for website documentation can be found in the\n",a.createElement(t.a,{href:"https://carbondesignsystem.com/designing/design-resources/#image-production-guidelines"},"image production guidelines"),"."),"\n",a.createElement(i,{className:"table--component-checklist"},a.createElement(m,{colMd:8,colLg:12,noGutterSm:!0},a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Requirement"),a.createElement(t.th,null,"Details"),a.createElement(t.th,null,"Why this matters"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"xxUsage docs")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," ",a.createElement(t.a,{href:"/contributing/documentation/#usage-template:-for-components-with-one-variant"},"Single variant template")," ",a.createElement(t.em,null,"(last updated Q1 2024)"),". "),a.createElement(r.ckQ,null," ",a.createElement(t.a,{href:"/contributing/documentation/#usage-template:-for-components-with-multiple-variants"},"Multiple variant template")," ",a.createElement(t.em,null,"(last updated 2021)"),". "))),a.createElement(t.td,null,"The usage documentation helps describe when to use a component and how it works.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Style docs")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," ",a.createElement(t.a,{href:"/contributing/documentation/#style-template:-for-components-with-one-variant"},"Single variant template")," ",a.createElement(t.em,null,"(last updated Q3 2024)"),"."),a.createElement(r.ckQ,null," ",a.createElement(t.a,{href:"/contributing/documentation/#style-template:-for-components-with-multiple-variants"},"Multiple variant template")," ",a.createElement(t.em,null,"(last updated Q3 2024)"),". "))),a.createElement(t.td,null,"The style documentation helps describe how a component looks, including visual specifications such as color, typography, structure, and size.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Code docs")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," ",a.createElement(t.a,{href:"/contributing/documentation/#code-template"},"Code template")," ",a.createElement(t.em,null,"(last updated 2022)"),". "))),a.createElement(t.td,null,"The code documentation helps developers implement the component. It includes code snippets, dependencies, and version changes. Although Carbon developers write more detailed documentation in Storybook, they still provide several standard pieces of information on the Carbon website.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Accessibility docs")),a.createElement(t.td,null,a.createElement(r.XyR,null,a.createElement(r.ckQ,null," ",a.createElement(t.a,{href:"/contributing/documentation/#accessibility-template"},"Accessibility template")," ",a.createElement(t.em,null,"(last updated 2023)"),". "))),a.createElement(t.td,null,"The published information, written by our A11y SMEs, helps users understand all the accessibility considerations that are baked into Carbon.")))))),"\n",a.createElement(t.h2,null,"Design kit"),"\n",a.createElement(t.p,null,"Our\n",a.createElement(t.a,{href:"https://www.figma.com/design/4UYvy6eey28bD3IvtNF8xP/IBM-Documentation-Library?node-id=654-4435&t=67lxOP8nwgq7z2E1-0"},"IBM Figma best practices"),"\nare maintained, tracked, and peer-reviewed by IBM’s Figma guild. Although the\nguild is not part of the Carbon team, they are crucial partners in our\ngovernance model."),"\n",a.createElement(i,{className:"table--component-checklist"},a.createElement(m,{colMd:8,colLg:12,noGutterSm:!0},a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Requirement"),a.createElement(t.th,null,"Details"),a.createElement(t.th,null,"Why this matters"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"IBM Figma Guidelines")),a.createElement(t.td,null,"Figma components follow the guidelines as defined in ",a.createElement(t.a,{href:"https://www.figma.com/design/4UYvy6eey28bD3IvtNF8xP/IBM-Documentation-Library?node-id=654-4435&t=67lxOP8nwgq7z2E1-0"},"IBM Figma Best Practices"),". ",a.createElement("br")," ",a.createElement("br")," The guidance includes topics on component properties, auto layout, styles, icons, item and base components, content, construction, and file organization."),a.createElement(t.td,null,"This checklist ensures components are built correctly before merging into the main Figma branch.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"IBM Figma Naming Convention")),a.createElement(t.td,null,"Figma components follow the component naming convention documented in ",a.createElement(t.a,{href:"https://www.figma.com/design/4UYvy6eey28bD3IvtNF8xP/IBM%C2%AE-Documentation-Library?m=auto&node-id=642-4479&t=1rSjk0nlj8wBV9aK-1"},"IBM Figma Best Practices"),"."),a.createElement(t.td,null,"The naming convention ensures that file architecture and component hierarchies are both standardized and intuitive for the user. ",a.createElement("br")," ",a.createElement("br")," With this method we are able to have hierarchy between the final components, their bases, and their pieces when we traverse through the assets/instance swapper panels while still being able to view the entire component name when searching.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Built to spec")),a.createElement(t.td,null,"The Figma component should match the ",a.createElement(t.a,{href:"/contributing/component-checklist/#design-spec"},"design spec")," perfectly down to the pixel. Every interaction spec’d should be included in the Figma component."),a.createElement(t.td,null,"Thorough implementation with intense attention to detail is pivotal to maintaining pervasive design excellence within the system. This high bar of quality sets our system apart and drives adoption, user satisfaction, and overall outcomes.")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Published to a library")),a.createElement(t.td,null,"A Figma component must be published to the appropriate IBM Figma library. Components built in the Carbon repo are published in ",a.createElement(t.a,{href:"https://www.figma.com/design/YAnB1jKx0yCUL29j6uSLpg/(v11)-Carbon-Design-System?m=auto"},"(V11) Carbon Design System"),"."),a.createElement(t.td,null,"A published connected component ensures accurate use across products. It also allows for Figma analytics to understand adoption and usage better.")))))))}function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,l.R)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)}}}]);