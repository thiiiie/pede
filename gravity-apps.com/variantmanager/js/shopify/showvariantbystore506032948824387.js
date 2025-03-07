
loaderMode = "1";
loadMoreBtnText = "Carregar mais";
showmanualvariants = false;
variantsByCollection = {};
collectionForAuto = {};
collectionForAuto["418014200026"] = 1;
collectionForAuto["231118340258"] = 1;
collectionForAuto["233909878946"] = 1;
collectionForManu = {};
collectionForManu["405994569946"] = 1;
gsvSecondImage = {}; variantsenabled = {}; 



// VERSION 2.0

var isImageSwapEnabled = "1";
var gsSubstituteImagesContainer = {};
gsvariantnames = true;

gsProductVariantImages = {};
//createVariantListing(productNode, image
specialTheme = 0;
hasSlickInCollection = false;
specialThemeInterval = null;
oncego = false;
forceActionOnLoad = false;
additionalParentContainer = ' ';
lastCreateProductUrl = '';
gsCollectionLength = 0;
XMLHttpRequest.prototype.gsOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.gsSend = XMLHttpRequest.prototype.send;

try {
} catch(err) {}

lastGSProductImageClass = '';
opacityClassFixed = false;
variantsAddedCnt = 0;
gsHadLoadRun = false;
gsMultiThreadPrevInt = 1;
baselPositionFixerRun = false;
gsFoundColorTags = [];
runThemeCollection = true;
gsChanger = 1;
imagealternatepresent = false;
isTurboP = false;

String.prototype.fastReplaceGS=function(str, newstr) {
    return this.split(str).join(newstr);
};

nextColumnCandidate = 1;
nextRowCandidate = 0;

/*
LICENSE

All rights to this code belong to Gravity Software. Do not copy, do not redistribute. This code must remain on the servers that belong to Gravity Software. Copying this code to Shopify server or any other servers violates the license. Violation Fee = $ 10 000.  

*/
window.gsItemClass = '';
exludedSections = []; 
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, fromIndex) {
        if (fromIndex == null) {
            fromIndex = 0;
        } else if (fromIndex < 0) {
            fromIndex = Math.max(0, this.length + fromIndex);
        }
        for (var i = fromIndex, j = this.length; i < j; i++) {
            if (this[i] === obj)
                return i;
        }
        return -1;
    };
}

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

pixelRatio = window.devicePixelRatio || 1;

pixelRatio = Math.ceil(pixelRatio);

if(pixelRatio > 1 && pixelRatio < 2) {
pixelRatio = 2;
}

if(pixelRatio > 2 && pixelRatio < 3) {
pixelRatio = 3;
}

if(pixelRatio > 3) {
pixelRatio = 3;
} 

if(pixelRatio != 2 && pixelRatio != 3) {
pixelRatio = 1;
}


(function(){
    if ('undefined' == typeof jQEncapsulated) {

        /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
        !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});


        jQEncapsulated = jQuery.noConflict(true);

        (function ($) {
            /**
             * Get CSS styles plugins
             */
            $.fn.getStyles = function(only, except) {

                // the map to return with requested styles and values as KVP
                var product = {};

                // the style object from the DOM element we need to iterate through
                var style;

                // recycle the name of the style attribute
                var name;

                // if it's a limited list, no need to run through the entire style object
                if (only && only instanceof Array) {

                    for (var i = 0, l = only.length; i < l; i++) {
                        // since we have the name already, just return via built-in .css method
                        name = only[i];
                        product[name] = this.css(name);
                    }

                } else {

                    // prevent from empty selector
                    if (this.length) {

                        // otherwise, we need to get everything
                        var dom = this.get(0);

                        // standards
                        if (window.getComputedStyle) {

                            // convenience methods to turn css case ('background-image') to camel ('backgroundImage')
                            var pattern = /\-([a-z])/g;
                            var uc = function (a, b) {
                                return b.toUpperCase();
                            };
                            var camelize = function(string){
                                return string.replace(pattern, uc);
                            };

                            // make sure we're getting a good reference
                            if (style = window.getComputedStyle(dom, null)) {
                                var camel, value;
                                // opera doesn't give back style.length - use truthy since a 0 length may as well be skipped anyways
                                if (style.length) {
                                    for (var i = 0, l = style.length; i < l; i++) {
                                        name = style[i];
                                        camel = camelize(name);
                                        value = style.getPropertyValue(name);
                                        product[camel] = value;
                                    }
                                } else {
                                    // opera
                                    for (name in style) {
                                        camel = camelize(name);
                                        value = style.getPropertyValue(name) || style[name];
                                        product[camel] = value;
                                    }
                                }
                            }
                        }
                        // IE - first try currentStyle, then normal style object - don't bother with runtimeStyle
                        else if (style = dom.currentStyle) {
                            for (name in style) {
                                product[name] = style[name];
                            }
                        }
                        else if (style = dom.style) {
                            for (name in style) {
                                if (typeof style[name] != 'function') {
                                    product[name] = style[name];
                                }
                            }
                        }
                    }
                }

                // remove any styles specified...
                // be careful on blacklist - sometimes vendor-specific values aren't obvious but will be visible...  e.g., excepting 'color' will still let '-webkit-text-fill-color' through, which will in fact color the text
                if (except && except instanceof Array) {
                    for (var i = 0, l = except.length; i < l; i++) {
                        name = except[i];
                        delete product[name];
                    }
                }

                // one way out so we can process blacklist in one spot
                return product;

            };


            $.fn.inlineStyle = function (prop) {
                var styles = this.attr("style"),
                    value;
                styles && styles.split(";").forEach(function (e) {
                    var style = e.split(":");
                    if ($.trim(style[0]) === prop) {
                        value = style[1];
                    }
                });
                return value;
            };

            $.fn.hasInlineStyle = function (prop) {
               var value = $(this).inlineStyle(prop);
               if(typeof value == 'undefined' || typeof value == null || !value){
                   return false;
               }
               return true;
            };

            $.fn.hasInheritedStyle = function (prop) {

                var value = $(this).getStyles([prop]);

                if(typeof value == 'undefined' || value == null || value == 'none' || !value){
                    return false;
                }
                return true;
            };
        }(jQEncapsulated));
    }
})();


