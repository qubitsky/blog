(self.webpackChunkblog=self.webpackChunkblog||[]).push([[745],{3644:function(e,t,r){"use strict";r.d(t,{xu:function(){return me},W2:function(){return Ae},kC:function(){return he},X6:function(){return Se},rU:function(){return ve},OL:function(){return Re},nv:function(){return Te}});var n=r(8936),o=r(7285);var i=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=i((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=r(4756),l=r.n(c),d=function(e,t){var r=l()({},e,t);for(var n in e){var o;e[n]&&"object"==typeof t[n]&&l()(r,((o={})[n]=l()(e[n],t[n]),o))}return r},p={breakpoints:[40,52,64].map((function(e){return e+"em"}))},u=function(e){return"@media screen and (min-width: "+e+")"},f=function(e,t){return g(t,e,e)},g=function(e,t,r,n,o){for(t=t&&t.split?t.split("."):[t],n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e},m=function e(t){var r={},n=function(e){var n,o,i={},a=!1,s=e.theme&&e.theme.disableStyledSystemCache;for(var c in e)if(t[c]){var f=t[c],m=e[c],b=g(e.theme,f.scale,f.defaults);if("object"!=typeof m)l()(i,f(m,b,e));else{if(r.breakpoints=!s&&r.breakpoints||g(e.theme,"breakpoints",p.breakpoints),Array.isArray(m)){r.media=!s&&r.media||[null].concat(r.breakpoints.map(u)),i=d(i,h(r.media,f,b,m,e));continue}null!==m&&(i=d(i,y(r.breakpoints,f,b,m,e)),a=!0)}}return a&&(n=i,o={},Object.keys(n).sort((function(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){o[e]=n[e]})),i=o),i};n.config=t,n.propNames=Object.keys(t),n.cache=r;var o=Object.keys(t).filter((function(e){return"config"!==e}));return o.length>1&&o.forEach((function(r){var o;n[r]=e(((o={})[r]=t[r],o))})),n},h=function(e,t,r,n,o){var i={};return n.slice(0,e.length).forEach((function(n,a){var s,c=e[a],d=t(n,r,o);c?l()(i,((s={})[c]=l()({},i[c],d),s)):l()(i,d)})),i},y=function(e,t,r,n,o){var i={};for(var a in n){var s=e[a],c=t(n[a],r,o);if(s){var d,p=u(s);l()(i,((d={})[p]=l()({},i[p],c),d))}else l()(i,c)}return i},b=function(e){var t=e.properties,r=e.property,n=e.scale,o=e.transform,i=void 0===o?f:o,a=e.defaultScale;t=t||[r];var s=function(e,r,n){var o={},a=i(e,r,n);if(null!==a)return t.forEach((function(e){o[e]=a})),o};return s.scale=n,s.defaults=a,s},v=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(r){var n=e[r];t[r]=!0!==n?"function"!=typeof n?b(n):n:b({property:r,scale:r})})),m(t)},T=function(){for(var e={},t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];r.forEach((function(t){t&&t.config&&l()(e,t.config)}));var o=m(e);return o},S=v({width:{property:"width",scale:"sizes",transform:function(e,t){return g(t,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),w=S,k={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};k.bg=k.backgroundColor;var x=v(k),C=x,A=v({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),R=A,O=v({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),E=O,L={space:[0,4,8,16,32,64,128,256,512]},j=v({gridGap:{property:"gridGap",scale:"space",defaultScale:L.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:L.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:L.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),P=j,B={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};B.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},B.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},B.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},B.borderBottomColor={property:"borderBottomColor",scale:"colors"},B.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},B.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},B.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},B.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},B.borderLeftColor={property:"borderLeftColor",scale:"colors"},B.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},B.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},B.borderRightColor={property:"borderRightColor",scale:"colors"},B.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var z=v(B),I=z,W={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};W.bgImage=W.backgroundImage,W.bgSize=W.backgroundSize,W.bgPosition=W.backgroundPosition,W.bgRepeat=W.backgroundRepeat;var M=v(W),H=M,N={space:[0,4,8,16,32,64,128,256,512]},_=v({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:N.space},right:{property:"right",scale:"space",defaultScale:N.space},bottom:{property:"bottom",scale:"space",defaultScale:N.space},left:{property:"left",scale:"space",defaultScale:N.space}}),F=_,Y={space:[0,4,8,16,32,64,128,256,512]},D=function(e){return"number"==typeof e&&!isNaN(e)},U=function(e,t){if(!D(e))return g(t,e,e);var r=e<0,n=Math.abs(e),o=g(t,n,n);return D(o)?o*(r?-1:1):r?"-"+o:o},q={};q.margin={margin:{property:"margin",scale:"space",transform:U,defaultScale:Y.space},marginTop:{property:"marginTop",scale:"space",transform:U,defaultScale:Y.space},marginRight:{property:"marginRight",scale:"space",transform:U,defaultScale:Y.space},marginBottom:{property:"marginBottom",scale:"space",transform:U,defaultScale:Y.space},marginLeft:{property:"marginLeft",scale:"space",transform:U,defaultScale:Y.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:U,defaultScale:Y.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:U,defaultScale:Y.space}},q.margin.m=q.margin.margin,q.margin.mt=q.margin.marginTop,q.margin.mr=q.margin.marginRight,q.margin.mb=q.margin.marginBottom,q.margin.ml=q.margin.marginLeft,q.margin.mx=q.margin.marginX,q.margin.my=q.margin.marginY,q.padding={padding:{property:"padding",scale:"space",defaultScale:Y.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:Y.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:Y.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:Y.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:Y.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:Y.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:Y.space}},q.padding.p=q.padding.padding,q.padding.pt=q.padding.paddingTop,q.padding.pr=q.padding.paddingRight,q.padding.pb=q.padding.paddingBottom,q.padding.pl=q.padding.paddingLeft,q.padding.px=q.padding.paddingX,q.padding.py=q.padding.paddingY;var X=T(v(q.margin),v(q.padding)),Z=X,G=v({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K.apply(this,arguments)}var V=function(e,t,r,n,o){for(t=t&&t.split?t.split("."):[t],n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e},$=[40,52,64].map((function(e){return e+"em"})),J={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},Q={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},ee={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},te={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},re=function(e,t){if("number"!=typeof t||t>=0)return V(e,t,t);var r=Math.abs(t),n=V(e,r,r);return"string"==typeof n?"-"+n:-1*n},ne=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return K({},e,((r={})[t]=re,r))}),{}),oe=function e(t){return function(r){void 0===r&&(r={});var n=K({},J,{},r.theme||r),o={},i=function(e){return function(t){var r={},n=V(t,"breakpoints",$),o=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var a="function"==typeof e[i]?e[i](t):e[i];if(null!=a)if(Array.isArray(a))for(var s=0;s<a.slice(0,o.length).length;s++){var c=o[s];c?(r[c]=r[c]||{},null!=a[s]&&(r[c][i]=a[s])):r[i]=a[s]}else r[i]=a}return r}}("function"==typeof t?t(n):t)(n);for(var a in i){var s=i[a],c="function"==typeof s?s(n):s;if("variant"!==a)if(c&&"object"==typeof c)o[a]=e(c)(n);else{var l=V(Q,a,a),d=V(te,l),p=V(n,d,V(n,l,{})),u=V(ne,l,V)(p,c,c);if(ee[l])for(var f=ee[l],g=0;g<f.length;g++)o[f[g]]=u;else o[l]=u}else o=K({},o,{},e(V(n,c))(n))}return o}},ie=function(e){var t,r,n=e.scale,o=e.prop,i=void 0===o?"variant":o,a=e.variants,s=void 0===a?{}:a,c=e.key;r=Object.keys(s).length?function(e,t,r){return oe(g(t,e,null))(r.theme)}:function(e,t){return g(t,e,null)},r.scale=n||c,r.defaults=s;var l=((t={})[i]=r,t);return m(l)},ae=ie({key:"buttons"}),se=ie({key:"textStyles",prop:"textStyle"}),ce=ie({key:"colorStyles",prop:"colors"}),le=(w.width,w.height,w.minWidth,w.minHeight,w.maxWidth,w.maxHeight,w.size,w.verticalAlign,w.display,w.overflow,w.overflowX,w.overflowY,C.opacity,R.fontSize,R.fontFamily,R.fontWeight,R.lineHeight,R.textAlign,R.fontStyle,R.letterSpacing,E.alignItems,E.alignContent,E.justifyItems,E.justifyContent,E.flexWrap,E.flexDirection,E.flex,E.flexGrow,E.flexShrink,E.flexBasis,E.justifySelf,E.alignSelf,E.order,P.gridGap,P.gridColumnGap,P.gridRowGap,P.gridColumn,P.gridRow,P.gridAutoFlow,P.gridAutoColumns,P.gridAutoRows,P.gridTemplateColumns,P.gridTemplateRows,P.gridTemplateAreas,P.gridArea,I.borderWidth,I.borderStyle,I.borderColor,I.borderTop,I.borderRight,I.borderBottom,I.borderLeft,I.borderRadius,H.backgroundImage,H.backgroundSize,H.backgroundPosition,H.backgroundRepeat,F.zIndex,F.top,F.right,F.bottom,F.left,function(e){var t=new RegExp("^("+e.join("|")+")$");return i((function(e){return s(e)&&!t.test(e)}))}),de=(le(T(X,A,x,S,O,z,M,_,j,G,ae,se,ce).propNames),r(7294)),pe=r(4382),ue=[].concat(Z.propNames,C.propNames),fe=function(e){return ue.includes(e)},ge=le(ue),me=(0,n.Z)("div",{shouldForwardProp:ge})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return(0,o.iv)(e.__css)(e.theme)}),(function(e){var t=e.theme,r=e.variant,n=e.__themeKey,i=void 0===n?"variants":n;return(0,o.iv)((0,o.U2)(t,i+"."+r,(0,o.U2)(t,r)))}),Z,C,(function(e){return(0,o.iv)(e.sx)(e.theme)}),(function(e){return e.css}));me.displayName="Box";var he=(0,n.Z)(me)({display:"flex"});function ye(){return ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ye.apply(this,arguments)}function be(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}he.displayName="Flex";var ve=de.forwardRef((function(e,t){return de.createElement(me,ye({ref:t,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),Te=de.forwardRef((function(e,t){return de.createElement(me,ye({ref:t,as:"p",variant:"paragraph",__themeKey:"text",__css:{fontFamily:"body",fontWeight:"body",lineHeight:"body"}},e))})),Se=de.forwardRef((function(e,t){return de.createElement(me,ye({ref:t,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),we=["size"],ke=function(e){var t=e.size,r=void 0===t?24:t,n=be(e,we);return de.createElement(me,ye({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r+"",height:r+"",viewBox:"0 0 24 24",fill:"currentcolor"},n))};ke.displayName="SVG";var xe=function(e){return function(t){var r={};for(var n in t)e(n||"")&&(r[n]=t[n]);return r}},Ce=/^m[trblxy]?$/,Ae=(xe((function(e){return Ce.test(e)})),xe((function(e){return!Ce.test(e)})),(0,pe.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),xe(fe),xe((function(e){return!fe(e)})),de.forwardRef((function(e,t){return de.createElement(me,ye({ref:t,variant:"container"},e,{__themeKey:"layout",__css:{width:"100%",maxWidth:"container",mx:"auto"}}))}))),Re=de.forwardRef((function(e,t){return de.createElement(ve,ye({ref:t,variant:"nav"},e,{__css:{color:"inherit",textDecoration:"none",fontWeight:"bold",display:"inline-block","&:hover, &:focus, &.active":{color:"primary"}}}))}))},523:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,d;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(d=e.entries();!(c=d.next()).done;)if(!a.has(c.value[0]))return!1;for(d=e.entries();!(c=d.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(d=e.entries();!(c=d.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},6124:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function d(){c=e(l.map((function(e){return e.props}))),p.canUseDOM?t(c):r&&(c=r(c))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),d()},a.componentDidUpdate=function(){d()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",s),p}}},1191:function(e,t,r){"use strict";r.d(t,{tZ:function(){return n}});var n=r(4999).tZ},6847:function(e,t,r){"use strict";r.d(t,{Z:function(){return ye}});var n,o,i,a,s=r(7294),c=r(1191),l=r(5697),d=r.n(l),p=r(6124),u=r.n(p),f=r(523),g=r.n(f),m=r(4756),h=r.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",k="href",x="http-equiv",C="innerHTML",A="itemprop",R="name",O="property",E="rel",L="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",z="defer",I="encodeSpecialCharacters",W="onChangeClientState",M="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),N=[T.NOSCRIPT,T.SCRIPT,T.STYLE],_="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,T.TITLE),r=Q(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,B);return t||n||void 0},K=function(e){return Q(e,W)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||r===E&&"canonical"===e[r].toLowerCase()||c===E&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==C&&s!==w&&s!==A||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=h()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,p=e.title,u=e.titleAttributes;le(T.BODY,n),le(T.HTML,o),ce(p,u);var f={baseTag:de(T.BASE,r),linkTags:de(T.LINK,i),metaTags:de(T.META,a),noscriptTags:de(T.NOSCRIPT,s),scriptTags:de(T.SCRIPT,l),styleTags:de(T.STYLE,d)},g={},m={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(g[e]=r),n.length&&(m[e]=f[e].oldTags)})),t&&t(),c(e,g,m)},se=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),le(T.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var d=i.indexOf(c);-1!==d&&i.splice(d,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(_):r.getAttribute(_)!==a.join(",")&&r.setAttribute(_,a.join(","))}},de=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(_,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[_]=!0,o=ue(r,n),[s.createElement(T.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=pe(r),i=se(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return ue(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Z(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===N.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ge=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,d=e.title,p=void 0===d?"":d,u=e.titleAttributes;return{base:fe(T.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,o,n),link:fe(T.LINK,i,n),meta:fe(T.META,a,n),noscript:fe(T.NOSCRIPT,s,n),script:fe(T.SCRIPT,c,n),style:fe(T.STYLE,l,n),title:fe(T.TITLE,{title:p,titleAttributes:u},n)}},me=u()((function(e){return{baseTag:$([k,j],e),bodyAttributes:V(y,e),defer:Q(e,z),encode:Q(e,I),htmlAttributes:V(b,e),linkTags:J(T.LINK,[E,k],e),metaTags:J(T.META,[R,S,x,O,A],e),noscriptTags:J(T.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:J(T.SCRIPT,[L,C],e),styleTags:J(T.STYLE,[w],e),title:G(e),titleAttributes:V(v,e)}}),(function(e){ie&&ne(ie),e.defer?ie=re((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),ge)((function(){return null})),he=(o=me,a=i=function(e){function t(){return Y(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case T.TITLE:return U({},o,((t={})[n.type]=a,t.titleAttributes=U({},i),t));case T.BODY:return U({},o,{bodyAttributes:U({},i)});case T.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(q(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(o,n)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=function(e){var t=e.header,r=e.children;return(0,c.tZ)(s.Fragment,null,(0,c.tZ)(he,null,(0,c.tZ)("title",null,"苍微的网络空间"),(0,c.tZ)("script",{src:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"})),(0,c.tZ)("div",{sx:{display:"flex",flexDirection:"column",minHeight:"100vh",color:"#333"}},t,(0,c.tZ)("main",{sx:{flex:"1 1 auto"}},r),(0,c.tZ)("footer",{sx:{width:"100%",textAlign:"center",fontSize:12}},(0,c.tZ)("p",null,"Copyright © ",(new Date).getFullYear()," qubitsky. All Rights Reserved. 苍微q 版权所有"))))}},9112:function(e,t,r){"use strict";var n=r(1191),o=r(3644),i=r(5444),a=r(1411),s=r.n(a),c=r(586),l=r.n(c),d=[{icon:(0,n.tZ)(s(),null),title:"Articles",to:"/articles"},{icon:(0,n.tZ)(l(),null),title:"About",to:"/about"}];t.Z=function(e){var t=e.className;return(0,n.tZ)(o.kC,{className:t,as:"nav"},d.map((function(e,t){return(0,n.tZ)(o.OL,{key:t,href:(0,i.dq)(e.to)},(0,n.tZ)(o.kC,{p:2,sx:{flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.icon,(0,n.tZ)("span",null,e.title)))})))}},1411:function(e,t,r){var n=r(7294);function o(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"pen"),n.createElement("path",{d:"M31.818 9.122l-8.939-8.939c-0.292-0.292-0.676-0.226-0.855 0.146l-1.199 2.497 8.35 8.35 2.497-1.199c0.372-0.178 0.438-0.563 0.146-0.855z",fill:"currentColor",key:1}),n.createElement("path",{d:"M19.231 4.231l-8.231 0.686c-0.547 0.068-1.002 0.184-1.159 0.899-0 0.001-0 0.001-0.001 0.002-2.232 10.721-9.84 21.183-9.84 21.183l1.793 1.793 8.5-8.5c-0.187-0.392-0.293-0.83-0.293-1.293 0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3c-0.463 0-0.902-0.105-1.293-0.293l-8.5 8.5 1.793 1.793c0 0 10.462-7.608 21.183-9.84 0.001-0 0.001-0 0.002-0.001 0.714-0.157 0.831-0.612 0.898-1.159l0.686-8.231-8.538-8.539z",fill:"currentColor",key:2})])}o.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=o,o.default=o},586:function(e,t,r){var n=r(7294);function o(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"user"),n.createElement("path",{d:"M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z",fill:"currentColor",key:1})])}o.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=d420273aaa69b3f7bf3f59d670c890ce495f01ee-14ad0fae049e4362617c.js.map