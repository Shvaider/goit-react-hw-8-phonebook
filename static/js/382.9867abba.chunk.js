"use strict";(self.webpackChunkgoit_react_hw_8_phonebook=self.webpackChunkgoit_react_hw_8_phonebook||[]).push([[382],{2382:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var a=n(885),r=n(2791),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},i=n(5562),c=n(1267),o="ContactForm_FormInput__s9Pni",l="ContactForm_FormInput__input__SDPgr",u="ContactForm_FormButton__pZccR",d=n(184),m="",_="",h=function(){var t=(0,r.useState)(m),e=(0,a.Z)(t,2),n=e[0],h=e[1],f=(0,r.useState)(_),p=(0,a.Z)(f,2),x=p[0],C=p[1],j=s(),b=s(),v=(0,c.wY)().data,g=(0,c.Tn)(),N=(0,a.Z)(g,1)[0],F=function(){h(m),C(_)};return(0,d.jsxs)("form",{className:o,onSubmit:function(t){if(t.preventDefault(),v.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return i.Notify.failure("Contact '".concat(n,"' is already exist"));var e=s();N({id:e,name:n,number:x}),F()},children:[(0,d.jsx)("label",{htmlFor:j,children:"Name"}),(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",maxLength:"40",required:!0,value:n,onChange:function(t){return h(t.target.value)},id:j,className:l}),(0,d.jsx)("label",{htmlFor:b,children:"Number"}),(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",maxLength:"12",required:!0,value:x,onChange:function(t){return C(t.target.value)},id:b,className:l}),(0,d.jsx)("button",{type:"submit",className:u,children:"Add Contact"})]})},f=n(5048),p=function(t){return t.filter.value},x="ContactList_ContactList__list__WCX+2",C="ContactList_ContactList__item__B+7D-",j="ContactList_ContactList__text__EGfQe",b="ContactList_ContactList__button__D3l59",v=function(t){var e=t.id,n=t.name,r=t.number,s=(0,c.Nt)(),i=(0,a.Z)(s,1)[0];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("li",{className:C,children:[(0,d.jsxs)("span",{className:j,children:[n,": ",r]}),(0,d.jsx)("button",{className:b,onClick:function(){return i(e)},children:"Delete"})]},e)})},g=n(7108),N=function(){var t=(0,f.v9)(p),e=(0,c.wY)(),n=e.data,a=e.isFetching,r=e.isError,s=t?n.filter((function(e){return e.name.toLowerCase().includes(t)})):n,i=s&&s.length>0;return(0,d.jsxs)(d.Fragment,{children:[a&&(0,d.jsx)(g.Z,{color:"#3f51b5",size:32}),r&&console.log(r),i?(0,d.jsx)("ul",{className:x,children:null===s||void 0===s?void 0:s.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,d.jsx)(v,{id:e,name:n,number:a},e)}))}):(0,d.jsx)("ul",{className:x,children:(0,d.jsx)("p",{children:"No contacts found..."})})]})},F=(0,n(5273).createAction)("contacts/filter",(function(t){return{payload:t.currentTarget.value}})),w="Filter_FilterContainer__7WMyd",y="Filter_FilterInput__-+rOd",A=function(){var t=(0,f.I0)(),e=(0,f.v9)(p);return(0,d.jsx)("div",{className:w,children:(0,d.jsxs)("label",{children:["Find contacts by name",(0,d.jsx)("input",{type:"text",name:"filter",className:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Find contacts by name",placeholder:"Enter search request here",value:e,onChange:function(e){return t(F(e))}})]})})},L="ContactsView_section__UJU9N",Z="ContactsView_title__ATNZX";function z(){return(0,d.jsxs)("div",{className:L,children:[(0,d.jsx)("h1",{className:Z,children:"PHONEBOOK APP"}),(0,d.jsx)("h2",{children:"Add new contact"}),(0,d.jsx)(h,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(A,{}),(0,d.jsx)(N,{})]})}}}]);
//# sourceMappingURL=382.9867abba.chunk.js.map