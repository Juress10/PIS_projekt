(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{1:function(t,s){},2:function(t,s){},3:function(t,s){},4:function(t,s){},5:function(t,s){},6:function(t,s){},7:function(t,s){},"9d10":function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row hlavny-box"},[a("div",{staticClass:"col-8 row"},[a("h5",{staticClass:"col-12"},[t._v("Poistná udalosť")]),a("div",{staticClass:"col-5 boxicek"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Id udalosti"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.poistna_udalost.id,callback:function(s){t.$set(t.poistna_udalost,"id",s)},expression:"poistna_udalost.id"}})],1),a("div",{staticClass:"col-5"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Id poistenca"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"perm_identity"}})]},proxy:!0}]),model:{value:t.poistna_udalost.poistenec_id,callback:function(s){t.$set(t.poistna_udalost,"poistenec_id",s)},expression:"poistna_udalost.poistenec_id"}})],1),a("q-input",{staticClass:"col-12 boxicek vyrovnanie-dlzky",attrs:{filled:"",type:"textarea",label:"Opis vzniknutej škody"},model:{value:t.poistna_udalost.opis_skody,callback:function(s){t.$set(t.poistna_udalost,"opis_skody",s)},expression:"poistna_udalost.opis_skody"}}),a("q-input",{staticClass:"col-6 boxicek",attrs:{filled:"","bottom-slots":"",label:"Miesto vzniknutej škody"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"place"}})]},proxy:!0}]),model:{value:t.poistna_udalost.miesto_skody,callback:function(s){t.$set(t.poistna_udalost,"miesto_skody",s)},expression:"poistna_udalost.miesto_skody"}}),a("div",{staticClass:"col-5"},[a("q-input",{attrs:{filled:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.poistna_udalost.datum_skody,callback:function(s){t.$set(t.poistna_udalost,"datum_skody",s)},expression:"poistna_udalost.datum_skody"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.poistna_udalost.datum_skody,callback:function(s){t.$set(t.poistna_udalost,"datum_skody",s)},expression:"poistna_udalost.datum_skody"}})],1)],1)]},proxy:!0}]),model:{value:t.poistna_udalost.datum_skody,callback:function(s){t.$set(t.poistna_udalost,"datum_skody",s)},expression:"poistna_udalost.datum_skody"}})],1),a("drag-and-drop-img",{attrs:{url:t.url}}),a("div",{staticClass:"col-2 row"},[a("q-btn",{staticClass:"col-12 self-end save-button",attrs:{rounded:"",color:"accent",size:t.xl},on:{click:function(s){return t.updatePoistnaUdalost()}}},[a("q-icon",{staticClass:"text-white",attrs:{name:"save",size:"sm"}}),a("q-space"),t._v("\n          Uložiť\n          "),a("q-space")],1),a("q-btn",{staticClass:"col-12 self-end save-button",attrs:{rounded:"",color:"cyan-8",size:t.xl},on:{click:function(s){return t.potvrditUdalost()}}},[a("q-icon",{staticClass:"text-white",attrs:{name:"done_outline",size:"sm"}}),a("q-space"),t._v("\n          Potvrdiť\n          ")],1)],1)],1),a("div",{staticClass:"col-4"},[a("h5",{staticClass:"col-12"},[t._v("Správa o poistnej udalosti")]),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Meno a priezvisko"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"note"}})]},proxy:!0}]),model:{value:t.poistna_sprava.meno_priezvisko,callback:function(s){t.$set(t.poistna_sprava,"meno_priezvisko",s)},expression:"poistna_sprava.meno_priezvisko"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Odhadnuta cena"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"euro_symbol"}})]},proxy:!0}]),model:{value:t.poistna_sprava.odhadnuta_suma,callback:function(s){t.$set(t.poistna_sprava,"odhadnuta_suma",s)},expression:"poistna_sprava.odhadnuta_suma"}})],1),a("q-input",{staticClass:"col-12 boxicek",attrs:{filled:"",type:"textarea",label:"Správa pre poistenca"},model:{value:t.poistna_sprava.text_spravy,callback:function(s){t.$set(t.poistna_sprava,"text_spravy",s)},expression:"poistna_sprava.text_spravy"}}),a("div",{staticClass:"col-12 row justify-between"},[a("div",{staticClass:"col-7",staticStyle:{width:"150px",height:"30px"}}),a("q-btn",{staticClass:"col-4 self-end save-button",attrs:{rounded:"",color:"accent",size:t.xl},on:{click:function(s){return t.updatePoistnaSprava()}}},[a("q-icon",{staticClass:"text-white",attrs:{name:"save",size:"sm"}}),a("q-space"),t._v("\n              Uložiť\n          "),a("q-space")],1)],1)],1)])},e=[],n=(a("551c"),a("06db"),a("967e")),i=a.n(n),r=(a("96cf"),a("fa84")),c=a.n(r),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"q-pa-md col-9"},[a("div",{staticClass:"q-col-gutter-md row items-start"},[t._l(t.url,(function(s){return a("q-img",{key:s.pathname,staticClass:"col-2 rounded-borders",staticStyle:{width:"170px",height:"115px"},attrs:{src:s}},[a("div",{staticClass:"absolute-bottom text-subtitle1 text-center"},[t._v("\n            "+t._s(s.pathname)+"\n        ")]),a("q-btn",{staticStyle:{color:"grey"},attrs:{color:"grey-3","text-color":"black",title:"Remove"},on:{click:function(a){return t.removeImg(s)}}},[a("q-icon",{staticClass:"text-black",attrs:{name:"clear",size:"sm"}})],1)],1)})),a("div",{staticClass:"col-2 bg-blue-grey-3 row justify-center items-center",staticStyle:{border:"dotted 3px black",width:"170px",height:"115px",padding:"0"},on:{drop:function(s){return s.preventDefault(),t.addFile(s)},dragover:[function(t){t.preventDefault()},t.dragover],dragleave:t.dragleave}},[a("q-icon",{staticClass:"text-blue-grey",attrs:{name:"cloud_upload",size:"xl"}})],1)],2)])},u=[],d=a("4db1"),p=a.n(d),f={name:"DragAndDropImg",props:["url"],data:function(){return{files:[]}},computed:{uploadDisabled:function(){return 0===this.files.length}},methods:{addFile:function(t){var s=this;event.currentTarget.classList.add("bg-blue-grey-3"),event.currentTarget.classList.remove("bg-cyan-8");var a=t.dataTransfer.files;a&&p()(a).forEach((function(t){s.url.push(URL.createObjectURL(t)),s.files.push(t)}))},dragover:function(t){console.log("fsfsd"),t.currentTarget.classList.contains("bg-cyan-8")||(t.currentTarget.classList.remove("bg-blue-grey-3"),t.currentTarget.classList.add("bg-cyan-8"))},dragleave:function(t){t.currentTarget.classList.add("bg-blue-grey-3"),t.currentTarget.classList.remove("bg-cyan-8")},removeFile:function(t){this.files=this.files.filter((function(s){return s!==t}))},removeImg:function(t){this.url=this.url.filter((function(s){return s!==t}))},upload:function(){var t=new FormData;this.files.forEach((function(s,a){t.append("file"+(a+1),s)})),fetch("https://httpbin.org/post",{method:"POST",body:t}).then((function(t){return t.json()})).then((function(t){console.log("done uploading",t)})).catch((function(t){console.error(JSON.stringify(t.message))}))}}},v=f,_=a("2877"),m=a("eebe"),h=a.n(m),y=a("068f"),b=a("9c40"),g=a("0016"),k=Object(_["a"])(v,l,u,!1,null,"4ac2ea82",null),x=k.exports;h()(k,"components",{QImg:y["a"],QBtn:b["a"],QIcon:g["a"]});var q={components:{"drag-and-drop-img":x},data:function(){return{files:[],url:[],poistna_udalost:{},poistna_sprava:{}}},methods:{sendEmail:function(){var t=this;return c()(i.a.mark((function s(){var o,e,n;return i.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return o=a("c13f"),e=a("083c").parseString,n=!1,o.createClientAsync("http://pis.predmety.fiit.stuba.sk/pis/ws/NotificationServices/Email?WSDL").then((function(s){s.notify({team_id:"074",password:"4GKU4S",email:t.poistna_udalost.poistenec_id+"@gmail.com",subject:"oboznamenie o poistke",message:t.poistna_sprava.text_spravy},(function(t,s){s.body?e(s.body,(function(t,s){n=s})):(t&&console.log(t),n=s)}))})),s.next=6,t.sleep(2e3);case 6:return s.abrupt("return",n);case 7:case"end":return s.stop()}}),s)})))()},sleep:function(t){return new Promise((function(s){return setTimeout(s,t)}))},potvrditUdalost:function(){var t=this;return c()(i.a.mark((function s(){var a;return i.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if("undefined"===typeof t.poistna_sprava.id||"undefined"===typeof t.poistna_sprava.meno_priezvisko||"undefined"===typeof t.poistna_sprava.odhadnuta_suma||"undefined"===typeof t.poistna_sprava.text_spravy||"undefined"===typeof t.poistna_udalost.datum_skody||"undefined"===typeof t.poistna_udalost.opis_skody||"undefined"===t.poistna_udalost.miesto_skody){s.next=6;break}return t.$axios.post(t.$store.state.store.URL+"/api/potvrdit",{id:t.poistna_udalost.id,suma:t.poistna_sprava.odhadnuta_suma}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),s.next=4,t.sendEmail();case 4:a=s.sent,console.log("email bol poistencovy poslany: "+a.success);case 6:case"end":return s.stop()}}),s)})))()},updatePoistnaUdalost:function(){console.log(this.poistna_udalost),this.$axios.put(this.$store.state.store.URL+"/api/udalost/update/"+this.poistna_udalost.id,this.poistna_udalost).then((function(t){console.log(t)})).catch((function(t){console.log("error",t)}))},updatePoistnaSprava:function(){console.log(this.poistna_sprava),"undefined"!==typeof this.poistna_sprava.id?this.$axios.put(this.$store.state.store.URL+"/api/sprava/update/"+this.poistna_sprava.id,this.poistna_sprava).then((function(t){console.log(t)})).catch((function(t){console.log("error",t)})):(this.poistna_sprava.poistna_udalost_id=this.poistna_udalost.id,this.$axios.post(this.$store.state.store.URL+"/api/sprava/create",this.poistna_sprava).then((function(t){console.log(t)})).catch((function(t){console.log("error",t)})))}},created:function(){var t=this;this.$axios.get(this.$store.state.store.URL+"/api/udalost/read/"+this.$route.params.id).then((function(s){console.log(s.data),t.poistna_udalost=s.data})).catch((function(t){console.log("error",t)})).then((function(){null!=t.poistna_udalost&&t.$axios.get(t.$store.state.store.URL+"/api/sprava/read/"+t.poistna_udalost.id).then((function(s){t.poistna_sprava=s.data,console.log(t.poistna_sprava)})).catch((function(t){console.log("error",t)}))}))}},C=q,w=(a("e497"),a("27f9")),$=a("7cbe"),S=a("52ee"),z=a("ca78"),L=a("2c91"),U=Object(_["a"])(C,o,e,!1,null,null,null);s["default"]=U.exports;h()(U,"components",{QInput:w["a"],QIcon:g["a"],QPopupProxy:$["a"],QDate:S["a"],QTime:z["a"],QBtn:b["a"],QSpace:L["a"]})},d0d7:function(t,s,a){},e497:function(t,s,a){"use strict";var o=a("d0d7"),e=a.n(o);e.a}}]);