(function($){

    window.ImageSwap = function(){
        var that = this;

        /**
         *
         * @param needle
         * @returns {boolean}
         */
        that.isPageUrlContains = function(needle){

            var currentPageUrl = that.getPageUrl();
            return isInString(needle, currentPageUrl);
        };

        /**
         * Gers page url
         * @returns {*|jQuery}
         */
        that.getPageUrl = function(){
            var currentUrl = $(location).attr('href');
            return currentUrl;
        };

        /**
         *
         * @returns {boolean}
         */
        that.isProductPage = function(){

            if((that.isPageUrlContains('collections') && that.isPageUrlContains('products')) ||
                that.isPageUrlContains('products')){
                return true;
            }
            return false;
        };

        /**
         *
         * @returns {boolean}
         */
        that.isCollectionsPage = function(){
            if(that.isPageUrlContains('collections') && !that.isPageUrlContains('products')){
                return true;
            }
            return false;
        };

        /**
         *
         * @returns {boolean}
         */
        that.isSearchPage = function(){

            if(that.isPageUrlContains('search')){
                return true;
            }
            return false;
        };

        that.getProductNameFromUrl = function(productUrl){

			try {
			    var splitUrl1 = productUrl.split("/products/");
			    var productNameF = splitUrl1[1];

			    if(productNameF.indexOf("#")) {
			        var splitUrl2 = productNameF.split("#");
			        productNameF = splitUrl2[0];
			    }

			    if(productNameF.indexOf("?")) {
			        var splitUrl3 = productNameF.split("?");
			        productNameF = splitUrl3[0];
			    }
			} catch(err) {

			return 'notexistsprogs';

			}

			   return decodeURIComponent(productNameF);
        };

        that.getCollectionNameFromUrl = function(collectionUrl){
            if(!isInString('collections', collectionUrl)){
                return false;
            }

            var inputRegExpPart1 = '^(http|).*?\/collections\/';
            var inputRegexpMatchPart = '[A-Za-z0-9\-]{1,}';
            var inputRegexpPart2 = '([\\?\\#\\&].*|)';

            var regex = new RegExp(inputRegExpPart1 + inputRegexpMatchPart + inputRegexpPart2, 'g');

            if(!regex.test(collectionUrl)){
                return false;
            }

            var regexReplace = new RegExp(inputRegExpPart1 + "(" + inputRegexpMatchPart + ")" + inputRegexpPart2, 'g');

            return collectionUrl.replace(regexReplace, "$2");
        };

        that.getImagePostfixByRatio = function(){

            var result = "";

            if(pixelRatio > 1){
                result = "@" + pixelRatio + "x.progressive";
            }

            return result;
        };

        that.getUserDefinedImageByProductHandle = function(productHandle){

            if(typeof gsSubstituteImagesContainer == 'undefined' || !gsSubstituteImagesContainer || typeof gsSubstituteImagesContainer != 'object'){
                return false;
            }

            if(productHandle in gsSubstituteImagesContainer){
                return gsSubstituteImagesContainer[ productHandle ];
            }

            return false;
        };

        that.getProductDetailsByProductHandle = function(productHandle, handlerAction){

            if(productHandle == null || typeof productHandle != 'string' || !productHandle){
                return false;
            }

            if(handlerAction == null || typeof handlerAction != 'function'){
                return false;
            }

            var requestUrl = window.location.origin + "/products/" + productHandle + ".js";

            try {
                $.ajax(requestUrl, {
                    'contentType' : 'application/json',
                    'dataType' : 'json',
                    'method' : "GET",
                    'success' : function(data){

                        if(!data || typeof data != 'object'){
                            return false;
                        }
                        //var output = JSON.parse(data);

                        handlerAction(data);
                    }
                });
            } catch(error){
                //console.error(error);
            }

            return false;
        };

        /**
         *
         * @param needles
         * @param string highstack
         * @returns {boolean}
         */
        var isInString = that.isInString = function(needles, highstack){
            var needleContainer = [];
            if(typeof needles == 'object' && needles instanceof Array){
                needleContainer = needles;
            } else if(typeof needles == 'string') {
                needleContainer.push(needles);
            } else {
                return false;
            }

            for(var needleItem in needles){
                if (highstack.indexOf(needleContainer[needleItem]) >= 0){
                    return true;
                }
            }
            return false;
        };

        /**
         *
         * @returns {boolean}
         */
        var checkProductsInputContainer = function(){
            if(typeof gsCollection == 'undefined' || !gsCollection){
                return false;
            }

            return true;
        };

        /**
         *
         * @returns {object | boolean}
         */
        var getProductsInputContainer = function(){
            if(!checkProductsInputContainer()){
                return false;
            }

            return gsCollection;
        };

        var getProductImages = function(productId){
            var productsInputContainer = getProductsInputContainer();

            if(!!productId && productId in productsInputContainer){
                return productsInputContainer[ productId ];
            }

            return false;
        };

	var replacePricesInNode = function(productElGS, comparePrice, variantPrice, replaceNow) {
		if(replaceNow) {
			replacePricesInNodeX(productElGS, comparePrice, variantPrice, replaceNow);
		}
		else {
  		  setTimeout(function()
  		  {
			replacePricesInNodeX(productElGS, comparePrice, variantPrice, replaceNow);			
  		  }, 500);				
		}
	}

	var replacePricesInNodeX = function(productElGS, comparePrice, variantPrice, replaceNow) {
		try {

		if(productElGS.find('.grid-product__price--original').length > 0 && productElGS.find('.grid-product__price').length > 0) {		
				var comparePriceNode = $($(productElGS).find(".grid-product__price--original").get(0));
				var salePriceNode = $($(productElGS).find(".grid-product__price").get(0));
				comparePriceNode.html($(comparePriceNode).html().replace(getPriceFloat(comparePriceNode.text()).toFixed(2), getPriceFloat(comparePrice).toFixed(2)));	
				var rememberCompareNode = comparePriceNode.text();
				 comparePriceNode.text('');
		 		salePriceNode.html($(salePriceNode).html().replace(getPriceFloat(salePriceNode.text()).toFixed(2), getPriceFloat(variantPrice).toFixed(2)));	
				console.debug(rememberCompareNode);
				comparePriceNode = $($(productElGS).find(".grid-product__price--original").get(0));
				comparePriceNode.html(rememberCompareNode);
				return;
		}


        var priceNodes = [];
        //priceNodes.push(needles);		


if($(productElGS).find(".money, .price").find(':contains(",")').not(':has(:contains(","))').not('.gsContent').not(':empty').not('style').not('script').not('noscript').length == 0) {
 		$(productElGS).find(':contains(".")').not(':has(:contains("."))').not('.gsContent').not(':empty').not('style').not('script').not('noscript').each(function () {
			
			if(!$(this).hasClass("gsContent")) {			
			var cntElFound = $(this).text().split(".").length;
			if(cntElFound == 2) {
				priceNodes.push($(this));
			}
			}
		});
		
		if(priceNodes.length == 0) {
	 		$(productElGS).find(':contains(".")').not('.gsContent').not(':empty').not('style').not('script').not('noscript').each(function () {
			
				if(!$(this).hasClass("gsContent")) {			
				var cntElFound = $(this).text().split(".").length;
				if(cntElFound == 2) {
					priceNodes.push($(this));
				}
				}
			});
			
		}
		}
					
		if(specialTheme == 20 && ($(productElGS).find(".grid-link__sale_price").length > 0) && ($(productElGS).find(".grid-link__meta").length > 0)) {
				priceNodes = [];
				priceNodes.push($($(productElGS).find(".grid-link__meta").get(0)));
				priceNodes.push($($(productElGS).find(".grid-link__sale_price").get(0)));			
		}			
		
		if(priceNodes.length > 0) {

			var gsVPrice = priceNodes[0];
			var gsVPriceVal = getPriceFloat(priceNodes[0].text());


		if(priceNodes.length > 1) {
			var gsVPriceTmp = priceNodes[1];
			var gsVPriceTmpVal = getPriceFloat(priceNodes[1].text());	
			
			if(gsVPriceTmpVal > 0) {
				
				var gsVPriceCompare = null;
				var gsVPriceCompareVal = null;
				
				if(gsVPriceTmpVal >= gsVPriceVal) {
					gsVPriceCompare = gsVPriceTmp;
					gsVPriceCompareVal = gsVPriceTmpVal;
				}
				else {					
					gsVPriceCompare = gsVPrice;
					gsVPriceCompareVal = gsVPriceVal;
					gsVPrice = gsVPriceTmp;
					gsVPriceVal = gsVPriceTmpVal;
				}
				
				var comparePriceV = getPriceFloat(comparePrice).toFixed(2);
								
				if(comparePriceV && (comparePriceV != String(NaN))) {
					if(comparePriceV == '0.00') {
						$(gsVPriceCompare).html($(gsVPriceCompare).html().replace(gsVPriceCompareVal.toFixed(2), getPriceFloat(variantPrice).toFixed(2)));		
						$(gsVPriceCompare).addClass('gsContent');
					}
					else {
						$(gsVPriceCompare).html($(gsVPriceCompare).html().replace(gsVPriceCompareVal.toFixed(2), comparePriceV));													
						$(gsVPriceCompare).addClass('gsContent');
					}
				}
				else {
					if(!($(gsVPriceCompare).hasClass('gsTitle') || $(gsVPriceCompare).find('.gsTitle').length > 0)) {
					$(gsVPriceCompare).remove();
					}
				}
			}								
		}
		//$(gsVPriceCompare).addClass('gsContent');
		
		
if(specialTheme == 20 && ($(productElGS).find(".grid-link__sale_price").length > 0) && ($(productElGS).find(".grid-link__meta").length > 0)) {
	try {
		var gsSalePrice = $($(productElGS).find(".grid-link__sale_price").get(0)).html();
		$($(productElGS).find(".grid-link__sale_price").get(0)).html("");
	} catch(error){
	}	
		$(gsVPrice).html($(gsVPrice).html().replace(gsVPriceVal.toFixed(2), getPriceFloat(variantPrice).toFixed(2)));

		try {			
			$($(productElGS).find(".grid-link__sale_price").get(0)).html(gsSalePrice);
		} catch(error){
		}	


}
else {				
		$(gsVPrice).html($(gsVPrice).html().replace(gsVPriceVal.toFixed(2), getPriceFloat(variantPrice).toFixed(2)));
}		
		
		}
		else {
			if(priceNodes.length == 0) {
		
				$(productElGS).find(':contains(",")').not(':has(:contains(","))').not('.gsContent').not(':empty').not('style').not('script').not('noscript').each(function () {
			
					if(!$(this).hasClass("gsContent")) {			
					var cntElFound = $(this).text().split(",").length;
					if(cntElFound == 2) {
						priceNodes.push($(this));
					}
					}
				});
					
			}
			
			var gsVPrice = priceNodes[0];
			var gsVPriceVal = getPriceFloat(priceNodes[0].text());
			
			
			if(priceNodes.length > 1) {
				var gsVPriceTmp = priceNodes[1];
				var gsVPriceTmpVal = getPriceFloat(priceNodes[1].text());	
			
				if(gsVPriceTmpVal > 0) {
				
					var gsVPriceCompare = null;
					var gsVPriceCompareVal = null;
				
					if(gsVPriceTmpVal >= gsVPriceVal) {
						gsVPriceCompare = gsVPriceTmp;
						gsVPriceCompareVal = gsVPriceTmpVal;
					}
					else {					
						gsVPriceCompare = gsVPrice;
						gsVPriceCompareVal = gsVPriceVal;
						gsVPrice = gsVPriceTmp;
						gsVPriceVal = gsVPriceTmpVal;
					}
				
					var comparePriceV = getPriceFloat(comparePrice).toFixed(2);
				
					if(comparePriceV && (comparePriceV != String(NaN))) {
						if(comparePriceV == '0.00') {
							$(gsVPriceCompare).html($(gsVPriceCompare).html().replace(String(gsVPriceCompareVal.toFixed(2)).replace(".", ","), String(getPriceFloat(variantPrice).toFixed(2)).replace(".", ",")));		
							$(gsVPriceCompare).addClass('gsContent');
						}
						else {
							$(gsVPriceCompare).html($(gsVPriceCompare).html().replace(String(gsVPriceCompareVal.toFixed(2)).replace(".", ","), String(comparePriceV)).replace(".", ","));													
							$(gsVPriceCompare).addClass('gsContent');
						}
					}
					else {
						if(!($(gsVPriceCompare).hasClass('gsTitle') || $(gsVPriceCompare).find('.gsTitle').length > 0)) {
						$(gsVPriceCompare).remove();
						}
					}
				}								
			}
			$(gsVPriceCompare).addClass('gsContent');
		
			$(gsVPrice).html($(gsVPrice).html().replace(String(gsVPriceVal.toFixed(2)).replace(".", ","), String(getPriceFloat(variantPrice).toFixed(2)).replace(".", ",")));						
			
		}
		
		}
		catch(error) { }
				
	}
	
	var getPriceFloat = function(nodeHtml) {
		try {
			return parseFloat(nodeHtml.substring(indexOfFirstDigit(nodeHtml)).replace(",", "."));
		} catch(error){
		}
		return 0;		
	}

	function indexOfFirstDigit(input) {
	  let i = 0;
	  for (; input[i] < '0' || input[i] > '9'; i++);
	  return i;
	}

		var replaceTextInNode = function(productElGS, searchText, replaceText, replaceNow) {
			
			if(replaceNow) {
	  			$(productElGS).find(':contains("' + searchText.replace(/\"/g,'\\"') + '")').not(':has(:contains("' + searchText.replace(/\"/g,'\\"') + '"))').not('.gsContent').each(function () {


						var replacementTitleSp = replaceText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	  					$(this).html($(this).html().replace(searchText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'), replacementTitleSp));
						if($(this).html().indexOf(replacementTitleSp) == -1) {
						$(this).html($(this).html().replace(searchText, replaceText));
						}
						$(this).addClass("gsContent").addClass("gsTitle");

  				});					
			}
			else {
	  		  setTimeout(function()
	  		  {
  	  			$(productElGS).find(':contains("' + searchText.replace(/\"/g,'\\"') + '")').not(':has(:contains("' + searchText.replace(/\"/g,'\\"') + '"))').not('.gsContent').each(function () {
						var replacementTitleSp = replaceText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	  					$(this).html($(this).html().replace(searchText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'), replacementTitleSp));
						if($(this).html().indexOf(replacementTitleSp) == -1) {
						$(this).html($(this).html().replace(searchText, replaceText));
						}
						$(this).addClass("gsContent").addClass("gsTitle");
   				});						
	  		  }, 500);				
			}			
		}		
		
		
		var replaceTextInNodeF = function(productElGS, searchText, replaceText, replaceNow) {
			
			if(replaceNow) {
	  			$(productElGS).find(':contains("' + searchText.replace(/\"/g,'\\"') + '")').not(':has(:contains("' + searchText.replace(/\"/g,'\\"') + '"))').not('.gsContent').each(function () {
	  					$(this).html($(this).html().replace(searchText, replaceText));
  				});					
			}
			else {
	  		  setTimeout(function()
	  		  {
  	  			$(productElGS).find(':contains("' + searchText.replace(/\"/g,'\\"') + '")').not(':has(:contains("' + searchText.replace(/\"/g,'\\"') + '"))').not('.gsContent').each(function () {
  	  					$(this).html($(this).html().replace(searchText, replaceText));
   				});						
	  		  }, 500);				
			}			
		}			
		

        var searchProductsAction = function(gsContainer){


            //var products = getProductsInputContainer();

            var completitionClassMark = 'image-swap-completed';
            //var handlerCounter = 0;


            /**
             *
             * @param productHandle
             * @param node
             * @returns {boolean}
             */
			 
			 
			var prepareParentForVariant = function(productClone, imageNode) {


try {

jQInf(productClone).removeClass("hover-image");

} catch(error){}

try {

jQInf(productClone).removeClass("product-card--show-secondary-media");

} catch(error){}

try {
jQInf(productClone).removeClass("has-secondary-image-swap");
} catch(error){}

try {
jQInf(productClone.find('.hover-image').get(0)).remove();
} catch(error){}

				try {

if(productClone.find('div[class*="img-effect"]').length > 0) {
jQInf(productClone.find('div[class*="img-effect"]').get(0)).removeClass('img-effect');
try {
jQInf(productClone.find('.hover-image').get(0)).remove();
} catch(error){}
}

if(productClone.find('div[class*="image--with-secondary"]').length > 0) {
jQInf(productClone.find('div[class*="image--with-secondary"]').get(0)).removeClass('image--with-secondary');
}


	try {

if(productClone.find('*[class*="product-item__image-wrapper--with-secondary"]').length > 0) {
jQInf(productClone.find('*[class*="product-item__image-wrapper--with-secondary"]').get(0)).removeClass('product-item__image-wrapper--with-secondary');
}
} catch(error){}

if(productClone.find('.ProductItem__ColorSwatchList').length > 0) {
         $(productClone.find('.ProductItem__ColorSwatchList').get(0)).remove();
         }

if(productClone.find('img[class*="image_thumb_swap"]').length > 0) {
         $(productClone.find('img[class*="image_thumb_swap"]').get(0)).remove();
         }

				if(productClone.find('img[class*="secondary"]').length > 0) {
				$(productClone.find('img[class*="secondary"]').get(0)).remove();
				$(productClone.find('div[class*="swap-true"]').get(0)).removeClass('swap-true');
				}
                            } catch(error){
                        }
		

				try {
					var pandaSwatches = productClone.find('.productitem--image-alternate');
					if(pandaSwatches.length > 0) {
						$(pandaSwatches.get(0)).remove();
					}
					
				} catch(error){
        		}

				try {
					var pandaSwatches = productClone.find('.panda-swatches-coll-cont');
					if(pandaSwatches.length > 0) {
						$(pandaSwatches.get(0)).remove();
					}
					
				} catch(error){
        		}	
				
				if(specialTheme == 42) {
					return null;
				}
				
				if(specialTheme == 35) {
					try {
						var gsDoubleImages = productClone.find('.product-item__bg__under');
						if(gsDoubleImages.length > 0) {
							$(gsDoubleImages.get(0)).remove();
						}
						
					} catch(error){
	        		}
				}
			

				try {
					var viewaltel =  productClone.find(".view-alt");
					if(viewaltel.length > 0) {
						$(viewaltel.get(0)).removeClass('view-alt');
					}
	
                                } catch(error){
                                }

	
				if(!isTurboP) {

				try {
				productClone.removeClass("aos-init");
				productClone.removeClass("aos-animate");
				} catch(error){
        			}
			
				try {					
					var selectOptionBCCol =  productClone.find(".bc-addtocart-btn.bc-addtocart-select-options");
					if(selectOptionBCCol.length > 0) {
						selectOptionBC = $(selectOptionBCCol.get(0));
						selectOptionBC.attr('type', 'submit');
						selectOptionBC.attr('onclick', 'return true;');
						selectOptionBC.html('<span>Add to cart</span>');
					}					
				} catch(error){
        			}


                                try {
                                        var imgCont =  productClone.find(".swap-true .image__container");
                                        if(imgCont.length > 1) {
                                        	 $(productClone.find(".swap-true").get(0)).removeClass('swap-true');
						$(imgCont.get(1)).remove();
					}
                                } catch(error){
                                }
	
				if(specialTheme == 32) {
 				// COLOR SWATCHES FOR TRADEMARK
				
				var colorVariantsGS = productClone.find(".product-item__available-colors");
				if(colorVariantsGS.length > 0) {
				colorVariantsGS.remove();
				}
				}
				
				
				if(specialTheme == 18) {
					var cloneImages = productClone.find("img");
					if(cloneImages.length > 1) {
					$(cloneImages.get(1)).remove();
					}
				}						
				
				try {
				var swatchElementsGS =  productClone.find(".swatch-element");
				if(swatchElementsGS.length > 0) {
				swatchElementsGS.remove();
				}
				} catch(error){
    			}
										
				if(productClone.find(".reveal .hidden").length > 0) {
					productClone.find(".reveal .hidden").remove();
				}
				
				var loazyloaders = productClone.find(".lazyloading");
				if(loazyloaders.length > 0) {
					var mainlazyloader = $(loazyloaders.get(0));
					mainlazyloader.removeClass("lazyloading");
					mainlazyloader.addClass("lazyloaded");
				}

				loazyloaders = productClone.find(".lazyload");
				if(loazyloaders.length > 0) {
					var mainlazyloader = $(loazyloaders.get(0));
					mainlazyloader.removeClass("lazyload");
					mainlazyloader.addClass("lazyloaded");
				}								
				
				var imageNodeParent = $(imageNode).parent();
				
				try {
				if(((typeof imageNodeParent.css("max-height") == typeof undefined) || imageNodeParent.css("max-height").toLowerCase().indexOf("none") != -1 || imageNodeParent.css("max-height").toLowerCase().indexOf("unset") != -1) && (imageNodeParent.css("height").length >= 2)) {
					if(imageNodeParent.height() > 140) {
						imageNodeParent.css("max-height", imageNodeParent.css("height"));
					}
				}
				} catch(error){
				}				

				var gsSecondaryImageF = productClone.find('.grid-product__secondary-image');
				if(gsSecondaryImageF.length > 0) {
					$(gsSecondaryImageF.get(0)).remove();
				}
				
								
				var additionalElWithBg = productClone.find('*[style*="/products/"]');
				if(additionalElWithBg.length > 0) {
					return $(additionalElWithBg.get(0));
				}						
				
				var additionalElWithBg = productClone.find('*[data-bgset*="/products/"]');
				if(additionalElWithBg.length > 0) {
					return $(additionalElWithBg.get(0));
				}							
			

				try {				
				if(imagealternatepresent) {
				var gsSecondaryImageF = productClone.find('.ProductItem__Image--alternate').not(".productitem--image-alternate");
				if(gsSecondaryImageF.length > 0) {
					var alternativeImgLink = imageNode.parents(".ProductItem__ImageWrapper--withAlternateImage");
					if(alternativeImgLink.length > 0) {
						$(alternativeImgLink.get(0)).removeClass("ProductItem__ImageWrapper--withAlternateImage");
						$(gsSecondaryImageF.get(0)).remove();
					}
				}
				}
								
				if(imageNode.hasClass('Image--lazyLoading')) {
					imageNode.removeClass("Image--lazyLoading");
					imageNode.addClass("Image--lazyLoaded");
				}
				} catch(error){
				}		
				}
				return null;
								
			}
			 
			var createVariantListing = function(topNode, imageNode, exactWidth, variantImage, variantId, replaceNow, additionalElWithBg, variantCnt){
			
//jQInf("html").css("opacity", '1');

try {

var ttdotPos = variantImage.lastIndexOf(".");
	
				if(exactWidth > 200) {
					//variantImage = variantImage.replace(/(.*?)_256x(\.(jpg|gif|png|bmp))(\?.*|)$/, "$1" + "_" + exactWidth + "x" + "$2");
					variantImage = variantImage.replace('_256x', "_" + exactWidth + "x");
				}

} catch(error){ return false; }

				var variantImageUnprogressive = variantImage;
				
				
				if(pixelRatio > 1) {
		        var dotPos = variantImage.lastIndexOf(".");

		        var ext1 = variantImage.substr(dotPos);
		        var ext2 = variantImage.substr(0, dotPos);
				variantImageUnprogressive = ext2 + '@' + pixelRatio + 'x' + ext1;
				variantImage = ext2 + '@' + pixelRatio + 'x' + ext1;
				}
				
								
				if($(imageNode)[0].hasAttribute('src')) {
					$(imageNode).attr('src', variantImage);
				}
				if($(imageNode)[0].hasAttribute('srcset')) {
                	$(imageNode).attr('srcset', variantImage);
				}
				if($(imageNode)[0].hasAttribute('data-src')) {
                	$(imageNode).attr('data-src', variantImage);
				}
				if($(imageNode)[0].hasAttribute('data-srcset')) {
					$(imageNode).attr('data-srcset', variantImage);
				}				
				
				if(hasSlickInCollection) {
					topNode.find('img[src*="/products/"]').each(function(index) {
						$(this).attr('src', variantImage);
					});
				}
				
				if(additionalElWithBg != null) {
					imageNode = additionalElWithBg;
				}
				

				
				if(!$(imageNode).is( "img" )) {

					var isActualStyle = false;

					try {
					if($(imageNode).css('background-image').indexOf("/products/") > 0 && $(imageNode).css('background-image').indexOf('//cdn.shopify.com/') > 0) {
						isActualStyle = true;
						var gsbackgroundimg = $(imageNode).css('background-image');
						var tmpoldgsbackgroundimg = gsbackgroundimg.split('//cdn.shopify.com/');
						var posdotoldgsbackgroundimg = tmpoldgsbackgroundimg[1].lastIndexOf('.');
						var oldgsbackgroundimg = tmpoldgsbackgroundimg[1].substring(0, (posdotoldgsbackgroundimg + 4));
						oldgsbackgroundimg = '//cdn.shopify.com/' + oldgsbackgroundimg;
						$(imageNode).css('background-image', $(imageNode).css('background-image').replace(oldgsbackgroundimg.replace('https:', ''), variantImageUnprogressive.replace('https:', '')));
								
					}
					} catch(error){ }	
					
					
					try {
					if($(imageNode).css('background').indexOf("/products/") > 0 && $(imageNode).css('background').indexOf('//cdn.shopify.com/') > 0) {
						isActualStyle = true;						
						var gsbackgroundimg = $(imageNode).css('background');
						var tmpoldgsbackgroundimg = gsbackgroundimg.split('//cdn.shopify.com/');
						var posdotoldgsbackgroundimg = tmpoldgsbackgroundimg[1].lastIndexOf('.');
						var oldgsbackgroundimg = tmpoldgsbackgroundimg[1].substring(0, (posdotoldgsbackgroundimg + 4));
						oldgsbackgroundimg = '//cdn.shopify.com/' + oldgsbackgroundimg;
						$(imageNode).css('background', $(imageNode).css('background').replace(oldgsbackgroundimg.replace('https:', ''), variantImageUnprogressive.replace('https:', '')));
								
					}
					} catch(error){ }			
					
					if(!isActualStyle) {
						try {
						$(imageNode).css('background-image', 'url("' + variantImage + '")' );
						$(imageNode).removeAttr("data-bgset");	
						} catch(error){ }
					}
								
					
				}
				
				
				var productClone = null;
				if(specialTheme == 35) {
					productClone = jQuery(topNode).clone(true, true);
				}
				else {
					 productClone = $(topNode).clone();
				//	productClone = $(topNode).clone();
				}
			
			try {
				jQInf(productClone).find("source").each(function(index) {
					
					jQInf(this).attr("gsimg", variantImage).attr("data-srcset", variantImage).attr("srcset", variantImage); 
					//console.debug(productClone);
	
				});
			} catch(err) {}

	
	

try {

        if(productClone.find('.pro-img-block .reveal').length > 0) {
                jQInf(productClone.find('.pro-img-block .reveal').get(0)).removeClass('reveal');
        }
} catch(err) {}
	
								
				if(isTurboP) {
					try {
					$($(productClone).find('.quick_shop').get(0)).on( 'click', function(e) {
						//console.debug(variantId);		
						// .swatch-element data-id="18124709822515
						jQuery(jQuery(jQuery(".gsproduct-selector-" + jQuery(jQuery(this).parents('.gsProductAlias').get(0)).attr('product-selector') ).get(0)).find('.quick_shop').get(0)).trigger("click");		
						//console.debug(jQuery('.swatch-element[data-id*="' + variantId + '"]'));
								
						jQuery('.swatch-element[data-id*="' + variantId + '"] label').each(function(index) {
							
			 		jQuery(this).trigger("click");
					});
								
								
						setTimeout(function()
						{			
							try {							
							jQuery('.swatch-element[data-id*="' + variantId + '"] label').each(function(index) {
								jQuery(this).trigger("click");
						});
						} catch(error){
						}						
						
					}, 1000);							
						
						return false;
					});

				} catch(error){
				}					
					
				}
				
				if(specialTheme == 33) {
					$(productClone.find("figure").get(0)).attr("style", 'background-image: url("' + variantImage + '");');
				}							
				

				if(specialTheme == 36) {
					var awithBackground = $(productClone.find('.jas_bg').get(0));
					awithBackground.attr("style", 'background-image: url("' + variantImage + '");');
					gsChanger++;
					awithBackground.addClass("gsChanger" + gsChanger);
					$("body").append("<style> .gsChanger" + gsChanger +  ' { background-image: url("' + variantImage + '") !important; } </style>');
				}

try {
variantTitleNode = $($("p[varianttitleid=" + variantId + "]").get(0));
} catch(error){
}
				

				if(window.gsvariantnames) {
				try {
					
					
					
					gsFinalTitle = variantTitleNode.attr('variantTitle');
					if(variantTitleNode.attr('optiontwo').length > 0) {

					if((variantTitleNode.attr('sizeoptionnr') == '1') && ($("p[optionuidtwo='" + $.escapeSelector(variantTitleNode.attr("optionuidtwo")) + "']").length == 1)) {
						
							var gsSplitTitle = gsFinalTitle.split(' / ');
							gsFinalTitle = gsSplitTitle[1];
						
					}
					else {

					if($("p[optionuid='" + $.escapeSelector(variantTitleNode.attr("optionuid")) + "']").length == 1) {
						var gsSplitTitle = gsFinalTitle.split(' / ');
						gsFinalTitle = gsSplitTitle[0];
					}
					else {
					
						if($("p[optionuidtwo='" + $.escapeSelector(variantTitleNode.attr("optionuidtwo")) + "']").length == 1) {
							var gsSplitTitle = gsFinalTitle.split(' / ');
							gsFinalTitle = gsSplitTitle[1];
						}					
					
					}
					}
					}
					
					gsFinalTitle = gsFinalTitle.replace(' / ONE SIZE', '', gsFinalTitle);
				

			             try {
                        if(window.location.href.indexOf("filter.v.option.color") != -1) {

                                                            //console.debug(window.location.href.replaceAll("+", " "));

                        if(window.location.href.replaceAll("+", " ").indexOf(gsFinalTitle) == -1)
                        {
                                                               return;

                        }
                        }
} catch(error){

}
	
					replaceTextInNode(productClone, variantTitleNode.attr('originaltitle'), variantTitleNode.attr('originaltitle') + ' - ' + gsFinalTitle, replaceNow);


					if(specialTheme == 42) {
						
						var gsFinalTitleL = gsFinalTitle;
						
						var swapTrue = productClone.find('.swap-true');
						if(swapTrue.length > 0) {
							$(swapTrue.get(0)).removeClass('swap-true');
						}
						try {
							$($(productClone).find('.quick_shop').get(0)).on( 'click', function(e) {
								try {							
								jQuery('.swatch-element[data-value*="' + gsFinalTitleL + '"] label').each(function(index) {
									jQuery(this).trigger("click");
							});
							} catch(error){
							}									
							});			
							
							
							setTimeout(function()
							{			
								try {										
									$($(productClone).find('.quick_shop').get(0)).on( 'click', function(e) {
										try {							
										jQuery('.swatch-element[data-value*="' + gsFinalTitleL + '"] label').each(function(index) {
											jQuery(this).trigger("click");
									});
									} catch(error){
									}									
									});											
									
							} catch(error){
							}						
						
							}, 1000);								
									
						} catch(error){
						}		
					}

	   			 if(specialTheme == 35) {
					 
					 try {
					 var gsFinalTitleL = gsFinalTitle;
	   		     $(productClone).find('.trigger-quick-view').on( 'click', function(e) {
					 var selectorTitle = gsFinalTitleL.replace(variantTitleNode.attr('originaltitle'), '');
					 var gsModalName = $(this).data('modal');
			setTimeout(function()
			{										
	 		jQuery(jQuery('#' + gsModalName).find('input[value*="' + selectorTitle + '"]').parent().find("label").get(0)).trigger("click");
		}, 600);							
					
	   		     });			
            	} catch(error){
            	}			
	   			 }	

					
				} catch(error){
					
            	}				
				}				
			
				try {
					variantPriceNode = $($("p[variantpriceid=" + variantId + "]").get(0));
					
					replaceTextInNodeF(productClone, 'from', '', replaceNow);
					replaceTextInNodeF(productClone, 'From', '', replaceNow);
					//console.debug(variantTitleNode.attr('originaltitle'));
					
					var variantPrice = '';
					try {
					variantPrice = jQInf(variantPriceNode.attr('variantPrice')).text();
					} catch(error){ }
					
					if(variantPrice == "") {
						variantPrice = variantPriceNode.attr('variantPrice');
					}
					
					
					var originalprice = '';
					try {
					originalprice = jQInf(variantPriceNode.attr('originalprice')).text();
					} catch(error){ }
					
					if(originalprice == "") {
						originalprice = variantPriceNode.attr('originalprice');
					}					
				
					var comparePrice = '';
				
					try {
					comparePrice = jQInf(variantPriceNode.attr('comparePrice')).text();
					} catch(error){ }

					if(comparePrice == "") {
						comparePrice = variantPriceNode.attr('comparePrice');
					}							
					
					var originalcompprice = '';
					
					try {
					originalcompprice = jQInf(variantPriceNode.attr('originalcompprice')).text();
					} catch(error){ }
					
					if(originalcompprice == "") {
						originalcompprice = variantPriceNode.attr('originalcompprice');
					}						
					
					if(originalprice != variantPrice) {
					
										
					var priceFound = false;
					var priceNodes = jQInf(productClone).find('*:contains("' + originalprice + '")').not('*[class*="hidden"]');
					
					priceNodes.each(function(index) {
						
						if(jQInf(this).find("*").length == 0) {
							priceFound = true;
							jQInf(this).text(variantPrice);
						}
					});
					
					if(!priceFound) {
						priceNodes.each(function(index) {
						
							if(jQInf(this).find("*").length <= 1) {
								priceFound = true;
								jQInf(this).text(variantPrice);
							}
						});						
					}
					
					if(originalcompprice && originalcompprice != "" && originalcompprice != " ") {
						if(comparePrice && comparePrice != "" && comparePrice != " ") {
							var priceNodes = jQInf(productClone).find('*:contains("' + originalcompprice + '")').not('*[class*="hidden"]');
							var priceCompareFound = false;
							priceNodes.each(function(index) {
						
								if(jQInf(this).find("*").length == 0) {
									priceCompareFound = true;
									jQInf(this).text(comparePrice);
								}
							});
					
							if(!priceFound) {
								priceNodes.each(function(index) {
						
									if(jQInf(this).find("*").length <= 1) {
										jQInf(this).text(comparePrice);
									}
								});						
							}							
						}
						else {
							if(priceFound) {
								var priceNodes = jQInf(productClone).find('*:contains("' + originalcompprice + '")');
								var priceCompareFound = false;
								priceNodes.each(function(index) {
						
									if(jQInf(this).find("*").length <= 1) {
										jQInf(this).parents().not('*:contains("' + variantPrice + '")').remove();
									}
								});								
							}
						}												
					}
					}
					
					//replacePricesInNode(productClone, variantPriceNode.attr('comparePrice'), variantPriceNode.attr('variantPrice'), replaceNow);
					//replaceTextInNode(productClone, variantPriceNode.attr('minprice'), variantPriceNode.attr('variantPrice'), replaceNow);
					//replaceTextInNode(productClone, variantPriceNode.attr('originalprice'), variantPriceNode.attr('variantPrice'), replaceNow);

				} catch(error){
            	}				
			
				
				if(specialTheme == 6) {
					try {
						$(productClone.find(".col-swatch").get(0)).remove();
		            } catch(error){
		            }	
				}
				
				if(specialTheme == 5) {
					if(productClone.find("img").length > 1) {
						try {
						$(productClone.find("img").get(1)).attr("srcset", $(productClone.find("img").get(0)).attr("src"));
							$(productClone.find("img").get(1)).remove();
							$(productClone.find("img").get(0)).removeClass("featured");
			            } catch(error){
			            }						
					}
					
				}
				
				if(specialTheme == 23) {
				try {
					var productFigure = $($(productClone).find("figure").get(0));
					productFigure.attr('style', 'background-image: url("' + variantImage + '");');	
					productFigure.addClass('gsimg' + variantId);
					$("body").append("<style> .gsimg" + variantId +  ' { background-image: url("' + variantImage + '") !important; } </style>');	
				} catch(error){
            	}	
				}
				
				

					



					
				if(specialTheme == 30) {
					try {
						$(productClone.find(".product__media--hover").get(0)).removeClass("product__media--hover");
					} catch(error){
	            	}		
					
					try {
					productClone.find(".o-ratio--custom .product__img").each(function(index) {
						
						$(this).on('load', function(img){
							if(img.currentTarget.naturalHeight < img.currentTarget.naturalWidth) {
								var paddingnewgs = 100 - (100 *  ((img.currentTarget.naturalWidth - img.currentTarget.naturalHeight ) / img.currentTarget.naturalWidth));
								$($(this).parents(".o-ratio--custom").get(0)).attr("style", "padding-bottom: " + paddingnewgs + "%");
							}
							else if(img.currentTarget.naturalHeight > img.currentTarget.naturalWidth) {
								var paddingnewgs = 100 + (100 *  ((img.currentTarget.naturalHeight - img.currentTarget.naturalWidth ) / img.currentTarget.naturalWidth));
								$($(this).parents(".o-ratio--custom").get(0)).attr("style", "padding-bottom: " + paddingnewgs + "%");
								
							}
							else {
								$($(this).parents(".o-ratio--custom").get(0)).attr("style", "padding-bottom: 100%");							
							}
							$($(this).parents(".o-ratio__content").get(0)).attr("style", "");	
							
							
						});
					});
					} catch(error){
            		}							
				}	
					
				
				if(specialTheme == 4 || specialTheme == 11) {
					var cloneImg = $(productClone.find("img").get(0));
					cloneImg.attr("variantSrc", variantImage);
					cloneImg.addClass("empirefix");
					cloneImg.bind("DOMSubtreeModified",function(){
						if($(this).attr("src") != $(this).attr("variantSrc") || ($(this).attr("srcset") != "" && $(this).attr("srcset") != $(this).attr("variantSrc")) ) {
							$(this).attr("src", $(this).attr("variantSrc")); 
							$(this).attr("srcset", ""); 
							$(this).attr("data-srcset", ""); 
						}
					});
						
					var actionCnt = 0;	
					productClone.find(".productitem--action-trigger").each(function(index){
						$(this).unbind();
						$(this).attr("quickfixgs", actionCnt);
						$(this).click(function(event) {
							$($(topNode).find(".productitem--action-trigger").get( $(this).attr("quickfixgs") )).trigger( "click" );
						});	
						actionCnt++;
					});													
				}
				
				if(specialTheme == 15) {
					
					var cloneImg = $(productClone.find("img").get(0));
					cloneImg.attr("variantSrc", variantImage);
					cloneImg.addClass("empirefix");
					cloneImg.bind("DOMSubtreeModified",function(){
						if($(this).attr("src") != $(this).attr("variantSrc") || ($(this).attr("srcset") != "" && $(this).attr("srcset") != $(this).attr("variantSrc")) ) {
							$(this).attr("src", $(this).attr("variantSrc")); 
							$(this).attr("srcset", ""); 
							$(this).attr("data-srcset", ""); 
						}
					});					
						
					productClone.find(".quick-shop-modal-trigger").each(function(index){
						$(this).unbind();
						$(this).click(function(event) {
							$($(topNode).find(".quick-shop-modal-trigger").get(0)).trigger( "click" );
						});	
					});													
				}				
				
				if(specialTheme == 11) {
					productClone.find("img").each(function(index){
						if(!($(this).hasClass("empirefix"))) {
							$(this).remove();
						}
					});
				}
				
				if(specialTheme == 12) {
					$("body").append("<style> #gscollectionbottom { height: 70px; } #shopify-section-footer { margin-top: 70px; } </style>");	
					productClone.addClass("active");
				}
				
				if(specialTheme == 13) {
					productClone.find(".hidden").each(function(index){
						$(this).remove();
					});
					
				}
				
				if(specialTheme == 27) {
					productClone.find(".twoImg").each(function(index){
						$(this).removeClass("twoImg");
					});				
				}
				
				//srcset
				
				productClone.addClass("gsProductAlias").removeClass("HidGSden");
				
				var cloneLinks = productClone.find('a[href*="/products/"]');
	
				try {
				var cloneLinkPC = $(productClone).attr("href");
				if(cloneLinkPC.length > 0) {
				cloneLinkPC = cloneLinkPC + "?variant=" + variantId;
				$(productClone).attr("href", cloneLinkPC);
				}
				} catch(error){}		
		
				cloneLinks.each(function(index){
					
					if(! $(this).hasClass("swatch__link")) {
					
					var cloneLink = $(this).attr("href");
					if(cloneLink.indexOf("?variant") > 0) {
						cloneLink = cloneLink.replace("?variant", "?oldvariant");
					}
					if(cloneLink.indexOf("&variant") > 0) {
						cloneLink = cloneLink.replace("&variant", "&oldvariant");
					}
					if(cloneLink.indexOf("?") > 0) {
						cloneLink = cloneLink + "&variant=" + variantId;
					}					
					else {
						cloneLink = cloneLink + "?variant=" + variantId;
					}
					
					$(this).attr("href", cloneLink);
					
					}
					
				});
					if(specialTheme == 2 || specialTheme == 10) {	
						if(($(productClone).find(".quick_shop").length > 0) && ($(productClone).find(".product_form").length > 0)) {

							var existformgs = $($(productClone).find(".js-forms").get(0));

							existformgs.bind("DOMSubtreeModified", window.turboThemeFixQuick);
							
							/*
							var gsel = $($(productClone).find(".js-quick-shop-link").get(0));
							gsel.attr("data-id", variantId);
							
							var existformgs = $($(productClone).find(".js-forms").get(0));
							existformgs.attr("class", existformgs.attr("class").replace("form-holder", "form-old-holder"));
							var newformHolderClass = "form-holder-" + variantId;
							existformgs.addClass(newformHolderClass);
							*/
						}
 					}
					
					if(specialTheme == 17) {
						productClone.addClass("loaded");
					}
					
					// if(specialTheme == 19) { + GALLERIA + 
					if(!(specialTheme == 4 || specialTheme == 111 || specialTheme == 15)) {								  						
						
						var cloneImg = $(productClone.find("img").get(0));
						cloneImg.attr("variantSrc", variantImage);


try {
if(cloneImg[0].hasAttribute('srcset') || cloneImg[0].hasAttribute('data-srcset') || cloneImg[0].hasAttribute('data-src')) {
        cloneImg.attr("data-src", variantImage);   
       // cloneImg.attr("gstest", variantImage);
        cloneImg.attr("data-srcset", variantImage);
        cloneImg.attr("src", variantImage);
        cloneImg.attr("srcset", variantImage);
}
} catch(error){}

						try {
						if(cloneImg[0].hasAttribute('src')) {
							if(cloneImg.attr('src').indexOf("ata:image") > 0) {
								cloneImg.attr("src", variantImage);
								cloneImg.attr("srcset", variantImage);
								cloneImg.attr("data-src", variantImage);
								cloneImg.attr("data-srcset", variantImage);
								cloneImg.attr("data-fallback", variantImage);
	 						setTimeout(function()
	 		  				{							
								cloneImg.attr("src", variantImage);
								cloneImg.attr("srcset", variantImage);						 						 
							}, 1000);
							}
						}		
						} catch(error){}							
												
						cloneImg.bind("DOMSubtreeModified",function(){
							if($(this).attr("src") != $(this).attr("variantSrc") || ($(this).attr("srcset") != "" && $(this).attr("srcset") != $(this).attr("variantSrc")) ) {
								$(this).attr("src", $(this).attr("variantSrc")); 
								$(this).attr("srcset", ""); 
								$(this).attr("data-srcset", ""); 
							}
						});
					}
					if(specialTheme == 22) {
						if(productClone.find("img").length > 1) {
								$(productClone.find("img").get(1)).parent("span").remove();
						}
					}
					
					if(specialTheme == 31) {
						if(productClone.find("img").length > 0) {
							try {
								$(productClone.find("img").get(0)).attr("style", " height: auto !important; z-index: 0;");
								$(productClone.find(".product-title").get(0)).attr("style", " z-index: 9;");
								
							} catch(error){}		
						}
					}						
					
					try {
						var gsFormIds = productClone.find('form[action*="cart/add"]').find('input[name="id"]');
						if(gsFormIds.length > 0) {
						 $(gsFormIds.get(0)).val(variantId);
						}
					} catch(error){
	            	}				
					
		
						 try {
						cloneImg.attr("data-srcset", '');
			                        cloneImg.attr("data-rimg-template", '');
                                                cloneImg.attr("data-rimg", 'loaded');				
						} catch(error){ }					

				// special positioning logic goes here based on the themes AKTODO		
				if(true) {						
					if(specialTheme == 1) {
					if(variantCnt > 1) {

						if(parseInt(jQInf(jQInf(".card-list").get(0)).attr('data-desktop-columns')) == 2 && jQInf(jQInf('.card-list__column').get(1)).find('.card').length == 0) {
							$($(".card-list__column").get(nextColumnCandidate - 1)).append(productClone);
							$('.card-list__column--center').each(function(index) {
								$(this).removeClass('card-list__column--center');
							});
						}
						else {

						if($($(".card-list__column").get(nextColumnCandidate - 1)).find(".card").length > nextRowCandidate) {
							$($($(".card-list__column").get(nextColumnCandidate - 1)).find(".card").get(nextRowCandidate)).after(productClone);
						}
						else {
							$($(".card-list__column").get(nextColumnCandidate - 1)).append(productClone);
						}
	
						}
					
						
					
					
					nextColumnCandidate++;
					if(nextColumnCandidate == (parseInt(jQInf(jQInf(".card-list").get(0)).attr('data-desktop-columns')) + 1)) {
						nextColumnCandidate = 1;
					}
					}	
					else {		
						nextRowCandidate = $(topNode).prevAll().length - 1;
						$(topNode).after(productClone);
					}
					}
					else {
						$(topNode).after(productClone);
					}
										
					
					
				}
				jQInf("html").css("opacity", '1');
				if(hasSlickInCollection) {
					jQuery(window).trigger('resize');
				}
				}
			
			
			window.turboThemeFixQuick = function() {
								if($(this).find("form").length > 1) {
									$(this).unbind();
									var formsLoopCnt = 0;

									$(this).find("form").each(function(index) {
										
										if($(this).hasClass("viewed")) {
											$(this).removeClass("viewed");
										}
										if(formsLoopCnt > 0) {
											//console.debug("remove");
										$(this).remove();
										}
										formsLoopCnt++;
									});						
									$(this).bind("DOMSubtreeModified", window.turboThemeFixQuick);		
								}
							}
			
			
			var gsonimageload = function(img, hovered, naturalWidth, substituteImageUrl, inputProductLink, productHandle) {
				
				// prevent image change
				
				if(window.showmanualvariants) {
					if(!variantsenabled.hasOwnProperty(productHandle)) {
						return;
					}
				}
				
				var canChangeOpacity = true;
				if(typeof img.currentTarget == typeof undefined) {
					//canChangeOpacity = false;
					img.currentTarget = img;
				}
				
                if(!hovered){
                    naturalWidth = img.currentTarget.naturalWidth;

                    if(naturalWidth < 256){
                        naturalWidth = 256;
                    }
                }

                var newSubstituteImageUrl = substituteImageUrl;



                 (function(productNode, imageNode){
		

					 //akhere
					 if(jQEncapsulated(".gsProductVariants").length > 1) {
					 	jQEncapsulated(productNode).parents().each(function(index) {
							if(jQEncapsulated(this).find('a[href*="/products/' + productHandle + '"]').length == jQEncapsulated(this).find('a[href*="/products/"]').length) {
								productNode = jQEncapsulated(this);
							}

							if(jQEncapsulated(this).find('a[href*="/products/' + encodeURIComponent(productHandle) + '"]').length == jQEncapsulated(this).find('a[href*="/products/"]').length) {
								productNode = jQEncapsulated(this);
							}
						});

					 }
					 else {
						 
						 var parentItems = jQEncapsulated(productNode).parents('*[class*="item"], *[class*="roduct"]').not('product-list, ul, *[class*="items"], *[class*="roducts"]').not("*:contains('habetically'), *:contains('Sort')");
						 
						 if(parentItems.length > 0) {
						 	productNode = parentItems.last();
						 }
						
						 if(productNode.hasClass("product-grid-item") && productNode.parents(".medium--one-half").length > 0) {
						 	productNode  = productNode.parent();
						 }
					
						 if(jQEncapsulated(productNode).hasClass("type-product-grid-item") && jQEncapsulated(productNode).parents(".bg-primary-background").length > 0) {
						 	productNode = jQEncapsulated(productNode).parent();
						 } 
	
					 }


					 if((!($(productNode).hasClass("gsProductAlias"))) && ( Object.keys(gsProductVariantImages[productHandle]).length > 1) || ( ((window.gsFoundColorTags.length > 0)) && ( Object.keys(gsProductVariantImages[productHandle]).length > 0)) ) {
					 	 lastCreateProductUrl = productHandle;	 
						 var isParentPrepared = false;
						 var exactWidth = 0;
						 var variantCnt = 1;
						 $.each(gsProductVariantImages[productHandle], function( index ) {
							 if(window.showmanualvariants || (productHandle in window.variantsenabled)) {
								 if(window.variantsenabled[productHandle].indexOf(index) != -1) {
									 if(!isParentPrepared) {
									 var pngs = $(productNode);
									 additionalElWithBg = prepareParentForVariant(pngs, imageNode);
									 isParentPrepared = true;
									 exactWidth = parseInt(pngs.width()) + 1;
									 if(exactWidth > 500 && ($(imageNode).width() > 50)) {
									 	exactWidth = parseInt($(imageNode).width());
									 }
									 
									 }
									 
									 var replaceNow = true;
									 if(variantsAddedCnt > 15) {
										 replaceNow = false;
									 }
									 
								 	createVariantListing(productNode, imageNode, exactWidth, this, index, replaceNow, additionalElWithBg, variantCnt);	
									variantCnt++;
									variantsAddedCnt++;
								 }
							 }
							 else {
								 if(!isParentPrepared) {			
								 var pngs = $(productNode);					 
								 additionalElWithBg = prepareParentForVariant(pngs, imageNode);
								 isParentPrepared = true;
								 exactWidth = parseInt(pngs.width()) + 1;
								 if(exactWidth > 500 && ($(imageNode).width() > 50)) {
								 	exactWidth = parseInt($(imageNode).width());
								 }								 
								 }
								 var replaceNow = true;
								 if(variantsAddedCnt > 15) {
									 replaceNow = false;
								 }
								 
								 createVariantListing(productNode, imageNode, exactWidth, this, index, replaceNow, additionalElWithBg, variantCnt);	
								 variantCnt++;		
								 variantsAddedCnt++;				 
							 }
						 });


						 var gsCounterOdds = 1;
 						jQInf('.products .even, .products .odd').each(function(index) {
														
 							jQInf(this).removeClass("even");
 							jQInf(this).removeClass("odd");
 							if(gsCounterOdds == 1) {
 								jQInf(this).addClass("even");
 							}
 							else {
 								jQInf(this).addClass("odd");
 							}
							
							if(gsCounterOdds == 2) {
							gsCounterOdds = 0;
							}
							
							if(gsCounterThree == gsNumberOfColumns) {
							gsCounterThree = 0;
							}							
							gsCounterOdds++;							
							
						});	

						 if(runThemeCollection) {
						 try {
						 	theme.Collection();
						 }
						 catch(err) {
						 	runThemeCollection = false;
						 }
						 }	
						 
						 if(specialTheme == 35) {
					     $( '.trigger-quick-view').on( 'click', function(e) {
					       e.preventDefault();
					       theme.modal( $(this).data('modal'), theme.onInit, theme.onClose );
					     });					
						 }	 
				 
				    if(specialTheme == 17) {
					 	if ( jQuery('.isotope-products').length > 0 ) {
					 		jQuery('.isotope-products').each(function(){
					 			window.KINGDOM.Grid.mount(jQuery(this))
					 		});
					 	}
				 	 }
					 
					 if(specialTheme == 4) {
					 	$(productNode).addClass("gsProductAlias");
						$(productNode).hide();
						$($(".productgrid--items").get(0)).prepend($(productNode));
					 }
					 else if(specialTheme == 15) {
 					 	$(productNode).addClass("gsProductAlias");
 						$(productNode).hide();					 
					 }
					 else {
 						if(isTurboP) {
	 					 	$(productNode).addClass("gsProductAlias");
							$(productNode).addClass("gsproduct-selector-" + $(productNode).attr('product-selector'));
	 						$(productNode).hide();			 						
							$("body").append($(productNode));
							
						}
						else {
							$(productNode).remove();
						}
					 }
					 
					 
					 if(specialTheme == 2 || specialTheme == 10) {
					 	jQInf(".product_clear").remove();
						var gsCounterOdds = 1;
						var gsCounterThree = 1;
						
						var gsNumberOfColumns = 3;
						var GSproductQuery = '#shopify-section-collection-template .products .one-third, #shopify-section-collection-template .product-list .one-third';
						
						if(jQInf("#shopify-section-collection-template .products .eight, #shopify-section-collection-template .product-list .eight").length > 0) {
							gsNumberOfColumns = 2;
							GSproductQuery = '#shopify-section-collection-template .products .eight, #shopify-section-collection-template .product-list .eight';
						}
						
						if(jQInf("#shopify-section-collection-template .products .one-third, #shopify-section-collection-template .product-list .one-third").length > 0) {
							gsNumberOfColumns = 3;
							GSproductQuery = '#shopify-section-collection-template .products .one-third, #shopify-section-collection-template .product-list .one-third';
						}
						if(jQInf("#shopify-section-collection-template .products .four, #shopify-section-collection-template .product-list .four").length > 0) {
							gsNumberOfColumns = 4;
							GSproductQuery = '#shopify-section-collection-template .products .four, #shopify-section-collection-template .product-list .four';
						}

						try {	
						if(Shopify.shop == 'levitate-surf.myshopify.com') {
							gsNumberOfColumns = 3;			
						}
		 				}
		 				catch(err) {}							
						
						jQInf(GSproductQuery).not(".modal_image").each(function(index) {
							
				 			try {						
								if(jQInf(this).find(".swap-true").length > 0) {
									//jQInf(jQInf(this).find(".swap-true").get(0)).removeClass("swap-true")
								}							
				 			}
				 			catch(err) {}	
														
							jQInf(this).removeClass("alpha");
							jQInf(this).removeClass("omega");
							jQInf(this).removeClass("even");
							jQInf(this).removeClass("odd");
							if(gsCounterOdds == 1) {
								jQInf(this).addClass("even");
							}
							else {
								jQInf(this).addClass("odd");
							}
							
							if(gsCounterThree == 1) {
								jQInf(this).addClass("alpha");
							}
							if(gsCounterThree == gsNumberOfColumns) {
								jQInf(this).addClass("omega");
								jQInf(this).after('<br class="clear product_clear">');
							}
							
							if(gsCounterOdds == 2) {
							gsCounterOdds = 0;
							}
							
							if(gsCounterThree == gsNumberOfColumns) {
							gsCounterThree = 0;
							}							
							gsCounterOdds++;
							gsCounterThree++;
						});
						
					 }
					 
					 if(specialTheme == 9) {
						 
						 var gsNumberOfColumns = 0;
						 if(jQInf("#Collection").find(".six_columns").length > 0) {
							 gsNumberOfColumns = 6;
						 }
						 if(jQInf("#Collection").find(".five_columns").length > 0) {
							 gsNumberOfColumns = 5;
						 }
						 if(jQInf("#Collection").find(".four_columns").length > 0) {
							 gsNumberOfColumns = 4;
						 }
						 if(jQInf("#Collection").find(".three_columns").length > 0) {
							 gsNumberOfColumns = 3;
						 }
						 if(jQInf("#Collection").find(".two_columns").length > 0) {
							 gsNumberOfColumns = 2;
						 }
						 if(gsNumberOfColumns == 0) {
							 gsNumberOfColumns = 4;
						 }
						 
					 	jQInf(".product_clear").remove();
						var gsCounterOdds = 1;
						var gsCounterThree = 1;
						jQInf("#Collection .indiv-product-wrapper").each(function(index) {
							jQInf(this).removeClass("alpha");
							jQInf(this).removeClass("omega");
							jQInf(this).removeClass("even");
							jQInf(this).removeClass("odd");
							jQInf(this).removeClass("tablet-clear");
							jQInf(this).removeClass("mobile-clear");
		
							if(gsCounterOdds == 1) {
								jQInf(this).addClass("even");
								jQInf(this).addClass("tablet-clear");
								jQInf(this).addClass("mobile-clear");
							}
							else {
								jQInf(this).addClass("odd");
							}
							
							if(gsCounterThree == 1) {
								jQInf(this).addClass("alpha");
							}
							if(gsCounterThree == gsNumberOfColumns) {
								jQInf(this).addClass("omega");
								jQInf(this).after('<br class="clear product_clear">');
							}
							
							if(gsCounterOdds == 2) {
							gsCounterOdds = 0;
							}
							
							if(gsCounterThree == gsNumberOfColumns) {
							gsCounterThree = 0;
							}							
							gsCounterOdds++;
							gsCounterThree++;
						});
						
					 }					 
					 
					 
					 if(specialTheme == 6) {
						 
		 				var gsProductsPerRow = 0;				

					 if(jQInf("#product-loop").find(".desktop-6").length > 0) {
						 gsProductsPerRow = 2;
					 }
					 if(jQInf("#product-loop").find(".desktop-4").length > 0) {
						 gsProductsPerRow = 3;
					 }
					 if(jQInf("#product-loop").find(".desktop-3").length > 0) {
						 gsProductsPerRow = 4;
					 }
					 if(jQInf("#product-loop").find(".desktop-2").length > 0) {
						 gsProductsPerRow = 6;
					 }
					 if(jQInf("#product-loop").find(".desktop-fifth").length > 0) {
						 gsProductsPerRow = 5;
					 }					 
										 				
				
		 				if(gsProductsPerRow == 0) {
		 					gsProductsPerRow = 4;
		 				}						 
						 
						 var gsCounterOdds = 1;
 						jQInf("#product-loop .product-index").each(function(index) {
							jQInf(this).removeClass("first");
							jQInf(this).removeClass("last");

							if(gsCounterOdds == 1) {
								
								jQInf(this).addClass("first");								
							}
							
							if(gsCounterOdds == gsProductsPerRow) {
								jQInf(this).addClass("last");								
							}
							
							if(gsCounterOdds == gsProductsPerRow) {
								gsCounterOdds = 0;
							}								
							gsCounterOdds++;
 						});						 
					 }
					 
					 if(specialTheme == 34) {


						 if(!baselPositionFixerRun) {
						 
						 	baselPositionFixerRun = true;
							baselPositionFixer();	
						 
						 }
						 else {

						 window.gsMultiThreadPrevInt = (window.gsMultiThreadPrevInt + 1);
						 var currentgsMultiThreadPrevInt = window.gsMultiThreadPrevInt;
						 
 						setTimeout(function()
 		  				{							
						 						 
						if(currentgsMultiThreadPrevInt <= window.gsMultiThreadPrevInt) {
							window.gsMultiThreadPrevInt = 1;
						}
						else {
							return false;							
						}

						baselPositionFixer();							
						}, 500);
						}
											 
					 }					 
					 				
					 if(specialTheme == 25) {
						 var gsCounterOdds = 1;
 						jQInf(".product-list .prod-block").each(function(index) {
							jQInf(this).removeClass("first-in-row");

							if(gsCounterOdds == 1) {
								
								jQInf(this).addClass("first-in-row");								
							}
														
							if(gsCounterOdds == 4) {
								gsCounterOdds = 0;
							}								
							gsCounterOdds++;
 						});							 
					 }
					 
					 if(specialTheme == 24) {
						 var gsCounterOdds = 1;
 						jQInf(".productlist .product").each(function(index) {
							jQInf(this).removeClass("last");
							jQInf(this).removeClass("first");							

							if(gsCounterOdds == 1) {
								
								jQInf(this).addClass("first");								
							}
							
							if(gsCounterOdds == 4) {
								jQInf(this).addClass("last");								
							}
							
							if(gsCounterOdds == 4) {
								gsCounterOdds = 0;
							}								
							gsCounterOdds++;
 						});	
							
						
						

					    //Normalise heights for product thumb details
					    $.fn.normaliseHeights = function(options) {
					      //options = { numPerRow:4, itemClass:'.product', textRegionClasses:'.title, .desc', affectOnlyDirectlyChildren:false }
					      var settings = { affectOnlyDirectlyChildren: false, updatedElement: false};
					      $.extend(settings, options);

					      $(this).each(function(){
					        var itemsToAssess = settings.textRegionClasses.split(',');
					        var $outerthis = $(this);
					        $.each(itemsToAssess, function(index, value){
					          if(settings.affectOnlyDirectlyChildren) {
					            var $allChunks = $outerthis.find(settings.itemClass + ' > ' + value);
					          } else {
					            var $allChunks = $outerthis.find(settings.itemClass + ' ' + value);
					          }
					          for (i = 0; i < $allChunks.length; i += settings.numPerRow) {
					            var end = Math.min(i + settings.numPerRow, $allChunks.length);
					            var tallest = 0;
					            var $sliced = $allChunks.slice(i, end);
					            var doHeights = settings.updatedElement === false;
					            if(settings.updatedElement !== false) {
					              for(var j=0; j<$sliced.length; j++) {
					                if($sliced[j] == settings.updatedElement) {
					                  doHeights = true;
					                  break;
					                }
					              }
					            }
					            if(doHeights) {
					              $sliced.each(function(){
					                var thisHeight = $(this).css({ height:'', lineHeight:'' }).height();
					                if(thisHeight > tallest) {
					                  tallest = thisHeight;
					                }
					              });
					              //If just one per row - auto height
					              if(settings.numPerRow > 1) {
					                $sliced.css('height', tallest);
					              }
					            }
					          }
					        });
					      });
					      return $(this);
					    };
						
						
				        $('.productlist').each(function(){
				          var productsPerRowRightNow = $(window).width() >= theme.mobileSnapWidth ? ($('#content.hasaside').length > 0 ? 3 : 4) : 1;
				          if(productsPerRowRightNow == 4 && $(this).closest('.col-3-right').length) {
				            productsPerRowRightNow = 3;
				          }
				          $(this).normaliseHeights({
				            numPerRow: productsPerRowRightNow,
				            itemClass: '.product',
				            textRegionClasses: '.imagecontainer, .title'
				          }).find('.imagecontainer').each(function(){
				            $(this).css('line-height', ($(this).height()-5)+'px');
				          });
				        });
				        $('.miniproductlist').normaliseHeights({
				          numPerRow: $(window).width() >= theme.mobileSnapWidth ? 4 : 1,
				          itemClass: 'li',
				          textRegionClasses: '.imagecontainer'
				        }).find('.imagecontainer').each(function(){
				          $(this).css('line-height', $(this).height()+'px');
				        });				
						
												 
					 }					 

					 if(specialTheme == 13) {
						 var gsCounterOdds = 1;
						 
						 var gsNumberOfColumns = 0
						 if(jQInf(jQInf(".product-loop").get(0)).find(".desktop-6").length > 0) {
							 gsNumberOfColumns = 2;
						 }
						 if(jQInf(jQInf(".product-loop").get(0)).find(".desktop-4").length > 0) {
							 gsNumberOfColumns = 3;
						 }
						 if(jQInf(jQInf(".product-loop").get(0)).find(".desktop-3").length > 0) {
							 gsNumberOfColumns = 4;
						 }
						 if(gsNumberOfColumns == 0) {
							 gsNumberOfColumns = 3;
						 }						
						 	 
						 
 						jQInf(".product-loop .product-index").each(function(index) {
							jQInf(this).removeClass("first");
							jQInf(this).removeClass("last");

							if(gsCounterOdds == 1) {
								
								jQInf(this).addClass("first");								
							}
							
							if(gsCounterOdds == gsNumberOfColumns) {
								jQInf(this).addClass("last");								
							}
							
							if(gsCounterOdds == gsNumberOfColumns) {
								gsCounterOdds = 0;
							}								
							gsCounterOdds++;
 						});						 
					 }
					 

			
		 			if(specialTheme == 21) {
		 				colCnt = 0;
		 				jQInf(".collection-product").each(function(index){
		 					jQInf(this).removeClass("col-0");
		 					jQInf(this).removeClass("col-1");
		 					jQInf(this).removeClass("col-2");
		 					jQInf(this).removeClass("col-3");
		 					jQInf(this).removeClass("col-4");
		 					jQInf(this).removeClass("col-5");
		 					jQInf(this).removeClass("col-6");
		 					jQInf(this).removeClass("col-7");
		 					jQInf(this).removeClass("col-8");
		 					jQInf(this).removeClass("col-9");
		 					jQInf(this).removeClass("col-10");
		 					jQInf(this).removeClass("col-11");					
					
		 					jQInf(this).addClass("col-" + colCnt);
		 					colCnt++;
		 					if(colCnt == 12) {
		 						colCnt = 0;
		 					}
		 				});
		 			}		
			
		 			if(specialTheme == 26) {
		 				colCnt = 0;
		 				jQInf(".products .product").each(function(index){
		 					var i;
		 					for (i = 0; i < 15; i++) { 
		 						jQInf(this).removeClass("col-" + i);					
		 					}
					
		 					jQInf(this).addClass("col-" + colCnt);
		 					colCnt++;
		 					if(colCnt == 16) {
		 						colCnt = 0;
		 					}
		 				});
		 			}					 

					 if(specialTheme == 8) { 
						 
						 var gsNumberOfColumns = 0
						 if(jQInf("#product-loop").find(".desktop-6").length > 0) {
							 gsNumberOfColumns = 2;
						 }
						 if(jQInf("#product-loop").find(".desktop-4").length > 0) {
							 gsNumberOfColumns = 3;
						 }
						 if(jQInf("#product-loop").find(".desktop-3").length > 0) {
							 gsNumberOfColumns = 4;
						 }
						 if(gsNumberOfColumns == 0) {
							 gsNumberOfColumns = 4;
						 }						 
						 
						 var gsCounterOdds = 1;
 						jQInf("#product-loop .product").each(function(index) {
							jQInf(this).removeClass("first");
							jQInf(this).removeClass("last");

							if(gsCounterOdds == 1) {
								
								jQInf(this).addClass("first");								
							}
							
							if(gsCounterOdds == gsNumberOfColumns) {
								jQInf(this).addClass("last");								
							}
							
							if(gsCounterOdds == gsNumberOfColumns) {
								gsCounterOdds = 0;
							}								
							gsCounterOdds++;
 						});						 
					 }
					 
		 			try {
		 			collection.init();		
		 			}
		 			catch(err) {}					 					 
					 
					 }
					
                 })(inputProductLink, img.currentTarget);
				 
				 if(canChangeOpacity) {
				 	jQInf("html").css("opacity", '1');				
				 }
			}
			
			var baselPositionFixer = function(){
			 var gsCounterOdds = 1;
			 var gsCounterOdds3 = 1;						 
			 var gsCounterOdds2 = 1;

 			try {
			 jQInf(".visible-md-block").remove();
			 jQInf(".visible-xs-block").remove();
			 jQInf(".visible-sm-block").remove();
		 			}
		 			catch(err) {}							 						 


				jQInf(".product-grid-item").each(function(index) {


					if(gsCounterOdds == 4) {
						jQInf(this).after('<div class="clearfix visible-md-block visible-lg-block"></div>');
					}

					if(gsCounterOdds3 == 3) {
						jQInf(this).after('<div class="clearfix clearfix visible-sm-block"></div>');
						gsCounterOdds3 = 0;
					}

					if(gsCounterOdds2 == 2) {
						jQInf(this).after('<div class="clearfix visible-xs-block"></div>');
						gsCounterOdds2 = 0;
					}							
												
					if(gsCounterOdds == 4) {
						gsCounterOdds = 0;
					}								
					gsCounterOdds++;
					gsCounterOdds3++;
					gsCounterOdds2++;
				});							
			}	
			 
            var productDetailsManipulationAction = function(productHandle, node, counterDeep){
	
				productHandle = productHandle.trim();
							
				$(node).removeClass("HidGSden");
				
				if(specialTheme == 3) {
				topNodeParentCandidates = $(node).parents(".blocklayout .block");
				if(topNodeParentCandidates.length > 0) {
					//node = $(topNodeParentCandidates.get(0));
				}
				}

				
                //var productsContainer = getProductsInputContainer();

                //handlerCounter++;
                if(typeof counterDeep == 'undefined' || counterDeep == null){
                    counterDeep = 0;
                }

				try {
		
				if($(node).attr("class").toLowerCase().indexOf("hidden-product-link") == -1) {
					if($(node).attr("class").toLowerCase().indexOf("hidden") != -1) {
						return;
					}
				}
					
	            } catch(error){
	            }
				
				
				if($(node).hasClass("card-information")) {
					node = $(node).parent();
				}

				
                if(jQEncapsulated(node).hasClass("card__content") && jQEncapsulated(node).find(".card__information").length > 0) {

                        node = jQEncapsulated(node).parent();
                }
				
                var imagesFromNode = $(node).find('img[src*="/cdn/"], img[src*="/files/"], img[src*="/products/"], img[data-src*="/products/"], img[data-srcset*="/products/"], img[srcset*="/products/"], img:not([src])').not(".ProductItem__Image--alternate").not(".productitem--image-alternate"); 
				
				if(imagesFromNode.length == 0) {
					imagesFromNode = $(node).find('*[style*="/products/"], *[style*="/files/"],  *[style*="/cdn/"], img:not([src])'); 
				}
				
				if(specialTheme == 41) {
					imagesFromNode = $(node).find('*[data-bgset*="/products/"], *[data-bgset*="/files/"], *[data-bgset*="/cdn/"]'); 
				}
				
				if(specialTheme == 35) {
					imagesFromNode = $(node).find('*[data-bgset*="/products/"], *[data-bgset*="/cdn/"], *[data-bgset*="/files/"]'); 
				}

				if(specialTheme == 37) {
					var dataBGSET = $(node).find('*[data-bgset*="/products/"], *[data-bgset*="/cdn/"], *[data-bgset*="/files/"]'); 
					if(dataBGSET.length > 0) {
						imagesFromNode = dataBGSET;
					}
				}

				if(imagesFromNode.length == 0) {
				var imagesFromNodeTmp = $(node).find('*[data-bgset*="/products/"], *[data-bgset*="/cdn/"], *[data-bgset*="/files/"]'); 
				if(imagesFromNodeTmp.length > 0) {
					imagesFromNode = imagesFromNodeTmp;
				}
				}





				if(specialTheme != 3) {
                if(imagesFromNode.length == 0 && counterDeep < 3) {
                    counterDeep++;
                    //console.log('counterDeep : ' + counterDeep);
					if((productHandle.length > 0) && ($(node).parent().find('a[href*="/products/"]').length == $(node).parent().find('a[href*="' + productHandle + '"]').length)) {
                    productDetailsManipulationAction(productHandle, $(node).parent(), counterDeep);
					}

                    return false;
                }
				}

				


                if($(node).hasClass(completitionClassMark)){
                    return false;
                }				

                imagesFromNode.each(function(indexImage, eImage){
					
					if(productHandle != lastCreateProductUrl) {

                    var imageBlock = getProductImages( productHandle );
					


                    if(!imageBlock || imageBlock.length < 1 || (!(productHandle in gsProductVariantImages)) || (gsProductVariantImages[productHandle].length < 1)){
						
		 				topNodeParentCandidates = $(node).parents(".grid-item, .product-grid-item, .grid_item, .mb30, .product-block, .blocklayout .block, .o-layout__item, .Grid__Cell, .productgrid--item, .products-grid .box, .products-list .box, #product-loop .product-index " + additionalParentContainer);
						if(specialTheme == 2 || specialTheme == 10) {
							topNodeParentCandidates = $(node).parents(".one-third, .four, .eight");
						}
						
	
		 				if(topNodeParentCandidates.length > 0) {
		 					//node = $(topNodeParentCandidates.get(0));
		 				}					
						
						try {
							//console.debug(node);
						} catch(error){ }
								
						$(node).removeClass("HidGSden");
                        return false;
                    }
						
					if(opacityClassFixed == false) {					
					try {
					gsNodeImages = $($(node).find("img"))
					if(gsNodeImages.length == 1) {
						gsProductImageClass = $(gsNodeImages.get(0)).attr('class').match(/[\d\w-_]+/g);
						gsProductImageClass = '.' + gsProductImageClass.join(' .');
						if(lastGSProductImageClass.indexOf(gsProductImageClass) == -1) {
							lastGSProductImageClass = ' ' + lastGSProductImageClass + ' ' + gsProductImageClass;
							opacityClassFixed = true;
							$("body").append("<style> " + gsProductImageClass + " { opacity: 1 !important; }</style>");	
						}
					}
					} catch(error){
					}
					}



					
					
					if($(eImage).parents("header").length == 0  && $(eImage).parents(".gsProductAlias").length == 0 && $(eImage).parents(".image-swap-completed").length == 0) {


                    (function(inputImage, inputProductLink, productID){

                        var imagePreloaderContainerId = "image-swap-preload-images-container";
                        var hovered = false;
                        var naturalWidth = 256;
						try {
							setTimeout(function()
  			  				{
							gsonimageload($(inputImage), hovered, naturalWidth, '', inputProductLink, productHandle);
							}, 10);

			            } catch(error){
			            }
                        $(inputImage).on('load', function(img){
							if(specialTheme != 16) {
							setTimeout(function()
                                                        {
							gsonimageload(img, hovered, naturalWidth, '', inputProductLink, productHandle);
							}, 10);
							}
                        }).attr('src' , $(inputImage).attr("src"));

                    })(eImage, node, productHandle);
					}
					}
                });
				
				
				if(specialTheme == 12) {
	                $(node).addClass("active");
				}

				if(specialTheme == 17) {
					$(node).addClass("loaded");
				}
          //      $(node).addClass(completitionClassMark);
 		if(!$(node).hasClass('product-card__info')) {
			$(node).addClass(completitionClassMark);
		}


                $(node).parents('.HidGSden').each(function () {
		$(this).removeClass('HidGSden');
 		});


            };


            var selector = 'a[href*="/products/"]';
			
			if(gsContainer != null) {
				selector = gsContainer.find(selector);
			}
			else {
				var mainRoleElements = $('*[role="main"]');
				if(mainRoleElements.length > 0) {
				if($(mainRoleElements.get(0)).find(selector).length > 0) {
				gsContainer = $(mainRoleElements.get(0));
				selector = gsContainer.find(selector);			
				}				
				}
			}			


            if(!$(selector).length){
                return false;
            }	

	   var gsCntProductsForshowmanualvariants = 0;			
								
            $(selector).not('.gsProductAlias a[href*="/products/"], .image-swap-completed a[href*="/products/"], #mod6-products a[href*="/products/"], .product-pop-up a[href*="/products/"]').each(function(index, e) {
				
				var isInExcludedSection = false;
				$.each( exludedSections, function( index, thiselement ) {
					if($(thiselement).find(e).length > 0) { 
						isInExcludedSection = true;
					}
				});
				if(!isInExcludedSection){
                var productUrl = $(e).attr('href');

                var productHandle = that.getProductNameFromUrl(productUrl);

				if(window.showmanualvariants) {
					if(variantsenabled.hasOwnProperty(productHandle)) {
						gsCntProductsForshowmanualvariants++;
					}
				}

                if(productHandle.indexOf(".") == -1) {
					productDetailsManipulationAction(productHandle, e, 0);
                }
				}
            });

			if(window.showmanualvariants) {
				if(gsCntProductsForshowmanualvariants == 0) {
					jQEncapsulated("html").css("opacity", '1');
				}
			}

        };
		function getFirstParentWithProductLinks(examEl) {
			if(jQEncapsulated(examEl).find('a[href*="/products/"]').length > 0) {
				return jQEncapsulated(examEl);
			}
			return getFirstParentWithProductLinks(jQEncapsulated(examEl).parent());
		}
		
		function fixForBrooklyn() {

		}

        that.run = function(gsContainer){
			
			variantsAddedCnt = 0;
			
			if(specialTheme == 23) {
			jQInf(".product-item").each(function() {
					if(jQInf(this).find(".fixerGScapit").length == 0) {
						jQInf(this).append("<img class='fixerGScapit' style='display: none;' />")
					}
			});
			}
			
			if(specialTheme == 16) {
				colCnt = 1;
				jQInf(".product-block").each(function(index){
					var cardImage = jQInf(jQInf(this).find(".lazyloading").get(0));
					cardImage.removeClass("lazyloading");
					cardImage.addClass("lazyloaded");
					var productBlockGS = jQInf(".col-" + colCnt).find(".product-block").get(0);
					jQInf(productBlockGS).appendTo("#page-content");
					colCnt++;
					if(colCnt == 4) {
						colCnt = 1;
					}
				});
				
				jQInf(".product-list .product-block").each(function(index){
					jQInf(this).appendTo("#page-content");
				});
				
				
			}
			
			
			
			if(specialTheme == 1) {
				colCnt = 0;
				jQInf(".card").each(function(index){
					var cardImage = jQInf(jQInf(this).find(".lazyloading").get(0));
					cardImage.removeClass("lazyloading");
					cardImage.addClass("lazyloaded");
					var cardPreloader = jQInf(jQInf(this).find(".card__preloader").get(0));
					cardPreloader.remove();
					//var productBlockGS = jQInf(jQInf(".card-list__column").get(colCnt)).find(".card").get(0);
					//jQInf(productBlockGS).appendTo("#MainContent");
					//colCnt++;
					if(colCnt == parseInt(jQInf(jQInf(".card-list").get(0)).attr('data-desktop-columns')) ) {
						colCnt = 0;
					}
				});
				
			}
			
			
            searchProductsAction(gsContainer);
			fixForBrooklyn();	
			
			
			if(specialTheme == 16) {
				colCnt = 1;
				jQInf(".product-block").each(function(index){
					jQInf(".col-" + colCnt).append(jQInf(this));
					colCnt++;
					if(colCnt == 4) {
						colCnt = 1;
					}
				});
			}
			
			if(specialTheme == 21) {
				colCnt = 0;
				jQInf(".collection-product").each(function(index){
					jQInf(this).removeClass("col-0");
					jQInf(this).removeClass("col-1");
					jQInf(this).removeClass("col-2");
					jQInf(this).removeClass("col-3");
					jQInf(this).removeClass("col-4");
					jQInf(this).removeClass("col-5");
					jQInf(this).removeClass("col-6");
					jQInf(this).removeClass("col-7");
					jQInf(this).removeClass("col-8");
					jQInf(this).removeClass("col-9");
					jQInf(this).removeClass("col-10");
					jQInf(this).removeClass("col-11");					
					
					jQInf(this).addClass("col-" + colCnt);
					colCnt++;
					if(colCnt == 12) {
						colCnt = 0;
					}
				});
			}		
			
			if(specialTheme == 26) {
				colCnt = 0;
				jQInf(".products .product").each(function(index){
					var i;
					for (i = 0; i < 15; i++) { 
						jQInf(this).removeClass("col-" + i);					
					}
					
					jQInf(this).addClass("col-" + colCnt);
					colCnt++;
					if(colCnt == 16) {
						colCnt = 0;
					}
				});
			}				
			
			if(specialTheme == 10) {
				window.retinaAfterLoad();	
			}
	  	  
		  if(specialTheme == 4) {
			  
			  setTimeout(function()
			  {
			  	jQInf("body").append(jQInf('script[src*="assets/empire"]').get(0).outerHTML);
			  }, 2000);			  
			  setTimeout(function()
			  {
			  	jQInf("body").append(jQInf('script[src*="assets/empire"]').get(0).outerHTML);
			  }, 5000);			  
			  
	  	  	
	      }
			
        };
		
		that.filterVariantsByTag = function(variantElement){
			
			if(window.gsFoundColorTags.length > 0) {
			
			variantElement.each(function(index){
			
			var gsProductVariantsTop = jQInf(this);
			
			jQInf(this).find("p[varianttitleid]").each(function(index){


				
			  var currenthasAllTags = true;
			  var gsCheckVariantTitle = jQInf(this).attr('variantTitle').toLowerCase();
			  
			  jQInf.each(window.gsFoundColorTags, function(index) {
				  
				  if(gsCheckVariantTitle.indexOf(this) === -1) {
				  	currenthasAllTags = false;
				  }
			  });						  
			  if(!currenthasAllTags) {
				  jQInf(gsProductVariantsTop.find('span[variantid="' + jQInf(this).attr('varianttitleid') + '"]').get(0)).remove();
			  }						  
				
			});
			});
			}
			
		};
		
		that.filterVariantsByTagAny = function(variantElement){
			
			if(window.gsFoundColorTags.length > 0) {
			
			variantElement.each(function(index){
			
			var gsProductVariantsTop = jQInf(this);
			
			jQInf(this).find("p[varianttitleid]").each(function(index){


				
			  var currenthasAllTags = false;
			  var gsCheckVariantTitle = jQInf(this).attr('variantTitle').toLowerCase();
			  
			  jQInf.each(window.gsFoundColorTags, function(index) {
				  //console.debug(gsCheckVariantTitle + " vs " + this);
				  if(gsCheckVariantTitle.indexOf(this) !== -1) {
				  	currenthasAllTags = true;
				  }
			  });						  
			  if(!currenthasAllTags) {
				  jQInf(gsProductVariantsTop.find('span[variantid="' + jQInf(this).attr('varianttitleid') + '"]').get(0)).remove();
			  }						  
				
			});
			});
			}
			
		};		
		
        that.readVariantImages = function(variantElement){
			try {
				if(window.location.href.indexOf("pf_opt_color") > 0) {
					this.filterVariantsByTagAny(variantElement);
				}
				else {
					this.filterVariantsByTag(variantElement);				
				}
			}
			catch(err) {
			}
			
           	variantElement.each(function(index){
				var variantRecords = {};
				//$(this).find("span").each(function(index){
				$($(this).find("span").get().reverse()).each(function(index){
					variantRecords[$(this).attr("variantid")] = $(this).attr("gsvariantimage");
				});
				gsProductVariantImages[$(this).attr("gsProductHandler")] = variantRecords;
			});
						
        };		
		if(specialTheme == 18) {
			try {
				$("body").append($('script[src*="assets/theme.min.js"]').get(0).outerHTML.replace('defer="defer"', ''));
				$("body").append("<style>.resp-img-wrapper.js .resp-img, .resp-img-wrapper.js .resp-img-placeholder {  height: auto !important; max-width: 100% !important; }</style>");
			}
			catch(err) {
			}
		}
    };

    $.imageSwap = function(){
		if(specialTheme == 1) {	
			if($(".card-list__column").length == 1) {
				specialThemeInterval = setInterval(function()
				{
					if($(".card-list__column").length > 0) {
			        var swap = new ImageSwap();		
					swap.readVariantImages($(".gsProductVariants"));		
					$("body").append("<style> .HidGSden { visibility: hidden; }</style>");	
					swap.run(null);		
					clearInterval(specialThemeInterval);
					}
				}, 1000);	
			}
		}
		else {
	        var swap = new ImageSwap();		
			swap.readVariantImages($(".gsProductVariants"));		
			$("body").append("<style> .HidGSden { visibility: hidden; }</style>");			
			swap.run(null);		
		}
        
    };

})(jQEncapsulated);


