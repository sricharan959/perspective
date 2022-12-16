/*! For license information please see 477.55bad61f.js.LICENSE.txt */
(self.webpackChunk_finos_perspective_docs=self.webpackChunk_finos_perspective_docs||[]).push([[477],{9868:function(e,t,n){"use strict";var o=n(2525),r="function"==typeof Symbol&&Symbol.for,c=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function b(e,t,n,o,r,c,a,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,c,a,l],i=0;(e=Error(t.replace(/%s/g,(function(){return s[i++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);b(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function C(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||k}function _(){}function N(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||k}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=C.prototype;var w=N.prototype=new _;w.constructor=N,o(w,C.prototype),w.isPureReactComponent=!0;var B={current:null},S={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,n){var o=void 0,r={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,o)&&!x.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var i=Array(s),u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===r[o]&&(r[o]=s[o]);return{$$typeof:c,type:e,key:a,ref:l,props:r,_owner:S.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var P=/\/+/g,O=[];function T(e,t,n,o){if(O.length){var r=O.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function A(e,t,n,o){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var l=!1;if(null===e)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case c:case a:l=!0}}if(l)return n(o,e,""===t?"."+M(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var i=t+M(r=e[s],s);l+=A(r,i,n,o)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=g&&e[g]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),s=0;!(r=e.next()).done;)l+=A(r=r.value,i=t+M(r,s++),n,o);else"object"===r&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return l}function R(e,t,n){return null==e?0:A(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function Z(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,o,n,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),o.push(e))}function V(e,t,n,o,r){var c="";null!=n&&(c=(""+n).replace(P,"$&/")+"/"),R(e,D,t=T(t,c,o,r)),I(t)}function z(){var e=B.current;return null===e&&v("321"),e}var H={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return V(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;R(e,Z,t=T(null,null,t,n)),I(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){return $(e)||v("143"),e}},createRef:function(){return{current:null}},Component:C,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return z().useCallback(e,t)},useContext:function(e,t){return z().useContext(e,t)},useEffect:function(e,t){return z().useEffect(e,t)},useImperativeHandle:function(e,t,n){return z().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return z().useLayoutEffect(e,t)},useMemo:function(e,t){return z().useMemo(e,t)},useReducer:function(e,t,n){return z().useReducer(e,t,n)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:l,StrictMode:s,Suspense:m,createElement:L,cloneElement:function(e,t,n){null==e&&v("267",e);var r=void 0,a=o({},e.props),l=e.key,s=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,i=S.current),void 0!==t.key&&(l=""+t.key);var u=void 0;for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)j.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=void 0===t[r]&&void 0!==u?u[r]:t[r])}if(1===(r=arguments.length-2))a.children=n;else if(1<r){u=Array(r);for(var p=0;p<r;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:c,type:e.type,key:l,ref:s,props:a,_owner:i}},createFactory:function(e){var t=L.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:i,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:B,ReactCurrentOwner:S,assign:o}},W={default:H},F=W&&H||W;e.exports=F.default||F},1355:function(e,t,n){"use strict";e.exports=n(9868)},3477:function(e,t,n){"use strict";n.d(t,{Z:function(){return J}});var o=n(7462),r=n(7294),c=n.n(r),a=n(2389),l=n(4334),s=n(2949),i=n(6668);function u(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var p=n(5281),f=n(6324),d=n.n(f);const m=/title=(?<quote>["'])(?<title>.*?)\1/,y=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:c}=t;if(c&&y.test(c)){const e=c.match(y).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(h),t)}}(o,r),l=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<l.length;){const e=l[d].match(a);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),l.splice(d,1)}n=l.join("\n");const f={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{f[e]??=[],f[e].push(t)}))})),{lineClassNames:f,code:n}}var v="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const c=t[o];c&&"string"==typeof r&&(n[c]=r)})),n}(u());return c().createElement(t,(0,o.Z)({},n,{style:r,className:(0,l.Z)(n.className,v,p.k.common.codeBlock)}))}var E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return c().createElement(k,{as:"pre",tabIndex:0,className:(0,l.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},c().createElement("code",{className:E.codeBlockLines},t))}var _=n(902);const N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,o]=(0,r.useState)(),c=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=N);const o=(0,_.zX)(t),c=(0,_.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var B=n(1205),S={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},j=n(1355),x={Prism:B.Z,theme:S};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},$.apply(this,arguments)}var P=/\r\n|\r|\n/,O=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},T=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=$({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=$({},n,{backgroundColor:null}),r};function A(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var R=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),L(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),L(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,c=$({},A(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(c.style=a.plain),void 0!==r&&(c.style=void 0!==c.style?$({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),L(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return c[n[0]];var a=o?{display:"inline-block"}:{},l=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[a].concat(l))}})),L(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,c=e.token,a=$({},A(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?$({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),L(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var c=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,c=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],c=0,a=0,l=[],s=[l];a>-1;){for(;(c=o[a]++)<r[a];){var i=void 0,u=t[a],p=n[a][c];if("string"==typeof p?(u=a>0?u:["plain"],i=p):(u=T(u,p.type),p.alias&&(u=T(u,p.alias)),i=p.content),"string"==typeof i){var f=i.split(P),d=f.length;l.push({types:u,content:f[0]});for(var m=1;m<d;m++)O(l),s.push(l=[]),l.push({types:u,content:f[m]})}else a++,t.push(u),n.push(i),o.push(0),r.push(i.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return O(l),s}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(j.Component),M=R,Z="codeLine_lJS_",D="codeLineNumber_Tfdd",V="codeLineContent_feaV";function z(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:a,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,l.Z)(n,r&&Z)}),u=t.map(((e,t)=>c().createElement("span",(0,o.Z)({key:t},s({token:e,key:t})))));return c().createElement("span",i,r?c().createElement(c().Fragment,null,c().createElement("span",{className:D}),c().createElement("span",{className:V},u)):u,c().createElement("br",null))}var H=n(5999),W={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function F(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),i=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection();let a=!1;c.rangeCount>0&&(a=c.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),a&&(c.removeAllRanges(),c.addRange(a)),r&&r.focus()}(t),a(!0),s.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),c().createElement("button",{type:"button","aria-label":o?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,W.copyButton,o&&W.copyButtonCopied),onClick:i},c().createElement("span",{className:W.copyButtonIcons,"aria-hidden":"true"},c().createElement("svg",{className:W.copyButtonIcon,viewBox:"0 0 24 24"},c().createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),c().createElement("svg",{className:W.copyButtonSuccessIcon,viewBox:"0 0 24 24"},c().createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var q="wordWrapButtonIcon_Bwma",U="wordWrapButtonEnabled_EoeP";function G(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return c().createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,o&&U),"aria-label":r,title:r},c().createElement("svg",{className:q,viewBox:"0 0 24 24","aria-hidden":"true"},c().createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Y(e){let{children:t,className:n="",metastring:a,title:s,showLineNumbers:p,language:f}=e;const{prism:{defaultLanguage:d,magicComments:y}}=(0,i.L)(),h=f??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??d;const g=u(),v=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return w(c,l),(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),C=function(e){return e?.match(m)?.groups.title??""}(a)||s,{lineClassNames:_,code:N}=b(t,{metastring:a,language:h,magicComments:y}),B=p??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return c().createElement(k,{as:"div",className:(0,l.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},C&&c().createElement("div",{className:E.codeBlockTitle},C),c().createElement("div",{className:E.codeBlockContent},c().createElement(M,(0,o.Z)({},x,{theme:g,code:N,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:r}=e;return c().createElement("pre",{tabIndex:0,ref:v.codeBlockRef,className:(0,l.Z)(t,E.codeBlock,"thin-scrollbar")},c().createElement("code",{className:(0,l.Z)(E.codeBlockLines,B&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>c().createElement(z,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:_[t],showLineNumbers:B})))))})),c().createElement("div",{className:E.buttonGroup},(v.isEnabled||v.isCodeScrollable)&&c().createElement(G,{className:E.codeButton,onClick:()=>v.toggle(),isEnabled:v.isEnabled}),c().createElement(F,{className:E.codeButton,code:N}))))}function J(e){let{children:t,...n}=e;const l=(0,a.Z)(),s=function(e){return c().Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof s?Y:C;return c().createElement(i,(0,o.Z)({key:String(l)},n),s)}},6324:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);