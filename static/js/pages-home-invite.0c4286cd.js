(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-invite"],{"0095":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.title[data-v-38738f09]{font-weight:700;padding-bottom:10px}.desc[data-v-38738f09]{font-size:13px}.invite-code[data-v-38738f09]{font-size:12px}.invite-wrap[data-v-38738f09]{padding:10px 5px;margin:20px 0;background:#ebedf0;border-radius:5px}.code-wrap[data-v-38738f09]{display:flex;align-items:center}.input-border[data-v-38738f09]{border:1px solid #d5d7d9;font-size:13px}.placeholder[data-v-38738f09]{font-size:13px}',""]),t.exports=i},"798f":function(t,i,e){var n=e("0095");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("47fba4b7",n,!0,{sourceMap:!1,shadowMode:!1})},abe3:function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a4d3"),e("e01a"),e("99af");var a=n(e("628a")),s=e("741f"),r={filters:{dateFilter:function(t){if(t)return t.substring(0,10)}},data:function(){var t;return{userInfo:{},description:(null===(t=a.default.getAssetLoacl())||void 0===t?void 0:t.description)||{},inviteCode:"",inviteDays:4,myInviteData:[],mySendData:[],frcsUtils:void 0}},components:{},computed:{myInviteCode:function(){return this.userInfo.inviteCode}},watch:{},created:function(){},mounted:function(){},onLoad:function(){this.loadLoginInfo(),this.loadData()},methods:{handleInput:function(){},handleSubmit:function(){if(this.userInfo.userid&&this.userInfo.serverId)if(this.inviteCode){var t={userid:this.userInfo.userid,server_id:this.userInfo.serverId,invite_code:this.inviteCode};(0,s.invite)(t).then((function(t){uni.showModal({title:"提示",content:t.msg,showCancel:!1,confirmText:"好的",success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})}))}else this.$toast("请输入邀请码");else this.$toast("请检查是否正常登录辅助并成功开启云挂机")},loadLoginInfo:function(){var t,i,e=a.default.getGameLoginInfo(),n=uni.getStorageSync("frcsUtils");this.frcsUtils=n?JSON.parse(n):void 0,this.userInfo=(null===e||void 0===e?void 0:e.userInfo)||{};var s=null===(t=a.default.getAssetLoacl())||void 0===t||null===(i=t.utils)||void 0===i?void 0:i.inviteDays;s&&(this.inviteDays=s)},loadData:function(){var t=this,i={userid:this.userInfo.userid,server_id:this.userInfo.serverId};(0,s.myInvite)(i).then((function(i){200===i.code&&(t.myInviteData=i.data.my_invite,t.mySendData=i.data.my_send)}))},getUrl:function(){var t="https://huojiangame.github.io/frcs/";if(window){var i=window.location.href;i.split("#")[0]&&(t=i.split("#")[0])}else{var e,n,a,s;null!==(e=this.frcsUtils)&&void 0!==e&&null!==(n=e.contact)&&void 0!==n&&n.fuzhuUrl&&(t=null===(a=this.frcsUtils)||void 0===a||null===(s=a.contact)||void 0===s?void 0:s.fuzhuUrl)}return t},doCopy:function(){var t=this;if(this.myInviteCode){var i=this.getUrl(),e="【凡人传说兔子辅助】云挂机，新体验！设置好之后关闭手机一样帮你做任务！欢迎免费体验： ".concat(i," 使用下面的邀请码可以领取更多免费天数！邀请码："),n="".concat(e,"  ").concat(this.myInviteCode);this.$copyText(n).then((function(i){t.$toast("复制成功")}),(function(i){t.$toast("复制失败")}))}else this.$toast("没有获取到邀请码，复制失败。请正确登录挂机后再试")}}};i.default=r},d107:function(t,i,e){"use strict";e.r(i);var n=e("db35"),a=e("f45a");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("e894");var r=e("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"38738f09",null,!1,n["a"],void 0);i["default"]=o.exports},db35:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uniTable:e("10af").default,uniTr:e("d578").default,uniTh:e("b06d").default,uniTd:e("155c").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content",staticStyle:{"padding-bottom":"40upx"}},[e("v-uni-view",{staticClass:"section-title"},[t._v("邀请码说明")]),t._l(t.description.inviteDesc,(function(i,n){return e("v-uni-view",{key:n,staticClass:"desc"},[t._v(t._s(i))])})),e("v-uni-view",{staticClass:"invite-wrap"},[e("v-uni-view",[t._v("我的邀请码：")]),e("v-uni-view",{staticClass:"code-wrap"},[e("v-uni-text",{staticClass:"invite-code"},[t._v(t._s(t.myInviteCode))]),e("v-uni-text",{staticStyle:{color:"#007aff",cursor:"pointer","padding-left":"20px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.doCopy.apply(void 0,arguments)}}},[t._v("复制")])],1)],1),e("v-uni-view",[t._v("领取邀请奖励：")]),e("v-uni-input",{staticClass:"uni-input input-border",attrs:{"placeholder-class":"placeholder",placeholder:"请输入邀请人的邀请码"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.handleInput.apply(void 0,arguments)}},model:{value:t.inviteCode,callback:function(i){t.inviteCode=i},expression:"inviteCode"}}),e("v-uni-view",{staticClass:"save-btn"},[e("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1),e("v-uni-view",{staticClass:"section-title"},[t._v("赠送天数说明")]),e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{align:"center",width:"90"}},[t._v("辅助类型")]),e("uni-th",{attrs:{align:"center",width:"90"}},[t._v("充值类型")]),e("uni-th",{attrs:{align:"center",width:"90"}},[t._v("赠送天数")])],1),t._l(t.description.price,(function(i,n){return e("uni-tr",{key:n},[e("uni-td",{attrs:{align:"center"}},[t._v(t._s(i.vipType))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(i.priceType))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(i.award))])],1)}))],2),e("v-uni-view",{staticClass:"section-title"},[t._v("我的赠送记录")]),e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{align:"center",width:"90"}},[t._v("角色名")]),e("uni-th",{attrs:{align:"center",width:"70"}},[t._v("时间")]),e("uni-th",{attrs:{align:"center",width:"40"}},[t._v("赠送天数")])],1),t._l(t.mySendData,(function(i,n){return e("uni-tr",{key:n},[e("uni-td",{attrs:{align:"center"}},[t._v(t._s(i.role_name_src))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(t._f("dateFilter")(i.create_time)))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(i.days))])],1)}))],2),e("v-uni-view",{staticClass:"section-title"},[t._v("我的邀请记录")]),e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{align:"center",width:"90"}},[t._v("角色名")]),e("uni-th",{attrs:{align:"center",width:"70"}},[t._v("时间")]),e("uni-th",{attrs:{align:"center",width:"40"}},[t._v("获得天数")])],1),t._l(t.myInviteData,(function(i,n){return e("uni-tr",{key:n},[e("uni-td",{attrs:{align:"center"}},[t._v(t._s(i.role_name_dest))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(t._f("dateFilter")(i.create_time)))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(i.days))])],1)}))],2)],2)},s=[]},e894:function(t,i,e){"use strict";var n=e("798f"),a=e.n(n);a.a},f45a:function(t,i,e){"use strict";e.r(i);var n=e("abe3"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a}}]);