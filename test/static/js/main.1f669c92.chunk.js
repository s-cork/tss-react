(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{141:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMakeAndWithStyles=t.GlobalStyles=t.keyframes=t.createWithStyles=t.createMakeStyles=void 0;var n=r(261);Object.defineProperty(t,"createMakeStyles",{enumerable:!0,get:function(){return n.createMakeStyles}});var o=r(520);Object.defineProperty(t,"createWithStyles",{enumerable:!0,get:function(){return o.createWithStyles}});var a=r(52);Object.defineProperty(t,"keyframes",{enumerable:!0,get:function(){return a.keyframes}});var c=r(523);Object.defineProperty(t,"GlobalStyles",{enumerable:!0,get:function(){return c.GlobalStyles}}),t.createMakeAndWithStyles=function(e){return Object.assign(Object.assign({},(0,n.createMakeStyles)(e)),(0,o.createWithStyles)(e))}},261:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMakeStyles=void 0;var n=r(0),o=r(504),a=r(264),c=r(509),s=r(516),i=r(266),l=r(265),u=r(517),d=r(52),b=0;t.createMakeStyles=function(e){var t=e.useTheme,r=e.cache;function h(){var e=(0,d.__unsafe_useEmotionCache)(),t=null!==r&&void 0!==r?r:e;if(null===t)throw new Error(["In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.","MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,","MUI needs an Emotion cache to be provided for SSR to work.","Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/","TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"].join("\n"));return t}var f=(0,c.createUseCssAndCx)({useCache:h}).useCssAndCx;return{makeStyles:function(e){var r=null!==e&&void 0!==e?e:{},c=r.name,d=r.uniqId,p=void 0===d?b++:d,v="object"!==typeof c?c:Object.keys(c)[0];return function(e){var r="function"===typeof e?e:function(){return e};return function(e,c){var d,b,j=t(),m=f(),y=m.css,g=m.cx,O=h(),x=(0,n.useMemo)((function(){var t={},n="undefined"!==typeof Proxy&&new Proxy({},{get:function(e,r){return"symbol"===typeof r&&(0,l.assert)(!1),t[r]="".concat(O.key,"-").concat(p).concat(void 0!==v?"-".concat(v):"","-").concat(r,"-ref")}}),c=r(j,e,n||{}),s=(0,o.objectFromEntries)((0,a.objectKeys)(c).map((function(e){var r=c[e];return r.label||(r.label="".concat(void 0!==v?"".concat(v,"-"):"").concat(e)),[e,"".concat(y(r)).concat((0,i.typeGuard)(e,e in t)?" ".concat(t[e]):"")]})));return(0,a.objectKeys)(t).forEach((function(e){e in s||(s[e]=t[e])})),s}),[O,y,g,j,(0,s.getDependencyArrayRef)(e)]),k=null===c||void 0===c?void 0:c.props.classes;x=(0,n.useMemo)((function(){return(0,u.mergeClasses)(x,k,g)}),[x,(0,s.getDependencyArrayRef)(k),g]);var S=void 0;try{S=void 0!==v?null===(b=null===(d=j.components)||void 0===d?void 0:d[v])||void 0===b?void 0:b.styleOverrides:void 0}catch(w){}var _=(0,n.useMemo)((function(){if(S){var e={};for(var t in S){var r=S[t];r instanceof Object&&(e[t]=y("function"===typeof r?r(Object.assign({theme:j,ownerState:null===c||void 0===c?void 0:c.ownerState},null===c||void 0===c?void 0:c.props)):r))}return e}}),[void 0===S?void 0:JSON.stringify(S),(0,s.getDependencyArrayRef)(null===c||void 0===c?void 0:c.props),(0,s.getDependencyArrayRef)(null===c||void 0===c?void 0:c.ownerState),y]);return{classes:x=(0,n.useMemo)((function(){return(0,u.mergeClasses)(x,_,g)}),[x,_,g]),theme:j,css:y,cx:g}}}},useStyles:function(){var e=t(),r=f();return{theme:e,css:r.css,cx:r.cx}}}}},264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.objectKeys=void 0,t.objectKeys=function(e){return Object.keys(e)}},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assert=void 0,t.assert=function(e,t){if(!e)throw new Error(t)}},266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typeGuard=void 0,t.typeGuard=function(e,t){return t}},504:function(e,t,r){"use strict";var n=r(505).default;Object.defineProperty(t,"__esModule",{value:!0}),t.objectFromEntries=void 0,t.objectFromEntries=Object.fromEntries?Object.fromEntries:function(e){if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");var t={};return Object.keys(e).forEach((function(r){var o=n(e[r],2),a=o[0],c=o[1];t[a]=c})),t}},509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createUseCssAndCx=t.createCssAndCx=void 0;var n=r(510),o=r(56),a=r(44),c=r(511);t.createCssAndCx=function(){function e(e,t,r){var n=[],o=(0,a.getRegisteredStyles)(e,n,r);return n.length<2?r:o+t(n)}return{createCssAndCx:function(t){var r=t.cache,c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var c=(0,o.serializeStyles)(t,r.registered);(0,a.insertStyles)(r,c,!1);var s="".concat(r.key,"-").concat(c.name);return s};return{css:c,cx:function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];var s=(0,n.classnames)(o);return e(r.registered,c,s)}}}}}().createCssAndCx,t.createUseCssAndCx=function(e){var r=e.useCache;return{useCssAndCx:function(){var e=r(),n=(0,c.useGuaranteedMemo)((function(){return(0,t.createCssAndCx)({cache:e})}),[e]);return{css:n.css,cx:n.cx}}}}},510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.classnames=void 0;var n=r(265),o=r(266);t.classnames=function(e){for(var r=e.length,a=0,c="";a<r;a++){var s=e[a];if(null!=s){var i=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))i=(0,t.classnames)(s);else for(var l in(0,n.assert)(!(0,o.typeGuard)(s,!1)),i="",s)s[l]&&l&&(i&&(i+=" "),i+=l);break;default:i=s}i&&(c&&(c+=" "),c+=i)}}return c}},511:function(e,t,r){"use strict";var n=r(512).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useGuaranteedMemo=void 0;var o=r(0);t.useGuaranteedMemo=function(e,t){var r=(0,o.useRef)();return(!r.current||t.length!==r.current.prevDeps.length||r.current.prevDeps.map((function(e,r){return e===t[r]})).indexOf(!1)>=0)&&(r.current={v:e(),prevDeps:n(t)}),r.current.v}},516:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDependencyArrayRef=void 0,t.getDependencyArrayRef=function(e){if(!(e instanceof Object)||"function"===typeof e)return e;var t=[];for(var r in e){var n=e[r],o=typeof n;if("string"!==o&&("number"!==o||isNaN(n))&&"boolean"!==o&&void 0!==n&&null!==n)return e;t.push("".concat(r,":").concat(o,"_").concat(n))}return"xSqLiJdLMd9s"+t.join("|")}},517:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeClasses=void 0;var n=r(264);t.mergeClasses=function(e,t,r){if(!(t instanceof Object))return e;var o={};return(0,n.objectKeys)(e).forEach((function(n){return o[n]=r(e[n],t[n])})),(0,n.objectKeys)(t).forEach((function(r){if(!(r in e)){var n=t[r];"string"===typeof n&&(o[r]=n)}})),o}},520:function(e,t,r){"use strict";var n=r(521).default,o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return a(t,e),t},s=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.createWithStyles=void 0;var i=c(r(0)),l=r(261),u=r(522);function d(e){var t={},r={};return Object.keys(e).forEach((function(n){return(n.startsWith("@media")?r:t)[n]=e[n]})),Object.keys(r).forEach((function(e){var o=r[e];Object.keys(o).forEach((function(r){var a;return t[r]=Object.assign(Object.assign({},null!==(a=t[r])&&void 0!==a?a:{}),n({},e,o[r]))}))})),t}t.createWithStyles=function(e){var t=e.useTheme,r=e.cache,n=(0,l.createMakeStyles)({useTheme:t,cache:r}).makeStyles;return{withStyles:function(e,t,r){var o="string"===typeof e?function(){var t=e,r=function(e){var r=e.children,n=s(e,["children"]);return(0,i.createElement)(t,n,r)};return Object.defineProperty(r,"name",{value:(0,u.capitalize)(t)}),r}():e,a=function(){var e=o.displayName;if(e)return e;var t=o.name;return t||(null===r||void 0===r?void 0:r.name)}(),c=n(Object.assign(Object.assign({},r),{name:a}))("function"===typeof t?function(e,r,n){return d(t(e,r,n))}:d(t));function l(e){for(var t in e)if("root"!==t)return!0;return!1}var b=(0,i.forwardRef)((function(t,r){var n=t.className,a=(t.classes,s(t,["className","classes"])),u=c(t,{props:t}),d=u.classes,b=u.cx;return i.default.createElement(o,Object.assign({ref:r,className:l(d)?n:b(d.root,n)},"string"===typeof e?{}:{classes:d},a))}));return void 0!==a&&Object.defineProperty(b,"name",{value:"".concat(a,"WithStyles")}),b}}}},522:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=void 0,t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},523:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalStyles=void 0;var s=c(r(0)),i=a(r(52));t.GlobalStyles=function(e){var t=e.styles;return s.default.createElement(i.Global,{styles:i.css(t)})}},536:function(e,t,r){"use strict";r.r(t);r(281),r(299);var n=r(0),o=r(141),a=r(558),c=Object(o.createMakeAndWithStyles)({useTheme:a.a}),s=c.makeStyles,i=c.useStyles,l=c.withStyles,u=r(25),d=r(147),b=r(8),h=r(22),f=r(571),p=r(569),v=r(572),j=r(568),m=r(574),y=r(271),g=r.n(y),O=r(1),x=Object(h.a)("h1")({color:"yellow"});function k(e){var t=e.className,r=S(),n=r.classes,a=r.css,c=r.cx;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.GlobalStyles,{styles:{body:{backgroundColor:"pink"},".foo":{color:"cyan"}}}),Object(O.jsxs)("div",{className:n.root,children:[Object(O.jsx)("h1",{children:"Black"}),Object(O.jsx)("h1",{children:"Should be lime green"}),Object(O.jsx)("h1",{className:c(a({border:"1px solid black"}),t),children:"Black, should have border and shadow"}),Object(O.jsx)("h1",{className:"foo",children:"Should be cyan"}),Object(O.jsx)(x,{children:"Should be yellow"}),Object(O.jsx)(x,{className:n.ovStyled,children:"Should be dark red"}),Object(O.jsx)(f.a,{variant:"contained",color:"primary",children:" Background should be lime green "}),Object(O.jsx)(f.a,{variant:"contained",color:"primary",className:n.ovInternal,children:"Background should be dark blue"}),Object(O.jsx)("div",{className:n.parent,children:Object(O.jsx)("div",{className:n.child,children:"Background should turn red when mouse is hover the parent."})}),Object(O.jsxs)(p.a,{className:n.breadcrumbs_className,color:"primary",children:[Object(O.jsx)("span",{children:"background should be lightblue"}),Object(O.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(O.jsx)("div",{style:{height:10}}),Object(O.jsxs)(p.a,{classes:{root:n.breadcrumbs2_root,separator:n.breadcrumbs2_separator},color:"primary",children:[Object(O.jsx)("span",{children:"background should be lightblue"}),Object(O.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(O.jsxs)(M,{children:[Object(O.jsx)("span",{children:"The separator"}),Object(O.jsx)("span",{children:"should be lightgreen"})]}),Object(O.jsx)(f.a,{variant:"contained",color:"primary",className:n.button2_className,children:Object(O.jsx)("span",{children:"The background should be red"})}),Object(O.jsx)(f.a,{variant:"contained",color:"primary",classes:{root:n.button2_root},children:Object(O.jsx)("span",{children:"The background should be red"})}),Object(O.jsx)("div",{className:c(n.testCx_bgYellow,n.testCx_bgCyan),children:"Background should be cyan"}),Object(O.jsx)("div",{className:c(n.testCx_bgCyan,n.testCx_bgYellow),children:"Background should be yellow"}),Object(O.jsxs)("div",{className:n.childRefTest_wrapper,children:[Object(O.jsx)("div",{className:c(n.childRefTest_textColorPink,n.childRefTest_wrapper1),children:"Background should turn cyan when mouse hover the parent. Also the text should NOT be pink"}),Object(O.jsx)("div",{className:c(n.childRefTest_wrapper2),children:"Background should NOT turn cyan when mouse hover the parent."})]}),Object(O.jsx)("div",{className:n.mq,children:"The background color should turn from lightgreen to cyan when the window inner with goes is below 960px"}),Object(O.jsx)(_,{className:a({color:"red"}),colorSmall:"cyan"}),Object(O.jsx)(w,{children:"The text should turn from red to blue when the window inner width goes below 960px And I should have a class like tss-xxxxxx-MyStyledButton-text"}),Object(O.jsx)("br",{}),Object(O.jsx)(C,{href:"http://exampe.com",children:"Background should be red"}),Object(O.jsx)(C,{href:"https://exampe.com",children:"Background should be limegreen"}),Object(O.jsx)("div",{className:c(a({"@media screen and (min-width: 1px)":{backgroundColor:"red"},height:50}),a({backgroundColor:"lightgreen"})),children:"background should be lightgreen"}),Object(O.jsx)(N,{}),Object(O.jsx)(T,{}),Object(O.jsx)(P,{}),Object(O.jsx)(B,{}),Object(O.jsx)(A,{className:a({backgroundColor:"white"}),classes:{root:a({backgroundColor:"red",border:"1px solid black"})},lightBulbBorderColor:"black"}),Object(O.jsx)(E,{icon:Object(O.jsx)(g.a,{}),label:"Background should be greenish"})]})]})}var S=s({name:{App:k}})((function(e,t,r){var n={border:"1px solid black",margin:30,height:100,color:"black"};return{root:{"& > h1:nth-child(2)":{color:e.palette.primary.main}},ovStyled:{color:"darkred"},ovInternal:{backgroundColor:"darkblue"},parent:Object(b.a)({border:"1px solid black",padding:30},"&:hover .".concat(r.child),{background:"red"}),child:{background:"blue",border:"1px solid black"},breadcrumbs_className:{backgroundColor:"lightblue","& .MuiBreadcrumbs-separator":{color:"red"},"&:hover .MuiBreadcrumbs-separator":{color:"blue"}},breadcrumbs2_root:Object(b.a)({backgroundColor:"lightblue"},"&:hover .".concat(r.breadcrumbs2_separator),{color:"blue"}),breadcrumbs2_separator:{color:"red"},button2_className:{backgroundColor:"red"},button2_root:{backgroundColor:"red"},testCx_bgYellow:{backgroundColor:"yellow"},testCx_bgCyan:{backgroundColor:"cyan"},childRefTest_wrapper:Object(b.a)({border:"1px solid black"},"&:hover .".concat(r.childRefTest_wrapper1),{backgroundColor:"cyan"}),childRefTest_wrapper1:Object(d.a)({},n),childRefTest_wrapper2:n,childRefTest_textColorPink:{color:"pink"},mq:{height:100,backgroundColor:"lightgreen","@media (max-width: 960px)":{backgroundColor:"cyan"}}}}));var _=l((function(e){return Object(O.jsx)("div",{className:e.className,children:"The background color should turn from limegreen to cyan when the window inner with goes below 960px. Font should be red"})}),(function(e,t){return{root:{backgroundColor:e.palette.primary.main,height:100,marginTop:20},"@media (max-width: 960px)":{root:{backgroundColor:t.colorSmall}}}})),w=l(f.a,{text:{color:"red",textTransform:"unset"},"@media (max-width: 960px)":{text:{color:"blue"}}},{name:"MyStyledButton"}),C=l("a",(function(e,t){var r=t.href;return{root:{border:"1px solid black",backgroundColor:null!==r&&void 0!==r&&r.startsWith("https")?e.palette.primary.main:"red"}}})),M=l(p.a,(function(e,t,r){return{ol:Object(b.a)({},"& .".concat(r.separator),{color:e.palette.primary.main})}})),N=function(){var e=Object(n.memo)((function(){var e=t({color:"primary"}),r=e.classes,n=e.cx;return Object(O.jsxs)("div",{className:r.root,children:[Object(O.jsx)("div",{className:r.child,children:"The Background take the primary theme color when the mouse is hover the parent."}),Object(O.jsx)("div",{className:n(r.child,r.small),children:"The Background take the primary theme color when the mouse is hover the parent. I am smaller than the other child."})]})})),t=s({name:{SecondNestedSelectorExample:e}})((function(e,t,r){var n=t.color;return{root:Object(b.a)({padding:30},"&:hover .".concat(r.child),{backgroundColor:e.palette[n].main}),small:{},child:Object(b.a)({border:"1px solid black",height:50},"&.".concat(r.small),{height:30})}}));return{SecondNestedSelectorExample:e}}().SecondNestedSelectorExample,T=function(){var e=s()({foo:{border:"3px dotted black",backgroundColor:"red"},bar:{color:"pink"}}),t=function(t){var r=e(void 0,{props:t}).classes;return Object(O.jsx)("div",{className:r.foo,children:Object(O.jsx)("span",{className:r.bar,children:"The background should be green, the box should have a dotted border and the text should be pink"})})};return{MyTestComponentForMergedClasses:function(){var r=e().css;return Object(O.jsx)(t,{classes:{foo:r({backgroundColor:"green"})}})}}}().MyTestComponentForMergedClasses,P=function(){var e=s()((function(e){return{root:Object(d.a)(Object(d.a)({},e.typography.subtitle2),{},{color:"red"})}}));return{TestCastingMuiTypographyStyleToCSSObject:function(){var t=e().classes;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v.a,{variant:"subtitle2",children:"This text should be italic"}),Object(O.jsx)("span",{className:t.root,children:"This text should be italic and red"})]})}}}().TestCastingMuiTypographyStyleToCSSObject,B=function(){var e=l(j.a,(function(e){return{input:{backgroundColor:e.palette.grey[50]}}}));return{TestPr54:l(e,(function(){return{input:{backgroundColor:"red"}}}))}}().TestPr54,A=function(){function e(e){var r=e.className,o=Object(n.useReducer)((function(e){return!e}),!1),a=Object(u.a)(o,2),c=a[0],s=a[1],i=t(void 0,{props:e,ownerState:{isOn:c}}),l=i.classes,d=i.cx;return Object(O.jsxs)("div",{className:d(l.root,r),children:[Object(O.jsx)("div",{className:l.lightBulb}),Object(O.jsx)("button",{onClick:s,children:"Turn ".concat(c?"off":"on")}),Object(O.jsx)("p",{children:"Div should have a border, background should be white"}),Object(O.jsx)("p",{children:"Light bulb should have black border, it should be yellow when turned on."})]})}var t=s({name:{TestingStyleOverrides:e}})((function(e){return{root:{border:"1px solid black",width:500,height:200,position:"relative",color:"black"},lightBulb:{position:"absolute",width:50,height:50,top:120,left:200,borderRadius:"50%"}}}));return{TestingStyleOverrides:e}}().TestingStyleOverrides,E=l(m.a,{root:{backgroundColor:"red"},labelIcon:{backgroundColor:"green"}}),R=r(30),D=r(573),G=r(274),I=r(566),W=r(273),F=r(110),U=Object(F.a)({key:"mui",prepend:!0}),K=Object(G.a)({palette:{primary:{main:"#32CD32"},info:{main:"#ffff00"}},typography:{subtitle2:{fontStyle:"italic"}},components:{TestingStyleOverrides:{styleOverrides:{lightBulb:function(e){var t=e.theme,r=e.ownerState.isOn,n=e.lightBulbBorderColor;return{border:"1px solid ".concat(n),backgroundColor:r?t.palette.info.main:"grey"}}}}}});function q(){var e=i().css;return Object(O.jsx)(k,{className:e({boxShadow:"10px 5px 5px teal"})})}Object(W.createRoot)(document.getElementById("root")).render(Object(O.jsx)(n.StrictMode,{children:Object(O.jsx)(R.a,{value:U,children:Object(O.jsxs)(D.a,{theme:K,children:[Object(O.jsx)(I.a,{}),Object(O.jsx)(q,{})]})})}))}},[[536,1,2]]]);
//# sourceMappingURL=main.1f669c92.chunk.js.map