function getExcludedSections(){
	var eSections = [];
	// exclude header
	jQEncapsulated('body').children().each(function(index, thiselement){
		if(jQEncapsulated(thiselement).find("a[href*='/cart']").length > 0) {
			eSections.push(jQEncapsulated(thiselement));
		}
	});
	
	
    var selector = 'a[href*="/products/"]';

	cntNonExcluded = 0;
    jQEncapsulated(selector).each(function(index, e) {
		

		jQEncapsulated.each( exludedSections, function( index, thiselement ) {
			if(jQEncapsulated(thiselement).find(e).length == 0) { 
				cntNonExcluded++;
			}
		});
	});	
	if(cntNonExcluded == 0) {
		return [];
	}
	
	return eSections;
}

function getHtmlHash(){
    var pageContentCurrent = jQEncapsulated("html").html().length;

    return pageContentCurrent;
}

function onReadyLauncher() {

	window.gsNOProoduct = jQEncapsulated(".gsProductVariants").length;

	
	try {
	if(variantsByCollection.hasOwnProperty(gsVSCollectionId)) {
	 
		
	  jQInf.each(variantsByCollection[gsVSCollectionId], function(index) {
		  variantsenabled[index] = this;
	  });
	  		
	 
	}
	}
	catch(err) {
	}		
	
	try {
		if(gsVSCollectionTags.length > 0) {
			window.gsVSCollectionTags = window.gsVSCollectionTags;
			//showmanualvariants = false;
			var gsTags = gsVSCollectionTags.split('&');	
			
		  jQInf.each(gsTags, function(index) {
			  var thislowercase = this.toLowerCase();
			  if((thislowercase.indexOf("color-") === 0) || (thislowercase.indexOf("color_") === 0)) {
				  //.split('=').join(',').split(':').join(',').split(',')
				  var gsColorTag = thislowercase.replace("color-", "").replace("color_", "");
				  tmpFoundColorTags = gsColorTag.split("-").join('&').split("_").join('&');
				  tmpFoundColorTags = tmpFoundColorTags.split("&");
				  var gsFirstColorPart = '';
				  jQInf.each(tmpFoundColorTags, function(index) {
					  if(this.length > 2) {
						  gsFirstColorPart = this;
					  	window.gsFoundColorTags.push(this);
					  }
				  });
				  
				  // decide if we should filter by first portion only or all
				  
				  if(gsFirstColorPart.length > 0) {
					  var gsVariantsMatched = jQInf('p[variantTitle*="' + gsFirstColorPart + '"]');
					  var hasOneWithAllTags = false;
					  jQInf(gsVariantsMatched).each(function() {
						  var gsCheckVariantTitle = jQInf(this).attr('variantTitle').toLowerCase();
						  var currenthasAllTags = true;
		
						  jQInf.each(window.gsFoundColorTags, function(index) {
							  
							  if(gsCheckVariantTitle.indexOf(this) === -1) {
							  	currenthasAllTags = false;
							  }
						  });						  
						  if(currenthasAllTags) {
							  hasOneWithAllTags = true;
						  }						  
					  });				  
					  
					  if(!hasOneWithAllTags) {
						  window.gsFoundColorTags = [];
						  window.gsFoundColorTags.push(gsFirstColorPart);
					  }
					  

				  }
				  
			  }
			  			  
		  });
		  
		  if(window.gsFoundColorTags.length == 0) {
			  jQInf.each(gsTags, function(index) {
				  var thislowercase = this.toLowerCase();
				  
				  if(thislowercase.length >= 4) {
					  thislowercase = thislowercase.substring(1);
				  }


				  if(true) {
					  //.split('=').join(',').split(':').join(',').split(',')
					  var gsColorTag = thislowercase;
					  tmpFoundColorTags = gsColorTag.split("-").join('&').split("_").join('&');
					  tmpFoundColorTags = tmpFoundColorTags.split("&");
					  var gsFirstColorPart = '';
					  jQInf.each(tmpFoundColorTags, function(index) {
						  if(this.length > 2) {
if(jQInf('p[variantTitle*="' + this + '"]').length > 0) {
							  gsFirstColorPart = this;
						  	window.gsFoundColorTags.push(this);
}
						  }
					  });
				  
					  // decide if we should filter by first portion only or all
				  
					  if(gsFirstColorPart.length > 0) {
						  var gsVariantsMatched = jQInf('p[variantTitle*="' + gsFirstColorPart + '"]');
						  var hasOneWithAllTags = false;
						  jQInf(gsVariantsMatched).each(function() {
							  var gsCheckVariantTitle = jQInf(this).attr('variantTitle').toLowerCase();
							  var currenthasAllTags = true;
		
							  jQInf.each(window.gsFoundColorTags, function(index) {
							  
								  if(gsCheckVariantTitle.indexOf(this) === -1) {
								  	currenthasAllTags = false;
								  }
							  });						  
							  if(currenthasAllTags) {
								  hasOneWithAllTags = true;
							  }						  
						  });				  
					  					  

					  }
				  
				  }
			  			  
			  });		  
		  }
		  
		  
		  			
		}
		else {
			if(window.location.href.indexOf("pf_opt_color") > 0) {
				var splitColorOpts = window.location.href.split("pf_opt_color=");
				var skipFirst = true;
				
				jQInf.each(splitColorOpts, function(index) {
					if(skipFirst == false) {
						var cleaned1 = this.split("&");
						var cleaned2 = cleaned1[0].split("#");
						window.gsFoundColorTags.push(decodeURI(cleaned2[0]).toLowerCase());
					}
					skipFirst = false;
				});
				
			}
		}
		if(window.gsFoundColorTags.length > 0) {
			showmanualvariants = false;
		}
	}
	catch(err) {
	}		
		
	
	
	window.gsCollectionLength = Object.keys(gsCollection).length;
	
	jQEncapsulated("body").append("<style> .grid__item .image-element { opacity: 1 !important; } .t4s-product-inner { opacity: 1 !important; transform: unset !important; } .js [reveal-on-scroll='true'] { opacity: 1 !important;  } .gsProductAlias .opacity-0 { opacity: 1 !important; }  .gsProductAlias .engoj_select_color { display: none !important; } .gsProductAlias .product-item__primary-image { visibility: visible !important; opacity: 1 !important; }  [reveal] { opacity: 1 !important; }  .gsProductAlias .image-cont--with-secondary-image .product-block__image--primary { opacity: 1 !important; }  .gsProductAlias .product-inner .product-image .inner img { padding-top: 0px !important; } .sticky-collection-sidebar { display: block !imortant; }  .b-spinner { display: none !important; } .gsProductAlias { opacity: 1 !important; } body.allow-grid-animations:not(.is-page-loading) [data-animation='moFadeInUp'].will-animate { opacity: 1 !important; } .gsProductAlias .item-swatch { display: none !important; } .appear.lazyloading, .appear.lazyloaded { opacity: 1 !important; } .image-wrap img { animation-delay: unset !important; animation: unset !important; } .ProductItem .AspectRatio--withFallback { max-height: unset !important; } .slide-up-animation { opacity: 1 !important; transform: translateY(0) !important; } [data-rimg-canvas] { display: none !important; } .gsProductAlias .grid-product__colors { display: none !important; } .gsProductAlias .slick-dots { display: none !important; } .gsProductAlias .product-item__colors { display: none !important; } .container-pushy-main { height: auto !important; } .infinite-scroll-show-more { display: none !important; } .rimage__img--show:not(.loaded), .product-top { visibility: visible !important; } </style>");
	
	
	if(jQEncapsulated(".product--root .image--root .image-scale-hack").length > 0) {
		jQEncapsulated("body").append("<style> .product--root .image--root img { max-height: 100% !important; width: auto !important; height: auto !important; } </style>");			
	}
	
	
	if(jQEncapsulated('.grid-swipe').length > 0) {
		hasSlickInCollection = true;
		setTimeout(function(){
			jQuery(window).trigger('resize');
		},1000);
	}
	
	if(jQEncapsulated(".collection-matrix .product-wrap .js-quick-shop-link").length > 0) {
		isTurboP = true;
	}
	
	// NARATIVE = 1
	try {
	if((jQEncapsulated(".card-list .card-list__column").length > 0) && (parseInt(jQEncapsulated(jQEncapsulated(".card-list").get(0)).attr('data-desktop-columns')) > 0)){
	if(jQEncapsulated(window).width() >= 750) {
		specialTheme = 1;	
	}
	jQEncapsulated("body").append("<style> .card__image { height: auto !important; } .card--reveal, .card { opacity: 1 !important; transform: none !important; -webkit-transform: none !important;  -ms-transform: none !important; } </style>");
	
	jQEncapsulated("body").append("<style> .card__wrapper { min-height: 450px; }  @media screen and (min-width: 500px) { .card__wrapper { min-height: 650px; } } </style>");	

	if(parseInt(jQEncapsulated(jQEncapsulated(".card-list").get(0)).attr('data-desktop-columns')) == 3) {
		jQEncapsulated("body").append("<style> .card__wrapper { min-height: 450px; }  @media screen and (min-width: 500px) { .card__wrapper { min-height: 550px; } } </style>");			
	}	
	
	}
	}
	catch(err) {
	}	
	
	if(jQEncapsulated(".container-pushy-main").length > 0 && jQEncapsulated("#category-sticky-parent").length > 0 && jQEncapsulated(".pagination-buttons").length > 0) {
		jQEncapsulated("#category-sticky-parent").after(jQEncapsulated(jQEncapsulated(".pagination-buttons").get(0)));
	}
	
	// TURBO 
	if((jQEncapsulated(".columns .collection-matrix .one-third").length > 0) || (jQEncapsulated(".columns .collection-matrix .four").length > 0) || (jQEncapsulated(".columns .collection-matrix .eight").length > 0)) {
	specialTheme = 2;
	setInterval(function() {
	jQEncapsulated(".js-forms .viewed").removeClass("viewed");
	}, 1000);
	}
	
	// PARALLAX 
	if((jQEncapsulated("#shopify-section-collection-template .one-third").length > 0) || (jQEncapsulated("#shopify-section-collection-template .four .product_image .image__container").length > 0) || (jQEncapsulated("#shopify-section-collection-template .eight .product_image .image__container").length > 0)) {
		jQEncapsulated("html").css("opacity", '1');
		jQEncapsulated("body").append("<style> #gsloadmore { height: 40px; } </style>");	
		specialTheme = 2;
	}
	
	// MASONRY
	if(jQEncapsulated(".blocklayout .block").length > 0) {
		specialTheme = 3;
	}
	
	// JUMP START
	if(jQEncapsulated(".wrapper--margins .grid-uniform .small--one-whole").length > 0) {			
		jQEncapsulated("body").append("<style> #gsloadmore { font-size: 18px !important; } .collection-list { height: unset !important; } .collection-list .product { position: relative !important; left: unset !important; top: unset !important; } </style>");	
	}
	
	// SYMMETRY 
	if(jQEncapsulated(".product-block.detail-mode-permanent").length > 0) {			
		jQEncapsulated("body").append("<style> .product-info .inner { max-width: 245px; } </style>");	
	}
	
	// VENUE
	if(jQEncapsulated(".o-layout__item").length > 0) {			
		specialTheme = 30;
		
		jQEncapsulated("body").append("<style> .product-top { opacity: 1 !important; visibility: visible !important; } .o-layout__item .product { opacity: 1 !important; visibility: visible !important; } </style>");	
	}

	//Prestige
	if(jQEncapsulated(".Grid__Cell .ProductItem").length > 0) {			
		jQEncapsulated("body").append("<style> #gsloadmore { font-size: 16px !important; background-color: #111 !important; color: #fff !important; padding: 10px !important; } .Grid__Cell .ProductItem { transform: matrix(1, 0, 0, 1, 0, 0) !important; opacity: 1 !important; visibility: visible !important; } </style>");	
	}
	
	//Impulse
	if(jQEncapsulated(".grid-product__link .grid-product__image-mask").length > 0) {			
		jQEncapsulated("body").append('<style> #gsloadmore { margin-bottom: 20px !important; } .image-wrap img:not([role="presentation"]), .image-wrap svg, .image-wrap .animate-me { opacity: 1 !important; } </style>');	
	}	
	
	// MASONRY
	if(jQEncapsulated(".productgrid--masthead").length > 0) {
		//specialTheme = 4;
	}	

	// DISTRICT
	if(jQEncapsulated(".product_card__image-wrapper .alt").length > 0) {
		specialTheme = 5;
	}	
	
	// TESTAMENT
	if((jQEncapsulated("#product-loop .product-index").length > 0) && (jQEncapsulated("#product-loop .first").length > 0)) {
		jQEncapsulated("body").append('<style> .gsProductAlias .hidden { opacity: 0 !important; }  .pagination-count { display: none !important; } .paginext { display: none !important; } </style>');	
		specialTheme = 6;
	}	
	
	// BLOCKSHOP
	if(jQEncapsulated(".off-canvas--main-content .product-grid--root .product--root").length > 0) {
		additionalParentContainer = ', .product-grid--root .product--root';
		if((jQEncapsulated(".breadcrumbs").length == 2) && (jQEncapsulated(".pagination").length == 1) ) {
			jQEncapsulated(jQEncapsulated(".breadcrumbs").get(1)).parent().hide();
			jQEncapsulated(jQEncapsulated(".pagination").get(0)).parent().css("width", "100%").css("margin-bottom", "20px");
			jQEncapsulated("body").append('<style> #gsloadmore { font-size: 14px !important; padding-top: 6px !important; padding-bottom: 6px !important; } </style>');				
		}
	}	
	
	// PIPELINE
	if(jQEncapsulated(".text-center .pagination-custom").length > 0) {
		specialTheme = 7;
		additionalParentContainer = '';
		jQEncapsulated("body").append('<style>  .gsProductAlias .collection__image__bottom { opacity: 0 !important; } #gsloadmore { margin-top: 0px !important; } </style>');	
	}	
	
	// ICON
	if(jQEncapsulated("#bside #product-loop .product").length > 0) {
		specialTheme = 8;		
		jQEncapsulated("body").append('<style> #gsloadmore { padding-top: 12px !important; padding-bottom: 12px !important; } .gsProductAlias .hidden { opacity: 0 !important; } </style>');	
		additionalParentContainer = ', #product-loop .product';
	}	
	
	// ENVY
	if(jQEncapsulated("#Collection .indiv-product-wrapper").length > 0) {
		specialTheme = 9;		
		additionalParentContainer = ', .grid__item';	
	}	
		
	// RETINA
	if(jQEncapsulated(".thumbnail .product_image .quick_shop").length > 0) {
		specialTheme = 10;		
	}		
	
	// SUNRISE
	if(jQEncapsulated(".collection-th .prod-th").length > 0) {
		additionalParentContainer = ', li';	
	}			

	// ATLANTIC
	if(jQEncapsulated(".product-list .product .product-card-figure").length > 0) {
		specialTheme = 11;	
		additionalParentContainer = ', .product-list .product';	
	}			
	
	// SPLIT
	if(jQEncapsulated(".site-box-container .box__collection").length > 0) {
		specialTheme = 12;
		additionalParentContainer = ', .box__collection';	
	  jQInf(".site-box").each(function() {
		  if(jQInf(this).children().length == 0) {
		  	jQInf(this).remove();
		  }
	  });	
	}			
	
	// VANTAGE
	
	if((jQEncapsulated(".product-loop .medium_grid .product-index-inner .box-ratio").length > 0) || (jQEncapsulated(".product-loop .large_grid .product-index-inner .box-ratio").length > 0)) {
		specialTheme = 13;		
		additionalParentContainer = ', .product-index';	
		jQEncapsulated("body").append('<style> #gsloadmore { background-color: #ddd !important; color: #111 !important; height: 35px; border: 0px !important; border-radius: 0px !important;  } </style>');	
		
	}

	// SYMMETRY
	if(jQEncapsulated(".rimage-outer-wrapper .rimage-wrapper .rimage__image").length > 0) {
		specialTheme = 14;			
	}				
		
	if((jQEncapsulated(".quickshop .quickshop-spinner").length > 0) && (jQEncapsulated(".quick-shop-modal-trigger").length > 0)) {
		specialTheme = 15;
	}	
	
	// SHOWCASE
	if((jQEncapsulated(".wide-container .jiggly-split").length > 0)) {
		specialTheme = 16;
	}		
	
	if((jQEncapsulated(".top-bar .grid__item").length > 0)) {
		additionalParentContainer = ' ';
	}
	
		// BROOKLYN
		if((jQEncapsulated(".grid__item .grid-uniform .grid__item").length > 0)) {
			additionalParentContainer = ', .grid__item';		
			specialTheme = 20;
		}
		
		// BROOKLY AGAIN !
		if(jQEncapsulated(".grid-uniform .grid-product .grid-product__image-wrapper .product--wrapper").length > 0) {
			jQEncapsulated("body").append('<style> .grid-product__image-link { background-color: unset !important; } .product--wrapper div {padding-top: unset !important; max-height: unset !important; } .product--image { position: relative; max-height: unset !important; }  } </style>');			
		}		
		
		// PIPELINE
		if((jQEncapsulated(".grid__item .grid-uniform .grid__item").length > 0)) {
			if(jQEncapsulated(".collection-content").length > 0) {
				additionalParentContainer = ' ';		
			}
		}
		
		// KINGDOM
		if((jQEncapsulated(".isotope-products .three .grid-item-image").length > 0)) {
			jQEncapsulated("body").append('<style> .infobar { height: 150px !important; } .grid-item.loaded { position: relative !important; left: unset !important; top: unset !important;  } </style>');			
			specialTheme = 17;
		}
		
		// CASCADE
		if((jQEncapsulated(".collection-cascade .resp-img-wrapper .resp-img-placeholder").length > 0)) {			
			additionalParentContainer = ', .item--large-gap';	
			specialTheme = 18;
		}

		// CASCADE
		if((jQEncapsulated(".under-style .only-image").length > 0)) {	
			additionalParentContainer = ', .product-list-item';						
			specialTheme = 19;
		}

		try {
		if((jQEncapsulated(".resp-img-wrapper.js .resp-img").length > 0) && (jQEncapsulated(".resp-img-wrapper.js .resp-img-placeholder").length > 0)) {	
			var gridFix = ".resp-img-wrapper.js .resp-img { height: auto !important; max-width: 100% !important; }";
			    gridFix += ".resp-img-wrapper.js .resp-img-placeholder {  display: none !important; }";
			    gridFix += ".resp-img-wrapper.js .resp-img, .resp-img-wrapper.js .resp-img-placeholder { position: relative; }";
			    gridFix += ".product-grid-item .relative {  max-height: unset !important;  min-height: 0;}";
			    gridFix += ".resp-img-wrapper div {  padding-top : 0px !important}";
			    gridFix += ".grid--uniform .resp-img-wrapper div { max-height: unset !important }";
			jQEncapsulated("body").append("<style>" + gridFix + "</style>");					
		}
		}
		catch(err) {
		}				
		
		// COLORS
		if((jQEncapsulated(".col-0 .inner .table .cell").length > 0)) {	
			specialTheme = 21;
			additionalParentContainer = ' .collection-product';						
			jQEncapsulated("body").append('<style> .HidGSden { visibility: visible !important; } #gscollectionbottom { clear: both; } </style>');	
			
		}
		
		// AVENUE
		if((jQEncapsulated("#filters .sortby .table-cell .form .paginateBy").length > 0)) {
			jQEncapsulated("body").append('<style> .sortby h5 { display: none; }  </style>');
		}			
		
		// CASCADE
		if((jQEncapsulated(".parallax-container	.grid__item--variable-height .image-crossfade").length > 0)) {	
			specialTheme = 22;
		}			
		
		// CAPITAL
		if((jQEncapsulated(".js-focus-visible .collection-wrapper .product-item .js-dependent").length > 0)) {	
			specialTheme = 23;
		}		
		
		
		if(jQEncapsulated("#wrapthewrap .product .rimage-outer-wrapper .rimage-wrapper .rimage__image").length > 0) {
			specialTheme = 24;
		}			
		
		
		if((jQEncapsulated(".grid__item .grid-uniform .dt--one-quarter").length > 0)) {
			specialTheme = 0;
			additionalParentContainer = ' ';
		}
		
		if(jQEncapsulated("#wrapthewrap .product .rimage-outer-wrapper .rimage-wrapper .rimage__image").length > 0) {
			specialTheme = 24;
		}
		
		if(jQEncapsulated(".first-in-row .rimage-outer-wrapper .rimage-wrapper .rimage__image").length > 0) {
			specialTheme = 25;
		}	
		
		if(specialTheme == 14) {
				jQEncapsulated("body").append('<style> .rimage-wrapper .rimage__image { height: auto !important; } </style>');		
		}	
				
		if((jQEncapsulated(".col-0 .image .frame").length > 0)) {	
			specialTheme = 26;			
		}				

		if((jQEncapsulated(".prodThumb .twoImg .second").length > 0)) {	
			specialTheme = 27;			
		}					
		
		if((jQEncapsulated(".collection-main .collection-th .prod-th .product_img-wrapper").length > 0)) {	
			specialTheme = 31;			
		}		
		
		if((jQEncapsulated(".partial--product .image-wrapper .image--root .image--container img").length > 0)) {	
			jQEncapsulated("body").append('<style> .image--root img { height: auto; } </style>');	
		}
		
		
		// KAGAMI
		if((jQEncapsulated(".product-item__inner .product-item__image-wrapper .aspect-ratio img").length > 0)) {	
			jQEncapsulated("body").append('<style> .product-item__image .aspect-ratio img { height: auto; width: auto; margin: auto; left: 0; right: 0; } </style>');	
		}
				
		if((jQEncapsulated(".grid__cell .product-item--push .aspect-ratio img").length > 0)) {	
			specialTheme = 32;	
			jQEncapsulated("body").append('<style> .aspect-ratio > img, .no-js .aspect-ratio > noscript img { height: auto; width: auto; margin: auto; left: 0; right: 0; } </style>');	
		}
		
		if((jQEncapsulated('.collection-listing .product-crop-tall .product-list-item figure[data-rimg-template*="shopif"]').length > 0)) {	
			specialTheme = 33;	
			jQEncapsulated("body").append('<style> .aspect-ratio > img, .no-js .aspect-ratio > noscript img { height: auto; width: auto; margin: auto; left: 0; right: 0; } </style>');	
		}
		
		if((jQEncapsulated(".products .visible-md-block").length > 0)) {	
			specialTheme = 34;			
		}				
		
		if((jQEncapsulated(".product-grid *[data-bgset*='/products/']").length > 0)) {	
			specialTheme = 35;			
		}					
		
		if((jQEncapsulated(".gecko-cart-subtotal").length > 0) || (jQEncapsulated(".gecko-shop-loader").length > 0) || (jQEncapsulated(".gecko-tooltip").length > 0)) {
			
				
			jQEncapsulated("body").append('<style>  .jas-grid-item { position: relative !important; left: 0 !important; top: 0 !important; transform: unset !important; } .jas-products-holder { height: auto !important; } </style>');							
			specialTheme = 36;	
		}

		// IMPULSE
		if((jQEncapsulated(".grid__item .grid-product .grid-product__content .grid-product__link").length > 0)) {			
			additionalParentContainer = ', .grid-product';	
			specialTheme = 37;	
		}
		
		// UNKNOWN
		if((jQEncapsulated("#CollectionSection .wrapper .full-list .product-list").length > 0)) {			
			additionalParentContainer = ', .full-list .product-list';	
			jQEncapsulated("body").append('<style>  .image-swap-completed #add-to-cart-button { display: none !important; } </style>');		
			specialTheme = 38;									
		}			

		if(jQEncapsulated('.ProductItem__Image--alternate').length > 0 || jQEncapsulated('.productitem--image-alternate').length > 0) {
			imagealternatepresent = true;
		}

		// MASONRY 
		if((jQEncapsulated(".blocklayout .block .sub .product-block-title").length > 0)) {			
			jQEncapsulated("body").append('<style>  .blocklayout { position: relative !important; height: auto !important; margin-bottom: 80px !important; } .blocklayout .block { top: auto !important; left: auto !important; position: relative !important;  } .block.product .sub { position: absolute !important; } </style>');		
			specialTheme = 39;
		}				
	

		// MOTION THEME		
			if((jQEncapsulated(".gf_column .gf_product-image").length > 0)) {	
				additionalParentContainer = ', .gf_column ';
				specialTheme = 40;
		}
		
		if((jQEncapsulated(".collectionGrid-row .collectionBlock").length > 0)) {	
			
			jQEncapsulated("body").append('<style> .gsProductAlias .js-quickView { display: none !important; } .gsProductAlias .collectionBlock-hover { display: none !important; }  .collectionBlock-image { background-size: contain !important; } </style>');					
			additionalParentContainer = ', .collectionBlock ';
			specialTheme = 41;
		}			
	
	
		if(specialTheme == 0) {
		if((jQEncapsulated(".products .price_align--center").length > 0)) {	
			specialTheme = 42;
		}
		}

		if(specialTheme == 0) {
			
			if(jQEncapsulated(".productarray .product_block").length > 0) {	
			specialTheme = 43;
			}
		}
	
		// EDITORIAL
		if(jQEncapsulated(".is-moved-by-drawer .relative .resp-img-wrapper .resp-img").length > 0) {	
			jQEncapsulated("body").append('<style> .is-moved-by-drawer .relative .resp-img-wrapper .resp-img { max-height: 100%; height: auto; width: auto; margin: auto; left: 0; right: 0; } </style>');				
		}
	
jQEncapsulated("body").append('<style>  .gridSpacer { display: none !important; }.grid__item--collection-template .grid-view-item__image-wrapper { max-width: unset !important; } .grid__item--collection-template .grid-view-item__image-wrapper .lazyautosizes { max-width: 100% !important;  width: auto !important; max-height: 100% !important;  margin: auto !important; right: 0 !important; left: 0 !important; } [data-image-loading-animation] { background-color: unset !important; } </style>');					 	
		

		setInterval(function() {
			try {
				jQEncapsulated(".lazyloading").each(function() {
					jQEncapsulated(this).removeClass("lazyloading");
					jQEncapsulated(this).addClass("lazyloaded");
				});										
		}
		catch(err) {
		}
		}, 3000);						
					
			
						

			
	if((window.location.href.indexOf("/products/") > 0) || (window.location.href.indexOf("/cart/") > 0)) {
		return;
	}
		
	
	exludedSections = getExcludedSections();
    jQEncapsulated.imageSwap();

    var pageContent = getHtmlHash();
    var counter = 0;

    function onPageChanges(){
         //var start = new Date();

        var pageDiffAmount = 1000;
        var pageContentCheck = getHtmlHash();
        var diff = pageContentCheck - pageContent;

        if(pageContentCheck != pageContent && diff > 0 && diff >= pageDiffAmount){

            pageContent = pageContentCheck;

            jQEncapsulated.imageSwap();

            counter++;

        }
    }
}

