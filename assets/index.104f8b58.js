import{d as t,e,g as n,h as l,i as a,o as s,j as u}from"./vendor.3e78b3e5.js";import{F as i}from"./index.4ce24cec.js";const p=t({props:{placeholder:{type:String,default:"请输入"},type:{type:String,default:"text"}},emits:["onInput"],setup:t=>()=>e("div",{class:"b-form-input"},[e("input",t,null)])});console.log(p),t({props:{placeholder:{type:String,required:!1,default:"请输入"},type:{type:String,required:!1,default:"text"}},emits:{onInput:(t,e)=>e},setup(t){console.log(t,this)},methods:{onChange(t){this.$emit("onInput",{},t)}},render(){return e("div",{class:"b-form-input"},[e("input",{onInput:this.onChange},null)])}});var r=t({setup(t){const r=n(""),o=t=>{r.value=t.target.value},d=l({input:""}),c=t=>{d.input=t.target.value},v=a(l({input:"输入也没用"})),g=t=>{v.input=t.target.value};return s((()=>{})),()=>e("div",null,[e("h2",{class:"b-main-title"},[u("响应式示例")]),e(i,{title:"使用ref："},{default:()=>[e(p,{type:"password",onInput:o},null)]}),e(i,{title:"使用reactive："},{default:()=>[e(p,{onInput:c},null)]}),e(i,{title:"使用readonly："},{default:()=>[e(p,{onInput:g},null)]}),e("div",null,[e("p",{class:"reactive-msg"},[u("结果")]),e("p",{class:"reactive-msg"},[u("使用ref："),r.value]),e("p",{class:"reactive-msg"},[u("使用reactive："),d.input]),e("p",{class:"reactive-msg"},[u("使用readonly："),v.input])])])}});export default r;
