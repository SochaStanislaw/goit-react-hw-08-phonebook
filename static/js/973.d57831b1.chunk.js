"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[973],{5973:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(9434),o=function(e){return e.contacts.items},i=function(e){return e.filters},a=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},s=t(3634),c=t(184),l=function(){var e=(0,r.I0)(),n=(0,r.v9)(o);return(0,c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,o=r.elements.text.value;n.find((function(e){return e.name.toLowerCase()===o.toLowerCase()}))?alert('Homie "'.concat(o,'" already exists in your contact list!')):(e((0,s.uK)({name:o,number:r.elements.number.value})),r.reset())},children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"Type name:  "}),(0,c.jsx)("input",{type:"text",name:"text",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"Add number:  "}),(0,c.jsx)("input",{type:"tel",name:"number",title:"Phone number must be digits",required:!0})]}),(0,c.jsx)("button",{type:"submit",children:"make new contact"})]})},d=t(2791),m=function(){var e=(0,r.v9)(o),n=(0,r.v9)(i).toLowerCase().toLowerCase(),t=e.filter((function(e){return e.name.toLowerCase().includes(n)})),a=(0,r.I0)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"Your contact list:"}),(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{children:["name: ",e.name," | number: ",e.number]}),(0,c.jsx)("button",{onClick:function(){return a((0,s.GK)(e.id))},children:"remove"})]},e.id)}))})]})},f=t(4808),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}(),p=function(){var e=(0,r.I0)(),n=(0,r.v9)(i);return(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{htmlFor:h,children:"type name of person u lookin' for:"}),(0,c.jsx)("input",{id:h,type:"text",name:"filter",value:n,onChange:function(n){e((0,f.T)(n.target.value))}})]})},x=t(8824),v="Phonebook_wrap__JZsW-";function j(){var e=(0,r.I0)(),n=(0,r.v9)(a),t=(0,r.v9)(u);return(0,d.useEffect)((function(){e((0,s.yF)())}),[e]),(0,c.jsxs)("div",{className:v,children:[(0,c.jsx)("p",{children:"Type data and click button to add a new contact to your list."}),(0,c.jsx)(l,{}),(0,c.jsx)("p",{children:"Can't find your contact? Type name below: "}),(0,c.jsx)(p,{}),(0,c.jsx)(m,{}),n&&!t&&(0,c.jsx)(x.a,{})]})}}}]);
//# sourceMappingURL=973.d57831b1.chunk.js.map