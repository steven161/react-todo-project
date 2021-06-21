(this["webpackJsonpreact-web-todo-app"]=this["webpackJsonpreact-web-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__EiNWR",checkbox:"TodoItem_checkbox__HTI3f",textInput:"TodoItem_textInput__cdquX"}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(24),i=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))},r=n(18),l=n(10),d=n(9),u=n(17),j=n.n(u),b=n(16),h=n(2);var p=function(e){var t=e.todo,n=t.id,o=t.title,a=t.completed,i=Object(c.useState)(!1),s=Object(d.a)(i,2),r=s[0],l=s[1],u={},p={};return r?u.display="none":p.display="none",Object(c.useEffect)((function(){return function(){console.log("Clean up TodoItem : ")}}),[]),Object(h.jsxs)("li",{className:j.a.item,children:[Object(h.jsxs)("div",{onDoubleClick:function(){console.log("edit mode activated"),l(!0)},style:u,children:[Object(h.jsx)("input",{type:"checkbox",className:j.a.checkbox,checked:a,onChange:function(){return e.handleChangeProps(n)}}),Object(h.jsx)("span",{style:a?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:o}),Object(h.jsx)("button",{onClick:function(){return e.handleDelete(n)},children:Object(h.jsx)(b.b,{style:{color:"orangered",fontSize:16}})})]}),Object(h.jsx)("input",{type:"text",style:p,className:j.a.textInput,value:o,onChange:function(t){return e.setUpdate(t.target.value,n)},onKeyDown:function(e){"Enter"===e.key&&l(!1)}})]})};function O(e){return Object(h.jsx)("ul",{children:e.todos.map((function(t,n){return Object(h.jsx)(p,{todo:t,handleChangeProps:e.handleChangeProps,handleDelete:e.handleDelete,setUpdate:e.setUpdate},t.id)}))})}var x=function(){return Object(h.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(h.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},f=n(15);function m(e){var t=Object(c.useState)({title:""}),n=Object(d.a)(t,2),o=n[0],a=n[1];return Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.handleAdd(o.title),a({title:""})):alert("Please Write Item")},className:"form-container",children:[Object(h.jsx)("input",{type:"text",className:"input-text",placeholder:"Add Todo",name:"title",value:o.title,onChange:function(e){a(Object(l.a)(Object(l.a)({},o),{},Object(f.a)({},e.target.name,e.target.value)))}}),Object(h.jsx)("button",{className:"input-submit",children:Object(h.jsx)(b.a,{})})]})}var g=n(41),v=n(3),y=n(8),N=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}];function w(){var e=Object(v.f)().slug,t=N.find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(h.jsxs)("div",{className:"main_content",children:[Object(h.jsx)("h1",{children:n}),Object(h.jsx)("p",{children:c})]})}function C(){var e=Object(v.g)(),t=e.url,n=e.path;return console.log(t,n),Object(h.jsxs)("div",{className:"about__content",children:[Object(h.jsxs)("ul",{className:"about__list",children:[Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(h.jsx)(v.a,{path:"".concat(n,"/:slug"),children:Object(h.jsx)(w,{})})]})}function k(){return Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"NOT MATCH for this page"})})}var I=n(26),S=n(27),T=[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}];function A(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(h.jsxs)("div",{className:"navBar",children:[Object(h.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:n?Object(h.jsx)(I.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(h.jsx)(S.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(h.jsx)("ul",{className:"menuNav ".concat(n?"showMenu":""),children:T.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(y.c,{to:e.path,activeClassName:"active-link",exact:!0,onClick:function(){o(!1)},children:e.text})},e.id)}))})]})}function _(){var e=Object(c.useState)(function(){console.log("test run getInitialTodos");var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{exact:!0,path:"/",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"inner",children:[Object(h.jsx)(x,{}),Object(h.jsx)(m,{handleAdd:function(e){console.log("add todo : "+e);var t={id:Object(g.a)(),title:e,completed:!1};o([].concat(Object(r.a)(n),[t]))}}),Object(h.jsx)(O,{todos:n,handleChangeProps:function(e){console.log("clicked : "+e),o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},handleDelete:function(e){console.log("delete : "+e),o((function(t){return Object(r.a)(t.filter((function(t){return t.id!==e})))}))},setUpdate:function(e,t){o(Object(r.a)(n.map((function(n){return n.id===t?Object(l.a)(Object(l.a)({},n),{},{title:e}):n}))))}})]})})}),Object(h.jsx)(v.a,{path:"/about",children:Object(h.jsx)(C,{})}),Object(h.jsx)(v.a,{path:"*",children:Object(h.jsx)(k,{})})]})]})}n(38);i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(y.a,{children:Object(h.jsx)(_,{})})}),document.getElementById("root")),s()}},[[39,1,2]]]);
//# sourceMappingURL=main.682019ed.chunk.js.map