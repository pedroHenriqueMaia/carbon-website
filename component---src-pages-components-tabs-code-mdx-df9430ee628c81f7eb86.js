"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[78829],{14499:function(n,a,e){e.r(a),e.d(a,{_frontmatter:function(){return i},default:function(){return C}});var t=e(45987),o=(e(67294),e(3905)),s=e(3624),b=e(95329),l=e(42411),c=e(46194),r=e(26160),T=e(9375);const m=["components"],i={},d=n=>function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",a)},p=d("PageDescription"),u=d("Row"),y=d("Column"),h=d("ResourceCard"),P=d("MdxIcon"),g=d("ComponentDemo"),k=d("ComponentVariant"),x={_frontmatter:i},f=s.Z;function C(n){let{components:a}=n,e=(0,t.Z)(n,m);return(0,o.kt)(f,Object.assign({},x,e,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the tabs component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(h,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-tabs--default",mdxType:"ResourceCard"},(0,o.kt)(P,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(h,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default",mdxType:"ResourceCard"},(0,o.kt)(P,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(h,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",mdxType:"ResourceCard"},(0,o.kt)(P,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(h,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default",mdxType:"ResourceCard"},(0,o.kt)(P,{name:"vue",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(g,{scope:{Bat:l.cz,Bee:l.gv,Corn:c.gf,Home:r.SK,Monster:T.Qd,Tabs:b.Tabs,TabList:b.TabList,Tab:b.Tab,TabPanels:b.TabPanels,TabPanel:b.TabPanel},components:[{id:"tabs",label:"Tabs"},{id:"tabs--with-icons",label:"Tabs with icon"},{id:"icon-only",label:"Icon only"}],mdxType:"ComponentDemo"},(0,o.kt)(k,{id:"tabs",knobs:{TabList:["contained"],Tab:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tabs--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default"},mdxType:"ComponentVariant"},"\n<div style={{ width: '75%' }}>\n  <Tabs>\n    <TabList aria-label=\"List of tabs\">\n      <Tab>Tab Label 1</Tab>\n      <Tab>Tab Label 2</Tab>\n      <Tab disabled>Tab Label 3</Tab>\n      <Tab>\n          Tab Label 4 with a very long long title\n      </Tab>\n      <Tab>Tab Label 5</Tab>\n    </TabList>\n    <TabPanels>\n      <TabPanel>Tab Panel 1</TabPanel>\n      <TabPanel>\n        Tab Panel 2 <Button>Example button</Button>\n      </TabPanel>\n      <TabPanel>Tab Panel 3</TabPanel>\n      <TabPanel>Tab Panel 4</TabPanel>\n      <TabPanel>Tab Panel 5</TabPanel>\n    </TabPanels>\n  </Tabs>\n</div>\n  "),(0,o.kt)(k,{id:"tabs--with-icons",knobs:{TabList:["contained"],Tab:["type","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tabs--with-icons",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default"},mdxType:"ComponentVariant"},'\n<div style={{ width: \'75%\' }}>\n  <Tabs>\n    <TabList activation="manual" aria-label="List of tabs">\n      <Tab renderIcon={Bee}>Tab label 1</Tab>\n      <Tab renderIcon={Monster}>Tab label 2</Tab>\n      <Tab renderIcon={Corn}>\n        Tab label 3\n      </Tab>\n      <Tab title="Tab label 4" renderIcon={Bat} disabled>\n         Tab label 4\n       </Tab>\n       <Tab renderIcon={Home}>Tab label 5</Tab>\n     </TabList>\n     <TabPanels>\n       <TabPanel>Tab Panel 1</TabPanel>\n       <TabPanel>\n         <form style={{ margin: \'2em\' }}>\n           <legend className=\'cds--label\'>Validation example</legend>\n           <Checkbox id="cb" labelText="Accept privacy policy" />\n           <Button\n             style={{ marginTop: \'1rem\', marginBottom: \'1rem\' }}\n             type="submit">\n             Submit\n           </Button>\n           <TextInput\n             type="text"\n             labelText="Text input label"\n             helperText="Optional help text"\n             id="text-input-1"\n           />\n         </form>\n       </TabPanel>\n       <TabPanel>Tab Panel 3</TabPanel>\n       <TabPanel>Tab Panel 4</TabPanel>\n       <TabPanel>Tab Panel 5</TabPanel>\n     </TabPanels>\n   </Tabs>\n</div>\n  '),(0,o.kt)(k,{id:"icon-only",knobs:{TabList:["contained"],IconTab:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tabs--icon-only",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default"},mdxType:"ComponentVariant"},'\n<div style={{ width: \'75%\' }}>\n  <Tabs>\n    <TabList iconSize="default" aria-label="List of tabs">\n      <IconTab label="Monster">\n        <Monster aria-label="Monster" />\n      </IconTab>\n      <IconTab label="Corn">\n        <Corn aria-label="Corn" />\n      </IconTab>\n      <IconTab label="Bat" disabled>\n        <Bat aria-label="Bat" />\n      </IconTab>\n    </TabList>\n    <TabPanels>\n      <TabPanel>Tab Panel 1</TabPanel>\n      <TabPanel>Tab Panel 2</TabPanel>\n      <TabPanel>Tab Panel 3</TabPanel>\n    </TabPanels>\n  </Tabs>\n</div>\n  ')))}C.isMDXComponent=!0}}]);