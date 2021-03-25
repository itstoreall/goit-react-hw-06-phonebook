(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={wrapper:"App_wrapper__RCHjb",title:"App_title__2oBiX",subtitle:"App_subtitle__3q6oi"}},17:function(t,e,n){t.exports={label:"Filter_label__2pNgv",input:"Filter_input__YmgBH"}},21:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},40:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),i=n(5),s=n(3),u=n(42),l=Object(s.b)("contact/add",(function(t){return{payload:{id:Object(u.a)(),name:t.name,number:t.number}}})),b=Object(s.b)("contact/delete"),j=Object(s.b)("contact/filter"),m=n(18),d=n(6),p=n(1),O=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(m.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(m.a)(i,2),u=s[0],l=s[1],b=function(t){var e=t.target,n=e.name,c=e.value;"name"===n?o(c):l(c)};return Object(p.jsxs)("form",{className:d.form,children:[Object(p.jsxs)("label",{className:d.label,children:["Name",Object(p.jsx)("input",{className:d.input,name:"name",value:r,onChange:b})]}),Object(p.jsxs)("label",{className:d.label,children:["Number",Object(p.jsx)("input",{className:d.input,name:"number",value:u,onChange:b})]}),Object(p.jsx)("button",{className:d.button,tupe:"submit",onClick:function(t){t.preventDefault(),e({name:r,number:u}),o(""),l("")},children:"Add contact"})]})},f=n(8),_=function(t){var e=t.contact,n=e.id,c=e.name,a=e.number,r=t.onDeleteContact;return Object(p.jsxs)("li",{className:f.contactItem,children:[Object(p.jsxs)("span",{children:[c,": ",a]}),Object(p.jsx)("button",{className:f.button,onClick:function(){return r(n)},children:"Delete"})]})},h=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},x=Object(i.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:h(n,c)}}),(function(t){return{onDeleteContact:function(e){return t(b(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:f.contactList,children:e.map((function(t){return Object(p.jsx)(_,{contact:t,onDeleteContact:n},t.id)}))})})),C=n(17),v=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(j(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:C.label,children:["Find contacts by name",Object(p.jsx)("input",{className:C.input,value:e,onChange:n})]})})),g=n(12);var N,k=Object(i.b)((function(t){return t}),(function(t){return{handleSubmit:function(e){return t(l(e))}}}))((function(t){var e=t.handleSubmit,n=t.handleInputFilter;return Object(p.jsxs)("div",{className:g.wrapper,children:[Object(p.jsx)("h1",{className:g.title,children:"Phonebook"}),Object(p.jsx)(O,{onInputChange:n,onSubmit:e}),Object(p.jsx)("h2",{className:g.subtitle,children:"Contacts"}),Object(p.jsx)(v,{}),Object(p.jsx)(x,{})]})})),w=n(11),F=n(13),S=n(21),y=n(2),A=Object(s.c)(S,(N={},Object(F.a)(N,l,(function(t,e){return[e.payload].concat(Object(w.a)(t))})),Object(F.a)(N,b,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),N)),D=Object(s.c)("",Object(F.a)({},j,(function(t,e){return e.payload}))),I=Object(y.c)({items:A,filter:D}),L=n(22),H=n.n(L),q=n(4),B=Object(w.a)(Object(s.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),J={key:"contacts",storage:H.a,blacklist:["filter"]},E=Object(s.a)({reducer:{contacts:Object(q.g)(J,I)},middleware:B,devTools:!1}),M={store:E,persistor:Object(q.h)(E)},P=n(23);n(39);o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(i.a,{store:M.store,children:Object(p.jsx)(P.a,{loading:"Loading...",persistor:M.persistor,children:Object(p.jsx)(k,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"Form_form__3-unr",label:"Form_label__2aPb1",input:"Form_input__2gucq",button:"Form_button__3ZW4q"}},8:function(t,e,n){t.exports={label:"Contacts_label__1FN1x",input:"Contacts_input__15bVW",contactList:"Contacts_contactList__1bH7v",contactItem:"Contacts_contactItem__3MiV1",button:"Contacts_button__ufCm9"}}},[[40,1,2]]]);
//# sourceMappingURL=main.4b2075ca.chunk.js.map