"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[433],{6433:function(e,s,n){n.r(s),n.d(s,{default:function(){return h}});var t=n(9098),a=n(1413),i=(n(2791),n(3896)),r=n(3504),u={dialogs:"Dialog_dialogs__KeM1n",user:"Dialog_user__Mm59e",active:"Dialog_active__FPUge",messages:"Dialog_messages__bXXk-",message:"Dialog_message__NcxIn",addPostBtn:"Dialog_addPostBtn__g7mKm"},o=n(184),c=function(e){var s=e.name,n="/dialogs/"+e.id;return(0,o.jsx)("div",{className:u.user,children:(0,o.jsx)(r.OL,{to:n,children:s})})},d=function(e){var s=e.message;return(0,o.jsx)("div",{className:u.message,children:s})},l=function(e){var s=e.stateMessages,n=e.addMessage,t=(0,i.cI)(),r=t.register,l=t.handleSubmit,g=t.reset,m=s,h=m.dialogs.map((function(e){return(0,o.jsx)(c,{name:e.name,id:e.id})})),f=m.messages.map((function(e){return(0,o.jsx)(d,{message:e.message,id:e.id})}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Attention! Useless page! "}),(0,o.jsx)("p",{style:{textAlign:"center"},children:'I save this page for "WebSocket Chat" lessons.'}),(0,o.jsxs)("div",{className:u.dialogs,children:[(0,o.jsx)("div",{className:u.dialog,children:h}),(0,o.jsx)("div",{className:u.messages,children:f}),(0,o.jsx)("div",{className:u.textarea,children:(0,o.jsxs)("form",{onSubmit:l((function(e){return s=e.message,n(s),void g();var s})),children:[(0,o.jsx)("textarea",(0,a.Z)((0,a.Z)({},r("message")),{},{cols:"30",rows:"5"})),(0,o.jsx)("button",{type:"submit",children:"Send"})]})})]})]})},g=n(8687),m=n(8277),h=(0,n(7781).qC)(m.D,(0,g.$j)((function(e){return{stateMessages:e.messages,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(s){e((0,t.k)(s))}}})))(l)},8277:function(e,s,n){n.d(s,{D:function(){return m}});var t=n(1413),a=n(5671),i=n(3144),r=n(9340),u=n(2882),o=n(8687),c=n(6871),d=n(2791),l=n(184),g=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){(0,r.Z)(o,s);var n=(0,u.Z)(o);function o(){return(0,a.Z)(this,o),n.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){return 0==this.props.isAuth?(0,l.jsx)(c.Fg,{to:"/login"}):(0,l.jsx)(e,(0,t.Z)({},this.props))}}]),o}(d.Component);return(0,o.$j)(g)(s)}}}]);
//# sourceMappingURL=433.598ab19c.chunk.js.map