if(window.location.href.indexOf("gsappdisabled") > 0) {
jQEncapsulated(this).css("opacity", '1');
setTimeout(function(){
jQEncapsulated(this).css("opacity", '1');
},1000);

}

if (isImageSwapEnabled && (window.location.href.indexOf("gsappdisabled") <= 0)) {

    var elem = document.querySelector('html');

    jQEncapsulated(window).on("load", function() {
gsHadLoadRun = true;

		if(forceActionOnLoad) {
setTimeout(function(){			
		onReadyLauncher();
},200);		
		}
    });		
	
    jQEncapsulated(document).ready(function () {

		try {
		if(jQEncapsulated(".gsdatacontb").length > 1) {
			jQEncapsulated(".gsdatacontb").first().remove();			
		}
  	 	} catch(error){
  	 	}  


		if(showmanualvariants == false) {			
			variantsenabled = {};
		}

if(window.location.href.indexOf("/collections/") == -1) {
return;
}


		if(jQEncapsulated('.js-loadMore[href*="page=2"]').length > 0) {
			jQEncapsulated(jQEncapsulated('.js-loadMore').get(0)).after('<div style="display: none;" class="gsforcepaginate"></div>');		
			jQEncapsulated(jQEncapsulated('.js-loadMore').get(0)).remove();
		}		
		
		// masonry 

		if(!showmanualvariants) {
	   	 try {			
			 if(collectionForAuto[gsVSCollectionId] == '1') {
				 showmanualvariants = true;
				 variantsenabled = {};
			 }
			
	   	 } catch(error){
	   	 }  
		}
		else {
   	   	 try {			
   			 if(collectionForManu[gsVSCollectionId] == '1') {
   				 showmanualvariants = false;
   				// variantsenabled = {};
   			 }
			
   	   	 } catch(error){
   	   	 }			
		}

onReadyLauncher();

setTimeout(function(){
        setInterval(function() {
if((jQEncapsulated(".image-swap-completed").length == 0) && (jQEncapsulated(".gsProductAlias").length == 0)) {
                onReadyLauncher();
}
        
        }, 1000);


},500);


/*
		if(gsHadLoadRun || ((jQEncapsulated(".lazyloading").length == 0 && (jQEncapsulated(".blocklayout .block").length == 0)) || (jQEncapsulated("#shopify-section-collection-template .one-third, #shopify-section-collection-template .four, #shopify-section-collection-template .eight").length > 0))) {
setTimeout(function(){
			onReadyLauncher();
},200);				
		}
		else {
			forceActionOnLoad = true;
		}
*/
    });
	
}

