(()=>{var L="data-js-hook",K="behavior_",ct="state_";function v(){let t={};function n(i,s){return{}.hasOwnProperty.call(t,i)?t[i].push(s):t[i]=[s],this}function e(i,s){if(!{}.hasOwnProperty.call(t,i))return this;let o=t[i].indexOf(s);return o!==-1&&t[i].splice(o,1),this}function r(i,s){if(!{}.hasOwnProperty.call(t,i))return this;s=s||{};let o=t[i];for(let a=0,u=o.length;a<u;a++)o[a].call(this,s);return this}return this.addEventListener=n,this.removeEventListener=e,this.dispatchEvent=r,this.getRegisteredEvents=()=>t,this}function P(t,n){if(!t)return!1;let e=t.getAttribute(L);return e?(e=e.split(" "),e.indexOf(n)>-1):!1}function _(t,n){if(P(t,n))return n;if(n.indexOf(" ")!==-1){let r=L+" values cannot contain spaces!";throw new Error(r)}let e=t.getAttribute(L);return e!==null&&(n=e+" "+n),t.setAttribute(L,n),n}var ut=ct+"atomic_init";function Lt(t,n){if(!t||!t.classList){let e=t+' is not valid. Check that element is a DOM node with class "'+n+'"';throw new Error(e)}return t}function At(t,n){let e=t.classList.contains(n)?t:t.querySelector("."+n);if(!e){let r=n+" not found on or in passed DOM node.";throw new Error(r)}return e}function b(t,n){return Lt(t,n),At(t,n)}function y(t){return P(t,ut)?!1:(_(t,ut),!0)}function w(t,n,e,r={}){let s=(e||document).querySelectorAll(t),o=[],a,u;for(let l=0,c=s.length;l<c;l++)u=s[l],P(u,ut)===!1&&(a=new n(u),a.init(r),o.push(a));return o}function Z(t,n){let e;if(P(t,n))return e=t,e;if(t){let r="["+L+"="+n+"]";e=t.querySelector(r)}if(!e){let r=n+" behavior not found on passed DOM node!";throw new Error(r)}return e}var xt=Object.prototype.toString;var Ot=Array.isArray||function(n){return xt.call(n)==="[object Array]"};var q=K+"flyout-menu",Tt="["+L+"="+q;function D(t,n=!0){let e=Z(t,q),r=R(t),i=Z(t,q+"_content"),s=0,o=0,a=1,u=2,l=3,c,E,p,x=st.bind(this),M=k.bind(this),C,g=!0,O=!1;function R(d){let m=[],A=d.querySelectorAll(`${Tt}_trigger]`),U,B,ot;for(let at=A.length>>>0;at--;){for(ot=!1,U=A[at],B=U.parentElement;B!==d;)B.getAttribute(L)&&B.getAttribute(L).split(" ").indexOf(q)!==-1?(ot=!0,B=d):B=B.parentElement;ot||m.unshift(A[at])}return m}function $(d=!1){return s=d?l:o,r.forEach(m=>{T("expanded",m,d),m.addEventListener("click",h.bind(this)),m.addEventListener("touchstart",I,{passive:!0}),m.addEventListener("mouseover",nt.bind(this)),m.addEventListener("mouseout",it.bind(this))}),i.setAttribute("data-open",d?"true":"false"),n&&!d&&i.setAttribute("hidden",""),ft(),this}function T(d,m,A){let U=String(A);return m.setAttribute("aria-"+d,U),U}function I(){O=!0}function nt(d){g||(O||this.dispatchEvent("triggerover",{target:this,trigger:d.target,type:"triggerover"}),O=!1)}function it(d){g||this.dispatchEvent("triggerout",{target:this,trigger:d.target,type:"triggerout"})}function h(d){if(!g)switch(this.dispatchEvent("triggerclick",{target:this,trigger:d.target,type:"triggerclick"}),d.preventDefault(),s){case o:case a:this.expand();break;case u:case l:this.collapse();break}}function j(){if(c==null||c.halt(),s===u||s===l)return this;if(s=u,n&&i.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!E||!p)return M(),this;let d=c==null?void 0:c.isAnimated();return d&&c.addEventListener(f.END_EVENT,M),E(),d||M(),this}function X(){if(c==null||c.halt(),s===a||s===o)return this;for(let m=0,A=r.length;m<A;m++)T("expanded",r[m],!1);if(i.setAttribute("data-open","false"),s=a,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!p||!E)return x(),this;let d=c==null?void 0:c.isAnimated();return d&&c.addEventListener(f.END_EVENT,x),p(),d||x(),this}function k(){s=l,i.setAttribute("data-open","true"),c&&c.removeEventListener(f.END_EVENT,M),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let d=0,m=r.length;d<m;d++)T("expanded",r[d],!0)}function st(){s=o,n&&i.setAttribute("hidden",""),c&&c.removeEventListener(f.END_EVENT,x),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function pt(d,m,A){c=d,m&&m!==p&&(p=m),A&&A!==E&&(E=A)}function vt(){c&&c.remove();let d;c=d,E=d,p=d}function _t(){return{container:e,content:i,trigger:r}}function ft(){return g&&(g=!1),!g}function gt(){return g||(g=!0),g}function St(d){return C=d,this}let rt=new v;return this.addEventListener=rt.addEventListener,this.removeEventListener=rt.removeEventListener,this.dispatchEvent=rt.dispatchEvent,this.init=$,this.expand=j,this.collapse=X,this.setTransition=pt,this.clearTransition=vt,this.getData=()=>C,this.getTransition=()=>c,this.getDom=_t,this.isAnimating=()=>s===u||s===a,this.isExpanded=()=>s===l,this.resume=ft,this.setData=St,this.suspend=gt,D.BASE_CLASS=q,this}var J={CSS_PROPERTY:"opacity",BASE_CLASS:"u-alpha-transition",ALPHA_100:"u-alpha-100",ALPHA_0:"u-alpha-0"};function ht(t){let n=new v,e=new f(t,J,this);function r(o){return e.init(o),this}function i(){return e.applyClass(J.ALPHA_100),this}function s(){return e.applyClass(J.ALPHA_0),this}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.remove=e.remove,this.setElement=e.setElement,this.fadeIn=i,this.fadeOut=s,this.init=r,this}ht.CLASSES=J;function f(t,n,e){let r=n,i=t;if(!e)throw new Error("Child transition argument must be defined!");let s=e,o,a,u,l=!1,c=!1,E=!1;if(typeof r.CSS_PROPERTY=="undefined"||typeof r.BASE_CLASS=="undefined")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function p(){a&&l?(i.addEventListener(a,u),s.dispatchEvent(f.BEGIN_EVENT,{target:s,type:f.BEGIN_EVENT}),i.classList.add(f.ANIMATING_CLASS),c=!0):(s.dispatchEvent(f.BEGIN_EVENT,{target:s,type:f.BEGIN_EVENT}),u())}function x(){i.removeEventListener(a,u)}function M(h){return h&&h.propertyName!==r.CSS_PROPERTY?!1:(x(),i.classList.remove(f.ANIMATING_CLASS),s.dispatchEvent(f.END_EVENT,{target:s,type:f.END_EVENT}),c=!1,!0)}function C(){let h;for(h in r)({}).hasOwnProperty.call(r,h)&&r[h]!==r.BASE_CLASS&&i.classList.contains(r[h])&&i.classList.remove(r[h])}function g(){c&&(i.style.webkitTransitionDuration="0",i.style.mozTransitionDuration="0",i.style.oTransitionDuration="0",i.style.transitionDuration="0",i.removeEventListener(a,u),u(),i.style.webkitTransitionDuration="",i.style.mozTransitionDuration="",i.style.oTransitionDuration="",i.style.transitionDuration="")}function O(){g(),C(),i.classList.remove(r.BASE_CLASS)}function R(){i.classList.remove(f.NO_ANIMATION_CLASS),l=!0}function $(){i.classList.add(f.NO_ANIMATION_CLASS),l=!1}function T(h){if(!h){let st="Element does not have TransitionEnd event. It may be null!";throw new Error(st)}let j,X={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},k;for(k in X)if({}.hasOwnProperty.call(X,k)&&typeof h.style[k]!="undefined"){j=X[k];break}return j}function I(h){O(),R(),i=h,i.classList.add(r.BASE_CLASS),a=T(i)}function nt(h){if(l=!i.classList.contains(f.NO_ANIMATION_CLASS),u=M.bind(this),I(i),!h)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return i.classList.add(h),this}function it(h){return E||(C(),E=!0),i.classList.contains(h)?!1:(x(),i.classList.remove(o),o=h,p(),i.classList.add(o),!0)}return this.animateOff=$,this.animateOn=R,this.applyClass=it,this.halt=g,this.init=nt,this.isAnimated=()=>l,this.remove=O,this.setElement=I,this}f.BEGIN_EVENT="transitionbegin";f.END_EVENT="transitionend";f.NO_ANIMATION_CLASS="u-no-animation";f.ANIMATING_CLASS="u-is-animating";var z={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function S(t){let n=new v,e=new f(t,z,this),r=0;function i(){let p=t.scrollHeight+"px";t.style.maxHeight=p}function s(){window.removeEventListener("load",s),i()}function o(E){return e.init(E),window.addEventListener("load",s),window.addEventListener("resize",()=>{i()}),this}function a(){return i(),e.applyClass(z.MH_DEFAULT),(!r||t.scrollHeight>r)&&(r=t.scrollHeight),this}function u(){return e.applyClass(z.MH_SUMMARY),r=t.scrollHeight,this}function l(){return e.applyClass(z.MH_ZERO),r=t.scrollHeight,this}function c(){return t.style.maxHeight="",e.remove()}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.setElement=e.setElement,this.refresh=i,this.remove=c,this.init=o,this.maxHeightDefault=a,this.maxHeightSummary=u,this.maxHeightZero=l,this}S.CLASSES=z;var H={CSS_PROPERTY:"transform",BASE_CLASS:"u-move-transition",MOVE_TO_ORIGIN:"u-move-to-origin",MOVE_LEFT:"u-move-left",MOVE_LEFT_2X:"u-move-left-2x",MOVE_LEFT_3X:"u-move-left-3x",MOVE_RIGHT:"u-move-right",MOVE_UP:"u-move-up"};function Et(t){let n=new v,e=new f(t,H,this);function r(u){return e.init(u),this}function i(){return e.applyClass(H.MOVE_TO_ORIGIN),this}function s(u){u=u||1;let l=[H.MOVE_LEFT,H.MOVE_LEFT_2X,H.MOVE_LEFT_3X];return e.applyClass(l[u-1]),this}function o(){return e.applyClass(H.MOVE_RIGHT),this}function a(){return e.applyClass(H.MOVE_UP),this}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.setElement=e.setElement,this.remove=e.remove,this.init=r,this.moveLeft=()=>s(1),this.moveLeft2=()=>s(2),this.moveLeft3=()=>s(3),this.moveRight=o,this.moveToOrigin=i,this.moveUp=a,this}Et.CLASSES=H;var F="o-expandable";function N(t){let n=b(t,F),e,r,i,s,o;function a(){if(!y(n))return this;e=n.querySelector(`.${F}__header`),r=n.querySelector(`.${F}__content`),i=n.querySelector(`.${F}__label`);let c=n.classList.contains(`${F}--onload-open`);_(n,"behavior_flyout-menu"),_(e,"behavior_flyout-menu_trigger"),_(r,"behavior_flyout-menu_content");let E=c?S.CLASSES.MH_DEFAULT:S.CLASSES.MH_ZERO;return s=new S(r).init(E),o=new D(n),o.setTransition(s,s.maxHeightZero,s.maxHeightDefault),o.init(c),o.addEventListener("expandbegin",()=>{r.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),o.addEventListener("collapseend",()=>{r.classList.add("u-hidden")}),this}function u(){return i.textContent.trim()}this.init=a,this.expand=()=>o.expand(),this.collapse=()=>o.collapse(),this.isExpanded=()=>o.isExpanded(),this.refresh=()=>o.getTransition().refresh(),this.getLabelText=u;let l=new v;return this.addEventListener=l.addEventListener,this.removeEventListener=l.removeEventListener,this.dispatchEvent=l.dispatchEvent,this}N.BASE_CLASS=F;N.init=t=>w(`.${N.BASE_CLASS}`,N,t);var W="o-expandable-group";function V(t){let n=b(t,W),e=n.classList.contains(`${W}__accordion`),r,i;function s(a){let u=a.target;i&&i!==u&&i.collapse(),i=u}function o(a){return y(n)?(e&&(r=a,r.forEach(u=>{u.addEventListener("expandbegin",s)})),this):this}return this.init=o,this}V.BASE_CLASS=W;V.init=t=>{(t||document).querySelectorAll(`.${W}`).forEach(r=>{let i=w(`.${N.BASE_CLASS}`,N,r);new V(r).init(i)})};var dt={bpXS:{min:0,max:600},bpSM:{min:601,max:900},bpMED:{min:901,max:1020},bpLG:{min:1021,max:1200},bpXL:{min:1201}};function Q(){let t=getComputedStyle(document.body).fontSize;return t=t===""?-1:t,parseFloat(t)}function bt(t,n){let e=t.min,r=t.max;Q()>0&&Q()!==16&&(e=e/16*Q(),r=r/16*Q());let s=e||0,o=r||Number.POSITIVE_INFINITY;return s<=n&&n<=o}function yt(t){let n={};t=t||window.innerWidth;let e;for(e in dt)n[e]=bt(dt[e],t);return n}var lt="mobile",wt="tablet",Mt="desktop";function mt(t){let n=!1,e=yt();return(t===lt&&e.bpXS||t===wt&&e.bpSM||t===Mt&&(e.bpMED||e.bpLG||e.bpXL))&&(n=!0),n}var G="o-summary";function tt(t){let n=b(t,G),e=n.classList.contains(`${G}--mobile`),r=n.querySelector(`.${G}__content`),i=n.querySelector(`.${G}__btn`),s,o,a;function u(){return y(n)?(a=!x(),_(n,"behavior_flyout-menu"),_(r,"behavior_flyout-menu_content"),_(i,"behavior_flyout-menu_trigger"),window.addEventListener("load",l),this):this}function l(){window.removeEventListener("load",l),o=new D(n,!1),s=new S(r),s.init(a?S.CLASSES.MH_SUMMARY:S.CLASSES.MH_DEFAULT),o.setTransition(s,s.maxHeightSummary,s.maxHeightDefault),o.addEventListener("triggerclick",M),o.init(),p(),window.addEventListener("resize",p),"onorientationchange"in window&&window.addEventListener("orientationchange",p),n.addEventListener("focusin",c),r.addEventListener("click",E)}function c(I){!a&&I.target!==i&&(i.click(),n.removeEventListener("focusin",c))}function E(I){I.target.tagName!=="A"&&o.isExpanded()&&s.refresh()}function p(){x()?$():R()}function x(){return e&&!mt(lt)||r.scrollHeight<=88}function M(){o.addEventListener("expandend",C)}function C(){O(),window.removeEventListener("resize",p),window.removeEventListener("orientationchange",p),o.removeEventListener("expandend",C),o.suspend(),s.remove()}function g(){i.classList.remove("u-hidden")}function O(){i.classList.add("u-hidden")}function R(){return a&&(o.collapse(),s.animateOn(),g(),a=!1),!a}function $(){return a||(s.animateOff(),o.expand(),O(),a=!0),a}let T=new v;return this.addEventListener=T.addEventListener,this.removeEventListener=T.removeEventListener,this.dispatchEvent=T.dispatchEvent,this.init=u,this}tt.BASE_CLASS=G;tt.init=t=>w(`.${G}`,tt,t);var Y="o-summary-minimal";function et(t){let n=b(t,Y),e=n.querySelector(`.${Y}__content`),r=n.querySelector(`.${Y}__btn`),i,s;function o(){return y(n)?(_(n,"behavior_flyout-menu"),_(e,"behavior_flyout-menu_content"),_(r,"behavior_flyout-menu_trigger"),window.addEventListener("load",a),this):this}function a(){window.removeEventListener("load",a),s=new D(n,!1),i=new S(e),i.init(S.CLASSES.MH_SUMMARY),s.setTransition(i,i.maxHeightSummary,i.maxHeightDefault),s.init(),n.addEventListener("focusin",u),e.addEventListener("click",l),s.collapse(),i.animateOn()}function u(E){E.target!==r&&(r.click(),n.removeEventListener("focusin",u))}function l(E){E.target.tagName!=="A"&&s.isExpanded()&&i.refresh()}let c=new v;return this.addEventListener=c.addEventListener,this.removeEventListener=c.removeEventListener,this.dispatchEvent=c.dispatchEvent,this.init=o,this}et.BASE_CLASS=Y;et.init=t=>w(`.${Y}`,et,t);V.init();})();
//# sourceMappingURL=expandable-group.js.map