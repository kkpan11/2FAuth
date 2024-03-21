import{a4 as l}from"./app-60af1d1a.js";/*! 2FAuth version 5.1.0 - Copyright (c) 2023 Bubka - https://github.com/Bubka/2FAuth */class f{constructor(){this.errors={}}set(t,s){typeof t=="object"?this.errors=t:this.set({...this.errors,[t]:c(s)})}all(){return this.errors}has(t){return this.errors.hasOwnProperty(t)}hasAny(...t){return t.some(s=>this.has(s))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return c(this.errors[t]||[])}only(...t){const s=[];return t.forEach(r=>{const e=this.get(r);e&&s.push(e)}),s}flatten(){return Object.values(this.errors).reduce((t,s)=>t.concat(s),[])}clear(t){const s={};t&&Object.keys(this.errors).forEach(r=>{r!==t&&(s[r]=this.errors[r])}),this.set(s)}}function c(o){return Array.isArray(o)?o:[o]}class i{constructor(t={}){this.axios=l("web"),this.isBusy=!1,this.isDisabled=!1,this.errors=new f,this.originalData=this.deepCopy(t),Object.assign(this,t)}fill(t){this.keys().forEach(s=>{this[s]=t[s]})}setOriginal(){Object.keys(this).filter(t=>!i.ignore.includes(t)).forEach(t=>{this.originalData[t]=this.deepCopy(this[t])})}hasChanged(){return this.keys().some(t=>this[t]!==this.originalData[t])}fillWithKeyValueObject(t){this.keys().forEach(s=>{const r=t.find(e=>e.key===s.toString());r!=null&&(this[s]=r.value)})}data(){return this.keys().reduce((t,s)=>({...t,[s]:this[s]}),{})}keys(){return Object.keys(this).filter(t=>!i.ignore.includes(t))}startProcessing(){this.errors.clear(),this.isBusy=!0}finishProcessing(){this.isBusy=!1}clear(){this.errors.clear()}reset(){Object.keys(this).filter(t=>!i.ignore.includes(t)).forEach(t=>{this[t]=this.deepCopy(this.originalData[t])})}get(t,s={}){return this.submit("get",t,s)}post(t,s={}){return this.submit("post",t,s)}patch(t,s={}){return this.submit("patch",t,s)}put(t,s={}){return this.submit("put",t,s)}delete(t,s={}){return this.submit("delete",t,s)}submit(t,s,r={}){this.startProcessing();const e=t==="get"?{params:this.data()}:this.data();return new Promise((a,u)=>{this.axios.request({url:this.route(s),method:t,data:e,...r}).then(h=>{this.finishProcessing(),a(h)}).catch(h=>{var n;this.isBusy=!1,h.response&&this.errors.set(this.extractErrors(h.response)),((n=h.response)==null?void 0:n.status)!=422&&u(h)})})}upload(t,s={}){return this.startProcessing(),new Promise((r,e)=>{this.axios.post(this.route(t),this.data(),{headers:{"Content-Type":"multipart/form-data"},...s}).then(a=>{this.finishProcessing(),r(a)}).catch(a=>{this.isBusy=!1,a.response&&this.errors.set(this.extractErrors(a.response)),e(a)})})}extractErrors(t){return!t.data||typeof t.data!="object"?{error:i.errorMessage}:t.data.errors?{...t.data.errors}:t.data.message?{error:t.data.message}:{...t.data}}route(t,s={}){let r=t;return i.routes.hasOwnProperty(t)&&(r=decodeURI(i.routes[t])),typeof s!="object"&&(s={id:s}),Object.keys(s).forEach(e=>{r=r.replace(`{${e}}`,s[e])}),r}onKeydown(t){t.target.name&&this.errors.clear(t.target.name)}deepCopy(t){if(t===null||typeof t!="object")return t;const s=Array.isArray(t)?[]:{};return Object.keys(t).forEach(r=>{s[r]=this.deepCopy(t[r])}),s}}i.routes={};i.errorMessage="Something went wrong. Please try again.";i.ignore=["isBusy","isDisabled","errors","originalData","axios"];export{i as F};