// LOADER CODE
jQInf = jQEncapsulated;
jQInf(window).ready(function() {

if(window.location.href.indexOf("/collections/") == -1) {
return;
}

if(!oncego) {
	 try {
	 	jQInf("#bc-sf-filter-top-pagination").remove();
	 } catch(error){
	 }  	
	
	
jQInf("body").append('<style> .product-block { opacity: 1 !important } .image-swap-completed .icon-fallback-text .icon-plus { display: none; } .grid__item .placeholder-background--animation { background-color: unset !important; }  #bc-sf-filter-load-more { display: none !important; } .card { opacity: 1 !important; } img[data-rimg="lazy"], img[data-rimg="loading"] { opacity: 1 !important; } </style>');	
oncego = true;
//NARRATIVE
if(jQEncapsulated(".card-list__column .card__image-wrapper--aligned").length > 0) {
	
	setTimeout(function()
	{
	gsscroller = new GSLoader();
	}, 2000);		
	

}
else {
  gsscroller = new GSLoader();
}
 
}
});

paginateSel = null;
paginateSelector = '';
collectionParent = '';
collectionPageNr = 1;
gsscroller = null;
containerPos = 1;
productsParentTmp = null;

function getUrlParams( prop ) {
    var params = {};
    var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
    var definitions = search.split( '&' );

    definitions.forEach( function( val, key ) {
        var parts = val.split( '=', 2 );
        params[ parts[ 0 ] ] = parts[ 1 ];
    } );

    return ( prop && prop in params ) ? params[ prop ] : null;
}

