"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[783142],{739408:function(e,t,n){n.r(t);var a=n(28453),l=n(296540),r=n(725441);function o(e){const t=Object.assign({p:"p",h3:"h3",a:"a",h2:"h2",pre:"pre",code:"code",em:"em",strong:"strong"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:o,AnchorLink:c,InlineNotification:i}=t;return c||s("AnchorLink",!0),o||s("AnchorLinks",!0),i||s("InlineNotification",!0),n||s("PageDescription",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"This step takes our static components and populates them with data from the\nGitHub GraphQL API – loading states and all. We’ll be displaying Carbon\nrepository information in a data table.")),"\n",l.createElement(o,null,l.createElement(c,null,"Fork, clone and branch"),l.createElement(c,null,"Install dependencies"),l.createElement(c,null,"Fetch data"),l.createElement(c,null,"Populate data table"),l.createElement(c,null,"Add loading"),l.createElement(c,null,"Add pagination"),l.createElement(c,null,"Submit pull request")),"\n",l.createElement(t.h3,null,"Preview"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.a,{href:"https://docs.github.com/en/rest?apiVersion=2022-11-28"},"GitHub REST API")," is\nvery well documented, we’ll use it to fetch Carbon-related data for this Carbon\ntutorial."),"\n",l.createElement(t.p,null,"To do so, we’ll be using\n",l.createElement(t.a,{href:"https://github.com/octokit/core.js/#readme"},"Octokit Core"),", a client that makes\nit easy to interact with GitHub’s APIs."),"\n",l.createElement(t.p,null,"A\n",l.createElement(t.a,{href:"https://carbon-tutorial-nextjs-git-v11-next-step-4-carbon-design-system.vercel.app/"},"preview"),"\nof what you will build (see repositories page):"),"\n",l.createElement(r.A,{height:"400",title:"Carbon Tutorial Step 3",src:"https://carbon-tutorial-nextjs-git-v11-next-step-4-carbon-design-system.vercel.app/",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}),"\n",l.createElement(t.h2,null,"Fork, clone and branch"),"\n",l.createElement(t.p,null,"This tutorial has an accompanying GitHub repository called\n",l.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-nextjs"},"carbon-tutorial-nextjs"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",l.createElement(t.a,{href:"/developing/react-tutorial/step-1#fork-clone-and-branch"},"step 1 instructions"),"."),"\n",l.createElement(t.h3,null,"Branch"),"\n",l.createElement(t.p,null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git fetch upstream\ngit checkout -b v11-next-step-3 upstream/v11-next-step-3\n")),"\n",l.createElement(t.h3,null,"Build and start app"),"\n",l.createElement(t.p,null,"Install the app’s dependencies and build the app:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn && yarn build\n")),"\n",l.createElement(t.p,null,"Then, start the app:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn start\n")),"\n",l.createElement(t.p,null,"You should see something similar to where the\n",l.createElement(t.a,{href:"/developing/react-tutorial/step-2"},"previous step")," left off. Stop your app with\n",l.createElement(t.code,null,"CTRL-C")," and let’s get everything installed."),"\n",l.createElement(t.h2,null,"Install dependencies"),"\n",l.createElement(t.p,null,"We’ll need to install ",l.createElement(t.code,null,"@octokit/core"),", a package that allows us to query GitHub\nAPIs easily. Stop your development server with ",l.createElement(t.code,null,"CTRL-C")," and install the octokit\ndependency with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn add @octokit/core@4.2.0\n")),"\n",l.createElement(t.p,null,"Then, start the app again. If your app’s currently running, you’ll need to\nrestart it."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn dev\n")),"\n",l.createElement(t.h2,null,"Fetch data"),"\n",l.createElement(t.h3,null,"Imports"),"\n",l.createElement(t.p,null,"We’ll be using ",l.createElement(t.a,{href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")," to call\na function to fetch our data when the component renders."),"\n",l.createElement(t.p,null,"Import React’s ",l.createElement(t.a,{href:"https://reactjs.org/docs/hooks-effect.html"},"useEffect")," by\nmodifying the ",l.createElement(t.code,null,"React")," import in ",l.createElement(t.code,null,"src/app/repos/page.js"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"import React, { useEffect } from 'react';\n")),"\n",l.createElement(t.p,null,"Add the following import below the react import in ",l.createElement(t.code,null,"RepoPage"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"import { Octokit } from '@octokit/core';\n")),"\n",l.createElement(t.h3,null,"Initializing Octokit client"),"\n",l.createElement(t.p,null,"Directly below all your imports, initialize an octokit client which we’ll use to\nquery our ",l.createElement(t.code,null,"RepoTable")," data:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"const octokitClient = new Octokit({});\n")),"\n",l.createElement(t.h3,null,"API Request"),"\n",l.createElement(t.p,null,"Next, we’ll assemble our GitHub API request to fetch a list of repositories that\nbelong to the ",l.createElement(t.code,null,"carbon-design-system")," GitHub organization. We’ll do this by using\na ",l.createElement(t.code,null,"useEffect")," hook that will use octokit to query GitHub’s API\n",l.createElement(t.a,{href:"https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-organization-repositories"},"repositories endpoint"),"."),"\n",l.createElement(t.p,null,"Let’s declare a ",l.createElement(t.code,null,"useEffect")," hook immediately below the component definition and\nabove the return. We’ll use this to query GitHub’s API when the component first\nrenders:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"function RepoPage() {\n  useEffect(() => {\n    async function getCarbonRepos() {\n      const res = await octokitClient.request('GET /orgs/{org}/repos', {\n        org: 'carbon-design-system',\n        per_page: 75,\n        sort: 'updated',\n        direction: 'desc',\n      });\n\n      if (res.status === 200) {\n        console.log(res.data);\n      } else {\n        console.log('Error obtaining repository data');\n      }\n    }\n\n    getCarbonRepos();\n  }, []);\n")),"\n",l.createElement(t.p,null,"At this point, if you navigate to the Repositories page ",l.createElement(t.code,null,"/repos")," in your running\napp and view your browser’s console (e.g.\n",l.createElement(t.a,{href:"https://developer.chrome.com/docs/devtools/"},"Chrome DevTools"),"), you should see\nthe response from GitHub!"),"\n",l.createElement(t.h3,null,"Helpers"),"\n",l.createElement(t.p,null,"Our last column in the data table will be a comma-separated list of repository\nand home page links, so let’s create a component called ",l.createElement(t.code,null,"LinkList"),"."),"\n",l.createElement(t.p,null,"Import ",l.createElement(t.code,null,"Link")," at the top of ",l.createElement(t.code,null,"/app/repos/page.js"),". The imports should look like\nthis."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"import { Link, Grid, Column } from '@carbon/react';\n")),"\n",l.createElement(t.p,null,"Then use ",l.createElement(t.code,null,"Link")," in this component. It has two props (",l.createElement(t.code,null,"url")," and ",l.createElement(t.code,null,"homepageUrl"),")\nand returns an unordered list. If the repository does not have a home page URL,\nonly render the repository link."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"const LinkList = ({ url, homepageUrl }) => (\n  <ul style={{ display: 'flex' }}>\n    <li>\n      <Link href={url}>GitHub</Link>\n    </li>\n    {homepageUrl && (\n      <li>\n        <span>&nbsp;|&nbsp;</span>\n        <Link href={homepageUrl}>Homepage</Link>\n      </li>\n    )}\n  </ul>\n);\n")),"\n",l.createElement(t.p,null,"As a final helper, let’s create a function that transforms row data to our\nexpected header keys. Notice how we’re using our new ",l.createElement(t.code,null,"LinkList")," component to\ngenerate the value of the ",l.createElement(t.code,null,"links")," key in each row."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"const getRowItems = (rows) =>\n  rows.map((row) => ({\n    ...row,\n    key: row.id,\n    stars: row.stargazers_count,\n    issueCount: row.open_issues_count,\n    createdAt: new Date(row.created_at).toLocaleDateString(),\n    updatedAt: new Date(row.updated_at).toLocaleDateString(),\n    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,\n  }));\n")),"\n",l.createElement(t.h3,null,"Populate data table"),"\n",l.createElement(t.p,null,"Now that we have our data, let’s dispose of our dummy ",l.createElement(t.code,null,"rows")," and populate the\ndata table with real data."),"\n",l.createElement(t.p,null,"First, towards the top of ",l.createElement(t.code,null,"RepoPage")," delete the ",l.createElement(t.code,null,"rows")," array because we no\nlonger need the example rows."),"\n",l.createElement(t.p,null,"Next, let’s add a couple variables that will help us store useful information\nwhen fetching the data and keep track of the loading state."),"\n",l.createElement(t.p,null,"We’ll be using ",l.createElement(t.a,{href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")," again to\nmanage our state."),"\n",l.createElement(t.p,null,"Import React’s ",l.createElement(t.a,{href:"https://reactjs.org/docs/hooks-state.html"},"useState")," by\nmodifying the ",l.createElement(t.code,null,"React")," import."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"import React, { useEffect, useState } from 'react';\n")),"\n",l.createElement(t.p,null,"Then, inside the ",l.createElement(t.code,null,"RepoPage")," component:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"function RepoPage() {\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState();\n  const [rows, setRows] = useState([]);\n")),"\n",l.createElement(t.p,null,"Now, instead of using ",l.createElement(t.code,null,"console.log")," to log the github data response, let’s treat\nthe response data by passing it through our ",l.createElement(t.code,null,"getRowItems")," helper and saving the\nresult in our new ",l.createElement(t.code,null,"rows")," variable. Replace the ",l.createElement(t.code,null,"console.log(res.data);")," line\ninside ",l.createElement(t.code,null,"if (res.status === 200)")," with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"setRows(getRowItems(res.data));\n")),"\n",l.createElement(t.p,null,"Let’s also replace our error log line inside the ",l.createElement(t.code,null,"else")," statement with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"setError('Error obtaining repository data');\n")),"\n",l.createElement(t.p,null,"To complete our ",l.createElement(t.code,null,"getCarbonRepos")," function, let’s set the loading state to false\nright after the ",l.createElement(t.code,null,"else")," statement:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"if (res.status === 200) {\n  setRows(getRowItems(res.data));\n} else {\n  setError('Error obtaining repository data');\n}\nsetLoading(false);\n")),"\n",l.createElement(t.p,null,"Finally, let’s modify our component’s ",l.createElement(t.code,null,"return()")," statement to display different\ninformation depending on the states of our request: loading, error or complete.\nReplace the current return statement with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"if (loading) {\n  return 'Loading...';\n}\n\nif (error) {\n  return `Error! ${error}`;\n}\n\n// If we're here, we've got our data!\nreturn (\n  <Grid className=\"repo-page\">\n    <Column lg={16} md={8} sm={4} className=\"repo-page__r1\">\n      <RepoTable headers={headers} rows={rows} />\n    </Column>\n  </Grid>\n);\n")),"\n",l.createElement(t.h3,null,"Render repository descriptions"),"\n",l.createElement(t.p,null,"The data table component and its pieces use a common React pattern called\n",l.createElement(t.a,{href:"https://reactjs.org/docs/render-props.html"},"render props"),". This is a really\npowerful way for libraries to give developers control of rendering and\nmanipulating their data."),"\n",l.createElement(t.p,null,"Revisiting ",l.createElement(t.code,null,"RepoTable.js"),", we are already passing in our row objects along with\nheaders for each column. The ",l.createElement(t.code,null,"render")," prop is being used to tell the data table\nhow to render the headers and rows. That prop takes a function that receives the\nprocessed headers and rows as arguments as well as some helper functions for\nrendering the table."),"\n",l.createElement(t.p,null,"One common hurdle with the data table is how to access data that might not\ncorrespond with a table column but is needed to compute the value of a cell that\ndoes. The data table component processes and controls only the row properties\nwhich corresponds to headers (columns). Because of this, the ",l.createElement(t.code,null,"rows")," object you\nget access to in the render prop function is ",l.createElement(t.em,null,"different")," than the one you passed\nin to the ",l.createElement(t.code,null,"rows")," prop."),"\n",l.createElement(t.p,null,"We need to modify one aspect of the data table because if you expand a row, it\nsays ",l.createElement(t.code,null,"Row description"),". We want to update that with the repository description\ncoming from the GitHub API. This is an example of where we need a simple look-up\nfunction to find the data we care about - data that does not directly correspond\nto a column."),"\n",l.createElement(t.p,null,"To do so, in ",l.createElement(t.code,null,"RepoTable.js"),", add this look-up function as the first lines inside\nthe ",l.createElement(t.code,null,"RepoTable"),". This should go immediately before the component’s ",l.createElement(t.code,null,"return()"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/RepoTable.js"},"const getRowDescription = (rowId) => {\n  const row = rows.find(({ id }) => id === rowId);\n  return row ? row.description : '';\n};\n")),"\n",l.createElement(t.p,null,"Finally, in ",l.createElement(t.code,null,"RepoTable.js"),", replace ",l.createElement(t.code,null,"<p>Row description</p>")," with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html",metaData:"path=src/app/repos/RepoTable.js"},"<p>{getRowDescription(row.id)}</p>\n")),"\n",l.createElement(t.h2,null,"Add loading"),"\n",l.createElement(t.p,null,"At this point, the first time that you visit the repositories page, we’re\nquerying the GitHub API and rendering the response through the ",l.createElement(t.code,null,"DataTable"),"\ncomponent. We could stop here, but there’s more to be done! Let’s replace the\n",l.createElement(t.code,null,"Loading...")," string with the\n",l.createElement(t.a,{href:"https://react.carbondesignsystem.com/?path=/story/components-datatable--skeleton"},"DataTableSkeleton component"),"."),"\n",l.createElement(t.p,null,"To do so, back to ",l.createElement(t.code,null,"RepoPage"),", add the ",l.createElement(t.code,null,"DataTableSkeleton")," import by modifying\nthe existing ",l.createElement(t.code,null,"@carbon/react")," import."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"import { Link, DataTableSkeleton, Grid, Column } from '@carbon/react';\n")),"\n",l.createElement(t.p,null,"Then replace the ",l.createElement(t.code,null,"if (loading) return 'Loading...';")," with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},'if (loading) {\n  return (\n    <Grid className="repo-page">\n      <Column lg={16} md={8} sm={4} className="repo-page__r1">\n        <DataTableSkeleton\n          columnCount={headers.length + 1}\n          rowCount={10}\n          headers={headers}\n        />\n      </Column>\n    </Grid>\n  );\n}\n')),"\n",l.createElement(t.p,null,"We need to tell the loading skeleton how many rows to render, so let’s use 10\nskeleton rows to prepare for the next enhancement…"),"\n",l.createElement(t.h2,null,"Add pagination"),"\n",l.createElement(t.p,null,"Pagination! Instead of rendering every repository, let’s add pagination to the\ndata table to only render 10 at a time. Depending on your specific requirements,\nyou may need to fetch new data each time that you interact with the pagination\ncomponent, but for simplicity, we’re going to make one request to fetch all\ndata, and then paginate the in-memory row data."),"\n",l.createElement(t.p,null,"Initialize the new state variables that we’ll use for pagination as the first\nlines inside the ",l.createElement(t.code,null,"RepoPage"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"function RepoPage() {\n  const [firstRowIndex, setFirstRowIndex] = useState(0);\n  const [currentPageSize, setCurrentPageSize] = useState(10);\n...\n")),"\n",l.createElement(t.p,null,"This initializes the total number of rows and the index of the first row to ",l.createElement(t.code,null,"0"),",\nand the page size to ",l.createElement(t.code,null,"10")," as we also specified in our loading skeleton."),"\n",l.createElement(t.p,null,"Then we need to update our ",l.createElement(t.code,null,"RepoTable")," ",l.createElement(t.code,null,"rows")," prop to only render the subset of\nrows for the current “page”. Update\n",l.createElement(t.code,null,"<RepoTable headers={headers} rows={rows} />")," to:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"<RepoTable\n  headers={headers}\n  rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}\n/>\n")),"\n",l.createElement(i,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," We only pass the rows that we want our table to display. We can do\nthis by slicing the array of rows depending on the first item and the page size.")),"\n",l.createElement(t.p,null,"Finally, let’s add the ",l.createElement(t.code,null,"Pagination")," to update our state variables and cause the\ndata table to render new rows."),"\n",l.createElement(t.p,null,"Import ",l.createElement(t.code,null,"Pagination")," by updating the ",l.createElement(t.code,null,"@carbon/react")," import."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},"import {\n  Link,\n  DataTableSkeleton,\n  Pagination,\n  Grid,\n  Column,\n} from '@carbon/react';\n")),"\n",l.createElement(t.p,null,"Immediately after the ",l.createElement(t.code,null,"RepoTable")," closing tag (",l.createElement(t.code,null,"/>"),"), add the ",l.createElement(t.code,null,"Pagination"),"\ncomponent using the state variables that we previously initialized."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript",metaData:"path=src/app/repos/page.js"},'<Pagination\n  totalItems={rows.length}\n  backwardText="Previous page"\n  forwardText="Next page"\n  pageSize={currentPageSize}\n  pageSizes={[5, 10, 15, 25]}\n  itemsPerPageText="Items per page"\n  onChange={({ page, pageSize }) => {\n    if (pageSize !== currentPageSize) {\n      setCurrentPageSize(pageSize);\n    }\n    setFirstRowIndex(pageSize * (page - 1));\n  }}\n/>\n')),"\n",l.createElement(i,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," The ",l.createElement(t.code,null,"Pagination")," component isn’t inherently connected in any way to\nthe ",l.createElement(t.code,null,"DataTable")," - we need to tell it what to do when a change occurs using the\n",l.createElement(t.code,null,"onChange")," prop. This includes both page size changes and displaying different\nrows.")),"\n",l.createElement(i,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Like the other Carbon React components, ",l.createElement(t.code,null,"Pagination")," component\nexamples can be found in\n",l.createElement(t.a,{href:"https://react.carbondesignsystem.com/?path=/story/components-pagination--pagination"},"Storybook"),"\nby browsing the story and knobs.")),"\n",l.createElement(t.p,null,"That does it! Your data table should fetch GitHub data on first render. You can\nexpand each row to see the repository’s description. You can modify the\npagination items per page and cycle through pages or jump to a specific page of\nrepositories."),"\n",l.createElement(t.h2,null,"Submit pull request"),"\n",l.createElement(t.p,null,"We’re going to submit a pull request to verify completion of this tutorial step."),"\n",l.createElement(t.h3,null,"Continuous integration (CI) check"),"\n",l.createElement(t.p,null,"Run the CI check to make sure we’re all set to submit a pull request."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"yarn ci-check\n")),"\n",l.createElement(i,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Having issues running the CI check?\n",l.createElement(t.a,{href:"/developing/react-tutorial/step-1#continuous-integration-(ci)-check"},"Step 1"),"\nhas troubleshooting notes that may help.")),"\n",l.createElement(t.h3,null,"Git commit and push"),"\n",l.createElement(t.p,null,"Before we can create a pull request, format your code, then stage and commit all\nof your changes:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'yarn format\ngit add --all && git commit -m "feat(tutorial): complete step 3"\n')),"\n",l.createElement(t.p,null,"Then, push to your repository:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"git push origin v11-next-step-3\n")),"\n",l.createElement(i,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Having issues pushing your changes?\n",l.createElement(t.a,{href:"/developing/react-tutorial/step-1#git-commit-and-push"},"Step 1")," has\ntroubleshooting notes that may help.")),"\n",l.createElement(t.h3,null,"Pull request (PR)"),"\n",l.createElement(t.p,null,"Finally, visit\n",l.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-nextjs"},"carbon-tutorial-nextjs"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",l.createElement(t.code,null,"v11-next-step-3")," into ",l.createElement(t.code,null,"base: v11-next-step-3"),"."),"\n",l.createElement(i,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Expect your tutorial step PRs to be reviewed by the Carbon team but\nnot merged. We’ll close your PR so we can keep the repository’s remote branches\npristine and ready for the next person!")),"\n",l.createElement(i,null,l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," If your PR fails the CircleCI test with the error\n",l.createElement(t.code,null,"Can't make a request in offline mode"),", try running the following command:\n",l.createElement(t.code,null,"rm -rf .yarn-offline-mirror node_modules && yarn cache clean && yarn install"),".\nAdd and commit the changes once this completes, and try pushing again.")))}function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},725441:function(e,t,n){n.d(t,{A:function(){return l}});var a=n(296540);var l=({title:e,...t})=>a.createElement("iframe",Object.assign({loading:"lazy",title:e},t,{className:"Preview-module--preview--3e1df"}))}}]);