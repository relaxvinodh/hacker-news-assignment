(this["webpackJsonphacker-news-assignment"]=this["webpackJsonphacker-news-assignment"]||[]).push([[0],{50:function(n,t,e){n.exports=e(85)},84:function(n,t,e){},85:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(34),o=e(5),u=e(14),c="newsScope",l=e(23),d=e(26),s=e.n(d),f=e(97),v=e(86),p=e(99),g=e(87),m=e(88),h=e(98),b=e(100),x=e(89),j=function(){var n,t,e;return s.a.parse(null===(n=window)||void 0===n||null===(t=n.location)||void 0===t||null===(e=t.hash)||void 0===e?void 0:e.slice(1))},O=function(n){return f.a(v.a,p.a((function(t){var e=Object(u.a)(t,2),r=e[0],a=e[1];return[n(r),a]})),g.a)},w=function(n){return f.a(m.a((t=h.a("".concat(n,".")),function(n,e){return t(e)})),O(b.a(n.length+1)));var t},E=x.a(2,(function(n){return O((function(t){return"".concat(n,".").concat(t)}))})),k=(Object(o.atomFamily)({key:"hash",default:function(n){return w(n)(j())}}),Object(o.atomFamily)({key:"hashDefault",default:function(n){return w(n)(j())}})),y=Object(o.selectorFamily)({key:"hashSelector",get:function(n){return function(t){return(0,t.get)(k(n))}},set:function(n){return function(t,e){var r=t.set;window.addEventListener("hashchange",(function(){var t=j(),e=w(n)(t);r(k(n),e)}));!function(t){var e=Object(l.a)(Object(l.a)({},j()),E(n,t));window.location.href="#".concat(s.a.stringify(e)),r(k(n),t)}(e)}}}),C=e(16),I=e.n(C),D=e(29),P=e(49),z=e(92),S=e(94),T=e(91),W=e(90),R=function(){var n=Object(D.a)(I.a.mark((function n(t){var e;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://hn.algolia.com/api/v1/search","?page=").concat(Number(t)));case 3:return e=n.sent,n.abrupt("return",e.json());case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Unable to fetch news");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),F=e(95),M=e(96),L=e(45),N=e.n(L),V=["page","hits"],H=["objectID","num_comments","points","title","url","author","created_at"],A=function(n,t){if(0===n.length)return t;var e=F.a(M.a("id"),n);return p.a((function(n){var t,r,a,i;return f.a(W.a("points",null!==(t=null===(r=e[n.objectID])||void 0===r?void 0:r.points)&&void 0!==t?t:n.points),W.a("hidden",null!==(a=null===(i=e[n.objectID])||void 0===i?void 0:i.hidden)&&void 0!==a?a:n.hidden))(n)}))(t)},B=function(n){return p.a(f.a(T.a(H),(function(n){return W.a("shortUrl",function(n){if(null==n)return null;var t=n.replace(/(https?:\/\/)?(www.)?/i,"");return-1!==t.indexOf("/")?t.split("/")[0]:t}(n.url),n)})))(n)},U=Object(o.atom)({key:"UpdatedState",default:[]}),J=Object(o.selector)({key:"persistenceData",get:function(n){var t,e=(0,n.get)(y(c)).page,r=null!==(t=window.localStorage.getItem("".concat("newsItem","-").concat(e)))&&void 0!==t?t:"[]";return JSON.parse(r)},set:function(n,t){var e,r=n.set,a=(0,n.get)(y(c)).page,i=null!==(e=window.localStorage.getItem("".concat("newsItem","-").concat(a)))&&void 0!==e?e:"[]",u=P.a(z.a("id",t.id),JSON.parse(i)),l=S.a(u,[t]);window.localStorage.setItem("".concat("newsItem","-").concat(a),JSON.stringify(l)),t instanceof o.DefaultValue||r(U,l)}}),_=Object(o.selectorFamily)({key:"newsListQuery",get:function(n){return function(){var t=Object(D.a)(I.a.mark((function t(e){var r,a,i,o,u,c,l;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.get,t.next=3,R(n);case 3:return a=t.sent,i=T.a(V,a),o=B(i.hits),u=r(J),c=A(u,o),l=W.a("hits",c,i),t.abrupt("return",l);case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}),Q=Object(o.selector)({key:"newsListUpdated",get:function(n){var t=n.get,e=t(y(c)).page,r=t(_(e)),a=t(U),i=r.hits;return A(a,i)}}),Y=Object(o.selector)({key:"chartData",get:function(n){return function(n){return p.a(T.a(["objectID","points"]),n)}((0,n.get)(Q))}}),q=e(20),G=q,K=G.default,X=G.css,Z=(G.keyframes,G.ThemeProvider),$=K,nn={dark:{regular:"#252525",highlight:"#3498db",input:"black",invalid:"#e74c3c"},light:{regular:"white",highlight:"#3498db",input:"white",invalid:"#e74c3c"},transparent:{regular:"transparent",highlight:"transparent",input:"transparent",invalid:"transparent"}},tn={normal:{style:"solid",width:"2px",invalidInputBorderStyle:"solid",invalidInputBorderWidth:"2px",inputMarginCorrection:"0",normalInputColor:!0},none:{style:"none",width:"0",invalidInputBorderStyle:"solid",invalidInputBorderWidth:"2px",inputMarginCorrection:"0 -2px",normalInputColor:!1}},en={dark:{border:"#383838",borderLight:"#222222",borderAction:"#505050",regular:"rgba(255, 255, 255, 0.9)",link:"3498db",textDescriptive:"rgba(255, 255, 255, 0.6)",textDimmed:"rgba(255, 255, 255, 0.4)",textRegular:"rgba(255, 255, 255, 0.9)"},light:{border:"#ecf0f1",borderLight:"#eeeeee",borderAction:"#bdc3c7",regular:"rgba(0, 0, 0, 0.9)",link:"#3498db",textDimmed:"rgba(0, 0, 0, 0.4)",textDescriptive:"rgba(0, 0, 0, 0.6)",textRegular:"rgba(255, 255, 255, 0.9)"}},rn='"Roboto", sans-serif',an=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rn,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";return{family:t,size:n,weight:e}},on={small:{inputPadding:"5px",inputMargin:"2px",inputTopOffset:7,inputLeftOffset:7,inputWidth:"calc(100% - 4px)",contentPadding:"0 0 7px 0",fonts:{regular:an("7pt"),lightText:an("9pt",rn,500),regularText:an("10pt",rn,500),boldText:an("10pt",rn,700)}},normal:{inputPadding:"5px",inputMargin:"2px",inputTopOffset:7,inputLeftOffset:7,inputWidth:"calc(100% - 4px)",contentPadding:"0 0 7px 0",fonts:{regular:an("8pt"),lightText:an("9pt",rn,500),regularText:an("10pt",rn,500),boldText:an("10pt",rn,700)}},large:{fonts:{regular:an("12pt"),lightText:an("11pt",rn,500),regularText:an("12pt",rn,500),boldText:an("12pt",rn,700)}}},un={normal:{listPadding:"2px",minimalTextPadding:"1px",horizontalPadding:"2px",inputPadding:"5px"},none:{listPadding:"0",minimalTextPadding:"0",horizontalPadding:"0",inputPadding:"5px 0"}},cn={colors:en,backgrounds:nn,spacing:un,borders:tn,sizing:on},ln={backgrounds:nn.light,spacing:un.normal,borders:tn.normal,colors:en.light,sizing:on.normal},dn=e(1),sn=e(25),fn=e(8);function vn(){var n=Object(dn.a)(["\n  background-color: ",";\n  :not(a) {\n    color: ",";\n  }\n  a{\n    color: ",";\n  }\n  \n"]);return vn=function(){return n},n}var pn=function(n){var t=n.children,e=Object(fn.a)(n,["children"]),r=Object.keys(e).filter((function(n){return cn[n]&&!!cn[n][e[n]]}));if(0===r.length)return a.a.createElement(a.a.Fragment,null,t);return a.a.createElement(Z,{theme:function(n){return r.reduce((function(t,r){var a=cn[r][e[r]];return"function"===typeof a&&(a=a(n[r])),Object.assign(t,Object(sn.a)({},r,a))}),Object(l.a)({},n))}},a.a.createElement(a.a.Fragment,null,t))},gn=($.div(vn(),(function(n){return n.theme.backgrounds.regular}),(function(n){return n.theme.colors.regular}),(function(n){return n.theme.colors.link})),pn);function mn(){var n=Object(dn.a)([""]);return mn=function(){return n},n}var hn=$.div(mn());function bn(){var n=Object(dn.a)([""]);return bn=function(){return n},n}var xn=$.div(bn());function jn(){var n=Object(dn.a)(["display: none !important;"]);return jn=function(){return n},n}function On(){var n=Object(dn.a)(["\n    @media (",") {\n      ","\n    }\n  "]);return On=function(){return n},n}var wn={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},En=function(n){return wn[n]},kn=function(n){return"min-width: ".concat(En(n))},yn=function(n){return"max-width: ".concat(En(n))},Cn=function(n,t,e,r,a){return e?X(On(),function(n,t,e){var r=n[t],a=n[e];if(r&&a)return"".concat(kn(r),") and (").concat(yn(a));if(a)return yn(a);if(r)return kn(r);throw Error("Media limit not recognized.")}(e,n,t),r):a},In=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Cn("over","under",n,t,e)},Dn=function(n){return In(n,X(jn()))};function Pn(){var n=Object(dn.a)(["\n  ",";\n"]);return Pn=function(){return n},n}var zn=$.div(Pn(),(function(n){var t=n.hideWhen;return t&&Dn(t)})),Sn=function(n){var t=n.rows,e=void 0===t?[]:t,r=n.renderRow,i=n.children,o=Object(fn.a)(n,["rows","renderRow","children"]);return a.a.createElement(xn,o,a.a.createElement(zn,null,r()),a.a.createElement(hn,null,e.map((function(n){return r(n)}))),i)};function Tn(){var n=Object(dn.a)(["\n  padding: ",";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  div {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 100%;\n  }\n"]);return Tn=function(){return n},n}function Wn(){var n=Object(dn.a)(["align-items: center"]);return Wn=function(){return n},n}function Rn(){var n=Object(dn.a)(["width: ","px;"]);return Rn=function(){return n},n}function Fn(){var n=Object(dn.a)(["\n  flex: "," 0 0;\n\n  ",";\n  ",";\n  \n  ",";\n"]);return Fn=function(){return n},n}var Mn=$.div(Fn(),(function(n){return n.ratio||1}),(function(n){var t=n.minWidth;return t&&X(Rn(),t)}),(function(n){var t=n.hideWhen;return t&&Dn(t)}),(function(n){return n.verticalAlign&&X(Wn())})),Ln=$(Mn)(Tn(),(function(n){var t=n.theme;return"".concat(t.spacing.minimalTextPadding," ").concat(t.spacing.horizontalPadding)}));function Nn(){var n=Object(dn.a)(["\n  ","\n"]);return Nn=function(){return n},n}var Vn=$.div(Nn(),(function(n){var t=n.hideWhen;return t&&Dn(t)}));function Hn(){var n=Object(dn.a)(["\n  color: ",";\n"]);return Hn=function(){return n},n}var An=$(Vn)(Hn(),(function(n){return n.theme.colors.textDimmed}));function Bn(){var n=Object(dn.a)(["\n      display: flex;\n\n      "," & > :not(",") "," {\n        display: none;\n      }\n    "]);return Bn=function(){return n},n}function Un(){var n=Object(dn.a)(["\n      "," & > :not(",") "," {\n        display: none;\n      }\n\n      & "," {\n        width: auto;\n      }\n\n      "," & :not(",") "," {\n        padding-top: ","\n      }\n    "]);return Un=function(){return n},n}function Jn(){var n=Object(dn.a)(["\n    ","\n\n    ","\n  "]);return Jn=function(){return n},n}var _n=$(Mn)(Jn(),(function(n){var t=n.wrapping;return In(t,X(Un(),zn,_n,An,Ln,hn,_n,An,(function(n){var t;return null===(t=n.theme.spacing)||void 0===t?void 0:t.listPadding})))}),(function(n){return function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return Cn("under","over",n,t,e)}(n.wrapping,X(Bn(),hn,_n,An))})),Qn=_n;function Yn(){var n=Object(dn.a)(["\n  border-bottom: 1px solid ",";\n  padding: ",";\n"]);return Yn=function(){return n},n}var qn=$(Qn)(Yn(),(function(n){return n.theme.colors.borderLight}),(function(n){return n.theme.spacing.listPadding}));function Gn(){var n=Object(dn.a)(["\n  text-align: center;\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(dn.a)(["\n  "," {\n    ","\n  }\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(dn.a)(["\n  ",";\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(dn.a)(["\n  color: ",";\n  background-color: ",";\n  font-size: ",";\n  font-weight: ",";\n"]);return Zn=function(){return n},n}function $n(){var n=Object(dn.a)(["\n  color: ",";\n  cursor: ",";\n  margin: 0 5px;\n"]);return $n=function(){return n},n}function nt(){var n=Object(dn.a)(["\n  cursor: pointer;\n"]);return nt=function(){return n},n}function tt(){var n=Object(dn.a)(["\n  cursor: pointer;\n"]);return tt=function(){return n},n}function et(){var n=Object(dn.a)(["\n  color: ",";\n  ",";\n"]);return et=function(){return n},n}function rt(){var n=Object(dn.a)(["\n  text-decoration: none;\n  ",";\n  ","\n"]);return rt=function(){return n},n}function at(){var n=Object(dn.a)(["\n  ",";\n  ",";\n"]);return at=function(){return n},n}function it(){var n=Object(dn.a)(["\n  font-size: ",";\n"]);return it=function(){return n},n}function ot(){var n=Object(dn.a)(["\n  color: ",";\n"]);return ot=function(){return n},n}function ut(){var n=Object(dn.a)(["\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 4px 8px 4px;\n  border-color: transparent transparent #000 transparent;\n  display: inline-block;\n  margin-left: 15px;\n  cursor: pointer;\n"]);return ut=function(){return n},n}var ct=$.span(ut()),lt=X(ot(),(function(n){return n.theme.colors.textDimmed})),dt=X(it(),(function(n){return n.theme.sizing.fonts.regular.size})),st=$.span(at(),dt,lt),ft=$.a.attrs({target:"_blank"})(rt(),lt,dt),vt=$.span(et(),(function(n){return n.theme.colors.regular}),dt),pt=$(vt)(tt()),gt=$(Ln)(nt()),mt=$.span($n(),(function(n){var t=n.onClick,e=n.theme;return t?e.colors.link:e.colors.regular}),(function(n){return n.onClick?"pointer":"default"})),ht=X(Zn(),(function(n){return n.theme.colors.regular}),(function(n){return n.theme.backgrounds.highlight}),(function(n){return n.theme.sizing.fonts.boldText.size}),(function(n){return n.theme.sizing.fonts.boldText.weight})),bt=$.span(Xn(),ht),xt=$.div(Kn(),zn,ht),jt=$.div(Gn()),Ot=function(){var n=Object(o.useSetRecoilState)(J),t=Object(o.useRecoilValue)(Q),e=Object(r.useCallback)((function(t){var e=t.id,r=t.points,a=t.hidden;n({id:e,points:r,hidden:a})}),[n]);return a.a.createElement(gn,{sizing:"small"},a.a.createElement(xt,null,a.a.createElement(Sn,{rows:t,renderRow:function(n){return a.a.createElement(qn,{key:null===n||void 0===n?void 0:n.objectID,wrapping:{under:"sm"}},a.a.createElement(Qn,{ratio:"2",wrapping:{under:"md"}},a.a.createElement(Ln,{minWidth:"30",ratio:"0.5"},a.a.createElement(An,null,"Comments"),a.a.createElement("div",null,null===n||void 0===n?void 0:n.num_comments)),a.a.createElement(Ln,{minWidth:"300",ratio:"0.5"},a.a.createElement(An,null,"Vote Count"),a.a.createElement("div",null,null===n||void 0===n?void 0:n.points)),a.a.createElement(gt,{minWidth:"30",ratio:"0.5",onClick:function(){var t;return e({id:null===n||void 0===n?void 0:n.objectID,points:(null!==(t=null===n||void 0===n?void 0:n.points)&&void 0!==t?t:0)+1,hidden:null===n||void 0===n?void 0:n.hidden})}},a.a.createElement(An,null,"Up Vote"),n&&a.a.createElement(ct,null))),a.a.createElement(Ln,{minWidth:"200",ratio:"5"},a.a.createElement(An,null,"Description"),n&&!n.hidden&&a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,null===n||void 0===n?void 0:n.title),a.a.createElement(st,null," ","("," ",a.a.createElement(ft,{href:null===n||void 0===n?void 0:n.url},null===n||void 0===n?void 0:n.shortUrl)," ",")"," ","by"," ",a.a.createElement(vt,null,null===n||void 0===n?void 0:n.author)," ",(t=null===n||void 0===n?void 0:n.created_at,N()(new Date(null!==t&&void 0!==t?t:Date.now())).fromNow())," [ ",a.a.createElement(pt,{onClick:function(){return e({id:null===n||void 0===n?void 0:n.objectID,points:null===n||void 0===n?void 0:n.points,hidden:!0})}},"Hide")," ] "))));var t}})))},wt=function(){var n=Object(o.useRecoilState)(y(c)),t=Object(u.a)(n,2),e=t[0].page,i=t[1];Object(r.useEffect)((function(){null==e&&i({page:"1"})}),[e,i]);var l=Object(r.useCallback)((function(){i({page:String(Number(e)+1)})}),[e,i]),d=Object(r.useCallback)((function(){i({page:String(Number(e)-1)})}),[e,i]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ot,null),a.a.createElement(jt,null,a.a.createElement(mt,{onClick:"1"===e?void 0:d},"Previous"),"|",a.a.createElement(mt,{onClick:l},"Next"),a.a.createElement(bt,null,"(Page Displayed:"," ",e,")")))},Et=Object(r.createContext)(null),kt=Object(r.createContext)(null);function yt(){var n=Object(dn.a)(["\n  background-color: #ffffff22;\n  display: none;\n"]);return yt=function(){return n},n}function Ct(){var n=Object(dn.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n"]);return Ct=function(){return n},n}var It=$.div(Ct()),Dt=$.div(yt()),Pt=function(n){var t,e,i=n.render,o=n.children,u=n.style,c=Object(r.useContext)(Et);return a.a.createElement(It,{style:u},o&&a.a.createElement(Dt,{"data-default":!0},o),null===c||void 0===c||null===(t=c.data)||void 0===t||null===(e=t.map)||void 0===e?void 0:e.call(t,(function(n,t){return a.a.createElement(Dt,{key:t,"data-category":t},i(n))})))};function zt(){var n=Object(dn.a)(["\n  position: relative;\n\n  :hover *","  {\n    display: block;\n  }\n\n  &:not(:hover) *[data-default] {\n    display: block;\n  }\n"]);return zt=function(){return n},n}var St=$.div(zt(),(function(n){var t=n.hoverId;return"undefined"!==typeof t?'[data-category="'.concat(t,'"]'):"[data-default]"})),Tt=function(n){var t=n.data,e=n.children,i=Object(fn.a)(n,["data","children"]),o=Object(r.useState)(void 0),c=Object(u.a)(o,2),l=c[0],d=c[1],s=Object(r.useCallback)((function(){return d(void 0)}),[]);return a.a.createElement(Et.Provider,{value:{data:t,setHoverId:d}},a.a.createElement(St,Object.assign({},i,{hoverId:l,onMouseEnter:s}),e))},Wt=e(93);var Rt=function(n,t){return f.a(p.a(M.a(n)),Wt.a(Math.max))(t)},Ft=function(n){var t=n.prop,e=Object(fn.a)(n,["prop"]),i=Object(r.useContext)(Et),o=Object(r.useContext)(kt),u=Object(r.useMemo)((function(){var n=(null!==i&&void 0!==i?i:{}).data,e=void 0===n?[]:n,r=Rt(t,e);return e.map((function(n,a){return function(n){var t=n.svgWidth,e=n.svgHeight,r=n.totalPoints,a=n.key,i=n.maxValue,o=n.idx,u=n.item,c=n.radius;return{cx:"".concat(o*(t/r)+t/r/2),cy:"".concat(e-u[a]/i*e||0),r:null!==c&&void 0!==c?c:3}}({svgWidth:null===o||void 0===o?void 0:o.width,svgHeight:null===o||void 0===o?void 0:o.height,totalPoints:e.length,key:t,maxValue:r,idx:a,item:n})}))}),[o,i,t]);return a.a.createElement(a.a.Fragment,null,u.map((function(n,t){return a.a.createElement("circle",Object.assign({},e,n,{key:t}))})))};function Mt(){var n=Object(dn.a)(["\n  flex: 1 1 0;\n  z-index: 2;\n"]);return Mt=function(){return n},n}function Lt(){var n=Object(dn.a)(["\n  display: flex;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n\n  "," + & {\n    bottom: 20px;\n  }\n"]);return Lt=function(){return n},n}var Nt=q.default.div(Lt(),It),Vt=q.default.div(Mt()),Ht=Nt;function At(){var n=Object(dn.a)(["\n  :hover {\n    background-color: #ffff0022;\n  }\n"]);return At=function(){return n},n}var Bt=function(n){n.children;var t,e,i=Object(fn.a)(n,["children"]),o=Object(r.useContext)(Et),u=Object(r.useMemo)((function(){return o?(n=function(n){var t;o.setHoverId(null===(t=null===n||void 0===n?void 0:n.target)||void 0===t?void 0:t.getAttribute("data-category"))},function(t){!function(n){n&&(n.preventDefault(),n.stopPropagation())}(t),n&&n(t)}):void 0;var n}),[o]);return a.a.createElement(a.a.Fragment,null,null===o||void 0===o||null===(t=o.data)||void 0===t||null===(e=t.map)||void 0===e?void 0:e.call(t,(function(n,t){return a.a.createElement(Vt,Object.assign({},i,{key:t,"data-category":t,onMouseEnter:u}))})))},Ut=$(Bt)(At());function Jt(){var n=Object(dn.a)(["\nposition: absolute;\nleft: 0;\ntop: 0;\nright: 0;\nbottom: 0;\nwidth: 100%;\nheight: 100%;\nmargin: 7px;\n"]);return Jt=function(){return n},n}var _t=$.svg(Jt()),Qt=function(n){var t=n.children,e=Object(r.useState)({width:0,height:0}),i=Object(u.a)(e,2),o=i[0],c=i[1],l=Object(r.useRef)(),d=function(){if(l.current){var n=window.getComputedStyle(l.current);c({width:parseFloat(n.width),height:parseFloat(n.height)})}};return Object(r.useEffect)((function(){return d(),window.addEventListener("resize",d,!1),function(){return window.removeEventListener("resize",d,!1)}}),[]),a.a.createElement(kt.Provider,{value:o},a.a.createElement(_t,{preserveAspectRatio:"none",ref:l},t))},Yt=function(n){var t=n.svgWidth,e=n.svgHeight,r=n.data,a=n.key,i=n.maxValue;return r.map((function(n,o){if("undefined"!==typeof n[a]&&null!==n[a]){var u=e-n[a]/i*e||0;return"".concat(o*(t/r.length)+t/r.length/2,",").concat(Number.isFinite(u)?u:0)}return""})).join(" ")};function qt(){var n=Object(dn.a)(["\n  width: 70%;\n"]);return qt=function(){return n},n}var Gt=function(n){var t,e=n.prop,i=Object(fn.a)(n,["prop"]),o=Object(r.useContext)(Et),u=Object(r.useContext)(kt),c=Rt(e,null!==(t=null===o||void 0===o?void 0:o.data)&&void 0!==t?t:[]),l=Yt({svgWidth:null===u||void 0===u?void 0:u.width,svgHeight:null===u||void 0===u?void 0:u.height,data:null===o||void 0===o?void 0:o.data,key:e,maxValue:c});return a.a.createElement("polyline",Object.assign({fill:"none",strokeWidth:"1px"},i,{points:l}))},Kt=$(Ht)(qt()),Xt=function(n){var t=n.data,e=n.renderLegend,r=n.prop;return a.a.createElement(Tt,{data:t,style:{height:"150px",width:"100%"}},a.a.createElement(Pt,{render:e,style:{right:"10px",top:"10px",left:"unset"}}),a.a.createElement(Kt,null,a.a.createElement(Qt,null,a.a.createElement(Gt,{prop:r,stroke:"green",strokeWidth:"2px"}),a.a.createElement(Ft,{prop:r,stroke:"red"})),a.a.createElement(Ut,null)))};function Zt(){var n=Object(dn.a)(["\n  margin-top: 20px;\n"]);return Zt=function(){return n},n}function $t(){var n=Object(dn.a)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  margin: 0 5px;\n"]);return $t=function(){return n},n}var ne=an("10pt",void 0,600),te=$.span($t(),(function(n){return n.theme.colors.regular}),ne.size,ne.weight),ee=$.div(Zt()),re=function(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement(te,null,"ID:"),n.objectID,a.a.createElement(te,null,"Votes:"),n.points)},ae=function(){var n=Object(o.useRecoilValue)(Y);return a.a.createElement(ee,null,a.a.createElement(Xt,{data:n,prop:"points",renderLegend:re}))};function ie(){var n=Object(dn.a)(["\n  padding: 64px 0;\n  margin: 0 auto;\n  width: 200px;\n  box-sizing: content-box;\n  svg {\n    background: none;\n  }\n"]);return ie=function(){return n},n}var oe=$.div(ie()),ue=function(){return a.a.createElement(oe,null,a.a.createElement("svg",{width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-rolling"},a.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:"#b7b7b7",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(229.847 50 50)"},a.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1.8s",begin:"0s",repeatCount:"indefinite"}))))},ce=function(){return a.a.createElement(o.RecoilRoot,null,a.a.createElement(Z,{theme:ln},a.a.createElement(r.Suspense,{fallback:a.a.createElement(ue,null)},a.a.createElement(wt,null),a.a.createElement(ae,null))))};e(84);Object(i.render)(a.a.createElement(ce,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0f428caa.chunk.js.map