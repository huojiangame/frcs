(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-update-update"],{"1a65":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("741f"),a=e("7c12"),o={data:function(){return{saleChannel:"",update:"",showUpdate:!1}},onLoad:function(){this.saleChannel=(0,a.getChannel)(),this.handleGetUpdate()},onPullDownRefresh:function(){console.log("refresh"),this.showUpdate=!0,setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},computed:{hasNewVersion:function(){var t=this.utils.version,n=this.$global.wdszVersion;return t>n}},methods:{handleGetUpdate:function(){var t=this;(0,i.getUpdate)().then((function(n){t.update=n.data})).catch((function(t){console.log(t)}))},downloadImage:function(){uni.showLoading({title:"下载中"});var t=this;uni.downloadFile({url:this.update.pkgUrl,success:function(n){console.log("downloadFile success, res is",n),t.imageSrc=n.tempFilePath,uni.hideLoading()},fail:function(t){console.log("downloadFile fail, err is:",t)}})},hideButton:function(){this.showUpdate=!1},handleUpdate:function(){}}};n.default=o},"53d7":function(t,n,e){"use strict";e.r(n);var i=e("1a65"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"778a":function(t,n,e){var i=e("8772");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("ec2e674e",i,!0,{sourceMap:!1,shadowMode:!1})},"7e52":function(t,n,e){"use strict";var i=e("778a"),a=e.n(i);a.a},"83d3":function(t,n,e){"use strict";e.r(n);var i=e("af3c"),a=e("53d7");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("7e52");var u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"ab4f5e48",null,!1,i["a"],void 0);n["default"]=s.exports},8772:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".summary-wrap[data-v-ab4f5e48]{padding:0 %?15?%}.summary-content[data-v-ab4f5e48]{color:#969799}.highlight[data-v-ab4f5e48]{color:red}",""]),t.exports=n},af3c:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"summary-wrap"},[t.showUpdate?e("v-uni-view",[e("v-uni-button",{attrs:{type:"primary",plain:"true",size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleUpdate.apply(void 0,arguments)}}},[t._v("更新")]),e("v-uni-text",{staticStyle:{width:"10upx",display:"inline-block"}}),e("v-uni-button",{attrs:{type:"primary",plain:"true",size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideButton.apply(void 0,arguments)}}},[t._v("收起")])],1):t._e(),e("v-uni-view",[t._v("更新说明：")]),e("v-uni-view",t._l(t.update.updateDescription,(function(n,i){return e("v-uni-view",{key:i},[e("v-uni-view",[t._v(t._s(n.title))]),t._l(n.content,(function(n,i){return e("v-uni-view",{key:i,staticClass:"summary-content"},[t._v(t._s(n))])}))],2)})),1)],1)],1)},a=[]}}]);