var GSLoader = function() {

 
paginateSelector = '.pagination';

collectionParent = '.products';
collectionParent = this.findCollectionParent();  

if(jQInf('.pagination').length == 0) {
		
paginateSelector = '';	
	
var paginationNodes = jQInf(collectionParent).find('*[class*="agination"]');
if(paginationNodes.length > 0) {
paginateSelector = '.' + jQInf.trim(paginationNodes.first().attr("class")).replace(/\s\s+/g, ' ').replace(/ /gi, '.');
}
else {
	if(jQInf('#pagination').length > 0) {
		paginateSelector = '#pagination';
	}
	else {
	paginationNodes = jQInf('*[id*="agination"]');
		if(paginationNodes.length > 0) {
			paginateSelector = '#' + paginationNodes.first().attr("id");
		}
		else {
			paginationNodes = jQInf('*[class*="aginate"]');
			if(paginationNodes.length > 0) {
				paginateSelector = '.' + jQInf.trim(paginationNodes.first().attr("class")).replace(/\s\s+/g, ' ').replace(/ /gi, '.');
			}
			else {
					paginationNodes = jQInf('*[id*="aginate"]');
					if(paginationNodes.length > 0) {
						paginateSelector = '#' + paginationNodes.first().attr("id");
					}			
			}
		}
	}
}

if(paginateSelector == '') {
var paginationNodes = jQInf(collectionParent).parent().nextAll().find('*[class*="agination"]');
if(paginationNodes.length > 0) {
paginateSelector = '.' + jQInf.trim(paginationNodes.first().attr("class")).replace(/\s\s+/g, ' ').replace(/ /gi, '.');
}
else {
	if(jQInf('#pagination').length > 0) {
		paginateSelector = '#pagination';
	}
	else {
	paginationNodes = jQInf('*[id*="agination"]');
		if(paginationNodes.length > 0) {
			paginateSelector = '#' + paginationNodes.first().attr("id");
		}
		else {
			paginationNodes = jQInf('*[class*="aginate"]');
			if(paginationNodes.length > 0) {
				
				paginateSelector = '.' + jQInf.trim(paginationNodes.first().attr("class")).replace(/\s\s+/g, ' ').replace(/ /gi, '.');
								
			}
			else {
					paginationNodes = jQInf('*[id*="aginate"]');
					if(paginationNodes.length > 0) {
						paginateSelector = '#' + paginationNodes.first().attr("id");
					}			
			}
		}
	}
}
}


if(paginateSelector == '') {
var paginationNodes = jQInf('*[class*="agination"]');
if(paginationNodes.length > 0) {
paginateSelector = '.' + jQInf.trim(paginationNodes.first().attr("class")).replace(/\s\s+/g, ' ').replace(/ /gi, '.');
}
else {
	if(jQInf('#pagination').length > 0) {
		paginateSelector = '#pagination';
	}
	else {
	paginationNodes = jQInf('*[id*="agination"]');
		if(paginationNodes.length > 0) {
			paginateSelector = '#' + paginationNodes.first().attr("id");
		}
		else {
			paginationNodes = jQInf('*[class*="aginate"]');
			if(paginationNodes.length > 0) {
				paginateSelector = '.' + jQInf.trim(paginationNodes.first().attr("class")).replace(/\s\s+/g, ' ').replace(/ /gi, '.');
			}
			else {
					paginationNodes = jQInf('*[id*="aginate"]');
					if(paginationNodes.length > 0) {
						paginateSelector = '#' + paginationNodes.first().attr("id");
					}			
			}
		}
	}
}
}
}

if(paginateSelector == '') {
  if(specialTheme == 2 || specialTheme == 10) {
	  paginateSelector = ".load-more";
  }
}




// AKTODO
if((jQEncapsulated(".wide-container .jiggly-split").length > 0)) { 
	//specialTheme == 16
	paginateSelector = ".pager-button, .pagination";
}

if(paginateSelector == '') {
	if(jQInf(".product_c .page_c").length > 0) {
		paginateSelector = ".product_c .page_c";		
		jQInf("body").append("<style> #gsloadmore { background-color: #111 !important; color: #fff !important; font-size: 16px !important; } </style>");	
	}
}


// masonry theme fix
if((jQInf(".pagination__summary").length > 0) && (jQInf(".collection-sorter").length > 0)) {
jQInf(jQInf(".collection-sorter").get(0)).remove();
}

// unknown theme
if (jQInf(".pull-right.pagination-btns").length > 0 && jQInf(".product-listing").length > 0 && jQInf(".filters-row__pagination").length > 0) {

	jQInf('<center id="forcegscenter"></center>').insertAfter( ".product-listing" );
	jQInf("#forcegscenter").append(jQInf(jQInf(".filters-row__pagination").get(0)));	
}

if(paginateSelector == '') {
  if(jQInf(".load-more").length > 0) {
	  paginateSelector = ".load-more";
  }
}


if(jQInf('.products-footer .basel-load-more').length > 0) {
paginateSelector = ".products-footer, .gspagination";
}
else {

try {
if(paginateSelector.indexOf('basel') > 0) {
paginateSelector = '';
}
}
catch(err) {
}

}

if(paginateSelector == '') {
  if(jQInf("#more").length > 0) {
          paginateSelector = "#more";
  }
}

if(paginateSelector == '') {
    if(jQInf(".infinite-scrolling").length > 0) {
            paginateSelector = ".infinite-scrolling";
    }
}

paginateSelector = paginateSelector.replace('..', '.').replace('..', '.').replace('..', '.').replace('..', '.').replace('..', '.');


if('.#pagination-wrapper' == paginateSelector) {
	paginateSelector = '*[class*="pagination-wrapper"]';
}

if(jQInf(paginateSelector).length > 0) {
jQInf("body").append("<style> .js .ProductList--grid .ProductItem { visibility: visible; } .cata-product.cp-grid .product-grid-item { min-height: 452px; } .cata-product.cp-grid .product-wrapper { min-height: 402px; } [data-rimg-canvas] { display: none !important; } </style>");
}

if(loaderMode == 1) {
jQInf(jQInf(paginateSelector).get(0)).after('<div style="width: 100%;" id="gscollectionbottom"><center><img style="margin-top: 10px;" src="https://gravity-apps.com/variantmanager/media/spin.gif"></center></div>');
}
else {
	var loadMoreExtraStyle = '';
	if(jQInf(".detail-mode-permanent").length > 0) {
		loadMoreExtraStyle = ' font-size: 16px; padding: 10px;';
	}
	jQInf(jQInf(paginateSelector).get(0)).after('<div style="width: 100%;" id="gscollectionbottom"><center> <button id="gsloadmore" style="margin-bottom: 10px; max-width: 250px; border: 1px solid; border-radius: 5px; padding-left: 20px; padding-right: 20px; padding-bottom: 3px; padding-top: 3px; margin-top: 20px; ' + loadMoreExtraStyle + '" type="button">' + loadMoreBtnText + '</button> <img id="gsloaderimg" style="margin-top: 10px; display: none;" src="https://gravity-apps.com/variantmanager/media/spin.gif"> </center></div>');
}

jQInf(jQInf(paginateSelector)).hide();	
jQInf("body").append("<style> " + paginateSelector + " { display: none !important; } </style>");	

setInterval(function() {
	try {
if(jQInf(paginateSelector).css('float').length > 0) {
	jQInf("#gscollectionbottom").css('float', jQInf(paginateSelector).css('float'));
}
}
catch(err) {
}
}, 1000);


jQInf( "*:contains('Page 1')" ).each(function() {
	if(jQInf(this).children().length == 0) {
		jQInf(this).hide();
	}
});
  
  if(jQInf(collectionParent).length > 1) {	
	  var tmpCnt = 1;
	  jQInf(collectionParent).each(function() {
	  if(productsParentTmp.get(0).innerHTML.localeCompare(jQInf(this).get(0).innerHTML) == 0) {
	  	containerPos = tmpCnt;
	  }
	  tmpCnt++;
	  });
  }
  
  
  if(jQInf(collectionParent).find(paginateSelector).length > 0) {
  jQInf(collectionParent).after(jQInf("#gscollectionbottom"));
  }  
  

  this.listenToScroll = this.listenToScroll.bind(this);
  this.analyseView = this.analyseView.bind(this);


  if(productsParentTmp === null) {
	  jQInf("#gscollectionbottom img").remove();
	  jQInf("#gscollectionbottom button").remove();
	  return;
  }

  this.containerElement = productsParentTmp.get(0);

  if(jQInf(".grid-link__container").length > 0) {
	this.containerElement = jQInf(".grid-link__container").get(0);
  }

  if(!this.containerElement) {
  	return;
  }
  

  
  this.paginateSection = document.querySelector(paginateSelector);
  paginateSel = this.paginateSection;

	this.listenToScroll();
};



