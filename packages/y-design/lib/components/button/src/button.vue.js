"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("../../theme/src/button.css");const b=require("./button.js"),_=["disabled"],f={class:"y-button__inner"},m=e.defineComponent({name:"YButton"}),y=e.defineComponent({...m,props:b.buttonProps,emits:["click"],setup(s,{expose:u,emit:r}){const t=s,l=e.computed(()=>{const{type:n,disabled:o,loading:d,round:i,size:a,plain:p}=t;return["y-button",`y-button-${n}`,`y-button-${a}`,{"y-button-disabled":o||d,"y-button-plain":p,"y-button__round":i}]});e.computed(()=>!t.type||t.type==="default"?"":"#ffffff");const c=()=>{r("click")};return u({type:t.type}),(n,o)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(e.unref(l)),onClick:c,disabled:t.disabled},[e.createElementVNode("span",f,[e.renderSlot(n.$slots,"default")])],10,_))}});exports.default=y;