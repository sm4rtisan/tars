!function($){if(!$.fn.licoDialog){var zIndex=10001,licoDialog=function(){return{version:"0.3.3",defaults:{container:"body",destory:!0,blur:!0},_createContentInDialog:function(t,a){if(a){var e=$("<fieldset></fieldset>");$(t).append(e);var i=$("<legend>"+a+"</legend>");return e.append(i),e}return $(t)},_setErrorInDialogByName:function(t,a){var e=this._getDialogElementByLevel(a);if(t)for(var i in t)if(t.hasOwnProperty(i)){var n=e.find("input[name='"+i+"'],select[name='"+i+"'], textarea[name='"+i+"']"),l=n.parent(".au-dialog-input-container"),o=l.parent("label"),s=o.find(".tip"),r=o.find(".errormsg");o.addClass("error"),s.hide(),r.html(t[i])}},_createDomInContent:function(t,a,e){try{"br"==a&&t.append("<br/>"),a.tag||(a.tag={name:"div",attrs:{css:"au-dialog-layout-container"}});var i="select"==a.tag.name,n="textarea"==a.tag.name,l="input"==a.tag.name,o=l&&a.tag.attrs&&"hidden"==a.tag.attrs.type,s=l&&a.tag.attrs&&"submit"==a.tag.attrs.type,r=l&&!o&&!s,d=n||i||r,c=this,u=null;if(d){var g=a.tip?a.tip:"",h=a.label?a.label:"",p="<label><div>"+h+':<span class="tip">'+g+'</span><span class="errormsg"></span></div><div class="au-dialog-input-container"/></label>';u=$(p),t.append(u),a.tag.attrs.css||(a.tag.attrs.css=r?"au-dialog-au-dialog-text-input":n?"au-dialog-text-area":i?"au-dialog-text-select":"")}else s&&(a.tag.attrs.css||(a.tag.attrs.css="submit")),u=t;var f=a.tag.name||"div",v="<"+f,w=a.tag.attrs;w&&$.each(w,function(t,a){return"legend"==t&&"fieldset"==f||("text"==t||(("validateName"==t||"css"==t)&&(t="class"),void("class"==t&&-1!=v.indexOf('class="')?v=v.replace(/class="+/gi,'class="'+a+" "):v+=" "+t+'="'+(a?a:"")+'"')))}),v+=" >"+(w.text||"")+"</"+f+">";var y=$(v);if("fieldset"==f&&w.legend&&y.append("<legend>"+w.legend+"</legend>"),o)return void u.append(y);d&&(u=u.find(".au-dialog-input-container")),u.append(y);var m=a.listeners;if(m?$.each(m,function(t,e){"load"==t?(m.reset&&m.reset.apply(y,[y.length>0?y[0]:y],a.tag.attrs,c,window),e.apply(y,[y.length>0?y[0]:y],a.tag.attrs,c,window)):"reset"!=t&&y.bind(t,function(){e.apply(this,[this,a.tag.attrs,c,window])})}):d&&y.bind("blur",function(){c._validateContent(this)}),a.items){var b=a.layout||{};switch(b.name){case"column":var x=$("<table width='100%' border='0'  class='"+(b["class"]||"")+"' style='"+(b.style||"")+"' cellpadding='"+(b.cellpadding||0)+"' cellspacing='"+(b.cellspacing||0)+"'/>");y.append(x);var D=0,_=null,T=null,E=0,C=0;$.each(a.items,function(t,a){if(a.tag&&a.tag.attrs&&"hidden"==a.tag.attrs.type)T=y,C++;else{D>=1&&(D=0,E=E?E:t,_=null),_||(_=$("<tr/>"),x.append(_));var i=a.columnWidth;T=$("<td/>"),i?(T.attr({width:100*i+"%"}),D+=i):D=E&&(t-C+1)%E!=0?0:1,_.append(T)}c._createDomInContent(T,a,e)});break;default:$.each(a.items,function(t,a){c._createDomInContent(y,a,e)})}}var k=a.proxy;if(k&&a.autoLoad){var z=k.read,S=$.extend({self:y},z,!0);this._loadData(S)}var O=a.buttons;if(O)for(var I=0,j=O.length;j>I;I++){var A=O[I],L=null,M=null;switch(A){case"update":L='<input type="button" value="UPDATE" class="au-dialog-button au-dialog-button-update"/>',M="POST";break;case"read":L='<input type="button" value="READ" class="au-dialog-button au-dialog-button-read"/>',M="GET";break;case"destory":L='<input type="button" value="DESTORY" class="au-dialog-button au-dialog-button-destory"/>',M="DELETE";break;case"create":L='<input type="button" value="CREATE" class="au-dialog-button au-dialog-button-create"/>',M="PUT"}if(L){var V=$(L),N=$("<div class='au-dialog-toolbar'/>");if(N.appendTo(y),N.append(V),k){var P=k[A];V.bind("click",function(){var t=$.extend({_method:M},c.getValues(y),P.data),a=M;P.restful===!1&&("PUT"==a?a="POST":"DELETE"==a&&(a="GET")),P.dataType=P.dataType||"json","json"!=P.dataType&&"jsonp"!=P.dataType&&t.format||(t.format="json"),$.ajax({async:!0,type:a,url:P.url,contentType:P.contentType||"application/x-www-form-urlencoded",data:"application/json;charset=utf-8"==P.contentType?JSON.stringify(t):t,dataType:P.dataType||"json",success:function(t){P.callback?P.callback.call(c,e,t):t.success&&c._toggleDialog(e)}})})}}}}catch(R){}},getValues:function(t){var a={};return t&&$.each(t.find("input,select,textarea"),function(t,e){if("button"!=e.type&&(e.id||e.name)){var i=null;try{switch($(e).attr("xtype")){case"number":i=new Number($(e).val());break;default:i=$(e).val()}}catch(n){}a[e.id||e.name]=i}}),a},_loadData:function(){var t=function(t,a,e){if(a.success){var i=e.root?a[e.root]:a,n=$(e.self);for(var l in i)if("success"!=l){var o=e.mapping&&e.mapping[l]?e.mapping[l]:l;t._setDomValue(n.find("#"+o+",[name='"+o+"']"),o,i[l])}}};return function(a){var e=this;a.local?t(e,a.data,a):a.url&&$.ajax({type:"GET",crossDomain:!0,url:a.url,data:a.data,dataType:a.dataType||"json",success:function(i){t(e,i,a),a.callback&&a.callback.call(a.scope||e,a.args,i)}})}}(),_setDomValue:function(t,a,e){try{var i=t;i.is("select")||a&&(i=$("#"+a)).is("select")?$.each(i.children(),function(t,a){var i=$(a);i.val()==e?i.attr("selected","selected"):i.removeAttr("selected")}):(i=t,e=e?e:"",i.val(e))}catch(n){}},_compileRegExp:function(pattern,attributes){return eval("/"+pattern+"/"+attributes)},_getElementValue:function(t,a){var e="",i=a.tag.attrs.vs;if(t&&void 0!=i&&null!=i){var n=i.split(" ");for(var l in n){var o=n[l];if("style"==o)e=t.getAttribute(o),e&&""!=e||(e=t.$[o])&&(e=e instanceof CSSStyleDeclaration?e.cssText:e),e&&""!=e||(e=a.tag.attrs.value);else if(-1==o.indexOf("."))e=t.getAttribute(o),e&&""!=e||(e=t.$[o]),e&&""!=e||(e=a.tag.attrs.value);else if(0==o.indexOf("style."))e=t.$.style[o.split(".")[1]],e&&""!=e||(e=a.tag.attrs.value);else if(0==o.indexOf("event.")){var s=o.split(".")[1],r=0==s.indexOf("on")?s:"on"+s;e=t.getAttribute(r),e&&""!=e||(e=t.getAttribute("data-cke-pa-"+r)),e&&""!=e||(e=a.tag.attrs.value),e&&0==e.indexOf("(")&&-1!=e.indexOf(")(this)")&&(e=e.substring(1,e.length-7))}if(e&&""!=e)break}}var d=a.tag.attrs.unit;return d&&""!=d&&e&&""!=e&&(e=e.replace(this._compileRegExp("([0-9]+)\\s*("+d+")\\s*;*\\s*$","gim"),"$1")),e?e:""},_setElementValue:function(t,a,e){var i=a.vs||(e?"":$(a).attr("vs")),n=a.unit||(e?"":$(a).attr("unit"));if(t&&void 0!=i&&null!=i){var l=a.value||(e?"":$(a).val());n&&l&&""!=l&&(l+=n);var o=i.split(" ");for(var s in o){var r=o[s];if(-1==r.indexOf("."))t.setAttribute(r,l),t.$[r]=l;else if(0==r.indexOf("style."))t.$.style[r.split(".")[1]]=l;else if(0==i.indexOf("event.")){var d=r.split(".")[1],c=0==d.indexOf("on")?d:"on"+d;t.setAttribute(c,"("+l+")(this)")}}}},_loadOptionsOfSelection:function(t){var a=function(t,a){t.empty(),a&&$.each(a,function(a,e){t.append('<option value="'+(e||""==e?e.value||e.name||e:e)+'">'+(e||""==e?e.name||(isNaN(a)?a:e):a)+"</option>")})},e=function(t,a,e){e&&null!=e.value&&t._setDomValue(a,e.id,e.value)},i=this;t.local?(a(i,t.data),e(t.args[0],i,t.args[1])):t.url&&$.ajax({type:"GET",url:t.url,data:t.data,dataType:"json",success:function(n){n&&(a(i,n),e(t.args[0],i,t.args[1])),t.callback&&t.callback.call(t.scope||i,t.args,n)}})},_ajax:function(t){},_validateContent:function(t){try{var a=$(t).parents("form");a.validationEngine("validate"),a.submit()}catch(e){}},_initDomInDialog:function(t,a){if(a.html)return void t.append($(a.html));if(a.contentEl)return void t.append($(a.contentEl).children());if(a.items&&a.items.length>0){var e=this._createContentInDialog(t,a.title),i={};return $.extend(!0,i,a),void this._createDomInContent(e,i,a)}},_getContainerSize:function(t){var a=t.container,e=0,i=0;return a[0]==$("body")[0]?(e=Math.max($(window).width(),$("body").width()),i=Math.max($(window).height(),$("body").height())):(e=$(a).width(),i=$(a).height()),{width:e,height:i}},_resizeShadow:function(t,a){var e=this._getContainerSize(t),i=e.width,n=e.height,l=a.width(),o=a.height();i>l&&a.css({width:i+"px"}),n>o&&a.css({height:n+"px"})},_toggleShadow:function(t){var a=$("#dialog-shadow");return a.hasClass("au-dialog-shadow")?a.is(":hidden")?(this._resizeShadow(t,a),a.show(),t.blur&&$("body").children().not(".au-dialog-shadow,.au-dialog-panel,script,style,link").addClass("au-dialog-blur")):(a.hide(),t.blur&&$("body").children().not(".au-dialog-shadow,.au-dialog-panel,script,style,link").removeClass("au-dialog-blur")):(a=$("<div id='dialog-shadow' class='au-dialog-shadow' style='z-index: "+(zIndex-1)+";'></div>"),a.appendTo("body"),this._resizeShadow(t,a),a.fadeTo(0,.49),t.blur&&$("body").children().not(".au-dialog-shadow,.au-dialog-panel,script,style,link").addClass("au-dialog-blur")),a},_resizeDialog:function(t,a){var e=15,i=a.offset?a.offset.left||0:0,n=a.offset?a.offset.top||0:0,l=$(window).width(),o=($(window).height(),this._getContainerSize(a)),s=o.width,r=o.height,d={};768>l?(d.width=.9,d.height=.9):992>l?(d.width=.92,d.height=.92):1200>l?(d.width=.88,d.height=.88):(d.width=.8,d.height=.68),"string"==typeof a.width&&(d.width=parseFloat(a.width),a.width=null),"string"==typeof a.height&&(d.height=parseFloat(a.height),a.height=null),a.width||(a.width=s*d.width),a.height||(a.height=r*d.height),a.width>s-2*e&&(a.width=s-2*e),a.height>r-2*e&&(a.height=r-2*e);var c=s-a.width-2*e,u=r-a.height-2*e;t.css({width:a.width+2*e+"px",height:a.height+2*e+"px",left:c/2-i+"px",top:u/2-n+"px"});var g=t.find(".au-dialog-close"),h=t.find(".au-dialog-view"),p=h.find(".au-dialog-view-layout"),f=p.find("iframe");g.css({right:"0px",top:"0px",width:"30px",height:"30px"}),h.css({width:a.width+"px",height:a.height+"px",left:e+"px",top:e+"px"}),f.css({width:a.width-16+"px",height:a.height-22+"px"})},_getMaxLevel:function(){var t=0;return $(".au-dialog-panel").each(function(a,e,i){var n=1*$(e).attr("level");t=Math.max(t,n)}),t},_getDialogElementByLevel:function(t){return null==t&&(t=this._getMaxLevel()),$("#window-"+t)},_toggleDialog:function(t){var a=t.level;null==a&&(a=this._getMaxLevel());var e=this;t.model||this._toggleShadow(t);var i=$("#window-"+a),n=i.attr("initial");if(i.hasClass("au-dialog-panel")&&"true"==n){var l=i.find(".au-dialog-view-layout");i.is(":hidden")?(t.destory&&(l.empty(),this._initDomInDialog(l,t)),t.render&&t.render.call(e,i,l,t),this._resizeDialog(i,t),i.show(400,"swing",function(){t.show&&t.show.call(e,i,l,t)})):(i.find("em[role='scroll-top']").hide(),t.beforeClose&&t.beforeClose.call(e,i,l,t),i.hide(400,"swing",function(){t.close&&t.close.call(e,i,l,t)}))}else{var o=null,s=null,l=null,r=null;"false"!=n?(i=$("<div id='window-"+a+"' level='"+a+"' class='au-dialog-panel' style='z-index : "+(zIndex+10*a)+";' initial='true'></div>"),o=$("<div class='au-dialog-close' style='z-index : "+(zIndex+10*a+9)+";'></div>"),s=$("<div class='au-dialog-view' style='z-index : "+(zIndex+10*a+1)+";'></div>"),l=$("<div class='au-dialog-view-layout'></div>"),r=$("<em class='au-dialog-scroll-top' role='scroll-top' style='z-index : "+(zIndex+10*a+9)+";'><i class='glyphicon '></i></em>"),i.appendTo(t.container),i.append(s),s.append(l),i.append(o),i.append(r)):(o=i.find(".au-dialog-close"),s=i.find(".au-dialog-view"),l=i.find(".au-dialog-view-layout"),r=i.find(".au-dialog-scroll-top"),i.attr("initial","true"),i.appendTo(t.container),i.show()),t.destory&&this._initDomInDialog(l,t),t.render&&t.render.call(e,i,l,t),s.mCustomScrollbar({theme:"minimal-dark",callbacks:{whileScrolling:function(){var t=this.mcs.draggerTop;8>=t?r.hide():r.fadeTo("slow",.5)}}}),r.click(function(){s.mCustomScrollbar("scrollTo",0)}),this._resizeDialog(i,t),o.click(function(){e._toggleDialog(t)}),t.show&&t.show.call(e,i,l,t)}return this}}}();$.fn.licoDialog=function(t){return this==$?(t=$.extend({},licoDialog.defaults,t||{}),"string"==typeof t.container&&(t.container=$(t.container))):t=$.extend({},licoDialog.defaults,{container:this},t||{}),function(){return licoDialog._toggleDialog.apply(licoDialog,arguments)}(t)},$.fn.licoDialog.isMasking=function(){var t=!1;return $(".au-dialog-panel").each(function(){return $(this).is(":hidden")?void 0:(t=!0,!1)}),t},$.licoDialog=$.fn.licoDialog}}(jQuery);