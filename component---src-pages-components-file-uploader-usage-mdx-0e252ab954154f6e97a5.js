"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[797867],{550525:function(e,a,n){n.r(a);var t=n(28453),l=n(296540),i=n(815929);function o(e){const a=Object.assign({p:"p",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li",span:"span",ol:"ol",strong:"strong",code:"code",em:"em",h4:"h4"},(0,t.R)(),e.components),{PageDescription:n,AnchorLinks:o,AnchorLink:r,StorybookDemo:c,Row:d,Column:g,Caption:p}=a;return r||s("AnchorLink",!0),o||s("AnchorLinks",!0),p||s("Caption",!0),g||s("Column",!0),n||s("PageDescription",!0),d||s("Row",!0),c||s("StorybookDemo",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(a.p,null,"File uploaders allow users to select one or more files to upload to a specific\nlocation.")),"\n",l.createElement(o,null,l.createElement(r,null,"Live demo"),l.createElement(r,null,"Overview"),l.createElement(r,null,"Formatting"),l.createElement(r,null,"Content"),l.createElement(r,null,"File uploader"),l.createElement(r,null,"Drag and drop file uploader"),l.createElement(r,null,"References"),l.createElement(r,null,"Feedback")),"\n",l.createElement(a.h2,null,"Live demo"),"\n",l.createElement(c,{themeSelector:!0,url:"https://react.carbondesignsystem.com",variants:[{label:"Default",variant:"components-fileuploader--default"},{label:"File Uploader Drop Container",variant:"components-fileuploader--file-uploader-drop-container"}]}),"\n",l.createElement(i.A,{layout:"cards",components:"File uploader"}),"\n",l.createElement(a.h2,null,"Overview"),"\n",l.createElement(a.p,null,"File uploaders allow users to upload content of their own. A file uploader is\ncommonly found in forms, but can also live as a standalone element. There are\ntwo variants of file uploaders—our default file uploader and a drag and drop\nfile uploader."),"\n",l.createElement(a.h3,null,"Variants"),"\n",l.createElement(a.table,null,l.createElement(a.thead,null,l.createElement(a.tr,null,l.createElement(a.th,null,"Variant"),l.createElement(a.th,null,"Way it works"))),l.createElement(a.tbody,null,l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.a,{href:"#file-uploader"},"File uploader")),l.createElement(a.td,null,"Upload one or more files by clicking an action button that prompts a file selection dialog.")),l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.a,{href:"#drag-and-drop-file-uploader"},"Drag and drop file uploader")),l.createElement(a.td,null,"Drag and drop selected files directly into a drop zone area to upload.")))),"\n",l.createElement(a.h3,null,"When to use"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Uploading one or more files."),"\n",l.createElement(a.li,null,"Uploading files by dragging and dropping."),"\n",l.createElement(a.li,null,"Showing the process of uploading."),"\n"),"\n",l.createElement(a.h3,null,"When not to use"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Do not use upload in a modal when multiple files are uploaded, as uploaded\nfiles stack vertically."),"\n"),"\n",l.createElement(a.h2,null,"Formatting"),"\n",l.createElement(a.h3,null,"Anatomy"),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABdUlEQVR42mNgQAL/Gf4zMtABMKJh4sAF127uyybVVv+BmoSFhXn5+PiEBAUF+Um2/j/U1ktOreJXjKvKj8mEcgaYOquZmZlp2djYKIWGhor6+vqKR0ZGigDZEkDMRpTBj0J7OS/Z1BrPZEhjzXYOEHZzcxMKDXXhTwy1EfXx8RHx8IAYbGxszEqUgVdCp/BcNK11BrqYWSTl7zT5nL93hVL/nuGM+/OQN+F/ElhR6H9mbL7DCs4Y13OdMyjXB7FlMv9nqRX/n6uY93+iROb/+dI5vz1B4tu23WL///8/KxQz4w3D+/79ApcsasLqGRiY/n99tejru4dvv7y5d//nx4f3//z4/ObTp8/fP3/+9O3Lly+fv379+v/Dh3erz0mk2l9zbrQEm1Nfz4Tm5VVsF8yqFUHs589f+dx5+LTg7v0nmXcfPct6++FTxqdPn9KgOPXDhw/Zb1+98jzMECV4ybtdECl50QkAw4dp1apVzPgwSA02zQBeQLayB4WEiAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader anatomy"\n        title=""\n        src="/static/76c4e62b484ddfb555c06be97743be8c/3cbba/file-uploader-usage-1.png"\n        srcset="/static/76c4e62b484ddfb555c06be97743be8c/7fc1e/file-uploader-usage-1.png 288w,\n/static/76c4e62b484ddfb555c06be97743be8c/a5df1/file-uploader-usage-1.png 576w,\n/static/76c4e62b484ddfb555c06be97743be8c/3cbba/file-uploader-usage-1.png 1152w,\n/static/76c4e62b484ddfb555c06be97743be8c/92c65/file-uploader-usage-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Heading:")," Text to describe the upload section."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Description:")," Text to help the user make an informed selection."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Button or drop zone label:")," The action to select a file to upload."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Uploaded file:")," A file that has successfully been uploaded."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"x:")," The delete ",l.createElement(a.code,null,"x")," icon will remove the uploaded file."),"\n"),"\n",l.createElement(a.h3,null,"Sizing"),"\n",l.createElement(a.p,null,"The button and uploaded files should be the same height. If the file uploader is\npresent in a form with other inputs, use the same height for the form inputs and\nthe file uploader for consistency."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABNElEQVR42mNgGADAiIZJB6Kiojx8fHxCgoKC/NRwDYOjpaG8i7m2pr25vkKkj72Ir6+TeGBgoBgQS4aGhrKRbKq/f7yAjUeoKIgGGeTj4yPi4eEh6uvrK25vb89CtEG7jcv5/wl58Amk/J+hkPf3sVDK30scsX+f88T/SwUrCP3PTJLLVoWuYv7PoMWmnv8nz7Dy/0Ktkv9TlfL/LzKp+e/3//9+lltv/vG9fv2a982bN3z////nJGjgCZV6vlsMHnz/f7ya//Xdwzef39y79/Pjw3t/fnx+/fnzl69fvgCJr18/fv78+f+HDx82gfQADWbCaeAZ4zTWKwyhbM+evfV88Oh59r0HT1PvPXyR9v79p5QvX74kQXHip0+f0t++fesBNZCR/ikZ5I1Vq1Yx48O4vAoAUuGgYxpFbEIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader sizes"\n        title=""\n        src="/static/6f1001627fb6d5958363195ebbba6a18/3cbba/file-uploader-usage-2.png"\n        srcset="/static/6f1001627fb6d5958363195ebbba6a18/7fc1e/file-uploader-usage-2.png 288w,\n/static/6f1001627fb6d5958363195ebbba6a18/a5df1/file-uploader-usage-2.png 576w,\n/static/6f1001627fb6d5958363195ebbba6a18/3cbba/file-uploader-usage-2.png 1152w,\n/static/6f1001627fb6d5958363195ebbba6a18/92c65/file-uploader-usage-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.table,null,l.createElement(a.thead,null,l.createElement(a.tr,null,l.createElement(a.th,null,"File uploader size"),l.createElement(a.th,null,"Height (px/rem)"),l.createElement(a.th,null,"Use case"))),l.createElement(a.tbody,null,l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.em,null,"Large")),l.createElement(a.td,null,"48/3"),l.createElement(a.td,null,"Choose this size when there is a lot of space to work with.")),l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.em,null,"Medium")),l.createElement(a.td,null,"40/2.5"),l.createElement(a.td,null,"This is our default size and should be used whenever possible.")),l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.em,null,"Small")),l.createElement(a.td,null,"32/2"),l.createElement(a.td,null,"Use when space is constricted or when placing a file uploader in a form that is long and complex.")))),"\n",l.createElement(a.h3,null,"Alignment"),"\n",l.createElement(a.p,null,"Left align the button or drop zone area with the uploaded files. Multiple files\nwill stack vertically."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABSklEQVR42mNgwAbq/zOhYIb/jAzkgv9AzasYQpkZqAmkEr52Smb9PSCY9HcTV/zfw9xxf8LgLicHKKR8b1Er+b9DJvv/aoGU/3v4k/8FkWTgGeM01m0quexXQkPZ/jMwMP54/WzyuzePzr95cf/I53ePjv76/unsp09frnz58uUyEF/89OnT3Q8fPswCB9F/NEv+M9QzXVItULqkVqRxQaNY5xJ3svib569nv3r16i4QX3z16jXIkEsw/Pnz5wtAfOfjx48zsRoIAqBI2G9fz/IfiFcxMDC/ffpiweMnTx6+ff366rdv364DDULGV4GGPQK6cC5OA6EAnjTePHm+6BkQPH/+/CbQe7eBLkLGN4EGPgMauICQgXDw9vHzhqdPn2569OjRCqDmVUBD4BhowQog3vTu3bsaqIGMBNMhKFypmg5BthKDsWkGAJtUFgMuaIQJAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader left alignment"\n        title=""\n        src="/static/9c3694931ea2905b19df508e40e51fdc/3cbba/file-uploader-usage-3.png"\n        srcset="/static/9c3694931ea2905b19df508e40e51fdc/7fc1e/file-uploader-usage-3.png 288w,\n/static/9c3694931ea2905b19df508e40e51fdc/a5df1/file-uploader-usage-3.png 576w,\n/static/9c3694931ea2905b19df508e40e51fdc/3cbba/file-uploader-usage-3.png 1152w,\n/static/9c3694931ea2905b19df508e40e51fdc/92c65/file-uploader-usage-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h3,null,"Placement"),"\n",l.createElement(a.p,null,"When including a button as the action to upload a file, use either a primary or\ntertiary button depending on your use case. If there is already a primary button\npresent on the page, use a tertiary button for the file uploader so it does not\nconflict with the primary action."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABn0lEQVR42pWTP0vDQBjG+1V0UqeOgoObs99AUVAc6yA4qOggCOLqrhVKk7Rg8RModhFnkUJpUdImatImzR+TvI+5S0JirFJfeLiXS+5373v3XAFx+MF4sSAirmwkc1mxKGCCCIKIfHt3j4vLKwjVKkRRhCRJqNVqqFQqaDabKdD1gLMbwr5AOJIIhyJh54pwck1xldHu6ruOV1mFovShaRoMw+AaDoewbTsFjhxg+ZQwv0dYPCQsHBBmtglLxwTPj4CsI9+zQzlwHAemafKRgZL815Yp33J8Po/PBh6eNLi2yStjICaWf6twHIQyc9GBE3QzgGaEJVPAzzUvDhx3W3llF/wV7N+JbjmxhKqqaLfb6Ha76HQ6XCyXZRm6rudapiwgVdY2zBqCIKBer3O7NBoNlMtlFItFlEqlFBiEC5UB8PoRqR9uZn8CAyuB/jRwMvZ6fczNzWJzcyMFsm+GnYrZiHnTcuPLiRdblsWV2MXzPLRaLUxPT2F9bXXyl5IAtYEJ5U0LoaPIe64LRX7BytYu9s5v/wfMv+W8xfw4/wLTCNiwqKoY1AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader button placement"\n        title=""\n        src="/static/b9df3963b69c5f2dac7e612a0ca4647b/3cbba/file-uploader-usage-4.png"\n        srcset="/static/b9df3963b69c5f2dac7e612a0ca4647b/7fc1e/file-uploader-usage-4.png 288w,\n/static/b9df3963b69c5f2dac7e612a0ca4647b/a5df1/file-uploader-usage-4.png 576w,\n/static/b9df3963b69c5f2dac7e612a0ca4647b/3cbba/file-uploader-usage-4.png 1152w,\n/static/b9df3963b69c5f2dac7e612a0ca4647b/92c65/file-uploader-usage-4.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h2,null,"Content"),"\n",l.createElement(a.h3,null,"Main elements"),"\n",l.createElement(a.h4,null,"Heading"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Informs users about the purpose of the upload section. “Upload files” is the\ndefault text that appears with the file uploader."),"\n",l.createElement(a.li,null,"Keep the heading short and concise by limiting it to a single line of text."),"\n"),"\n",l.createElement(a.h4,null,"Description"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Descriptions help communicate to the user what file size or format limitations\nthere are."),"\n"),"\n",l.createElement(a.h4,null,"Button or drop zone label"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Button labels should be concise and describe the action that will be taken\nupon click. “Add files” is the default text that appears with the file\nuploader."),"\n",l.createElement(a.li,null,"Drop zone area label should describe that you can either drag and drop a file\ninto the drop zone or click on the button to upload a file."),"\n"),"\n",l.createElement(a.h4,null,"Uploaded file text"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"The name of the file that has been uploaded."),"\n"),"\n",l.createElement(a.h3,null,"Overflow"),"\n",l.createElement(a.p,null,"Use an ellipsis (…) if the filename extends beyond the width of its parent\nelement. A tooltip should appear on hover to disclose the full length of the\nfilename."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAkklEQVR42u1SywrDIBDMX3vXEPHxG8af85AYL0Z0igsNKT00hebWhWHWYXZc0AE/ruEfiFor9n1Hzpn4iVLKi9bPrbVrG/aBdV0RYyRelgUhBGzbhpQSXdpxaUPvPYQQkFJimiZizjkYY4dmjCFP9/Y6b/oW6Jwjs7WWBrXW1HcopQ5tHEfM8/w58JZH+Qa3f5sHFGtKPjHlVfQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader button placement"\n        title=""\n        src="/static/15e4956e34e5d978bdaffcab7463cad9/3cbba/file-uploader-usage-5.png"\n        srcset="/static/15e4956e34e5d978bdaffcab7463cad9/7fc1e/file-uploader-usage-5.png 288w,\n/static/15e4956e34e5d978bdaffcab7463cad9/a5df1/file-uploader-usage-5.png 576w,\n/static/15e4956e34e5d978bdaffcab7463cad9/3cbba/file-uploader-usage-5.png 1152w,\n/static/15e4956e34e5d978bdaffcab7463cad9/92c65/file-uploader-usage-5.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h3,null,"Further guidance"),"\n",l.createElement(a.p,null,"For further content guidance, see Carbon’s\n",l.createElement(a.a,{href:"https://www.carbondesignsystem.com/guidelines/content/overview"},"content guidelines"),"."),"\n",l.createElement(a.h3,null,"Loading states"),"\n",l.createElement(a.p,null,"A file that is being uploaded has three distinct states—loading, success, and\nuploaded."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 84.375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAABJklEQVR42tWTXUrEMBSFO/qg4LiNvo90SYruw78Hf/bhgwhuwCc34Utta+lv2iRNsC1D48mgQ+l0akUZ8MJHSsm5HO7NMYx/U0qpydd3kiR3juMQYHue5xZFsUSI4jVMRZpm7KGrW1t5nh/GcXyNxqdBEJyjUZuzNONXhPLj0Q1/VbZt73aJomgKd/tD6Dt9Wm15q8sP5j5Oyxgz67q2qqqagQMhxBL9j0ppsbI0R2+ZEPJEKVWu685931dSygVCSFW+i3kmlHrx5POn8PulYMMm5mThnIFVhxQO2RqHcLbdw2TkDFe0RtM0O13w9vb0FofQd/q0m4khknIEB7c6JWEYXiIdbS445zfgZDApnS3fI8McWX7DGaBJGx/NGF7B42ai99f1AYDusukg7QRTAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader loading states"\n        title=""\n        src="/static/02858754e5f83f21705f2e291817e493/3cbba/file-uploader-usage-6.png"\n        srcset="/static/02858754e5f83f21705f2e291817e493/7fc1e/file-uploader-usage-6.png 288w,\n/static/02858754e5f83f21705f2e291817e493/a5df1/file-uploader-usage-6.png 576w,\n/static/02858754e5f83f21705f2e291817e493/3cbba/file-uploader-usage-6.png 1152w,\n/static/02858754e5f83f21705f2e291817e493/92c65/file-uploader-usage-6.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h3,null,"Interactions"),"\n",l.createElement(a.h4,null,"Mouse"),"\n",l.createElement(a.p,null,"Dragging your mouse anywhere within the bounds of the drop zone area with an\nattached file will enable you to drop it inside of the area and begin to upload."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVR42mNgoBNgBGJmKKbYIAYVFRVRDQ0NNSBQTPNJ45qYO5G9vr6eLTc3l31//X6W//X/mf7//89ItIH6+voCSlpacvJaWhJKenpihoaGUhrGxpKq+vrSenp63EQ7D2brm+M3NT+fu+ry7cINm0/nLtm/PnPe8fWZy0B83fHblac2v66+svtx4a4ash5cBjKB6C+3P3j0LP1mk9X3U7tk9k+98pk/dXtXfVd5fuGz2P8PH4T+330h/v/eBzeC3oYZ+Pv+e4eJE/+LMjD8Y2fQ+s/DIPOfE13d/8fvHWDqCRt4/an7//vPPP4/eGL1/+FLm/93n9r+vv7c4fft5w6/bj2z/33tqStIDdFhuWrVKuZHxx5xPnoExccwMUHXUQsAAIMrpSrzRhPJAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader drop zone click target"\n        title=""\n        src="/static/5ad43ce4c5ead7a7932b74b226a22e18/3cbba/file-uploader-usage-7a.png"\n        srcset="/static/5ad43ce4c5ead7a7932b74b226a22e18/7fc1e/file-uploader-usage-7a.png 288w,\n/static/5ad43ce4c5ead7a7932b74b226a22e18/a5df1/file-uploader-usage-7a.png 576w,\n/static/5ad43ce4c5ead7a7932b74b226a22e18/3cbba/file-uploader-usage-7a.png 1152w,\n/static/5ad43ce4c5ead7a7932b74b226a22e18/92c65/file-uploader-usage-7a.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.p,null,"To remove an uploaded file, click the “x” (or delete) icon."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAc0lEQVR42tWSwQqAIBBEzR+XgvqirGP1I6K3dFmkZLtaHqKbnSJceMxlmR2YZazIiTHyN4QQ/JdkVVLvfQ0As7W2v3Qgoofj6HeH02ahTbvZpLchIjbGmEUpJbXWYwjhgUhugLNfXfdq+Hkp6XqumDJf7gRrSYcnMfTi/QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader uploaded file click target"\n        title=""\n        src="/static/0bb6549146ba4fcda9f36ea024918049/3cbba/file-uploader-usage-7b.png"\n        srcset="/static/0bb6549146ba4fcda9f36ea024918049/7fc1e/file-uploader-usage-7b.png 288w,\n/static/0bb6549146ba4fcda9f36ea024918049/a5df1/file-uploader-usage-7b.png 576w,\n/static/0bb6549146ba4fcda9f36ea024918049/3cbba/file-uploader-usage-7b.png 1152w,\n/static/0bb6549146ba4fcda9f36ea024918049/92c65/file-uploader-usage-7b.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h4,null,"Keyboard"),"\n",l.createElement(a.h4,null,"Upload button or drop zone:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"The file uploader button or drop zone can be activated by pressing ",l.createElement(a.code,null,"Space")," or\n",l.createElement(a.code,null,"Enter"),"."),"\n",l.createElement(a.li,null,"After the file selection dialog closes, focus should retain the user’s point\nof regard and return to the element that invoked it."),"\n"),"\n",l.createElement(a.h4,null,"Uploaded file:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Pressing ",l.createElement(a.code,null,"Tab")," shifts focus to the “x” icon."),"\n",l.createElement(a.li,null,"Pressing ",l.createElement(a.code,null,"Space")," or ",l.createElement(a.code,null,"Enter")," while the “x” icon is in focus will delete the\nfile."),"\n"),"\n",l.createElement(a.p,null,"For additional keyboard interactions, see the\n",l.createElement(a.a,{href:"/components/file-uploader/accessibility"},"accessibility tab"),"."),"\n",l.createElement(a.h3,null,"Validation"),"\n",l.createElement(a.p,null,"When a specific file cannot be uploaded successfully it will show an error\nstate. We have an option for a single line or multi-line error state depending\non how descriptive the message needs to be. Error messages should provide clear\nguidance to help the user resolve the error."),"\n",l.createElement(a.p,null,"If the error relates to the file uploader as a whole instead of an individual\nfile, you can alternatively use an inline error notification."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABf0lEQVR42r2SzUsCQRjGzS6dwg6hl+p/C4Kgf6BbB5GWTWiVLtWhm0XQ0Uv3QlFx/ShsxWbX1XXdndnv2lbUaV2VREXt4gM/3uFl3mfgncfnmyOMsd9lcwl+39rlvroxqGI6cyyU3m5Q9YMyABc3ABjC83GjXKaUTO5ayRdOJmcWGnZkOemeseM4XTyl/rft9XqK8jxez1JDvcLcm42mY7Bc2wAsNPgmNBUVmhBBS9Xapq7/aEz1aanhWEIksvsZvjhohKN7jegsTYLYH9xZz0cAALamgQyz7daAOo983qujOzOz3t6m+U8qFs+OGtJL6rCey8WkYonQGIYcUiWNWo3UaZpAr6kYSmePVo6NLba92Ni2/Rebft8rPdPsYtvBHRmtHhuDZZM908KQZbuQq2NFaGFV07BlWa7XMJtfDWF1Q6FQfHin6U45m5V4popElkMCAEhpiciCSNIl2dEqzOo5VM8uA/juMYQTieAkJnUbFCNUsE1ehbjT85215PAXYhq903JgrG0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader invalid states"\n        title=""\n        src="/static/b5ba8b2390d203a35047c33f7b021c55/3cbba/file-uploader-usage-8.png"\n        srcset="/static/b5ba8b2390d203a35047c33f7b021c55/7fc1e/file-uploader-usage-8.png 288w,\n/static/b5ba8b2390d203a35047c33f7b021c55/a5df1/file-uploader-usage-8.png 576w,\n/static/b5ba8b2390d203a35047c33f7b021c55/3cbba/file-uploader-usage-8.png 1152w,\n/static/b5ba8b2390d203a35047c33f7b021c55/92c65/file-uploader-usage-8.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h2,null,"File uploader"),"\n",l.createElement(a.p,null,"A file uploader traditionally uploads one or more files by clicking an action\nbutton that prompts a file selection dialog. Once you have selected one or more\nfiles from the dialog, the selected files will populate below the file uploader\non the page. Your file may temporarily display a loading state before uploading\nhas been successfully completed."),"\n",l.createElement(d,null,l.createElement(g,{colLg:12},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABgklEQVR42rWTO27CQBCGuQM2fgS/1uvX2tggIaTQRFGaKDUIWxwirtLlCDlA8DkItIk4VIjXmsxSmAgo0mDp06xmPb/++S13Otd4lstlWeT5Dut6sVhsZ7PZv5nP5x9FUXzleV62goTQiiUZxHFSO44Dmq6Brustmqa19ZR+v89t2wbLsqpWEF9eEeICIeTbNE2u3KgcX+bY54ZhHKoYFD1Zlnmv1zugKApHA3shiHfvR4fUq1zXFS5qVVUBRYHFCUQRA9EXUErb8wnc931xf3SYjcbVcDgUzRqdgEsITCcpTMcMWOhDEIRIAGLwAjwMQ/A87+/KaoWrgSRJtdTtgmk5kDyU4N+/QJjeQuBTHLgoJoTOBTGXFWYCyF6WpcawnCZ+fG2Cp7eGje6aQRI1STJoUOAMFPoRgnhetYIYbiW+GNZaCNuWBeOUwmToQpbGkGEcaZqCGDwFo+CMMcw7OjpEkRLZIWtce4vrb6gXbggNNphrC7o5A52t8e4Teb7KT/ILbLbdrOe9fh8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader in context example"\n        title=""\n        src="/static/55ee0879c4354a10cad84d3acf883e22/3cbba/file-uploader-usage-9.png"\n        srcset="/static/55ee0879c4354a10cad84d3acf883e22/7fc1e/file-uploader-usage-9.png 288w,\n/static/55ee0879c4354a10cad84d3acf883e22/a5df1/file-uploader-usage-9.png 576w,\n/static/55ee0879c4354a10cad84d3acf883e22/3cbba/file-uploader-usage-9.png 1152w,\n/static/55ee0879c4354a10cad84d3acf883e22/0b124/file-uploader-usage-9.png 1728w,\n/static/55ee0879c4354a10cad84d3acf883e22/0c3f5/file-uploader-usage-9.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h2,null,"Drag and drop file uploader"),"\n",l.createElement(a.p,null,"Drag and drop file uploaders are used to directly upload files by dragging and\ndropping them into a drop zone area. Alternatively, you can open files through a\nfile selection dialog by clicking the text link description inside the drop\nzone."),"\n",l.createElement(a.p,null,"The drop zone component lets users upload files by dragging and dropping the\nfiles into an area on a page, or activating a button. By default, the drag and\ndrop file uploader allows multiple files to be dropped into the drop zone area.\nHowever, we also offer functionality to limit a single file to be uploaded."),"\n",l.createElement(d,null,l.createElement(g,{colLg:12},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABsklEQVR42rWTTUsCURSGpf+gbrMabXAUlFqmCIkfmxaiS6FFixaF0K6l6Ma1LXKgUZDQjRRUzrr6Ly7sw5zGmfsxns6MZInSrhceDpx75r3vPTAu138onU6XUqnUcyaTuU8mk2oikXCIx+MricViajabVXO5nJrP5x8KhcIjUpobttttudfrQafTYc1mExqNS1CUK2i1WksoigLdbheKxSL4fD4QBIFLkgThcFieG1qW1QCUpmkmwj/GGqeUcWwtgbNOrdVq3O/381AoRAKBAIiieDk3HA6Hsq7rMBgM2MvLG7y+azD+NEE3mH3JAqPRyL4byuWykzAYDHLbEPlJSCmVGaX4wZgRQoBSAoxRWCXGmFMrlQq43W7baNkQh2R7aDT+ZBODgEk42C+eTqd/Gnq9XtgWRS74AyD8NvzeocmAmBQsA6EMLFvYXgBf49RqtWq5PR5ra3OdRqVNiEhbjbkhDjgJKSFstvOZViXkfHZer1/A7k4EonsHfGP/HDYSZz8JcahkGOaTrk/uJqbZxz06YJo+hlzA7qFfv3dzq54eH6rZk+uHtSN4dB1OS//yk3wBhyTjDsgNjj0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="File uploader in context example"\n        title=""\n        src="/static/768eb47e75a19b30f090fd310858e9fb/3cbba/file-uploader-usage-10a.png"\n        srcset="/static/768eb47e75a19b30f090fd310858e9fb/7fc1e/file-uploader-usage-10a.png 288w,\n/static/768eb47e75a19b30f090fd310858e9fb/a5df1/file-uploader-usage-10a.png 576w,\n/static/768eb47e75a19b30f090fd310858e9fb/3cbba/file-uploader-usage-10a.png 1152w,\n/static/768eb47e75a19b30f090fd310858e9fb/0b124/file-uploader-usage-10a.png 1728w,\n/static/768eb47e75a19b30f090fd310858e9fb/0c3f5/file-uploader-usage-10a.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(a.h3,null,"Uploading multiple files"),"\n",l.createElement(a.p,null,"When dragging files into the drop zone area, the drop zone border changes in\ncolor and thickness to indicate the area has been activated and is ready for\nfiles. Additionally once the cursor hits the drop zone area it changes with a\npreview of the file you are about to upload. The style of cursor change is\nrendered by the browser you use."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABIElEQVR42mNgGADAiIZJB5KSklx8fHxC/Pz8gmQbguQaBltjY0lLSxMdCwtDFVdXV7EIX1/xSB8fkdBQLwkfHx8ukk31iK7n80sqlfJIrBS1Dy2R8A5Nl3bxS5KyD8yVMYueyMeQ9p+VIfQ/MxFG/Qe7kDf2vzBn3Fdp7pj/YtzJ/8W50v5LcmX9lxBM+88PNIiHQeU/O0gN8QZm/xcWTPqvwxP/X0Mw7qc2X9p/Zf749wIg+f//93P8//9UTqv+vxDRBvIl/xcSj/nPzZD7jx3oIk6G+v9s9vX7WUByE1afdV536MIF394PKmAd//8TjjThpP+8/Jn/BUFehGEZoCUMWv/ZLBteRDq0PFmtVfLSAKy4/j/TQKRlkDeIwZgAAKXwZmymJo7nAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Drag and drop file uploader in context example"\n        title=""\n        src="/static/b40bd78f4f5866b6c2d13ba84d146da2/3cbba/file-uploader-usage-10b.png"\n        srcset="/static/b40bd78f4f5866b6c2d13ba84d146da2/7fc1e/file-uploader-usage-10b.png 288w,\n/static/b40bd78f4f5866b6c2d13ba84d146da2/a5df1/file-uploader-usage-10b.png 576w,\n/static/b40bd78f4f5866b6c2d13ba84d146da2/3cbba/file-uploader-usage-10b.png 1152w,\n/static/b40bd78f4f5866b6c2d13ba84d146da2/92c65/file-uploader-usage-10b.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(p,null,"A file being dragged into the drop zone area."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABRklEQVR42mNgwA0YoZjqgBEHJh6Ii4tz8/DwiPLy8goDuUyUuobB1NRUwtLSUsfOzkXV3T1Q0is0VMLHJ1IkMDBQLDY2VhhE+/j4cBFtanx8PEd2bIBwcqibUFSUjWB9qBbbqtBQ5rS0NFYQrq+vZwsF8ok3sH4/h3LmW1nZpNdSstmvpdSzv0qpFX0SCa2/wrZqVSgz0EAWkKFEG5g7cRu7YvJncYnE/6KiWf8lpLL/C9vX/wca8p/p////4EghyUCQCwjFJFQNfgC1neH58+eKjx8/dnz69Kk1FNu8fPnS5u3bt9ZAbPXq1St7kBpkPbgMBNv68ePHzq9fv/5/8uTJL6Bhfx8+fPgXaODfL1++gPCvv3///geqaYfqYSboQqAmiXfv3ukDXaMNxDpA1+iA6M+fP4OwNkgOpIZhwADIpYQwLs0AJ8XDCeuUXKoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Drag and drop file uploader in context example"\n        title=""\n        src="/static/55848fb5e5dbf545f4c893ff950b05aa/3cbba/file-uploader-usage-10c.png"\n        srcset="/static/55848fb5e5dbf545f4c893ff950b05aa/7fc1e/file-uploader-usage-10c.png 288w,\n/static/55848fb5e5dbf545f4c893ff950b05aa/a5df1/file-uploader-usage-10c.png 576w,\n/static/55848fb5e5dbf545f4c893ff950b05aa/3cbba/file-uploader-usage-10c.png 1152w,\n/static/55848fb5e5dbf545f4c893ff950b05aa/92c65/file-uploader-usage-10c.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(p,null,l.createElement(a.p,null,"A file successfully uploaded when you can upload multiple files.")),"\n",l.createElement(a.h3,null,"Uploading a single file"),"\n",l.createElement(a.p,null,"When using a drag and drop file uploader, if the requirement only allows a\nsingle file to be uploaded, drag the single file into the drop zone area to\nupload it. Once uploaded, the drop zone area will be removed to show that you\nhave successfully uploaded a single file. Click the close icon in the uploaded\nfile to remove it."),"\n",l.createElement(d,null,l.createElement(g,{colLg:8},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA10lEQVR42mNgoBNgRMI0NZw8C4SFhXl5eHhEJSQkRIFcVkpdw2Bubi5ubGysoaenpwhi29raSjo5OYm7uLhIubq6cpNsanl5OX9HR4fMhAkTxLu6uiSqq6tlCwsLpdPT06Xr6+v5/v//z7xq1SpmggYBFbKA6C9fvtQ8ffr0BxA/BuIXjx8/fv769evn379/f/7t27dn79+///np06dakFq8BgMNZALRHz58cHn16lUbEFcDce2LFy9qQTTIEKBl1Z8/f24GYieoHkYGugOQS0HhRADTx2UAEH2GHmwyqZsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Drag and drop file uploader in context example"\n        title=""\n        src="/static/eb9269797cec7a1f88770df0f8f3b73e/3cbba/file-uploader-usage-10d.png"\n        srcset="/static/eb9269797cec7a1f88770df0f8f3b73e/7fc1e/file-uploader-usage-10d.png 288w,\n/static/eb9269797cec7a1f88770df0f8f3b73e/a5df1/file-uploader-usage-10d.png 576w,\n/static/eb9269797cec7a1f88770df0f8f3b73e/3cbba/file-uploader-usage-10d.png 1152w,\n/static/eb9269797cec7a1f88770df0f8f3b73e/92c65/file-uploader-usage-10d.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(p,null,l.createElement(a.p,null,"A file successfully uploaded when you can only upload a single file.")),"\n",l.createElement(a.h2,null,"References"),"\n",l.createElement(a.p,null,"Page Laubheimer,\n",l.createElement(a.a,{href:"https://www.nngroup.com/articles/drag-drop/"},"Drag–and–Drop: How to Design for Ease of Use"),",\n(Nielsen Norman Group, 2020)"),"\n",l.createElement(a.h2,null,"Feedback"),"\n",l.createElement(a.p,null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",l.createElement(a.a,{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}function s(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}a.default=function(e={}){const{wrapper:a}=Object.assign({},(0,t.R)(),e.components);return a?l.createElement(a,e,l.createElement(o,e)):o(e)}}}]);