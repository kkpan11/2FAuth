import{r as a,x as N,o as W,v as ne,m as l,d,F as se,E as ae,f as s,n as P,u as re,a as ue,S as le,s as ie,e as x,i as M,j as z,k as ce,t as C,w as pe,Y as fe,U as ve,z as J,A as Y,h as E,C as de,L as me,_ as ye,J as I,H as G,P as Q,l as _e}from"./app-D4Udf6Mm.js";import{S as ge}from"./Spinner-DHClvaFf.js";/*! 2FAuth version 5.4.1 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const he={__name:"TotpLooper",props:{step_count:{type:Number,default:10},period:Number,generated_at:Number,autostart:{type:Boolean,default:!0}},emits:["loop-started","loop-ended","stepped-up"],setup(O,{expose:b,emit:m}){const o=O,i=a(null),w=a(null),T=a(null),y=a(null),c=a(null),u=N(()=>i.value%o.period),r=N(()=>o.period-u.value),p=N(()=>o.period/o.step_count),k=N(()=>{let f=u.value*o.step_count/o.period;return Math.floor(f)+0}),e=m,_=(f=null)=>{g(),i.value=f??o.generated_at,e("loop-started",k.value),c.value=k.value,w.value=setTimeout(function(){g(),e("loop-ended")},r.value*1e3);let h=Math.ceil(u.value/p.value)*p.value-u.value;T.value=setTimeout(function(){h>0&&(c.value+=1,e("stepped-up",c.value)),y.value=setInterval(function(){c.value+=1,e("stepped-up",c.value)},p.value*1e3)},h*1e3)},g=()=>{clearTimeout(w.value),clearTimeout(T.value),clearInterval(y.value),c.value=i.value=null};return W(()=>{o.autostart==!0&&_()}),ne(()=>{g()}),b({startLoop:_,clearLooper:g,props:o}),(f,h)=>(l(),d("div"))}},we=["data-is-active"],Oe={__name:"Dots",props:{stepCount:{type:Number,default:10},initialIndex:{type:Number,default:null},period:{type:Number,default:null}},setup(O,{expose:b}){const m=O,o=a(0),i=N(()=>o.value==-1);function w(y){o.value=y<m.stepCount?y+1:1}function T(){o.value=-1}return W(()=>{isNaN(m.initialIndex)||w(m.initialIndex)}),b({turnOn:w,turnOff:T,props:m}),(y,c)=>(l(),d("ul",{class:P(["dots",{off:s(i)}])},[(l(!0),d(se,null,ae(O.stepCount,u=>(l(),d("li",{key:u,"data-is-active":u==s(o)?!0:null},null,8,we))),128))],2))}},Te=["src","alt"],ke=["title"],Se={key:1,tabindex:"0",class:"otp is-size-1"},xe={key:0,class:"mt-3"},Ne={__name:"OtpDisplay",props:{otp_type:String,account:String,service:String,icon:String,secret:String,digits:Number,algorithm:String,period:null,counter:null,image:String,qrcode:null,uri:String},emits:["please-close-me","increment-hotp","validation-error"],setup(O,{expose:b,emit:m}){const o=re(),i=ue(),w=me("2fauth"),{copy:T,copied:y}=le({legacy:!0}),c=ye(),u=m,r=O,p=a(null),k=a(null),e=a({otp_type:"",account:"",service:"",icon:"",secret:"",digits:null,algorithm:"",period:null,counter:null,image:""}),_=a(""),g=a(null),f=a(!1),h=a(!1),S=a(!1),L=a(),B=a(),V=a(),F=a(null);ie(()=>r.icon,n=>{n!=null&&(e.value.icon=n)});const X=async n=>{if(S.value=!1,e.value.otp_type=r.otp_type,e.value.account=r.account,e.value.service=r.service,e.value.icon=r.icon,e.value.secret=r.secret,e.value.digits=r.digits,e.value.algorithm=r.algorithm,e.value.period=r.period,e.value.counter=r.counter,j(),n){p.value=n;const{data:t}=await I.get(p.value);e.value.service=t.service,e.value.account=t.account,e.value.icon=t.icon,e.value.otp_type=t.otp_type,D(t.otp_type)&&t.counter&&(e.value.counter=t.counter)}else r.uri?(k.value=r.uri,e.value.otp_type=r.uri.slice(0,15).toLowerCase()==="otpauth://totp/"?"totp":"hotp"):r.secret?!A(e.value.otp_type)&&!D(e.value.otp_type)&&i.error(new Error(G("errors.not_a_supported_otp_type"))):i.error(new Error(G("errors.cannot_create_otp_without_secret")));try{await H(),ee(),o.preferences.getOtpOnRequest&&parseInt(o.preferences.autoCloseTimeout)>0&&te()}catch{$()}};async function H(){j(),await Z().then(n=>{let t=n.data;_.value=t.password,o.preferences.copyOtpOnDisplay&&U(t.password),A(t.otp_type)?(g.value=t.generated_at,e.value.period=t.period,f.value=!0,Q().then(()=>{B.value.startLoop()})):D(t.otp_type)&&(e.value.counter=t.counter,u("increment-hotp",{nextHotpCounter:t.counter,nextUri:t.uri}))}).catch(n=>{n.response.status===422&&u("validation-error",n.response)}).finally(()=>{h.value=!1})}function j(){h.value=!0,L.value.turnOff()}function Z(){return p.value?I.getOtpById(p.value):k.value?I.getOtpByUri(k.value):I.getOtpByParams(e.value)}function q(){u("please-close-me"),S.value=!1,$()}function $(){var n;p.value=e.value.counter=g.value=null,e.value.service=e.value.account=e.value.icon=e.value.otp_type=e.value.secret="",_.value="... ...",f.value=!1,clearTimeout(F.value),(n=B.value)==null||n.clearLooper()}function ee(){Q().then(()=>{var n;(n=V.value)==null||n.focus()})}function U(n,t){T(n.replace(/ /g,"")),y&&(o.preferences.kickUserAfter==-1&&(t||!1)===!0&&c.name!="importAccounts"?o.logout({kicked:!0}):o.preferences.closeOtpOnCopy&&(t||!1)===!0&&q(),o.preferences.clearSearchOnCopy&&u("please-clear-search"),o.preferences.viewDefaultGroupOnCopy&&(o.preferences.activeGroup=o.preferences.defaultGroup==-1?o.preferences.activeGroup:o.preferences.defaultGroup),i.success({text:G("commons.copied_to_clipboard")}))}function A(n){return n==="totp"||n==="steamtotp"}function D(n){return n==="hotp"}function K(n){L.value.turnOn(n)}b({show:X,clearOTP:$});function te(){let n=parseInt(o.preferences.autoCloseTimeout);F.value=setTimeout(function(){q()},n*60*1e3)}return(n,t)=>{const R=_e("font-awesome-icon");return l(),d("div",null,[x("figure",{class:P(["image is-64x64",{"no-icon":!s(e).icon}]),style:{display:"inline-block"}},[s(e).icon?(l(),d("img",{key:0,src:s(w).config.subdirectory+"/storage/icons/"+s(e).icon,alt:n.$t("twofaccounts.icon_to_illustrate_the_account")},null,8,Te)):M("",!0)],2),z(s(ve),null,{default:ce(({mode:v})=>[x("p",{class:P(["is-size-4 has-ellipsis",v=="dark"?"has-text-grey-light":"has-text-grey"])},C(s(e).service),3),x("p",{class:P(["is-size-6 has-ellipsis",v=="dark"?"has-text-grey":"has-text-grey-light"])},C(s(e).account),3),x("p",null,[s(h)?(l(),d("span",Se,[z(ge,{isVisible:s(h),type:"raw"},null,8,["isVisible"])])):(l(),d("span",{key:0,id:"otp",role:"log",ref_key:"otpSpanTag",ref:V,tabindex:"0",class:P(["otp is-size-1 is-clickable px-3",v=="dark"?"has-text-white":"has-text-grey-dark"]),onClick:t[0]||(t[0]=oe=>U(s(_),!0)),onKeyup:t[1]||(t[1]=pe(oe=>U(s(_),!0),["enter"])),title:n.$t("commons.copy_to_clipboard")},C(s(fe)(s(_),s(o).preferences.showOtpAsDot&&s(o).preferences.revealDottedOTP&&s(S))),43,ke))])]),_:1}),J(z(Oe,{ref_key:"dots",ref:L},null,512),[[Y,A(s(e).otp_type)]]),J(x("p",null,C(n.$t("twofaccounts.forms.counter.label"))+": "+C(s(e).counter),513),[[Y,D(s(e).otp_type)]]),s(o).preferences.showOtpAsDot&&s(o).preferences.revealDottedOTP?(l(),d("p",xe,[x("button",{class:"button is-ghost has-text-grey-dark",onClick:t[2]||(t[2]=de(v=>S.value=!s(S),["stop"]))},[s(S)?(l(),E(R,{key:0,icon:["fas","eye"]})):(l(),E(R,{key:1,icon:["fas","eye-slash"]}))])])):M("",!0),s(f)?(l(),E(he,{key:1,period:s(e).period,generated_at:s(g),autostart:!1,onLoopEnded:t[3]||(t[3]=v=>H()),onLoopStarted:t[4]||(t[4]=v=>K(v)),onSteppedUp:t[5]||(t[5]=v=>K(v)),ref_key:"totpLooper",ref:B},null,8,["period","generated_at"])):M("",!0)])}}};export{Ne as _,he as a,Oe as b};