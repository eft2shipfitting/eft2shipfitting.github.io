!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=57)}([function(t,n,e){var r=e(4)(Object,"create");t.exports=r},function(t,n,e){var r=e(21),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,n,e){var r=e(35);t.exports=function(t,n){for(var e=t.length;e--;)if(r(t[e][0],n))return e;return-1}},function(t,n,e){var r=e(41);t.exports=function(t,n){var e=t.__data__;return r(n)?e["string"==typeof n?"string":"hash"]:e.map}},function(t,n,e){var r=e(18),o=e(27);t.exports=function(t,n){var e=o(t,n);return r(e)?e:void 0}},function(t,n,e){var r=e(1).Symbol;t.exports=r},function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n){t.exports=function(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}},function(t,n,e){var r=e(12);t.exports=function(t){return t&&t.length?r(t):[]}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},,function(t,n,e){},function(t,n,e){var r=e(13),o=e(47),i=e(52),u=e(53),a=e(54),c=e(7);t.exports=function(t,n,e){var s=-1,f=o,l=t.length,p=!0,h=[],d=h;if(e)p=!1,f=i;else if(l>=200){var v=n?null:a(t);if(v)return c(v);p=!1,f=u,d=new r}else d=n?[]:h;t:for(;++s<l;){var y=t[s],g=n?n(y):y;if(y=e||0!==y?y:0,p&&g==g){for(var b=d.length;b--;)if(d[b]===g)continue t;n&&d.push(g),h.push(y)}else f(d,g,e)||(d!==h&&d.push(g),h.push(y))}return h}},function(t,n,e){var r=e(14),o=e(45),i=e(46);function u(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new r;++n<e;)this.add(t[n])}u.prototype.add=u.prototype.push=o,u.prototype.has=i,t.exports=u},function(t,n,e){var r=e(15),o=e(40),i=e(42),u=e(43),a=e(44);function c(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},function(t,n,e){var r=e(16),o=e(32),i=e(39);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,n,e){var r=e(17),o=e(28),i=e(29),u=e(30),a=e(31);function c(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},function(t,n,e){var r=e(0);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,n,e){var r=e(19),o=e(24),i=e(6),u=e(26),a=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?p:a).test(u(t))}},function(t,n,e){var r=e(20),o=e(6);t.exports=function(t){if(!o(t))return!1;var n=r(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},function(t,n,e){var r=e(5),o=e(22),i=e(23),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(9))},function(t,n,e){var r=e(5),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(n?t[a]=e:delete t[a]),o}},function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},function(t,n,e){var r,o=e(25),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,n,e){var r=e(1)["__core-js_shared__"];t.exports=r},function(t,n){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},function(t,n,e){var r=e(0),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(r){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return o.call(n,t)?n[t]:void 0}},function(t,n,e){var r=e(0),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return r?void 0!==n[t]:o.call(n,t)}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=r&&void 0===n?"__lodash_hash_undefined__":n,this}},function(t,n,e){var r=e(33),o=e(34),i=e(36),u=e(37),a=e(38);function c(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},function(t,n){t.exports=function(){this.__data__=[],this.size=0}},function(t,n,e){var r=e(2),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,e=r(n,t);return!(e<0)&&(e==n.length-1?n.pop():o.call(n,e,1),--this.size,!0)}},function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},function(t,n,e){var r=e(2);t.exports=function(t){var n=this.__data__,e=r(n,t);return e<0?void 0:n[e][1]}},function(t,n,e){var r=e(2);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,n,e){var r=e(2);t.exports=function(t,n){var e=this.__data__,o=r(e,t);return o<0?(++this.size,e.push([t,n])):e[o][1]=n,this}},function(t,n,e){var r=e(4)(e(1),"Map");t.exports=r},function(t,n,e){var r=e(3);t.exports=function(t){var n=r(this,t).delete(t);return this.size-=n?1:0,n}},function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},function(t,n,e){var r=e(3);t.exports=function(t){return r(this,t).get(t)}},function(t,n,e){var r=e(3);t.exports=function(t){return r(this,t).has(t)}},function(t,n,e){var r=e(3);t.exports=function(t,n){var e=r(this,t),o=e.size;return e.set(t,n),this.size+=e.size==o?0:1,this}},function(t,n){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,n){t.exports=function(t){return this.__data__.has(t)}},function(t,n,e){var r=e(48);t.exports=function(t,n){return!!(null==t?0:t.length)&&r(t,n,0)>-1}},function(t,n,e){var r=e(49),o=e(50),i=e(51);t.exports=function(t,n,e){return n==n?i(t,n,e):r(t,o,e)}},function(t,n){t.exports=function(t,n,e,r){for(var o=t.length,i=e+(r?1:-1);r?i--:++i<o;)if(n(t[i],i,t))return i;return-1}},function(t,n){t.exports=function(t){return t!=t}},function(t,n){t.exports=function(t,n,e){for(var r=e-1,o=t.length;++r<o;)if(t[r]===n)return r;return-1}},function(t,n){t.exports=function(t,n,e){for(var r=-1,o=null==t?0:t.length;++r<o;)if(e(n,t[r]))return!0;return!1}},function(t,n){t.exports=function(t,n){return t.has(n)}},function(t,n,e){var r=e(55),o=e(56),i=e(7),u=r&&1/i(new r([,-0]))[1]==1/0?function(t){return new r(t)}:o;t.exports=u},function(t,n,e){var r=e(4)(e(1),"Set");t.exports=r},function(t,n){t.exports=function(){}},function(t,n,e){"use strict";e.r(n);e(11);var r,o=e(8),i=e.n(o),u=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},a=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c=function(){function t(){}return t.prototype.getItemIds=function(t){return u(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return[4,fetch("https://esi.evetech.net/latest/universe/ids/",{body:JSON.stringify(i()(t)),method:"POST"})];case 1:return[4,n.sent().json()];case 2:return[2,n.sent().inventory_types]}}))}))},t.prototype.getType=function(t){return u(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return[4,fetch("https://esi.evetech.net/latest/universe/types/"+t+"/")];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()]}}))}))},t}();!function(t){t[t.high=0]="high",t[t.mid=1]="mid",t[t.low=2]="low",t[t.drone=3]="drone",t[t.charge=4]="charge",t[t.rig=5]="rig"}(r||(r={}));var s=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},f=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},l=function(){function t(){this.effectToSlot=new Map([[16,r.high],[13,r.mid],[11,r.low],[2663,r.rig]]),this.droneGroupIds=[97,100,101,299,470,544,545,549,639,640,641,1023,1159],this.chargeIds=[83,85,86,87,88,89,90,92,372,373,374,375,376,377,384,385,386,387,394,395,396,425,476,479,482,492,497,498,500,548,648,653,654,655,656,657,663,772,863,864,892,907,908,909,910,911,916,972,1010,1019,1153,1158,1400,1546,1547,1548,1549,1550,1551,1559,1569,1677,1678,1701,1702,1769,1771,1772,1773,1774,1976,1987,1989],this.esiApi=new c}return t.prototype.parse=function(t,n){return s(this,void 0,void 0,(function(){var e,o,i,u,a,c,l,p,h,d,v=this;return f(this,(function(y){switch(y.label){case 0:return e=n.trim().split(/\r?\n/),o=e[0],i=e.slice(1),u=/\[(.*)\]/.exec(o),a=null===u?"No Title":u[1],c=i.map((function(t){return t.trim()})).filter((function(t){return""!==t})).map(this.parseEftLine),[4,this.esiApi.getItemIds(c.map((function(t){return t.name})))];case 1:return l=y.sent(),[4,Promise.all(l.map((function(t){return s(v,void 0,void 0,(function(){return f(this,(function(n){switch(n.label){case 0:return[4,this.esiApi.getType(t.id)];case 1:return[2,n.sent()]}}))}))})))];case 2:return p=y.sent(),h=c.map((function(t){return{eftLine:t,universeItem:l.find((function(n){return n.name===t.name}))}})).filter((function(t){return void 0!==t.universeItem})).map((function(t){var n=t.eftLine,e=t.universeItem;return{eftLine:n,universeType:p.find((function(t){return t.type_id===e.id}))}})).filter((function(t){return void 0!==t.universeType})),d=h.map((function(t){var n=t.eftLine,e=t.universeType;return v.parseItem(n,e)})),[2,{title:a,fitName:t,highSlots:d.filter((function(t){return t.slot===r.high})),midSlots:d.filter((function(t){return t.slot===r.mid})),lowSlots:d.filter((function(t){return t.slot===r.low})),drones:d.filter((function(t){return t.slot===r.drone})),charges:d.filter((function(t){return t.slot===r.charge})),rigs:d.filter((function(t){return t.slot===r.rig}))}]}}))}))},t.prototype.parseEftLine=function(t){var n=/(.*)\s+x(\d+)$/.exec(t);return{name:null!==n?n[0]:t,amount:null!==n?Number.parseInt(n[1]):1}},t.prototype.parseItem=function(t,n){var e=this.parseSlot(n);return{name:t.amount>1?t.name+" x"+t.amount:t.name,typeId:n.type_id,slot:e}},t.prototype.parseSlot=function(t){var n=this,e=t.dogma_effects.map((function(t){return t.effect_id})).find((function(t){return n.effectToSlot.has(t)}));return void 0!==e?this.effectToSlot.get(e):this.droneGroupIds.includes(t.group_id)?r.drone:this.chargeIds.includes(t.group_id)?r.charge:void 0},t}(),p=function(){function t(){}return t.prototype.generate=function(t){return"{{ShipFitting\n| ship="+t.title+"\n| fitName="+t.fitName+"\n"+this.generateSlot("high",t.highSlots)+"\n"+this.generateSlot("mid",t.midSlots)+"\n"+this.generateSlot("low",t.lowSlots)+"\n"+this.generateSlot("drone",t.drones)+"\n"+this.generateSlot("charge",t.charges)+"\n"+this.generateSlot("rig",t.rigs)+"\n}}"},t.prototype.generateSlot=function(t,n){for(var e="",r=0;r<n.length;r++)e=e.concat("| "+t+(r+1)+"name="+n[r].name+"\n| "+t+(r+1)+"typeID="+n[r].typeId+"\n");return e},t}(),h=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},d=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},v=new(function(){function t(){this.eftParser=new l,this.shipFitGenerator=new p}return t.prototype.show=function(){document.getElementsByTagName("body")[0].style.display="block"},t.prototype.bind=function(){var t=this;this.shipfitting=document.getElementById("shipfitting"),this.eftInput=document.getElementById("eft-input"),this.fitName=document.getElementById("fit-name"),document.getElementById("convert").addEventListener("click",(function(){return t.convertAndCopyToClipboard()})),this.eftInput.value="[Rokh, Vanguards a]\nModal Mega Neutron Particle Accelerator I\nModal Mega Neutron Particle Accelerator I\nModal Mega Neutron Particle Accelerator I\nModal Mega Neutron Particle Accelerator I\nModal Mega Neutron Particle Accelerator I\nModal Mega Neutron Particle Accelerator I\nModal Mega Neutron Particle Accelerator I\nModal Mega Neutron Particle Accelerator I\n\nFederation Navy Stasis Webifier\nFederation Navy Stasis Webifier\nSensor Booster II\nTracking Computer II\n\nDamage Control II\nMagnetic Field Stabilizer II\nMagnetic Field Stabilizer II\nMagnetic Field Stabilizer II\nTracking Enhancer II\n\nLarge Anti-Thermal Screen Reinforcer I\nLarge Core Defense Field Extender I\nLarge Core Defense Field Extender I\n\nHobgoblin I x5\n\nScan Resolution Script\nOptimal Range Script\nCaldari Navy Antimatter Charge L"},t.prototype.convertAndCopyToClipboard=function(){return h(this,void 0,void 0,(function(){var t,n;return d(this,(function(e){switch(e.label){case 0:return[4,this.eftParser.parse(this.fitName.value,this.eftInput.value)];case 1:return t=e.sent(),n=this.shipFitGenerator.generate(t),this.shipfitting.innerText=n,navigator.clipboard.writeText(n),[2]}}))}))},t}());v.bind(),window.addEventListener("load",(function(){return v.show()}))}]);