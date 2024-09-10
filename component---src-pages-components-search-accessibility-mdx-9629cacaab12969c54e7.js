"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[532020],{847467:function(e,a,n){n.r(a);var t=n(28453),i=n(296540),s=n(815929);n(169613);function c(e){const a=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",span:"span",a:"a",ul:"ul",li:"li"},(0,t.R)(),e.components),{PageDescription:n,AnchorLinks:c,AnchorLink:r,Row:o,Column:d,Caption:g}=a;return r||l("AnchorLink",!0),c||l("AnchorLinks",!0),g||l("Caption",!0),d||l("Column",!0),n||l("PageDescription",!0),o||l("Row",!0),i.createElement(i.Fragment,null,i.createElement(n,null,i.createElement(a.p,null,"Carbon’s search component provides the basic input mechanism for conducting a\nsearch. No accessibility annotations are needed for the input, but design\nannotations are needed to make the search messaging and results accessible.")),"\n",i.createElement(c,null,i.createElement(r,null,"What Carbon provides"),i.createElement(r,null,"Design recommendations"),i.createElement(r,null,"Development considerations")),"\n",i.createElement(a.h2,null,"What Carbon provides"),"\n",i.createElement(a.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via keyboard. Carbon also incorporates other\naccessibility considerations, some of which are described below."),"\n",i.createElement(a.h3,null,"Keyboard interaction"),"\n",i.createElement(a.p,null,"The search component is in the tab order, and users can type directly into the\nsearch input on focus. Users press ",i.createElement(a.code,null,"Enter")," to submit their text as a search\nterm, or they can press ",i.createElement(a.code,null,"Esc")," to clear it. Once users start typing, a Cancel\nicon (‘x’) will appear, which becomes the next tab stop and provides another way\nto clear the input field via click, ",i.createElement(a.code,null,"Space")," or ",i.createElement(a.code,null,"Enter")," keys."),"\n",i.createElement(o,null,i.createElement(d,{colLg:8},i.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3klEQVR42mNgGJLg////jKRgTAMYQIL1TIHqE0tcxTt6KHaRvX09iz1DPcf8rv0ei3oORt+5/swYiE0IYOObVx+bXz33WBXqLIRL60NXsTEwGHM9efRi7cfPH/69evn6x6tXb36/evX698sXr34D+WD63dv3vz+8/wjDP379+P3/xbO3m6DBxAw2LM14JmuoTC8niH3p1EOl62cfmty8/Fj/5vn7BnB85QkY30fC924+1r9z6aHxTaAeqLsgLrQAG4YlYMkFFlDXkRO7WGMZ5N3/1HQhKIZ9JOu5qOVtACSN5fNk0dZfAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of search keyboard navigation"\n        title=""\n        src="/static/a11454633bff35e6aab92a1540ca99d5/3cbba/search-accessibility-1.png"\n        srcset="/static/a11454633bff35e6aab92a1540ca99d5/7fc1e/search-accessibility-1.png 288w,\n/static/a11454633bff35e6aab92a1540ca99d5/a5df1/search-accessibility-1.png 576w,\n/static/a11454633bff35e6aab92a1540ca99d5/3cbba/search-accessibility-1.png 1152w,\n/static/a11454633bff35e6aab92a1540ca99d5/92c65/search-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(g,null,i.createElement(a.p,null,"The search input is in the tab order just like any other input.")))),"\n",i.createElement(o,null,i.createElement(d,{colLg:8},i.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABbklEQVR42mNgIAHUM9QzhTKsYgZhIJcRWQ5JnDjgoTKR3V5+PgeIBuFQmV5OmKEgtr18PVgOq+b///8zwjCIH28PMmgbiuI045msPsYzuUItejmNGWayYjOGMVB9YruTaEcZVADJS6FsOAIBKJ7LjtNbU2p2hizoORR5+/ZTozvXn5k8vPPa+OqZe+bnjt62enjnmTFIDIaf3H9luGfDeccNC08Zgo2ur2dC8SKI/vTp04KPn9/9unf3wffXr978+vTx868P7z/+xoF/vnr+/v+L56/XgPSuWoUlQhZ2HbBcMfVowOF9Z43PnrxkcunsHeP7V54YYMMv7r7QXT3tpM+M2n3OLoId/OGGUzWRIgXiwiDNCR2e8t2rgEwuIOYGYg5cyQdEB6r1F3gpdU7z0+oICdWetNVZrF0JxcBQrYl13go980RFRXlUVFT47O3rWdBjHTn2ZWRkOPn5+QUlJSW5cCVdJpISJwmAkVy1ANkGzM9s/HrcAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="illustration showing that after a user begins typing in a search field, an X button appears on the right side of the input that can be tabbed to and activated with Space or Enter"\n        title=""\n        src="/static/5e08223bcb2609a879ae07ee2aeea2da/3cbba/search-accessibility-2.png"\n        srcset="/static/5e08223bcb2609a879ae07ee2aeea2da/7fc1e/search-accessibility-2.png 288w,\n/static/5e08223bcb2609a879ae07ee2aeea2da/a5df1/search-accessibility-2.png 576w,\n/static/5e08223bcb2609a879ae07ee2aeea2da/3cbba/search-accessibility-2.png 1152w,\n/static/5e08223bcb2609a879ae07ee2aeea2da/92c65/search-accessibility-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(g,null,i.createElement(a.p,null,"The user can clear the input by pressing Esc or activating the X button that\nappears inside the input.")))),"\n",i.createElement(a.p,null,"Variations of the search component use a non-persistent text input that is\nhidden behind a magnifying glass icon. In one variation, the user activates the\nicon-only button to reveal and put focus into the search input. In another\nvariation, as the icon receives focus it exposes the input and the focus is\nimmediately placed into the search input. Once in the input, the interaction,\ndescribed above, is the same for all variations."),"\n",i.createElement(o,null,i.createElement(d,{colLg:8},i.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABVklEQVR42mNggABGEBFvPts4SLvfHchkqmeoZwKJhzKEMsPkiQahDKuYQ0NDma34msMtuBua6+vBhpEP9tfvZwHRr168Kvr//1emLU+7XZDmlNIAjR7jQPUJjd5Knapgi0NXMf///58RHWMYCBO8fvFB+6tXb6pNOSosPdTqyq2lMyz81foLLAWa5aEqSfP6xtnHxfesvqT3//93xf///8m8evJKDWiZ2KtXH9Uunnmke+3CIx0Yvn31ufaNS4/1zh69J49hUH39fg4Q/ej+80Vfv3z9f//ug5+vX739++HDpz/v3378//79xz9A9m9k/PHj5x/fv//8//jxy00gvatWrWKGRIhWPVuoTC8niH3u+B3Vq1cf2p45cc3i2rUnlrfx4FvXHlvcuPLQ5tKZ+xrIwcZgATGMkYFaAGogPHJASYZUjGEgNBFTB4AStY9kPRc0R1AMABHh4GT17uxaAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="illustration showing the search icon being activated via Enter or Space"\n        title=""\n        src="/static/da31485e2342994fd9a59caef807cc6b/3cbba/search-accessibility-3.png"\n        srcset="/static/da31485e2342994fd9a59caef807cc6b/7fc1e/search-accessibility-3.png 288w,\n/static/da31485e2342994fd9a59caef807cc6b/a5df1/search-accessibility-3.png 576w,\n/static/da31485e2342994fd9a59caef807cc6b/3cbba/search-accessibility-3.png 1152w,\n/static/da31485e2342994fd9a59caef807cc6b/92c65/search-accessibility-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(g,null,i.createElement(a.p,null,"A variation where the search input is revealed by activating the magnifying\nglass icon.")))),"\n",i.createElement(o,null,i.createElement(d,{colLg:8},i.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABHElEQVR42mNggABGEBFvPts4SLvfnYFSEMqwijk0NJTZiq853IK7obm+vp6JIgP31+9nAdFv3rwp+PjxYzGIbWFhwamiosIOwgwM9kD5/4y4MRr4/x8ieOfKo9an9583g9ji4uLcQIoTiDmAmIVUR4INLO5+Lta75IXursv/NbdA8YZz/7VWn/yvveLoTx10vOz4T72Ze78rY/MyyBUMF269m/31++//T1+8/fHy9cc/r99+BuM37778xoJ/fP3+5//dp9+OI/uSIVSrni1UphfkNYblQNu2n/lku/HER4vtZ79Z4sO7zny12Hbmm82qYz91UVxnATGMkYFaAGogPHLq6/8zkYoxDKxnoDDdoSdqH8l6rlCGUGZqGAgAo2jLDnIDL9QAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="putting focus on the magnifying glass causes the search input to be revealed and given focus"\n        title=""\n        src="/static/8c3ffec6754e9ca07dea5023c4629641/3cbba/search-accessibility-4.png"\n        srcset="/static/8c3ffec6754e9ca07dea5023c4629641/7fc1e/search-accessibility-4.png 288w,\n/static/8c3ffec6754e9ca07dea5023c4629641/a5df1/search-accessibility-4.png 576w,\n/static/8c3ffec6754e9ca07dea5023c4629641/3cbba/search-accessibility-4.png 1152w,\n/static/8c3ffec6754e9ca07dea5023c4629641/92c65/search-accessibility-4.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(g,null,i.createElement(a.p,null,"A variation where the search input is revealed when the magnifying glass\nreceives focus.")))),"\n",i.createElement(a.h3,null,"Role and label"),"\n",i.createElement(a.p,null,"Carbon assigns the entire search interaction a ",i.createElement(a.code,null,"role")," of “search”. It also\nprovides non-visible labels for the search input and icon (“search”), and for\nthe cancel icon (“clear search input”)."),"\n",i.createElement(o,null,i.createElement(d,{colLg:8},i.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2UlEQVR42mNgoBeoZ6hnAtFB6hMdg7UnzQvVmbTIX63HGVkOL/j//z/To0f/Of/v/88CZLOuWnWFDUgzxptPV4jQn+QdYTjNL8ZsliJIrL5+FdvMmWdYQXg/UD26WYwwxpOHL7a8fvn6/+2bd769fvXm57s37399+vjp8/cfX1//+PntFYj99vW7X0Dxn+/ffvj26cPn/0A926AOYsRw5a0rD0Ie3n1cdfv63eInD56VgPCje89LYRgmBsb3nxU/ffi88t6NJ6E4DaQ6AIUjORjFkPv373Pgw0ANoMhh+ffvFjuy+L9//9hB4lDMBhMH+x2Gr1y5wnbr1i12EN6/fz/IMNaq6MWSafYzNWaW7+YH8WHiM8tX8ac4z1KLsZitkmU/hYdgOIYyrGIG0W6SXakesj3bHAU7tEF8e4Z6cDKxF2zV8ZTvWemv2r85UKvPCWv6fHLvhd/jhy/y7956mPnsyeus1y8/ZD599Cb34f1XBS+fvctCw5k3Lz8puXT+fiCG62CcZ49fLXn+/OWv+/cevnr39v3bj+8/vf3w4fObjx+/vAaxUfCHz6+ePHz14+nDl8thEYqZ3UJXsdWnzeTqLTzGWRi6igh8jBOkh27lAUqMk4KRDQEAqC3OJq0F1EEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="role and input named &quot;search&quot;, and button named &#39;clear search input&#39;"\n        title=""\n        src="/static/9d50af966e64fd6d97b15dc39a9b3de7/3cbba/search-accessibility-5.png"\n        srcset="/static/9d50af966e64fd6d97b15dc39a9b3de7/7fc1e/search-accessibility-5.png 288w,\n/static/9d50af966e64fd6d97b15dc39a9b3de7/a5df1/search-accessibility-5.png 576w,\n/static/9d50af966e64fd6d97b15dc39a9b3de7/3cbba/search-accessibility-5.png 1152w,\n/static/9d50af966e64fd6d97b15dc39a9b3de7/92c65/search-accessibility-5.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(g,null,i.createElement(a.p,null,"The search region, input name, and clear button are all incorporated by\nCarbon.")))),"\n",i.createElement(a.h2,null,"Design recommendations"),"\n",i.createElement(a.p,null,"Carbon provides a\n",i.createElement(a.a,{href:"https://carbondesignsystem.com/patterns/search-pattern/"},"search pattern")," that\noutlines three search types: basic, active, and focused. Each of these types\nstarts with the basic search input mechanism provided by Carbon’s search\ncomponent. However, each search type displays suggestions or results in\ndifferent ways, which all have accessibility considerations. There are three\nbroad areas that designers need to consider and annotate for accessibility:"),"\n",i.createElement(a.ul,null,"\n",i.createElement(a.li,null,"Search suggestions and typeaheads"),"\n",i.createElement(a.li,null,"Search outcomes and status (e.g., “25 results found”, “no results found”)"),"\n",i.createElement(a.li,null,"Results navigation"),"\n"),"\n",i.createElement(a.p,null,"Future updates to this guidance will offer specific documentation on these\naccessibility needs."),"\n",i.createElement(a.h2,null,"Development considerations"),"\n",i.createElement(a.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(a.ul,null,"\n",i.createElement(a.li,null,"The div containing the search function is given a ",i.createElement(a.code,null,'role="button"'),"."),"\n",i.createElement(a.li,null,"The hidden label for the input has a default value of “search”."),"\n",i.createElement(a.li,null,"The input is ",i.createElement(a.code,null,'type="text"')," with a ",i.createElement(a.code,null,'role="searchbox"'),"; using ",i.createElement(a.code,null,'type="search"')," is\nequivalent and also valid."),"\n",i.createElement(a.li,null,"See the\n",i.createElement(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search"},"Mozilla search input documentation"),"\nfor more considerations."),"\n"),"\n",i.createElement(s.A,{layout:"table",components:["Search","Fluid search"]}))}function l(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}a.default=function(e={}){const{wrapper:a}=Object.assign({},(0,t.R)(),e.components);return a?i.createElement(a,e,i.createElement(c,e)):c(e)}}}]);