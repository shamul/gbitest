(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),r=a(6),s=a.n(r),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(160);var l=i.a.createContext({}),d=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,a){"use strict";a(94),a(91),a(92),a(38),a(154),a(161),a(34);var n=a(8);t.__esModule=!0,t.stringToArray=t.toKebabCase=t.toCamelCase=t.convertProps=t.stripRemainingProps=t.isString=void 0;var i=n(a(74)),r=["resolutions","sizes","fixed","fluid","fadeIn","title","id","alt","className","critical","style","backgroundColor","onLoad","onError","onStartLoad","Tag","classId"],s=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=s;t.stripRemainingProps=function(e){var t=(0,i.default)({},e);return r.forEach(function(e){Object.prototype.hasOwnProperty.call(t,e)&&delete t[e]}),t};t.convertProps=function(e){var t=(0,i.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t};t.toCamelCase=function(e){return s(e)&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s|\W+/g,"")};t.toKebabCase=function(e){return s(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!s(e)&&(e.includes(t)?e.split(t):[e])}},156:function(e,t,a){"use strict";var n=a(209),i=a(0),r=a.n(i),s=a(6),o=a.n(s),c=a(210),l=a.n(c);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,c=n.data.site,d=t||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},159:function(e,t,a){"use strict";var n=a(166),i=a(0),r=a.n(i),s=a(6),o=a.n(s),c=a(151),l=(a(168),a(169)),d=a(164),u=a(153),f=a.n(u),g=a(173),p=a.n(g),m=a(198),h=a(42),b={attributes:!0,childList:!0,subtree:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0},y=function(e){return e},v=function(e,t,a){void 0===e&&(e=y),void 0===t&&(t=function(){}),void 0===a&&(a=b);var n=Object(i.useMemo)(function(){return"undefined"!=typeof window&&new window.MutationObserver(e)},[e]),r=Object(i.useState)(null),s=r[0],o=r[1],c=Object(i.useCallback)(function(e){null!==e&&o(e)},[s]);return Object(i.useEffect)(function(){if(s){var e=Object(h.findDOMNode)(s);return n.observe(e,a),function(){var e=n.takeRecords();n.disconnect(),t(e)}}},[s]),[c,s]},w=(Object(m.a)(),d.b.div.withConfig({displayName:"components__StyledSymetryWrapper",componentId:"sc-1efyw5b-0"})(["width:50vw;height:100%;overflow:hidden;"])),S=Object(d.b)(function(e){var t=e.className,a=e.children,n=l.data.desktop,i=v(function(e,t){e&&e.forEach(function(e){e.previousSibling instanceof HTMLImageElement&&console.log("PREV-"+e.previousSibling.nodeName,e.previousSibling.currentSrc),"childList"===e.type&&e.addedNodes[0]instanceof HTMLPictureElement&&console.log(e.addedNodes[0].nodeName,e),o&&"main-img"===o.props.id&&console.log(e.target.nodeName,o.state),e.target instanceof HTMLImageElement&&console.log(e.target.nodeName,e.target.currentSrc)})},function(e){return console.log(e)}),s=i[0],o=i[1],c=n.childImageSharp.fluid;return r.a.createElement(I,null,r.a.createElement(w,null,r.a.createElement(p.a,{Tag:"section",className:t,fluid:c,backgroundColor:"#0f0",title:"gbitest",fadeIn:"soft",id:"gbitest",role:"img","aria-label":"gbitest",onLoad:function(){return console.log("onLoad")},onError:function(){return console.log("onError")},onStartLoad:function(e){var t=e.wasCached;return console.log("onStartLoad - wasCached:",t)}},a)),r.a.createElement(w,null,r.a.createElement(f.a,{ref:s,className:"main-img",id:"main-img",fluid:c,backgroundColor:"#0f0",objectFit:"cover",objectPosition:"50% 50%",style:{width:"100vw",height:"auto"}})))}).withConfig({displayName:"components__StyledBackgroundSection",componentId:"sc-1efyw5b-1"})(["width:100vw;"]),I=d.b.div.withConfig({displayName:"components__StyledWrapper",componentId:"sc-1efyw5b-2"})(["width:100%;height:100vh;display:flex;overflow:hidden;"]),k=S,x=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"#00446f",position:"fixed",top:0,left:0,zIndex:1,width:"100vw"}},r.a.createElement("div",{style:{margin:"0 auto",padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0,textAlign:"center"}},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};x.propTypes={siteTitle:o.a.string},x.defaultProps={siteTitle:""};var C=x,O=function(){return r.a.createElement("footer",{style:{position:"fixed",bottom:0,left:0,background:"#00446f",zIndex:1,width:"100vw",padding:"1rem",textAlign:"center",color:"white"}},"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," & ",r.a.createElement("a",{href:"https://github.com/timhagn/gatsby-background-image"},"gatsby-background-image"))};O.propTypes={siteTitle:o.a.string},O.defaultProps={siteTitle:""};var E=O,_=function(e){var t=e.children;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(k,null,r.a.createElement("div",{style:{height:"100vh",width:"100%",display:"flex",placeContent:"start"}},r.a.createElement("div",{style:{placeSelf:"center",textAlign:"center",color:"#ccc",height:"50vh",maxWidth:960,padding:"0px 1.0875rem 1.45rem",marginTop:"-5rem"}},r.a.createElement("main",null,t)))),r.a.createElement(E,null))},data:n})};_.propTypes={children:o.a.node.isRequired};t.a=_},160:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},166:function(e){e.exports={data:{site:{siteMetadata:{title:"gatsby-background-image Test Site"}}}}},167:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),i=a.n(n),r=a(6),s=a.n(r),o=a(69),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},169:function(e){e.exports={data:{desktop:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3e%3cpath d='M0 200v200h81v-8c0-12 2-17 5-11l2 3 3 2c2 5 4 0 3-5-2-5-3-6-4-3-2 1-2 1-2-2s0-4 2-3c2 0 4-3 4-5l-1-9c-1-7-1-7 1-7s2-1 2-4l1-4 1 4 1 4 3 4 1 4 1 4 1 4v-32l-3-2-2-1-2-2-2-1v-3l15-6c2 0 1-4-1-4l-1-2-2-4-2-6c-1-4-3-6-3-2l-1 1-2 2v3l-1-3-2-2c-3 0-3-1-3-5-1-4 2-7 3-4h4l-1-1-1-4-1-2-1-2-1-3-1-2c0-2 1-3 2-3l3-1h7l2-2-3-1c-2-1-2-1-1-2 2 0 3-8 1-8l-1 1c0 2-8 9-9 9s-1-3 1-11l2-8c0-2 1-3 2-3l1-3 2-5v-8c-3 0-4 2-4 6s0 4-1 2l-2-1c-1 1-5-1-5-3s3-8 5-8c1 0 2-1 2-7l2-7c1 0 4 3 4 5 1 1 1-1 1-4l-2-6v-1l1-2h-8l1-1 1-3 1-6v2c0 4 2 4 4 1l2-3v-6l1-10v-8l-4-1-6-1c-3 0-3-1-3-2 1-1 2-2 6-1h6l-4-2-3-1 1-8c1-10 0-14-1-18l-2-8c0-6 0-6-4-6h-4v-8c0-7 0-8 2-8s5-7 4-9h-4l-1 1-1-1-1-2-2-2-3-3-1-3-1-6 1-3c1 0 3-1 3-3 1-4 3-4 5 0 3 5 7 11 9 11s3-3 1-4l-1-13c0-12 0-17-2-14-1 1-1 0-2-2-2-3-2-3 0-3v-2c-2-3-4-4-4-1l-1 3-1-4 1-4 1-2c-1-1 0-3 1-4 3-2 3-9-1-11h-2l-2 1c-2 0-2-1-2-4l-1-4v-3c2-3 1-5-2-8-2-3-3-4-3-8V0H0v200M327 4l-1 4c-1 0-2 5-2 12v12l4 4c4 4 4 4 4 10l1 12c0 6 0 6-2 6-3 0-6 4-4 6v2l-1 6c0 4-1 6-2 6-2 0-3 2-3 11 0 8 0 9 2 10l3 1c2 0 4 5 4 10l-1 4v2c3 2-1 6-6 6-2 0-2 1-2 5 0 7 1 8 4 5l3-4 4-4 1 7-1 7-2 16c0 13-1 16-2 16-2-1-2 0 0 5 2 6 3 27 1 27l-1-12-1-12v24h-4a3829 3829 0 0 1 5 4l1-1c2-1 2-1 2 2 0 9-6 20-7 13 0-4-3-2-3 3s2 9 3 5l2-2 1 28c0 25 0 27 1 12l1-13v33h-1l-2-1-4-1c-4-4-5-3-6 3 0 5 2 11 4 11l1 5-1 5h4l4-1 1-1 1 8 1 12c2 4 1 9-1 10-2 0-3 3-2 7l-1 3v3l1 3 1 2 1 4c0 5-2 5-2 0 0-4 0-4-1 2v24l1 6c0-5 2-5 2 0v4h70V0h-69l-1 3-1 4-1-4-1-3v4M114 348l-1 4-1 4-1 4-1 4-1 4c-2 0-3 2-2 3h2l2-2 1-2 1-2c4 2 5-1 5-8 0-10-4-18-4-9' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/41d69c74142edcc878ff7122603d84d2/95388/seamless-bg-desktop.jpg",srcSet:"/static/41d69c74142edcc878ff7122603d84d2/ac6ef/seamless-bg-desktop.jpg 1040w,\n/static/41d69c74142edcc878ff7122603d84d2/5d93e/seamless-bg-desktop.jpg 2080w,\n/static/41d69c74142edcc878ff7122603d84d2/95388/seamless-bg-desktop.jpg 4160w,\n/static/41d69c74142edcc878ff7122603d84d2/bd4cc/seamless-bg-desktop.jpg 4167w",srcWebp:"/static/41d69c74142edcc878ff7122603d84d2/defa2/seamless-bg-desktop.webp",srcSetWebp:"/static/41d69c74142edcc878ff7122603d84d2/17cca/seamless-bg-desktop.webp 1040w,\n/static/41d69c74142edcc878ff7122603d84d2/93223/seamless-bg-desktop.webp 2080w,\n/static/41d69c74142edcc878ff7122603d84d2/defa2/seamless-bg-desktop.webp 4160w,\n/static/41d69c74142edcc878ff7122603d84d2/a0216/seamless-bg-desktop.webp 4167w",sizes:"(max-width: 4160px) 100vw, 4160px"}}}}}},173:function(e,t,a){"use strict";a(161),a(34),a(38),a(154);var n=a(8);t.__esModule=!0,t.default=void 0;var i=n(a(74)),r=n(a(84)),s=n(a(39)),o=n(a(7)),c=n(a(43)),l=n(a(176)),d=n(a(179)),u=n(a(182)),f=a(152),g=a(189),p=a(190),m=a(191),h="/media/hagn/horsedump/Projects/own_n_oss/gatsby-background-image/src/index.js",b=function(e){function t(t){var a;a=e.call(this,t)||this,(0,c.default)((0,s.default)(a),"isMounted",!1),(0,c.default)((0,s.default)(a),"cleanUpListeners",void 0),(0,c.default)((0,s.default)(a),"intersectionListener",function(){var e=(0,g.inImageCache)(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.currentSrc})})});var n=!0,i=!1,r=t.fadeIn,o=(0,g.inImageCache)(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var l=!(t.critical&&!r);return a.state={isVisible:n,imgLoaded:!1,IOSupported:i,fadeIn:r,hasNoScript:l,seenBefore:o},a.backgroundStyles=(0,p.presetBackgroundStyles)((0,u.default)(a.props.className)),a.bgImage="",a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a.imageRef=(0,g.createPictureRef)(a.props,a.handleImageLoaded),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.isMounted=!0,this.backgroundStyles=(0,p.presetBackgroundStyles)((0,u.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,g.inImageCache)(this.props)}),this.props.critical){var e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}},a.componentDidUpdate=function(e){var t=this;if((0,g.imagePropsChanged)(this.props,e)){var a=(0,g.inImageCache)(this.props);this.setState({isVisible:a||this.props.critical},function(){t.bgImage=t.imageRef&&t.imageRef.currentSrc||t.imageRef&&t.imageRef.src||"",t.imageRef=(0,g.createPictureRef)(t.props,t.handleImageLoaded)})}},a.componentWillUnmount=function(){this.isMounted=!1,this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){this.state.IOSupported&&e&&(this.cleanUpListeners=(0,m.listenToIntersections)(e,this.intersectionListener))},a.handleImageLoaded=function(){this.isMounted&&((0,g.activateCacheForImage)(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad())},a.render=function(){var e=(0,p.fixOpacity)((0,f.convertProps)(this.props)),t=e.title,a=e.alt,n=e.className,s=e.style,o=void 0===s?{}:s,c=e.fluid,d=e.fixed,u=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,y=e.children,v=e.classId,w=void 0===v?n?"":Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):v,S=(0,r.default)(e,["title","alt","className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children","classId"]),I=(0,f.stripRemainingProps)(S),k="boolean"==typeof u?"lightgray":void 0!==u?u:"",x=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,C=this.state.imgLoaded?m+"ms":"0.25s";if(c){var O=c,E=(0,g.switchImageSettings)({image:O,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=E.bgImage?E.bgImage:E.lastImage;var _=(0,p.createPseudoStyles)((0,i.default)({classId:w,className:n,transitionDelay:C,bgColor:k,backgroundStyles:this.backgroundStyles,style:o,fadeIn:x},E));return l.default.createElement(b,(0,i.default)({className:""+(n||"")+(w&&"gatsby-background-image-"+w)+" gatsby-image-wrapper",style:(0,i.default)({position:"relative",overflow:"hidden",opacity:.99},o,this.backgroundStyles),title:t,ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},I,{__source:{fileName:h,lineNumber:243},__self:this}),l.default.createElement("style",{dangerouslySetInnerHTML:{__html:_},__source:{fileName:h,lineNumber:259},__self:this}),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:(0,g.noscriptImg)((0,i.default)({alt:a,title:t},O))},__source:{fileName:h,lineNumber:266},__self:this}),y)}if(d){var R=d,T=(0,i.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height,opacity:.99},o);"inherit"===o.display&&delete T.display;var L=(0,g.switchImageSettings)({image:R,bgImage:this.bgImage,imageRef:this.imageRef,isVisible:this.state.isVisible});this.bgImage=L.bgImage?L.bgImage:L.lastImage;var N=(0,p.createPseudoStyles)((0,i.default)({classId:w,className:n,transitionDelay:C,bgColor:k,backgroundStyles:this.backgroundStyles,style:o,fadeIn:x},L));return l.default.createElement(b,(0,i.default)({className:""+(n||"")+(w&&"gatsby-background-image-"+w)+" gatsby-image-wrapper",style:(0,i.default)({},T,this.backgroundStyles),title:t,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},I,{__source:{fileName:h,lineNumber:316},__self:this}),l.default.createElement("style",{dangerouslySetInnerHTML:{__html:N},__source:{fileName:h,lineNumber:329},__self:this}),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:(0,g.noscriptImg)((0,i.default)({alt:a,title:t,width:R.width,height:R.height},R))},__source:{fileName:h,lineNumber:336},__self:this}),y)}return null},t}(l.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",title:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:y,sizes:v,fixed:y,fluid:v,fadeIn:d.default.oneOfType([d.default.string,d.default.bool]),durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.oneOfType([d.default.object,d.default.array]),backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,classId:d.default.string};var w=b;t.default=w},182:function(e,t,a){"use strict";a(35),a(162),a(75),a(54),a(34),a(184),a(186),a(83),a(187),a(93),t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.rulesForCssText=t.getStyle=void 0;var n=a(152),i=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],a=0;a<t.length;a++){var n=void 0;try{n=void 0!==t[a].rules?t[a].rules:void 0!==t[a].cssRules?t[a].cssRules:""}catch(s){}if(n){var i=Array.from(n).find(function(t){return t.selectorText===e});if(i){var r=i.cssText?i.cssText:i.style.cssText;return-1===r.indexOf(i.selectorText)?i.selectorText+"{"+r+"}":r}}}};t.getStyle=i;var r=function(e){if("undefined"!=typeof document&&e){var t=document.implementation.createHTMLDocument(""),a=document.createElement("style");return a.textContent=e,t.body.appendChild(a),a.sheet.cssRules}return{}};t.rulesForCssText=r;var s=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(function(a){t[(0,n.toCamelCase)(a)]=e[0].style[a]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=s;var o=function(e){if((0,n.isString)(e)){var t=i("."+e),a=r(t);if(a.length>0&&void 0!==a[0].style)return Object.keys(s(a)).filter(function(e){return 0===e.indexOf("background")&&""!==a[0].style[e]}).reduce(function(e,t){return e[t]=a[0].style[t],e},{})}return{}};t.getBackgroundStylesForSingleClass=o;var c=function(e){if("undefined"!=typeof window){var t=(0,n.stringToArray)(e);if(t instanceof Array){var a=[];return t.forEach(function(e){return a.push(o(e))}),Object.assign.apply(Object,a)}return o(e)}return{}};t.default=c},189:function(e,t,a){"use strict";a(154),t.__esModule=!0,t.imagePropsChanged=t.switchImageSettings=t.noscriptImg=t.createPictureRef=t.resetImageCache=t.activateCacheForImage=t.inImageCache=void 0;var n=a(152),i=Object.create({});t.inImageCache=function(e){var t=(0,n.convertProps)(e),a=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;return i[a]||!1};t.activateCacheForImage=function(e){var t=(0,n.convertProps)(e),a=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;a&&(i[a]=!0)};t.resetImageCache=function(){for(var e in i)delete i[e]};t.createPictureRef=function(e,t){var a=(0,n.convertProps)(e);if("undefined"!=typeof window&&(void 0!==a.fluid||void 0!==a.fixed)){var i=e.fluid?e.fluid:e.fixed,r=new Image,s=document.createElement("picture");if(i.srcSetWebp){var o=document.createElement("source");o.type="image/webp",o.srcset=i.srcSetWebp,o.sizes=i.sizes,s.appendChild(o)}return s.appendChild(r),r.onload=function(){return t()},r.complete||"function"!=typeof a.onLoad||r.addEventListener("load",a.onLoad),"function"==typeof a.onError&&r.addEventListener("error",a.onError),a.crossOrigin&&(r.crossOrigin=a.crossOrigin),r.srcset=i.srcSet?i.srcSet:"",r.src=i.src?i.src:"",r}return null};t.noscriptImg=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+n+"<img "+o+c+a+i+t+s+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;z-index:-1;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'};t.switchImageSettings=function(e){var t=e.image,a=e.bgImage,n=e.imageRef,i=e.state,r=!t.base64,s="";t.tracedSVG&&(s='"'+t.tracedSVG+'"'),t.base64&&!t.tracedSVG&&(s=t.base64),i.imgLoaded&&i.isVisible&&(s=n&&n.currentSrc||t.src);var o=a;return{bgImage:a=""===a?s:"",lastImage:o,nextImage:s=s===a?"":s,afterOpacity:""!==s||r&&i.isVisible&&i.imgLoaded?0:1,noBase64:r}};t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src}},190:function(e,t,a){"use strict";a(75),a(54),a(34),a(162);var n=a(8);t.__esModule=!0,t.createPseudoStyles=t.presetBackgroundStyles=t.fixOpacity=t.vendorPrefixBackgroundStyles=t.kebabifyBackgroundStyles=t.createPseudoElement=void 0;var i=n(a(74)),r=a(152),s=function(e,t,a){void 0===t&&(t=""),void 0===a&&(a=":before");var n=(0,r.stringToArray)(e),i="";return n instanceof Array&&(i="."+n.join(".")+a),""!==t&&(i+=(i&&",\n")+".gatsby-background-image-"+t+a),i};t.createPseudoElement=s;var o=function(e){return(0,r.isString)(e)?e:e instanceof Object?Object.keys(e).filter(function(t){return 0===t.indexOf("background")&&""!==e[t]}).reduce(function(t,a){return""+t+(0,r.toKebabCase)(a)+": "+e[a]+";\n"},""):""};t.kebabifyBackgroundStyles=o;var c=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition-delay: "+e+";\n            transition: opacity 0.5s;":"transition: none;"};t.vendorPrefixBackgroundStyles=c;t.fixOpacity=function(e){var t=(0,i.default)({},e);try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(a){}return t};t.presetBackgroundStyles=function(e){return(0,i.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},e)};t.createPseudoStyles=function(e){var t=e.classId,a=e.className,n=e.transitionDelay,r=e.bgImage,l=e.lastImage,d=e.nextImage,u=e.afterOpacity,f=e.bgColor,g=e.fadeIn,p=e.backgroundStyles,m=e.style,h=s(a,t),b=s(a,t,":after");return"\n          "+h+",\n          "+b+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+c(n,g)+"\n            "+o((0,i.default)({},p,m))+"\n          }\n          "+h+" {\n            z-index: -100;\n            "+(!u&&""!==l||u&&!r&&!d&&""!==l?"background-image: url("+l+");":"")+"\n            "+(u&&(d||r)?"background-image: url("+(d||r)+");":"")+"\n            "+(f&&"background-color: "+f+";")+"\n            opacity: "+u+"; \n          }\n          "+b+" {\n            z-index: -101;\n            "+(u&&""!==l||!u&&!r&&!d&&""!==l?"background-image: url("+l+");":"")+"\n            "+(u||!r&&!d?"":"background-image: url("+(r||d)+");")+"\n            "+(f&&"background-color: "+f+";")+"\n          }\n        "}},191:function(e,t,a){"use strict";var n;a(75),a(54),a(34),a(83),a(192),t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var i=new WeakMap,r=function(e){e.forEach(function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),i.delete(e.target),t())}})};t.callbackIO=r;var s=function(){return void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(r,{rootMargin:"200px"})),n};t.getIO=s;t.listenToIntersections=function(e,t){var a=s();return a?(a.observe(e),i.set(e,t),function(){a.unobserve(e),i.delete(e)}):function(){}}},209:function(e){e.exports={data:{site:{siteMetadata:{title:"gatsby-background-image Test Site",description:"Have a look at the similarities and differences of gatsby-background-image to gatsby-image side by side",author:"@timhagn"}}}}}}]);
//# sourceMappingURL=2-478b2cd6ee3b89d0f8d1.js.map