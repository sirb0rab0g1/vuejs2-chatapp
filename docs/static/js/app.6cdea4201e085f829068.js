webpackJsonp([1],{AXWB:function(t,e){},Dsdp:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"message"},[a("v-container",[null!==t.receiverId?a("form",[a("v-layout",{attrs:{row:"",wrap:""}},[a("div",{staticClass:"msg-container",attrs:{id:"container"}},t._l(t.items,function(e){return a("div",[e.user_id==t.dataId?a("div",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(e.msg)+"\n            "),a("v-avatar",{attrs:{slot:"activator",size:"36px"},slot:"activator"},[a("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"}})]),a("br"),t._v(" "),a("small",[t._v("sent by id "+t._s(e.user_id))])],1):t._e(),t._v(" "),e.user_id!=t.dataId?a("div",{staticStyle:{"text-align":"left"}},[a("v-avatar",{attrs:{slot:"activator",size:"36px"},slot:"activator"},[a("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"}})]),t._v("\n            "+t._s(e.msg)),a("br"),t._v(" "),a("small",[t._v("sent by id "+t._s(e.user_id))])],1):t._e()])})),t._v(" "),t.showCam?a("video",{ref:"video",staticClass:"video-container",attrs:{id:"video"}},[t._v("Video stream not available.")]):t._e(),t._v(" "),a("v-flex",{attrs:{xs12:"",lg10:""}},[a("v-text-field",{attrs:{label:"Message"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.submit(e)}},model:{value:t.chatmessage,callback:function(e){t.chatmessage=e},expression:"chatmessage"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",lg2:""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"primary"},on:{click:function(e){t.starstream()}}},[a("v-icon",[t._v("videocam")])],1),t._v(" "),a("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("Send")])],1)],1)],1):t._e()])],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},EfFv:function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),i=a("sWvs"),n=a("j4h2"),o=a("7+uW"),c=a("Usg1");e.a={name:"friendslist",props:[],mounted:function(){},data:function(){return{a1:null,filtername:"",items:[],loader:!1,headers:{"Content-Type":"application/json",Authorization:"JWT "+o.a.localStorage.get("token")},dataId:null}},methods:{getter:function(){var t=this;this.dataId=o.a.localStorage.get("user_id"),r.a.get(a.i({NODE_ENV:"production"}).API_URL+"/info/accounts/",{headers:this.headers}).then(function(e){return t.items=e.data.results,t.items}).catch(function(t){console.log(t)})},getId:function(t){o.a.localStorage.set("userChatId",t),c.a.$emit("EVENT_NAME")}},created:function(){this.getter()},computed:{filteredItems:function(){var t=this.filtername;return this.items.filter(function(e){return e.profile.alias.toLowerCase().indexOf(t)>=0})},channel:function(){return"wsregister"}},mutations:n,socket:{events:{onmessage:function(t){return this.getter()}}},mixins:[i.a]}},JJT7:function(t,e,a){"use strict";var s=a("7+uW"),r=a("sUu7"),i=a("mtWM"),n=a.n(i);s.a.use(r.a),e.a={name:"register",props:[],items:[],$validates:!0,mounted:function(){},data:function(){return{username:"",email:"",e1:!1,password:"",repassword:"",alias:"",x:"accounts",items:this.items}},methods:{submit:function(){if(""===this.name||""===this.email||""===this.password||""===this.alias||""===this.repassword)this.$validator.validateAll();else{var t={username:this.username,email:this.email,password:this.password,repassword:this.repassword,first_name:"sample",last_name:"last_name",profile:{alias:this.alias}};n.a.post(a.i({NODE_ENV:"production"}).API_URL+"/info/signup/",t,{headers:{"Content-Type":"application/json"}}).then(function(t){console.log("success")}).catch(function(t){console.log(t)})}},clear:function(){this.name="",this.email="",this.password="",this.repassword="",this.$validator.clean()}}}},Kfsa:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"login"},[a("v-container",{staticClass:"main-container",attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",lg4:""}},[a("v-toolbar",{staticClass:"primary"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("more_vert")])],1)],1),t._v(" "),a("v-card",[a("v-container",{attrs:{fluid:""}},[a("form",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Username",counter:10,"error-messages":t.errors.collect("username"),"data-vv-name":"username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Password",counter:10,"error-messages":t.errors.collect("password"),"data-vv-name":"password",required:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("div",{staticClass:"text-xs-right"},[a("router-link",{attrs:{to:"/Register"}},[a("a",{staticStyle:{float:"left","margin-top":"15px"}},[t._v("Forgot Password?")])]),t._v(" "),a("v-btn",{attrs:{primary:"",dark:""},on:{click:t.login}},[t._v("Login")])],1)],1)])],1)],1)],1)],1)],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},M93x:function(t,e,a){"use strict";function s(t){a("izkM")}var r=a("xJD8"),i=a("uPwM"),n=a("VU/8"),o=s,c=n(r.a,i.a,o,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("M93x"),i=a("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},OGQO:function(t,e){},RR2z:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"friendslist"},[a("div",{staticClass:"loader-container"},[t.loader?a("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"primary"}}):t._e()],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"input-1-3",label:"Search alias"},model:{value:t.filtername,callback:function(e){t.filtername=e},expression:"filtername"}})],1),t._v(" "),a("div",{staticClass:"friends-container"},t._l(t.filteredItems,function(e){return a("div",[a("v-expansion-panel",[a("v-expansion-panel-content",[a("v-layout",{attrs:{slot:"header","align-center":"",row:"",spacer:""},slot:"header"},[a("v-flex",{attrs:{xs3:""}},[a("v-avatar",{attrs:{slot:"activator",size:"45px"},slot:"activator"},[a("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"}})])],1),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("strong",[t._v(t._s(e.profile.alias)+" ")]),a("br"),t._v(" "),a("small",[t._v(t._s(e.id)+" ")]),a("span",[t._v("status here")])]),t._v(" "),a("v-flex",{staticClass:"grey--text",attrs:{ellipsis:""}})],1),t._v(" "),a("v-card",[a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"card-padding"},[a("v-tooltip",{attrs:{right:""}},[a("v-btn",{attrs:{slot:"activator",flat:"",icon:"",color:"primary"},on:{click:function(a){t.getId(e.id)}},slot:"activator"},[a("v-icon",[t._v("chat")])],1),t._v(" "),a("span",[t._v("Chat with me!")])],1)],1)],1)],1)],1)],1)}))],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},U80P:function(t,e){},Usg1:function(t,e,a){"use strict";var s=a("7+uW"),r=new s.a;e.a=r},V8XE:function(t,e){},YaEn:function(t,e,a){"use strict";a("7+uW"),a("/ocq"),a("xJsL"),a("dIqY"),a("vZbc"),a("mg08"),a("yJ2L");throw new Error('Cannot find module "@/components/Footer"')},dIqY:function(t,e,a){"use strict";function s(t){a("sGK5")}var r=a("JJT7"),i=a("pL4E"),n=a("VU/8"),o=s,c=n(r.a,i.a,o,"data-v-5f37c011",null);e.a=c.exports},izkM:function(t,e){},j4h2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"SOCKET_ONOPEN",function(){return s}),a.d(e,"SOCKET_ONMESSAGE",function(){return r});var s=function(t,e){console.log(e)},r=function(t,e){console.log(e)}},"l/Fv":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{persistent:"",right:"",clipped:"","enable-resize-watcher":"",app:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-btn",{attrs:{block:"",color:"primary",dark:""},on:{click:function(e){t.Logout()}}},[t._v("Logout")])],1),t._v(" "),a("v-toolbar",{staticClass:"primary",attrs:{dark:"",fixed:"",app:"","clipped-right":""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",[t._v("My ID "+t._s(t.getterId))]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",icon:"",color:"white"}},[a("v-icon",[t._v("announcement")])],1),t._v(" "),a("v-btn",{attrs:{flat:"",icon:"",color:"white"},on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("settings")])],1)],1),t._v(" "),a("v-navigation-drawer",{attrs:{persistent:"","enable-resize-watcher":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("app-friendslist")],1),t._v(" "),a("main",[a("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[a("app-friendslist")],1),t._v(" "),a("v-content",[a("v-container",{staticStyle:{"max-width":"5000px",padding:"0"}},[a("app-message")],1)],1),t._v(" "),a("v-navigation-drawer",{attrs:{right:"",temporary:"",fixed:""},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}},[a("v-btn",{attrs:{block:"",color:"primary",dark:""},on:{click:function(e){t.Logout()}}},[t._v("Logout")])],1)],1)],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},lGxC:function(t,e,a){"use strict";var s=a("mg08"),r=a("yJ2L"),i=a("7+uW");e.a={name:"live",items:[],mounted:function(){},data:function(){return{items:this.items,drawer:!0,drawerRight:!0,right:null,left:null,loader:!0,getterId:null}},methods:{Logout:function(){this.$localStorage.remove("user_id"),this.$localStorage.remove("token"),this.$localStorage.remove("userChatId"),this.$router.push("/")},getId:function(){return this.getterId=i.a.localStorage.get("user_id"),this.getterId}},created:function(){this.getId()},props:{source:String},components:{appFriendslist:s.a,appMessage:r.a}}},mg08:function(t,e,a){"use strict";function s(t){a("U80P")}var r=a("EfFv"),i=a("RR2z"),n=a("VU/8"),o=s,c=n(r.a,i.a,o,"data-v-4425f8b5",null);e.a=c.exports},"nKb+":function(t,e,a){"use strict";var s=a("7+uW"),r=a("sUu7"),i=a("mtWM"),n=a.n(i),o=a("UnSZ"),c=a.n(o),l=a("YaEn");s.a.use(c.a),s.a.use(r.a),e.a={name:"login",props:[],$validates:!0,mounted:function(){},data:function(){return{username:"",email:"",checkbox:null,e1:!1,password:"",alias:"",dialog:!1}},methods:{login:function(){this.$validator.validateAll();var t={username:this.username,password:this.password};n.a.post(a.i({NODE_ENV:"production"}).API_URL+"/info/api-token-auth/",t,{headers:{"Content-Type":"application/json"}}).then(function(t){s.a.localStorage.set("token",t.data.token),s.a.localStorage.set("user_id",t.data.user.id),l.a.push("/Live")}).catch(function(t){console.log(t)})}},computed:{}}},pL4E:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"register"},[a("v-container",{staticClass:"main-container",attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",lg4:""}},[a("v-card",[a("v-toolbar",{staticClass:"primary"},[a("router-link",{staticClass:"router",attrs:{to:"/"}},[a("v-btn",{staticStyle:{"margin-left":"-10px"},attrs:{icon:""}},[a("v-icon",{staticClass:"white--text"},[t._v("arrow_back")])],1)],1)],1),t._v(" "),a("v-container",{attrs:{fluid:""}},[a("form",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Username",counter:10,"error-messages":t.errors.collect("username"),"data-vv-name":"username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Password",counter:10,"error-messages":t.errors.collect("password"),"data-vv-name":"password",required:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Re-password",counter:10,"error-messages":t.errors.collect("repassword"),"data-vv-name":"repassword",required:"",type:"repassword"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}}),t._v(" "),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Alias",counter:10,"error-messages":t.errors.collect("alias"),"data-vv-name":"alias",required:""},model:{value:t.alias,callback:function(e){t.alias=e},expression:"alias"}}),t._v(" "),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{label:"E-mail","error-messages":t.errors.collect("email"),"data-vv-name":"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("div",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{primary:"",dark:""},on:{click:t.submit}},[t._v("submit")])],1)],1)])],1)],1)],1)],1)],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},sGK5:function(t,e){},sWvs:function(t,e,a){"use strict";var s=a("fZjL"),r=a.n(s);e.a={computed:{socket:function(){return new WebSocket(a.i({NODE_ENV:"production"}).WS_URL+"/"+this.channel)}},methods:{addListeners:function(){var t=this;if(this.$options.socket){var e=this.$options.socket;e.events&&r()(e.events).forEach(function(a){var s=e.events[a].bind(t);t.socket[a]=s,e.events[a].__binded=s})}}},mounted:function(){this.addListeners()}}},uPwM:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},vZbc:function(t,e,a){"use strict";function s(t){a("OGQO")}var r=a("lGxC"),i=a("l/Fv"),n=a("VU/8"),o=s,c=n(r.a,i.a,o,"data-v-f280de4c",null);e.a=c.exports},vaj8:function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),i=a("j4h2"),n=a("sWvs"),o=a("7+uW"),c=a("Usg1");e.a={name:"message",props:[],items:[],data:function(){return{chatmessage:"",items:this.items,headers:{"Content-Type":"application/json",Authorization:"JWT "+o.a.localStorage.get("token")},dataId:null,receiverId:null,width:300,height:0,photo:null,startbutton:null,canvas:null,video:null,showCam:!1}},methods:{submit:function(){var t=this;if(""===this.chatmessage)console.log("err");else{var e={user_id:this.dataId,msg:this.chatmessage,receiver_id:this.receiverId};r.a.post(a.i({NODE_ENV:"production"}).API_URL+"/msg/msg/",e,{headers:this.headers}).then(function(e){console.log(e.data),t.getter()}).catch(function(t){console.log(t)})}},getter:function(){var t=this;null===this.receiverId?console.log("no data pa lol"):r.a.get(a.i({NODE_ENV:"production"}).API_URL+"/msg/messages/"+this.receiverId+"/",{headers:this.headers}).then(function(e){t.items=e.data.results,console.log(e.data.results),t.chatmessage=""}).catch(function(t){console.log(t+"animal")})},gettId:function(){return this.dataId=o.a.localStorage.get("user_id"),this.dataId},getMsg:function(){return this.receiverId=o.a.localStorage.get("userChatId"),this.getter(),this.receiverId},starstream:function(){this.showCam=!0;var t={audio:!0,video:!0};navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.mediaDevices.getUserMedia(t).then(function(t){var e=document.querySelector("video");e.srcObject=t,e.onloadedmetadata=function(t){return e.play(),this.showCam}})}},mounted:function(){c.a.$on("EVENT_NAME",this.getMsg)},created:function(){this.getMsg(),this.gettId()},computed:{channel:function(){return"wsmessaging"}},updated:function(){var t=this.$el.querySelector("#container");t.scrollTop=t.clientHeight},mutations:i,socket:{events:{onmessage:function(t){return this.getter()}}},mixins:[n.a]}},xJD8:function(t,e,a){"use strict";var s=a("7+uW"),r=a("3EgV"),i=a.n(r);s.a.use(i.a),e.a={name:"app"}},xJsL:function(t,e,a){"use strict";function s(t){a("V8XE")}var r=a("nKb+"),i=a("Kfsa"),n=a("VU/8"),o=s,c=n(r.a,i.a,o,"data-v-9d96a62a",null);e.a=c.exports},yJ2L:function(t,e,a){"use strict";function s(t){a("AXWB")}var r=a("vaj8"),i=a("Dsdp"),n=a("VU/8"),o=s,c=n(r.a,i.a,o,"data-v-196fe7ee",null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.6cdea4201e085f829068.js.map