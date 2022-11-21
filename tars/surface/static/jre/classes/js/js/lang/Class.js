!function(){var e=!!Object.defineProperties,t=function(){var t=function(t,n,i,r,a){a=a||{};var s=!!a.writable,o=!!a.enumerable,l=!!a.configurable;if("[object Array]"!==Object.prototype.toString.apply(t))for(var u in n)n.hasOwnProperty(u)&&(i?(t[i]||(t[i]={}),e?Object.defineProperty(t[i],u,{value:r?n[u][r]:n[u],writable:s,enumerable:o,configurable:l}):t[i][u]=r?n[u][r]:n[u]):e?Object.defineProperty(t,u,{value:r?n[u]?n[u][r]:null:n[u],writable:s,enumerable:o,configurable:l}):t[u]=r?n[u]?n[u][r]:null:n[u]);else for(var c=0,f=t.length;c<f;c++)for(var g in n)n.hasOwnProperty(g)&&(t[c]||(t[c]={}),i?(t[c][i]||(t[c][i]={}),e?Object.defineProperty(t[c][i],g,{value:r?n[g][r]:n[g],writable:s,enumerable:o,configurable:l}):t[c][i][g]=r?n[g][r]:n[g]):e?Object.defineProperty(t[c],g,{value:r?n[g]?n[g][r]:null:n[g],writable:s,enumerable:o,configurable:l}):t[c][g]=r?n[g]?n[g][r]:null:n[g])};return function(e,n,i,r,a){if(null===e||null===n||void 0===e||void 0===n||"number"==typeof e||"number"==typeof n||"string"==typeof e||"string"==typeof n||"boolean"==typeof e||"boolean"==typeof n)return e;if("[object Array]"!==Object.prototype.toString.apply(n))t(e,n,i,r,a);else for(var s=0,o=n.length;s<o;s++)t(e,n[s],i,r,a);return e}}();e?Object.defineProperties(Object,{extend:{value:t,writable:!1,enumerable:!1,configurable:!1},USEECMA:{value:e,writable:!1,enumerable:!1,configurable:!1}}):(Object.extend=t,Object.USEECMA=e)}(),Object.extend(Object,function(){return{isNull:function(e){return null===e||void 0===e},isEmpty:function(e){return null===e||void 0===e||Object.isArray(e)&&!e.length||Object.isString(e)&&!(e.trim?e.trim():e.replace(/^\s+|\s+$/g,""))},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},isDate:function(e){return"[object Date]"===Object.prototype.toString.apply(e)},isObject:function(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.apply(e)},isNumber:function(e){return"number"==typeof e&&isFinite(e)},isString:function(e){return"string"==typeof e},isBoolean:function(e){return"boolean"==typeof e},isDefined:function(e){return"undefined"!=typeof e},isInstanceof:function(e,t){return e instanceof t},each:function(e,t,n){return Object.enumerate(e,t,n,!1)},enumerate:function(e,t,n,i){if(!(Object.isEmpty(e)||Object.isNumber(e)||Object.isString(e)||Object.isBoolean(e))){if(Object.isArray(e)){for(var r=0,a=e.length;r<a;r++)if(t.call(n||e[r],r,e[r],e)===!1)return r}else for(var s in e)if((i||e.hasOwnProperty(s))&&t.call(n||e[s],s,e[s],e)===!1)return s;return!0}}}}(),null,null,{writable:!1,enumerable:!1,configurable:!1}),function(){var e=function(e,t,n){if(Object.isEmpty(e))return null;for(var i=e.split("."),r=i.length,a=window,s=0;s<r-1;s++)a[i[s]]||(a[i[s]]={}),a=a[i[s]];return t.call(n,i[s],a)},t=function(){var e=/(\s+$|^\s+)/g,t=/\s*([,(=])\s*/g,n=/\s*[)]\s*/g,i=/\s{2,}/g;return function(r){return r.replace(e,"").replace(t,"$1").replace(n,") ").replace(i," ")}}(),n={CLASS:"class",INTERFACE:"interface",CONSTRUCTOR:"constructor",FIELD:"field",METHOD:"method",UNKNOWN:"unknown"},i=function(e,t,n,i,r){this._name=e,this._value=t,this._declaringClass=n,this._modifiers=i,this._annotations=r};i.prototype={getName:function(){return this._name},setName:function(e){this._name=e},getValue:function(){return this._value},setValue:function(e){this._value=e},getDeclaringClass:function(){return this._declaringClass},setDeclaringClass:function(e){this._declaringClass=e},getModifiers:function(){return this._modifiers},setModifiers:function(e){this._modifiers=e},getAnnotations:function(){return this._annotations},setAnnotations:function(e){this._annotations=e}};var r=function(e,i){e=t(e);var r=null,s=null,o=null,l=null,u=null,c=null;if(i)c=e.lastIndexOf(" "),r=c===-1?"":e.substring(0,c+1),o=e.substring(c+1),s=o==i.belongsTo?n.CONSTRUCTOR:Object.isFunction(i.value)?n.METHOD:n.FIELD;else{var f=e.indexOf("class "),g=e.indexOf("interface ");c=null,f!=-1?(c=f,s=n.CLASS):(c=g,s=n.INTERFACE),r=e.substring(0,c);var b=e.substring(c).split(" "),d=b.length;o=b[1],d>=4&&("extends"===b[2]?l=b[3]:(l="Object",u=b[3].split(",")),d>=6&&(u=b[5].split(",")))}var h=/@\S*/g,p=r.indexOf("abstract ")!=-1,O=r.indexOf("interface ")!=-1,m=r.indexOf("final ")!=-1,j=r.indexOf("static ")!=-1,y=r.indexOf("protected ")!=-1,C=r.indexOf("private ")!=-1,v=r.indexOf("default ")!=-1,w=r.indexOf("public ")!=-1||!C&&!v&&!y,E=r.indexOf("non-writable ")!=-1,S=r.indexOf("non-enumerable ")!=-1,M=r.indexOf("non-configurable ")!=-1,x=r.indexOf("non-proxy ")!=-1,N=(!E&&r.indexOf("writable ")!=-1,!S&&r.indexOf("enumerable ")!=-1),B=!M&&r.indexOf("configurable ")!=-1,A=!x&&r.indexOf("proxy ")!=-1,F=0;switch(p&&(F+=a.abstractBit),O&&(F+=a.interfaceBit),m&&(F+=a.finalBit),j&&(F+=a.staticBit),y&&(F+=a.protectedBit),C&&(F+=a.privateBit),w&&(F+=a.publicBit),s){case n.CONSTRUCTOR:F+=a.publicBit,F+=a.proxyBit;break;case n.METHOD:A&&(F+=a.proxyBit),m||E||(F+=a.writableBit),m||S||!N||(F+=a.enumerableBit),m||M||!B||(F+=a.configurableBit);break;case n.FIELD:m||E||(F+=a.writableBit),m||S||(F+=a.enumerableBit),m||M||!B||(F+=a.configurableBit)}return{annotations:e.match(h)||[],modifiers:F,feature:s||n.UNKNOWN,name:o,extend:l||"Object",implement:u}},a=function(){};Object.extend(a,function(){return{abstractBit:1024,interfaceBit:512,writableBit:256,enumerableBit:128,configurableBit:64,proxyBit:32,finalBit:16,staticBit:8,protectedBit:4,privateBit:2,publicBit:1,isProxy:function(e){return 0!==(e&a.proxyBit)},isWritable:function(e){return 0!==(e&a.writableBit)},isEnumerable:function(e){return 0!==(e&a.enumerableBit)},isConfigurable:function(e){return 0!==(e&a.configurableBit)},isAbstract:function(e){return 0!==(e&a.abstractBit)},isInterface:function(e){return 0!==(e&a.interfaceBit)},isFinal:function(e){return 0!==(e&a.finalBit)},isStatic:function(e){return 0!==(e&a.staticBit)},isProtected:function(e){return 0!==(e&a.protectedBit)},isPrivate:function(e){return 0!==(e&a.privateBit)},isPublic:function(e){return 0!==(e&a.publicBit)}}}(),null,null,{writable:!1,enumerable:!1,configurable:!1});var s=function(e,t,n,i){var r=e.getValue(),s=e.getModifiers(),o=a.isStatic(s),l=a.isProxy(s);return Object.isEmpty(t)&&Object.isEmpty(n)&&Object.isEmpty(i)&&!l?r:function(){var e=this.getClass(),a=e.getSuperClass(),s=o?e.getClassConstructor():this;s.$super=a?o?a.getClassConstructor():a.getClassConstructor().prototype:null,!Object.isEmpty(t)&&Object.isFunction(t)&&t.apply(s,arguments);var l=null;try{l=!Object.isEmpty(r)&&Object.isFunction(r)?r.apply(s,arguments):r}catch(u){if(Object.isEmpty(n))throw u;Object.isFunction(n)&&n.apply(s,arguments)}return!Object.isEmpty(i)&&Object.isFunction(i)&&i.apply(s,arguments),l}},o=function(e,t){if(Object.isFunction(t.getValue()));else if(t.getName()&&t.getName().length>1&&"_"!=t.getName().length){var n=0===t.getName().indexOf("_")?t.getName().substring(1):t.getName();n=n.charAt(0).toUpperCase()+n.substring(1);var r=t.getModifiers();if(t.getAnnotations().indexOf("@Getter")!=-1){var a="get"+n;e.hasMethod(a)||e.addMethod(new i(a,function(){return this[t.getName()]},e,r,[]))}if(t.getAnnotations().indexOf("@Setter")!=-1){var s="set"+n;e.hasMethod(s)||e.addMethod(new i(s,function(e){this[t.getName()]=e},e,r,[]))}}},l=function(){},u=function(){this.heap=[]};u.prototype={find:function(e){for(var t=0,n=this.heap.length;t<n;t++)if(this.heap[t].key===e)return this.heap[t].value||null},get:function(e,t,n){var i=this.find(e);if(Object.isDefined(i)){var r=i[t];if(n){if(r)for(var a=0,s=r.length;a<s;a++)if(r[a].getName()===n)return r[a]||null;return}return r}throw new Error("illegal code heap states.")},set:function(e,t,n){var i=this.find(e);i&&(Object.isArray(t)?Object.each(t,function(e,t,r){i[t]=n}):i[t]=n)},create:function(e,t,n,i,r,a,s,o,l,u,c,f,g,b,d){if(this.find(e))throw new Error("class or interface <"+n+"> have already loaded!");this.heap.push({key:e,value:{name:t,fullName:n,alias:i,packages:r,feature:a,modifiers:s,annotations:o,fields:l||[],methods:u||[],superClass:c,superInterfaces:f||[],classloader:g,instanceClass:b||function(){},instance:d,classConstructor:d}})}};var c=new u,f=function(t,o){var u=r(t.name),f=u.name,g=t.alias,b=null,d=!1,h=!0,p=u.extend,O=u.implement,m=this,j=null;switch(c.create(this,null,f,g,b,u.feature,u.modifiers,u.annotations,null,null,null,null,o,null,null),f){case"Object":d=!0,j=Object;break;case"Function":j=Function;break;case"Array":j=Array;break;case"String":j=String;break;case"Boolean":j=Boolean;break;case"Number":j=Number;break;case"Date":j=Date;break;case"RegExp":j=RegExp;break;case"Error":j=Error;break;case"EvalError":j=EvalError;break;case"RangeError":j=RangeError;break;case"ReferenceError":j=ReferenceError;break;case"SyntaxError":j=SyntaxError;break;case"TypeError":j=TypeError;break;case"URIError":j=URIError;break;default:h=!1,j=function(){Object.USEECMA?Object.defineProperty(this,"$class",{value:m,writable:!1,enumerable:!1,configurable:!1}):this.$class=m;for(var e=function(e,t,n){var i=t.getName();if(!m.hasField(i)){var r=t.getValue(),s=t.getModifiers();r=r?r.clone():r,Object.USEECMA?Object.defineProperty(this,i,{value:r,writable:a.isWritable(s),enumerable:a.isEnumerable(s),configurable:a.isConfigurable(s)}):this[i]=r}},t=m.getSuperClass(),n=[];t;)n.unshift(t),t=t.getSuperClass();Object.each(n,function(t,n,i){var r=n.getFields();Object.each(r,e,this)},this),Object.each(m.getFields(),function(e,t,n){var i=t.getName(),r=t.getValue(),s=t.getModifiers();r=r?r.clone():r,Object.USEECMA?Object.defineProperty(this,i,{value:r,writable:a.isWritable(s),enumerable:a.isEnumerable(s),configurable:a.isConfigurable(s)}):this[i]=r},this);var i=m.getConstructor();i&&i.apply(this,arguments);var r=m.getInitial();(r=r||this.initial||l).apply(this,arguments),Object.USEECMA||this.$class==m||(this.$class=m)}}c.set(this,["classConstructor","instance"],j);var y=e(f,function(e,t){return t[e]=j,Object.USEECMA?Object.defineProperty(t[e],"$class",{value:this,writable:!1,enumerable:!1,configurable:!1}):t[e].$class=this,b=t,e},this);if(c.set(this,"packages",b),c.set(this,"name",y),!d){if(O)for(var C=O.length,v=c.get(this,"superInterfaces"),w=0;w<C;w++)v[w]=e(O[w],function(e,t){return t[e]}).$class;var E=e(p,function(e,t){return t[e]}).$class;if(c.set(this,"superClass",E),!h){var S=c.get(this,"instanceClass");if(S.prototype=(E?c.get(E,"instance"):Object).prototype,Object.USEECMA?(j.prototype=Object.create(S.prototype),Object.defineProperty(j.prototype,"constructor",{value:j,writable:!1,enumerable:!1,configurable:!1})):(j.prototype=new S,j.prototype.constructor=j),E==Object.$class)if(Object.USEECMA){var M=Object.$class.getMethod("toString"),x=M.getModifiers();Object.defineProperty(j.prototype,"toString",{value:M.getValue(),writable:a.isWritable(x),enumerable:a.isEnumerable(x),configurable:a.isConfigurable(x)})}else j.prototype.toString=Object.$class.getMethod("toString").getValue()}}return Object.each(t,function(e,t,a){if("name"!=e&&"alias"!=e){var o=r(e,{belongsTo:y,value:t}),l=o.feature;switch(o=new i(o.name,t,this,o.modifiers,o.annotations),l){case n.CONSTRUCTOR:"Object"===y?c.set(this,"constructor2",o.getValue()):c.set(this,"constructor2",s(o,this.getSuperClass().getConstructor()));break;case n.METHOD:if(h&&"toString"===o.getName())return this.getMethods().push(o),!0;this.addMethod(o);break;case n.FIELD:this.addField(o);break;default:this.addField(o)}}},this),c.get(this,"constructor2")||c.set(this,"constructor2",s(new i(y,l,this,1,[]),this.getSuperClass().getConstructor())),e(g,function(e,t){t[e]=j},this),this};f.prototype={getClassLoader:function(){return c.get(this,"classloader")||(window.js.lang.ClassLoader?js.lang.ClassLoader.getSystemClassLoader():null)},getClassConstructor:function(){return c.get(this,"classConstructor")},getConstructor:function(){return c.get(this,"constructor2")},getInitial:function(){return c.get(this,"initial")},getPackage:function(){return c.get(this,"packages")},getDeclaredField:function(e){return this.getField(e)},getDeclaredFields:function(){return this.getFields()},hasField:function(e){return Object.isDefined(c.get(this,"fields",e))},getField:function(e){var t=c.get(this,"fields",e);if(Object.isDefined(t))return t;throw new js.lang.NoSuchFieldException},getFields:function(){return c.get(this,"fields")},getDeclaredMethod:function(e){return this.getMethod(e)},getDeclaredMethods:function(){return this.getMethods()},hasMethod:function(e){return Object.isDefined(c.get(this,"methods",e))},getMethod:function(e){var t=c.get(this,"methods",e);if(Object.isDefined(t))return t;throw new js.lang.NoSuchMethodException},getMethods:function(){return c.get(this,"methods")},getName:function(){return c.get(this,"name")},getFullName:function(){return c.get(this,"fullName")},getSuperClass:function(){return c.get(this,"superClass")},getModifiers:function(){return c.get(this,"modifiers")},getAnnotations:function(){return c.get(this,"annotations")},addMethod:function(e){if(!Object.isEmpty(e)&&Object.isFunction(e.getValue())){e.getAnnotations()&&e.getAnnotations().length&&o(this,e);var t=e.getName(),n=c.get(this,"name");if(t===n)return;e.setValue(s(e)),e.setDeclaringClass(this),window.js&&window.js.lang&&window.js.lang.reflect&&window.js.lang.reflect.Method&&window.js.lang.reflect.Method.loaded&&(e=new window.js.lang.reflect.Method(t,e.getValue(),this,e.getModifiers(),e.getAnnotations()));var i=e.getModifiers(),r=a.isStatic(i);r?Object.USEECMA?Object.defineProperty(this.getClassConstructor(),t,{value:e.getValue(),writable:a.isWritable(i),enumerable:a.isEnumerable(i),configurable:a.isConfigurable(i)}):this.getClassConstructor()[t]=e.getValue():Object.USEECMA?Object.defineProperty(this.getClassConstructor().prototype,t,{value:e.getValue(),writable:a.isWritable(i),enumerable:a.isEnumerable(i),configurable:a.isConfigurable(i)}):this.getClassConstructor().prototype[t]=e.getValue(),this.getMethods().push(e),"initial"===t&&c.set(this,"initial",e.getValue())}},addField:function(e){if(!Object.isEmpty(e)&&!Object.isFunction(e.getValue())){e.getAnnotations()&&e.getAnnotations().length&&o(this,e),e.setDeclaringClass(this),window.js&&window.js.lang&&window.js.lang.reflect&&window.js.lang.reflect.Field&&window.js.lang.reflect.Field.loaded&&(e=new window.js.lang.reflect.Field(e.getName(),e.getValue(),this,e.getModifiers(),e.getAnnotations()));var t=e.getModifiers(),n=a.isStatic(t);n&&(Object.USEECMA?Object.defineProperty(this.getClassConstructor(),e.getName(),{value:e.getValue(),writable:a.isWritable(t),enumerable:a.isEnumerable(t),configurable:a.isConfigurable(t)}):this.getClassConstructor()[e.getName()]=e.getValue()),this.getFields().push(e)}},getInstance:function(){return c.get(this,"instance")},isInstance:function(e){return!Object.isNull(e)&&e.getClass()==this},newInstance:function(){return new(c.get(this,"classConstructor"))},clone:function(){return this},isAssignableFrom:function(){return!1},isInterface:function(){return"interface"===c.get(this,"feature")},isArray:function(){return!1},isPrimitive:function(){return!1},isAnnotation:function(){return!1}},Class=function(){},Class.forName=function(e,t){return new f(e,t)}}();