GSLoader.prototype.findCollectionParent = function() {
	
	var limititerations = 20;
	var colllectionParentTmp = jQInf("a[href*='page=2'], .gsforcepaginate");
	if(jQInf("#bc-sf-filter-bottom-pagination").length > 0) {
		colllectionParentTmp = jQInf("#bc-sf-filter-bottom-pagination");
	}
		
	var collectionParentFound = false;
	while(limititerations > 0) {
		
		colllectionParentTmp = colllectionParentTmp.parent();
				
		limititerations--;
		if(jQInf(colllectionParentTmp).find('a[href*="/products/"]').length > 0) {
			collectionParentFound = true;
			limititerations = 0;
		}
		
	}
	
	if(!collectionParentFound) {
	return false;
	}
	
	var productInCollection = jQInf(colllectionParentTmp).find('a[href*="/products/"]');
	
	if(productInCollection.length < 2) {
		return false;
	}

try {
if(jQInf('#collection-display #product-loop').length > 0) {
productsParentTmp = jQInf('#product-loop');
return '#product-loop';
}
} catch(err) { }
	
	var productInCollectionFirst = productInCollection[0];
	var productInCollectionLast = productInCollection[productInCollection.length - 1];
	productsParentTmp = productInCollectionFirst;
	
	limititerations = 20;
	while(limititerations > 0) {
		
		productsParentTmp = jQInf(productsParentTmp).parent();
				
		limititerations--;
		if(jQInf(productsParentTmp).find(productInCollectionLast).length > 0) {		
			
			if(productsParentTmp.attr("id")) {
				var idName = '#' + productsParentTmp.attr("id");
				return idName ;
			}
						
			if(productsParentTmp.attr("class")) {
				//var className = '.' + productsParentTmp.attr("class").split(" ").join(".");
				//className = className.replace('..', '.').replace('..', '.').replace('..', '.').replace('..', '.').replace('..', '.');
				var className = '.' + jQInf.trim(productsParentTmp.attr("class")).replace(/\s\s+/g, ' ').replace(/ /gi, '.')
				return className;
			}
			
			limititerations = 0;
		}
		
	}

	return false;
}



GSLoader.prototype.listenToScroll = function() {
  if (this.paginateSection) {
	  if(loaderMode == 1) {
    document.addEventListener('scroll', this.analyseView);
    window.addEventListener('resize', this.analyseView);
    window.addEventListener('orientationchange', this.analyseView);
	}
	else {
		jQInf("#gsloadmore").click(this.clickMoreBtn);		
	}
  }
};

