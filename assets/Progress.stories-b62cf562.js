import{e as k}from"./index-af342e73.js";import"./styled-components.browser.esm-bf785d72.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";const C={title:"Components/Progress",component:k,tags:["autodocs"],argTypes:{kind:{options:["default","percent","completed","error"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},percentage:{control:null}},args:{kind:"default",size:"md"}},e={argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1}}},args:{percentage:10}},r={argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1}}},args:{kind:"percent",percentage:10}},n={args:{kind:"completed"}},o={args:{kind:"error"}};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    }
  },
  args: {
    percentage: 10
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    }
  },
  args: {
    kind: "percent",
    percentage: 10
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,d,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    kind: "completed"
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    kind: "error"
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const E=["Default","Percent","Completed","Error"];export{n as Completed,e as Default,o as Error,r as Percent,E as __namedExportsOrder,C as default};
