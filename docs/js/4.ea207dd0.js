(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"9d10":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row hlavny-box"},[a("div",{staticClass:"col-8 row"},[a("h5",{staticClass:"col-12"},[t._v("Poistná udalosť")]),a("div",{staticClass:"col-3 boxicek"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Id",dense:t.dense},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}])})],1),a("div",{staticClass:"col-8"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Janko Hrasko",dense:t.dense},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"perm_identity"}})]},proxy:!0}])})],1),a("q-input",{staticClass:"col-12 boxicek vyrovnanie-dlzky",attrs:{filled:"",type:"textarea",label:"Opis vzniknutej škody"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),a("q-input",{staticClass:"col-6 boxicek",attrs:{filled:"","bottom-slots":"",label:"Miesto vzniknutej škody",dense:t.dense},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"place"}})]},proxy:!0}]),model:{value:t.place,callback:function(e){t.place=e},expression:"place"}}),a("div",{staticClass:"col-5"},[a("q-input",{attrs:{filled:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("drag-and-drop-img",{attrs:{url:t.url}}),a("q-btn",{staticClass:"col-2 self-end save-button",attrs:{rounded:"",color:"cyan-8",size:t.xl}},[a("q-icon",{staticClass:"text-white",attrs:{name:"save",size:"sm"}}),t._v("\n      Uložiť\n      ")],1)],1),a("div",{staticClass:"col-4"},[a("h5",{staticClass:"col-12"},[t._v("Správa o poistnej udalosti")]),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Janko Hrasko",dense:t.dense},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"note"}})]},proxy:!0}])})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Odhadnuta cena",dense:t.dense},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"euro_symbol"}})]},proxy:!0}])})],1),a("q-input",{staticClass:"col-12 boxicek",attrs:{filled:"",type:"textarea",label:"Správa pre poistenca"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),a("div",{staticClass:"col-12 row justify-between"},[a("div",{staticClass:"col-7",staticStyle:{width:"150px",height:"30px"}}),a("q-btn",{staticClass:"col-4 self-end save-button",attrs:{rounded:"",color:"cyan-8",size:t.xl}},[a("q-icon",{staticClass:"text-white",attrs:{name:"save",size:"sm"}}),t._v("\n              Uložiť\n          ")],1)],1)],1)])},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md col-9"},[a("div",{staticClass:"q-col-gutter-md row items-start"},[t._l(t.url,(function(e){return a("q-img",{key:e.pathname,staticClass:"col-2 rounded-borders",staticStyle:{width:"170px",height:"115px"},attrs:{src:e}},[a("div",{staticClass:"absolute-bottom text-subtitle1 text-center"},[t._v("\n            "+t._s(e.pathname)+"\n        ")]),a("q-btn",{staticStyle:{color:"grey"},attrs:{color:"grey-3","text-color":"black",title:"Remove"},on:{click:function(a){return t.removeImg(e)}}},[a("q-icon",{staticClass:"text-black",attrs:{name:"clear",size:"sm"}})],1)],1)})),a("div",{staticClass:"col-2 bg-blue-grey-3 row justify-center items-center",staticStyle:{border:"dotted 3px black",width:"170px",height:"115px",padding:"0"},on:{drop:function(e){return e.preventDefault(),t.addFile(e)},dragover:[function(t){t.preventDefault()},t.dragover],dragleave:t.dragleave}},[a("q-icon",{staticClass:"text-blue-grey",attrs:{name:"cloud_upload",size:"xl"}})],1)],2)])},r=[],l=a("4db1"),i=a.n(l),c={name:"DragAndDropImg",props:["url"],data:function(){return{files:[]}},computed:{uploadDisabled:function(){return 0===this.files.length}},methods:{addFile:function(t){var e=this;event.currentTarget.classList.add("bg-blue-grey-3"),event.currentTarget.classList.remove("bg-cyan-8");var a=t.dataTransfer.files;a&&i()(a).forEach((function(t){e.url.push(URL.createObjectURL(t)),e.files.push(t)}))},dragover:function(t){console.log("fsfsd"),t.currentTarget.classList.contains("bg-cyan-8")||(t.currentTarget.classList.remove("bg-blue-grey-3"),t.currentTarget.classList.add("bg-cyan-8"))},dragleave:function(t){t.currentTarget.classList.add("bg-blue-grey-3"),t.currentTarget.classList.remove("bg-cyan-8")},removeFile:function(t){this.files=this.files.filter((function(e){return e!==t}))},removeImg:function(t){this.url=this.url.filter((function(e){return e!==t}))},upload:function(){var t=new FormData;this.files.forEach((function(e,a){t.append("file"+(a+1),e)})),fetch("https://httpbin.org/post",{method:"POST",body:t}).then((function(t){return t.json()})).then((function(t){console.log("done uploading",t)})).catch((function(t){console.error(JSON.stringify(t.message))}))}}},d=c,u=a("2877"),p=a("eebe"),f=a.n(p),m=a("068f"),v=a("9c40"),b=a("0016"),g=Object(u["a"])(d,o,r,!1,null,"4ac2ea82",null),x=g.exports;f()(g,"components",{QImg:m["a"],QBtn:v["a"],QIcon:b["a"]});var y={components:{"drag-and-drop-img":x},data:function(){return{files:[],url:[],textarea:"sadasdadddddddddddddddddddddddddddddddddddddddddddddd",date:"2019-02-01 12:44",place:"Bratislava"}}},h=y,k=(a("e497"),a("27f9")),q=a("7cbe"),C=a("52ee"),_=a("ca78"),w=Object(u["a"])(h,s,n,!1,null,null,null);e["default"]=w.exports;f()(w,"components",{QInput:k["a"],QIcon:b["a"],QPopupProxy:q["a"],QDate:C["a"],QTime:_["a"],QBtn:v["a"]})},d0d7:function(t,e,a){},e497:function(t,e,a){"use strict";var s=a("d0d7"),n=a.n(s);n.a}}]);