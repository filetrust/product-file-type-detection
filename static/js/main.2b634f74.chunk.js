(this["webpackJsonpglasswall-file-type-detection"]=this["webpackJsonpglasswall-file-type-detection"]||[]).push([[0],{165:function(e,t,n){},282:function(e,t,n){e.exports=n.p+"static/media/logo.f2df34b5.svg"},283:function(e,t,n){e.exports=n.p+"static/media/api.980d9789.yaml"},291:function(e,t,n){e.exports=n(751)},296:function(e,t,n){},305:function(e,t){},307:function(e,t){},751:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(46),c=n.n(l),i=(n(296),n(27)),o=(n(165),n(71)),s=n.n(o),u=n(160);var m=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],f=function(e){e.preventDefault(),e.stopPropagation()},p=function(e){e.preventDefault(),e.stopPropagation(),m(u++),e.dataTransfer.items&&e.dataTransfer.items.length>0&&c(!0)},d=function(e){e.preventDefault(),e.stopPropagation(),m(u--),0===u&&c(!1)},E=function(t){if(t.preventDefault(),t.stopPropagation(),c(!1),t.dataTransfer.files&&t.dataTransfer.files.length>0){e.handleDrop(t.dataTransfer.files);try{t.dataTransfer.clearData()}catch(n){}m(0)}},v=r.a.createRef();return Object(a.useEffect)((function(){var e=v.current;return e.addEventListener("dragenter",p),e.addEventListener("dragleave",d),e.addEventListener("dragover",f),e.addEventListener("drop",E),function(){e.removeEventListener("dragenter",p),e.removeEventListener("dragleave",d),e.removeEventListener("dragover",f),e.removeEventListener("drop",E)}}),[]),r.a.createElement("div",{className:"drop-border",ref:v},l&&r.a.createElement("div",{className:"drop-border-dragging"}),e.children)},f=n(289);n(297);var p=function(e){var t,n=e.fileName,a=e.fileExtension,l=e.fileType,c=e.fileSize;return t=n.length>40?n.substring(0,40):n,r.a.createElement("tr",{className:a!==l?"type-danger":""},r.a.createElement(f.a,{content:n},r.a.createElement("td",null,n===t?n:"".concat(t,"...").concat(a))),r.a.createElement("td",null,a),r.a.createElement("td",null,l),r.a.createElement("td",null,c))};var d=function(e){return r.a.createElement("section",{className:"results-section"},r.a.createElement("div",{className:"file-attributes table-container"},r.a.createElement("h1",{className:"table-header"},"File Attributes"),r.a.createElement("table",{cellSpacing:"0",cellPadding:"0"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"header-row"},r.a.createElement("th",null,"File Name"),r.a.createElement("th",null,"Declared File Type"),r.a.createElement("th",null,"Actual File Type"),r.a.createElement("th",null,"File Size"))),r.a.createElement("tbody",null,e.results&&e.results.map((function(e,t){return r.a.createElement(p,Object.assign({key:"result-".concat(t)},e))}))))))},E=function(e,t){var n=new FormData;return n.append("file",t),console.log(t),fetch("https://xugc5ib648.execute-api.eu-west-1.amazonaws.com/Prod/api/FileTypeDetection",{method:"POST",body:n,headers:{"x-api-key":e}})};n(300);var v=function(e){return e.loading?r.a.createElement("div",{className:"spinner-container"},r.a.createElement("div",{className:"spinner"})):null},h=n(753),g=n(281),b=n.n(g),y=function(e){var t=new b.a;return new Promise((function(n,a){t.loadAsync(e).then((function(e){var t=Object.values(e.files),r=[];Array.from(t).forEach(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dir||r.push(t.async("blob").then((function(e){return e.name=t.name,e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Promise.all(r).then(n,a)}),a)}))};var w=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(!1),f=Object(i.a)(o,2),p=f[0],g=f[1],b=Object(a.useState)(!1),w=Object(i.a)(b,2),j=w[0],O=w[1];return r.a.createElement("div",{className:"app-body"},r.a.createElement("h1",null,"Drag and drop files to determine their file type. Files in Zip's will be determined separately."),r.a.createElement(m,{handleDrop:function(t){O(!0),g(!1),c([]);var n=[],a=[],r=function(t,n){return new Promise((function(a){var r={fileName:t.name,fileExtension:n,fileType:"Unknown",fileSize:0},l=function(){var n=Object(u.a)(s.a.mark((function n(){var l,o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E(e.apiKey,t);case 3:return l=n.sent,n.next=6,c(l);case 6:o=n.sent,i(o,t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:a(r);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),c=function(e){return 200!==e.status?(console.log(e),{fileType:"Error",fileSize:0,status:e.status}):e.json()},i=function(e){return r.fileType=e.fileType.toLowerCase(),r.fileSize=e.fileSize,e};l()}))};Array.from(t).forEach((function(e){var t=e.name.split(".").pop().toLowerCase();if("zip"===t){var l=y(e).then((function(n){n.forEach((function(n){t=n.name.split(".").pop().toLowerCase(),n.name="["+e.name+"] -> "+n.name,a.push(r(n,t))}))}),(function(n){console.log(n),a.push(r(e,t))}));n.push(l)}else a.push(r(e,t))})),Promise.all(n).then((function(e){Promise.all(a).then((function(e){c(e),g(!0),O(!1)}))}),(function(e){console.log(e)}))}},r.a.createElement("div",{className:"loading-container"},r.a.createElement(v,{key:6,loading:j}))),r.a.createElement(h.a,{in:p,timeout:{enter:500,exit:500},classNames:"results"},r.a.createElement(r.a.Fragment,null,p&&r.a.createElement(d,{results:l}))))},j=n(282),O=n.n(j),N=function(){return r.a.createElement("div",{className:"app-header"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:O.a,alt:"Logo",height:"90"})))};var x=function(){var e=Object(a.useState)("v1j1jXSdPo8Z7iRW4H34va89ho9mt6KV5y9zezVn"),t=Object(i.a)(e,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app filedrop"},r.a.createElement(N,null),r.a.createElement("input",{type:"text",placeholder:"Api Key",onInput:function(e){l(e.target.value)},hidden:!0}),r.a.createElement(w,{apiKey:n})))},S=n(283),T=n.n(S),P=n(284),D=n.n(P),L=(n(749),function(){return Object(a.useEffect)((function(){setTimeout((function(){document.querySelector(".try-out button").click()}),400)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(D.a,{url:window.location.origin+T.a,docExpansion:"full",defaultModelExpandDepth:"1"}))}),F=n(287),k=n(35);c.a.render(r.a.createElement((function(){return r.a.createElement(F.a,{basename:"/"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/drop"},r.a.createElement(x,null)),r.a.createElement(k.a,null,r.a.createElement(L,null))))}),null),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.2b634f74.chunk.js.map