$import("js.util.List","BootstrapClassLoader"),$import("js.lang.IndexOutOfBoundsException","BootstrapClassLoader"),Class.forName({name:"class js.util.ArrayList extends js.util.List","private _table":[],add:function(){var t=null,e=null;arguments.length>=2&&!Object.isEmpty(arguments[0])&&Object.isNumber(arguments[0])?(t=arguments[0],e=arguments[1]):arguments.length>0&&(e=arguments[0],t=this.size()),t!=this.size()&&this.rangeCheck(t),this._table.splice(t,0,e)},subList:function(t,e){return this._table.slice(t,e)},set:function(t,e){this.rangeCheck(t);var s=this._table[t];return this._table[t]=e,s},get:function(t){return this.rangeCheck(t),this._table[t]},removeAt:function(t){return this._table.splice(t,1)[0]},size:function(){return this._table.length}});