GSLoader.prototype.fetchNextPage = function() {
  httpRequest = new XMLHttpRequest();
  try {
  httpRequest.responseType = 'document';
  } catch(error){
  }  
  httpRequest.onreadystatechange = function loadingfinished() { 
  try {
 
 if(jQInf(".debugbygss").length == 0) {
	  jQInf("body").first().append('<div style="display: none !important;" id="debugbygss" class="debugbygss" ></div>');
 }

 jQInf(".gsdebuglisten10").remove();
 jQInf("#debugbygss").append("<div class='gsdebuglisten10'> Response status: " + httpRequest.status + " ready state: " + httpRequest.readyState + " </div>");
 } catch(err) {} 

    if (httpRequest.status == 200 && httpRequest.readyState == 4) {
		
		if(specialTheme == 17) {
	  	  collectionParent = collectionParent.replace(".isotope-products.border-no.loaded", ".isotope-products");
  		}
		
		if(specialTheme == 21) {
	  	  collectionParent = '.collection-products div';
  		}		
		
		
		
		
		if(collectionParent =='#main-collection-product-grid' && httpRequest.responseXML.querySelectorAll("collection-product-grid #main-collection-product-grid").length > 0) {
			collectionParent = 'collection-product-grid #main-collection-product-grid';
		}
		
		
      var appendedSection = httpRequest.responseXML.querySelectorAll(collectionParent)[0];
	 
 
	  jQInf(jQInf(jQInf(".gsProductVariants").get(0)).parent().get(0)).append(jQInf(httpRequest.responseXML).find(".gsProductVariants").clone());
	  jQInf(jQInf(".gsProductImages").get(0)).append(jQInf(httpRequest.responseXML).find(".gsProductImages").find("span").clone());
	 	 
	  if(httpRequest.responseXML.querySelectorAll(collectionParent).length > 1) {	
		  jQInf(httpRequest.responseXML).find(collectionParent).children().each(function() {
			  jQInf(this).addClass("HidGSden");
		  });
		  
		  appendedSection = httpRequest.responseXML.querySelectorAll(collectionParent)[containerPos - 1];
	  }	  
	  if(specialTheme == 12) {
		  jQInf(appendedSection).find(".box--add-hr").remove();
		  jQInf(appendedSection).find(".site-box").each(function() {
			  jQInf(this).addClass("active");
		  });
  	  }
	  
	  if(jQInf(appendedSection).find("img:not(\"[src*='/products/']\")").length > 0 && jQInf(appendedSection).find("img[src*='/products/']").length == 0) {
	  	  jQInf(appendedSection).find("img").not("img[src*='/products/']").not("img[src*='/files/']").each(function() {
			  var imgReference = jQInf(this).get(0);
			  var suggestedImageUrl = '';
			  var productImgContHtml = jQInf(this).parent().get(0).innerHTML;
			  var splitImgUrls = productImgContHtml.split('cdn.shopify.com');
			  
			  var splitCnt = 0;
			  var stringToExaminForImageUrl = '';
			  jQInf.each(splitImgUrls, function(index) {
				  if(splitCnt > 0) {
					  if(this.indexOf('/products/') > 0) {
						  if(stringToExaminForImageUrl == '') {
						  	stringToExaminForImageUrl = this;
					  	  }
					  }
				  }
				  splitCnt++;
			  });
			  
			  if(splitImgUrls.length > 1) {
				  var remainingpath = stringToExaminForImageUrl.replace("'", " ").replace('"', " ").replace(',', " ").replace(';', " ");
				  splitImgUrls =  remainingpath.split(" ");
				  suggestedImageUrl = splitImgUrls[0];
				  suggestedImageUrl = '//cdn.shopify.com' + suggestedImageUrl;
				  jQInf(imgReference).attr('src', suggestedImageUrl);	
			  }
		  });
	  }

	  
      var appendaedPage = httpRequest.responseXML.querySelectorAll(paginateSelector)[0];
	  var nextPageNr = collectionPageNr + 1;
	  
  	jQInf("#gsloaderimg").hide();
  	jQInf("#gsloadmore").show();
	  
	  
	  if(!httpRequest.responseXML.querySelector("a[href*='page=" + nextPageNr +  "']")) {
	  	jQInf("#gscollectionbottom button").remove();
		jQInf("#gscollectionbottom img").remove();
	  }
if(jQInf(".medium-up--one-half, .medium-up--one-third").length > 1 && (jQInf(httpRequest.responseXML).find('.card').length > 0)) {

var columnCnt = 0;
jQInf(httpRequest.responseXML).find('.card').each(function() {
jQInf(jQInf(jQInf(".medium-up--one-half, .medium-up--one-third").get(columnCnt))).get(0).insertAdjacentHTML('beforeend', jQInf(jQInf(this)).get(0).outerHTML);

//jQInf(jQInf(".medium-up--one-half, .medium-up--one-third").get(columnCnt)).html(jQInf(this).innerHTML);
columnCnt++;
if(columnCnt > (jQInf(".medium-up--one-half, .medium-up--one-third").length - 1)) {
columnCnt = 0;
}
});

jQInf(httpRequest.responseXML).find(".gsProductImages span").each(function() {
  gsCollection[jQInf(this).attr("gsProductHandle")] = new Array(jQInf(this).attr("firstImage"));
}); 


if(runThemeCollection) {
try {
	theme.Collection();
}
catch(err) {
	runThemeCollection = false;
}
}

var swap = new ImageSwap();
swap.readVariantImages(jQInf(httpRequest.responseXML).find(".gsProductVariants"));		
swap.run(null);		

// var appendedSection2 = httpRequest.responseXML.querySelectorAll('.medium-up--one-half, .medium-up--one-third')[0];
// jQInf(jQInf(".medium-up--one-half, .medium-up--one-third").get(1)).insertAdjacentHTML('beforeend', appendedSection2.innerHTML);
}
else { 

	if(jQInf(appendedSection).find(".hidden-handheld").length > 0) {
		jQInf(appendedSection).find(".hidden-handheld").remove();
	}	

jQInf(httpRequest.responseXML).find('img').each(function() {
try {
jQInf(this).removeAttr("srcset");
} catch(err) {}
});

if(jQInf('.collection-grid-uninit .collection-header').length > 0) {
if(jQInf(appendedSection).find("header").length > 0) {
	jQInf(appendedSection).find("header").remove();
}	

var containerForChildren = jQInf("<div></div>");
jQInf(appendedSection).find(".collection-grid-item").each(function() {
	containerForChildren.append(jQInf(this));
});
appendedSection = containerForChildren.get(0);
}


if(specialTheme == 33) {	
	jQInf(appendedSection).find("figure").each(function() {
		var backgroundFromTemplate = jQInf(this).attr('data-rimg-template').replace("{size}", '544x800');
		jQInf(this).attr("style", 'background-image: url("' + backgroundFromTemplate + '");');
	});
}

try {

jQInf(appendedSection).children().each(function() {

if(jQInf(this).find("img").length == 0 && jQInf(this).find("*[style*='/products/']").length == 0 && jQInf(this).find("*[data-bgset*='/products/']").length == 0 && jQInf(this).find("a").length > 0 && (!jQInf(this).is("script")) && (!jQInf(this).is("style")) ) {
jQInf(this).remove();

}

});

} catch( error ){}


if(jQInf("#bc-sf-filter-products").length > 0) {
        jQInf("#bc-sf-filter-products").append(appendedSection.innerHTML);
}
else {

//	console.debug(appendedSection.innerHTML);

this.containerElement.insertAdjacentHTML('beforeend', appendedSection.innerHTML);

}

try {
jQInf(this.containerElement).children("style").each(function() {
jQInf(this).hide();
});
} catch( error ){}


if(specialTheme == 17) {
	window.scrollBy( 0, -2);
}

try {
jQInf(".aos-init").removeClass("aos-init");
jQInf(".product-index").removeAttr("data-aos");
//jQInf(".aos-init").removeClass("aos-init");
jQInf(".aos-animate").removeClass("aos-animate");
} catch(err) {}		  
	  
	  jQInf(httpRequest.responseXML).find(".gsProductImages span").each(function() {
		  gsCollection[jQInf(this).attr("gsProductHandle")] = new Array(jQInf(this).attr("firstImage"));
	  }); 
	  
	  try {
	  jQInf(productsParentTmp.get(0)).find("script").hide();
	  } catch(err) {}	  
	  
	 if(runThemeCollection) {
	 try {
	 	theme.Collection();
	 }
	 catch(err) {
	 	runThemeCollection = false;
	 }
	 }	  	 
 
      var swap = new ImageSwap();
	  swap.readVariantImages(jQInf(httpRequest.responseXML).find(".gsProductVariants"));		
      swap.run(null);			  

jQInf(jQInf(this.containerElement).find(".thumb-loader").length > 0)
{
jQInf(this.containerElement).find(".thumb-loader").each(function() {
jQInf(this).css("opacity", '1');
});     

}

}
          if(collectionParent.indexOf("medium-up--one-half") > 0) {
                jQInf(".card").css("opacity", '1');
          }


	  if(jQInf(collectionParent).find(paginateSelector).length > 0) {
	  jQInf(this.containerElement).after(jQInf("#gscollectionbottom"));
	  }
      //this.paginateSection.innerHTML = appendaedPage.innerHTML;
	  jQInf(this.paginateSection).innerHTML = '';
	  jQInf(this.paginateSection).append(jQInf(appendaedPage));  
	  

	  if(jQInf(".cata-product .product-list-item").length > 0) {
	  	jQInf(".cata-product .product-grid-item").each(function() {
			jQInf(this).removeClass("product-grid-item");
			jQInf(this).addClass("product-list-item");			
		});
	  }

                  setTimeout(function()
                  {
try {
SPR.initRatingHandler();
SPR.initDomEls();
SPR.loadBadges();
} catch( error ){}
}, 1000);

                  setTimeout(function()
                  {

  try {
var api = new Yotpo.API(yotpo);
api.refreshWidgets();
  } catch(err) { }

}, 1200);

  try {
        DoublyGlobalCurrency.convertAll($('[name=doubly-currencies]').val());
setTimeout(function() {
  try {
DoublyGlobalCurrency.convertAll($('[name=doubly-currencies]').val());
} catch(err) { }

}, 1000);

  }
  catch(err) { }

	  if(loaderMode == 1) {
	  	this.listenToScroll();
  	  }
	  if(specialTheme == 4) {
	  	jQInf("body").append(jQInf('script[src*="assets/empire"]').get(0).outerHTML);
  	  }
	  if(specialTheme == 11) {
	  	jQInf("body").append(jQInf('script[src*="assets/atlantic"]').get(0).outerHTML);
	  }

	  if(specialTheme == 15) {
	  	jQInf("body").append(jQInf('script[src*="assets/theme.js"]').get(0).outerHTML);
	  }	  
	 
	  if(specialTheme == 39) {
	  try {
	  theme.MasonryManager.appendItems([], $('.blocklayout'));
  		} catch(error){
  	  }
  	  }
 
	  if(specialTheme == 38) {
		  try {
	  		  jQInf(".full-list .clear").not(":last").each(function(index) {
				  jQInf(this).remove();
			  });
		  } catch(error){
		  }			  
	  }	  
	 	  	  
			  
	  if(hasSlickInCollection) {	  
	  $('.grid-swipe').each(function(index) {
	  try {
	  $(this).slick({
	    dots: true,
	    prevArrow: false,
	    nextArrow: false,
	      infinite: true,
	  		centerMode: false,
	  		variableWidth: false,
	          speed: 500,
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          swipe: true,  
	  });
	  } catch(error){
	  }
	  });	
	  }		  

		if(specialTheme == 10) {
			window.retinaAfterLoad();	
		}	  
	  
    }
	
  }.bind(this);
  try {
  httpRequest.gsOpen('GET', this.nextStepLink,true);
  httpRequest.responseType = 'document';
  httpRequest.gsSend();
  }
  catch(err) {
	  httpRequest.open('GET', this.nextStepLink,true);
	  httpRequest.responseType = 'document';
	  httpRequest.send();
  }
};

GSLoader.prototype.analyseView = function() {
  
  var gsViewHPos = window.innerHeight + 300;
  
  if (document.getElementById("gscollectionbottom").getBoundingClientRect().bottom <= gsViewHPos && document.getElementById("gscollectionbottom").getBoundingClientRect().bottom >= 0) {
  	window.collectionPageNr = collectionPageNr + 1;	  
    this.nextSetUrl = this.paginateSection.querySelector("a[href*='page=" + collectionPageNr +  "'], .gsforcepaginate");
	
	var pageUrl = window.location.href;
	if(pageUrl.indexOf('?')) {
		var exploded = pageUrl.split("?");
		pageUrl = exploded[0];
	}
	if(pageUrl.indexOf('#')) {
		var exploded = pageUrl.split("#");
		pageUrl = exploded[0];
	}		
	
    document.removeEventListener('scroll', this.analyseView);
    window.removeEventListener('resize', this.analyseView);
    window.removeEventListener('orientationchange', this.analyseView);
	
    if (this.nextSetUrl || (jQInf("#bc-sf-filter-products").length > 0)) {

        var paramGSStr = '';

        if(getUrlParams("sort_by") != null) {
        paramGSStr = paramGSStr + "&sort_by=" + getUrlParams("sort_by");
        }

        if(getUrlParams("q") != null) {
        paramGSStr = paramGSStr + "&q=" + getUrlParams("q");
        }
	
        if(getUrlParams("view") != null) {
        paramGSStr = paramGSStr + "&view=" + getUrlParams("view");
        }	
		
        if(getUrlParams("constraint") != null) {
        paramGSStr = paramGSStr + "&constraint=" + getUrlParams("constraint");
        }
				

      this.nextStepLink = pageUrl + '?page=' + collectionPageNr + paramGSStr;
	 
if(window.location.href.indexOf("?") != -1) {
	this.nextStepLink = window.location.href + '&page=' + collectionPageNr;
}
else {
	this.nextStepLink = window.location.href + '?page=' + collectionPageNr;
}

 
	  
	  //this.nextStepLink = "https://gravity-apps.com/gravify/mule/collections/" + window.location.href.replace("https://gravity-apps.com/gravify/mule/collections/", "").replace("/all.html", "") + "/all2.html";
	  //this.nextStepLink = "https://gravity-apps.com/gravify/mule/collections/galleria/all2.html";
	  
	  this.fetchNextPage();
    }
	else {
		jQInf("#gscollectionbottom img").remove();
	}
  }
};

GSLoader.prototype.clickMoreBtn = function() {
  
  	window.collectionPageNr = collectionPageNr + 1;	  
    gsscroller.nextSetUrl = paginateSel.querySelector("a[href*='page=" + collectionPageNr +  "']");

	var pageUrl = window.location.href;
	if(pageUrl.indexOf('?')) {
		var exploded = pageUrl.split("?");
		pageUrl = exploded[0];
	}
	if(pageUrl.indexOf('#')) {
		var exploded = pageUrl.split("#");
		pageUrl = exploded[0];
	}			
	
	jQInf("#gsloaderimg").show();
	jQInf("#gsloadmore").hide();
	
    if (gsscroller.nextSetUrl) {

        var paramGSStr = '';

        if(getUrlParams("sort_by") != null) {
        paramGSStr = paramGSStr + "&sort_by=" + getUrlParams("sort_by");
        }

        if(getUrlParams("q") != null) {
        paramGSStr = paramGSStr + "&q=" + getUrlParams("q");
        }	

        if(getUrlParams("constraint") != null) {
        paramGSStr = paramGSStr + "&constraint=" + getUrlParams("constraint");
        }


      gsscroller.nextStepLink = pageUrl + '?page=' + collectionPageNr + paramGSStr;

if(window.location.href.indexOf("?") != -1) {
        gsscroller.nextStepLink = window.location.href + '&page=' + collectionPageNr;
}
else {
        gsscroller.nextStepLink = window.location.href + '?page=' + collectionPageNr;
}


	  //gsscroller.nextStepLink = "https://gravity-apps.com/gravify/mule/collections/" + window.location.href.replace("https://gravity-apps.com/gravify/mule/collections/", "").replace("/all.html", "") + "/all2.html";
//	  gsscroller.nextStepLink = "https://gravity-apps.com/gravify/mule/collections/galleria/all2.html";
	  
	  gsscroller.fetchNextPage();
    }
	else {
		jQInf("#gscollectionbottom button").remove();
		jQInf("#gscollectionbottom img").remove();
	}
  
};

window.retinaAfterLoad = function() {	

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $(".quick_shop").remove();
    } else {
      $('.thumbnail').hover(function(){
        $(this).find('.quick_shop').show();

        if ($(this).find('.secondary').length){
          var imgHeights = $(this).find('.product_image img').map(function() {
              return $(this).outerHeight(true);
          }).get();

          var maxHeight = Math.max.apply(null, imgHeights);

          $(this).addClass('swap');
          $(this).find('.product_image').css('height',maxHeight);
        }

      }, function(){
        $(this).find('.quick_shop').hide();

        if ($(this).find('.secondary').length){
          $(this).removeClass('swap');
          $(this).find('.product_image').css('height', 'auto');
        }
      })

      var modal_width = '860px';
      if($(window).width() >= 1200 || $('html').hasClass('ie')) {
        modal_width = '1080px'
      }

try {
	if(!isTurboP) {
      $(".quick_shop").fancybox({
        width: modal_width,
        height: 'auto',
        autoSize: false,
        padding: [20, 20, 20, 20],
        afterShow: function(e) {
          var selector = $('.fancybox-opened').find('.selector-wrapper select');
          selector.trigger('change');
        },
		afterShow: function (e) {
			if($(".fancybox-inner .container").length > 1) {
				var containerCnt = 1;
			  	$(".fancybox-inner .container").each(function() {
					if(containerCnt > 1) {
						$(this).remove();
					}
					containerCnt++;
				});								
			}
		},
        beforeShow: function(e) {
          var $gallery = $('.' + $(this.element).data('gallery'));
		  $gallery = $($gallery.get(0));
          var $productSection = $gallery.parents('.product_section');
		  $productSection = $($productSection.get(0));
          var $product = $(this.element).data("fancybox-href");
//		  $product = $($product.get(0));
          var thumbnailPosition = $productSection.data('thumbnail');
          var slideshowAnimation = $productSection.data('slideshow-animation');
          var slideshowSpeed = $productSection.data('slideshow-speed');

          $gallery.flexslider({
            startAt: parseInt($('.featured_image', $(this)).data('index'), 10),
            touch: true,
            pauseOnHover: true,
            controlNav: thumbnailPosition == "no-thumbnails" ? false : "thumbnails",
            directionNav: thumbnailPosition == "no-thumbnails" ? true : false,
            animation: slideshowAnimation == 'none' || slideshowAnimation == 'zoom' ? 'fade' : slideshowAnimation,
            slideshow: slideshowAnimation == 'none' || slideshowAnimation == 'zoom' ? false : true,
            slideshowSpeed: slideshowSpeed ? slideshowSpeed*1000 : 10*1000,
            start: function(slider){
              slider.resize();
            }
          });

          if($('.slides li:not(.clone)', $productSection).length == 1) {
            $('.flex-direction-nav', $gallery).hide();
          }

          if (slideshowAnimation == 'zoom'){
            $('.image__container img', $productSection)
                .wrap('<div></div>')
                .parent()
                .zoom({
                  magnify: 1
            });
          }

        }
      });
  }
	  }
  	catch(err) {
  	 }

    }	
}

if(window.location.href.indexOf("/collections/") > 0) {
jQInf("html").css("opacity", '0');
}




try {

if(Object.keys(window.gsCollection).length == 0) {
jQInf("html").css("opacity", '1');
}

if((jQInf("html").attr("class").indexOf("mediaqueries") != -1)) {
	jQInf("html").append("<style> html { background-color: #fff; } </style>");	
}
}
catch(err) {
}

setTimeout(function()
{
jQInf("html").css("opacity", '1');
}, 2000);	

if((window.location.href.indexOf("&page=") > 0) || (window.location.href.indexOf("?page=") > 0)) {
	var newUrlRedirect = window.location.href.replace("page=", "redirect=");
	window.location.href = newUrlRedirect;
}
gsStartUrl = window.location.href;

setInterval(function() {
	try {
		if(gsStartUrl.replace("#", '') != window.location.href.replace("#", '')) {
			gsStartUrl = window.location.href;
			location.reload();
		}
}
catch(err) {
}
}, 500);
