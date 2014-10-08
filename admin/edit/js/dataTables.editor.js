/*!
 DataTables Editor v1.3.1

 ©2012-2014 SpryMedia Ltd, all rights reserved.
 License: editor.datatables.net/license
*/
(function(q,r,m){var v=function(d,t){function u(a){a=a.context[0];return a.oInit.editor||a._editor}function w(a,b,c,d){b||(b={});b.buttons===m&&(b.buttons="_basic");b.title===m&&(b.title=a.i18n[c].title);b.message===m&&("remove"===c?(a=a.i18n[c].confirm,b.message=1!==d?a._.replace(/%d/,d):a["1"]):b.message="");return b}if(!t||!t.versionCheck("1.10"))throw"Editor requires DataTables 1.10 or newer";var e=function(a){!this instanceof e&&alert("DataTables Editor must be initialised as a 'new' instance'");
this._constructor(a)};t.Editor=e;d.fn.DataTable.Editor=e;var n=function(a,b){b===m&&(b=r);return d('*[data-dte-e="'+a+'"]',b)},v=0;e.Field=function(a,b,c){var k=this,a=d.extend(!0,{},e.Field.defaults,a);this.s=d.extend({},e.Field.settings,{type:e.fieldTypes[a.type],name:a.name,classes:b,host:c,opts:a});a.id||(a.id="DTE_Field_"+a.name);a.dataProp&&(a.data=a.dataProp);a.data||(a.data=a.name);var h=t.ext.oApi;this.valFromData=function(b){return h._fnGetObjectDataFn(a.data)(b,"editor")};this.valToData=
h._fnSetObjectDataFn(a.data);b=d('<div class="'+b.wrapper+" "+b.typePrefix+a.type+" "+b.namePrefix+a.name+" "+a.className+'"><label data-dte-e="label" class="'+b.label+'" for="'+a.id+'">'+a.label+'<div data-dte-e="msg-label" class="'+b["msg-label"]+'">'+a.labelInfo+'</div></label><div data-dte-e="input" class="'+b.input+'"><div data-dte-e="msg-error" class="'+b["msg-error"]+'"></div><div data-dte-e="msg-message" class="'+b["msg-message"]+'"></div><div data-dte-e="msg-info" class="'+b["msg-info"]+
'">'+a.fieldInfo+"</div></div></div>");c=this._typeFn("create",a);null!==c?n("input",b).prepend(c):b.css("display","none");this.dom=d.extend(!0,{},e.Field.models.dom,{container:b,label:n("label",b),fieldInfo:n("msg-info",b),labelInfo:n("msg-label",b),fieldError:n("msg-error",b),fieldMessage:n("msg-message",b)});d.each(this.s.type,function(a,b){typeof b==="function"&&k[a]===m&&(k[a]=function(){var b=Array.prototype.slice.call(arguments);b.unshift(a);b=k._typeFn.apply(k,b);return b===m?k:b})})};e.Field.prototype=
{dataSrc:function(){return this.s.opts.data},valFromData:null,valToData:null,destroy:function(){this.dom.container.remove();this._typeFn("destroy");return this},def:function(a){var b=this.s.opts;if(a===m)return a=b["default"]!==m?b["default"]:b.def,d.isFunction(a)?a():a;b.def=a;return this},disable:function(){this._typeFn("disable");return this},enable:function(){this._typeFn("enable");return this},error:function(a,b){var c=this.s.classes;a?this.dom.container.addClass(c.error):this.dom.container.removeClass(c.error);
return this._msg(this.dom.fieldError,a,b)},inError:function(){return this.dom.container.hasClass(this.s.classes.error)},focus:function(){this.s.type.focus?this._typeFn("focus"):d("input, select, textarea",this.dom.container).focus();return this},get:function(){var a=this._typeFn("get");return a!==m?a:this.def()},hide:function(a){var b=this.dom.container;a===m&&(a=!0);b.is(":visible")&&a?b.slideUp():b.css("display","none");return this},label:function(a){var b=this.dom.label;if(!a)return b.html();b.html(a);
return this},message:function(a,b){return this._msg(this.dom.fieldMessage,a,b)},name:function(){return this.s.opts.name},node:function(){return this.dom.container[0]},set:function(a){return this._typeFn("set",a)},show:function(a){var b=this.dom.container;a===m&&(a=!0);!b.is(":visible")&&a?b.slideDown():b.css("display","block");return this},val:function(a){return a===m?this.get():this.set(a)},_errorNode:function(){return this.dom.fieldError},_msg:function(a,b,c){a.parent().is(":visible")?(a.html(b),
b?a.slideDown(c):a.slideUp(c)):(a.html(b||"").css("display",b?"block":"none"),c&&c());return this},_typeFn:function(a){var b=Array.prototype.slice.call(arguments);b.shift();b.unshift(this.s.opts);var c=this.s.type[a];if(c)return c.apply(this.s.host,b)}};e.Field.models={};e.Field.defaults={className:"",data:"",def:"",fieldInfo:"",id:"",label:"",labelInfo:"",name:null,type:"text"};e.Field.models.settings={type:null,name:null,classes:null,opts:null,host:null};e.Field.models.dom={container:null,label:null,
labelInfo:null,fieldInfo:null,fieldError:null,fieldMessage:null};e.models={};e.models.displayController={init:function(){},open:function(){},close:function(){}};e.models.fieldType={create:function(){},get:function(){},set:function(){},enable:function(){},disable:function(){}};e.models.settings={ajaxUrl:null,ajax:null,dataSource:null,domTable:null,opts:null,displayController:null,fields:{},order:[],id:-1,displayed:!1,processing:!1,modifier:null,action:null,idSrc:null};e.models.button={label:null,fn:null,
className:null};e.models.formOptions={submitOnReturn:!0,submitOnBlur:!1,blurOnBackground:!0,closeOnComplete:!0,focus:0,buttons:!0,title:!0,message:!0};e.display={};var l=jQuery,g;e.display.lightbox=l.extend(!0,{},e.models.displayController,{init:function(){g._init();return g},open:function(a,b,c){if(g._shown)c&&c();else{g._dte=a;a=g._dom.content;a.children().detach();a.append(b).append(g._dom.close);g._shown=true;g._show(c)}},close:function(a,b){if(g._shown){g._dte=a;g._hide(b);g._shown=false}else b&&
b()},_init:function(){if(!g._ready){var a=g._dom;a.content=l("div.DTED_Lightbox_Content",g._dom.wrapper);a.wrapper.css("opacity",0);a.background.css("opacity",0)}},_show:function(a){var b=g._dom;q.orientation!==m&&l("body").addClass("DTED_Lightbox_Mobile");b.content.css("height","auto");b.wrapper.css({top:-g.conf.offsetAni});l("body").append(g._dom.background).append(g._dom.wrapper);g._heightCalc();b.wrapper.animate({opacity:1,top:0},a);b.background.animate({opacity:1});b.close.bind("click.DTED_Lightbox",
function(){g._dte.close()});b.background.bind("click.DTED_Lightbox",function(){g._dte.blur()});l("div.DTED_Lightbox_Content_Wrapper",b.wrapper).bind("click.DTED_Lightbox",function(a){l(a.target).hasClass("DTED_Lightbox_Content_Wrapper")&&g._dte.blur()});l(q).bind("resize.DTED_Lightbox",function(){g._heightCalc()});g._scrollTop=l("body").scrollTop();a=l("body").children().not(b.background).not(b.wrapper);l("body").append('<div class="DTED_Lightbox_Shown"/>');l("div.DTED_Lightbox_Shown").append(a)},
_heightCalc:function(){var a=g._dom,b=l(q).height()-g.conf.windowPadding*2-l("div.DTE_Header",a.wrapper).outerHeight()-l("div.DTE_Footer",a.wrapper).outerHeight();l("div.DTE_Body_Content",a.wrapper).css("maxHeight",l(q).width()>1024?b:"auto")},_hide:function(a){var b=g._dom;a||(a=function(){});var c=l("div.DTED_Lightbox_Shown");c.children().appendTo("body");c.remove();l("body").removeClass("DTED_Lightbox_Mobile").scrollTop(g._scrollTop);b.wrapper.animate({opacity:0,top:g.conf.offsetAni},function(){l(this).detach();
a()});b.background.animate({opacity:0},function(){l(this).detach()});b.close.unbind("click.DTED_Lightbox");b.background.unbind("click.DTED_Lightbox");l("div.DTED_Lightbox_Content_Wrapper",b.wrapper).unbind("click.DTED_Lightbox");l(q).unbind("resize.DTED_Lightbox")},_dte:null,_ready:!1,_shown:!1,_dom:{wrapper:l('<div class="DTED_Lightbox_Wrapper"><div class="DTED_Lightbox_Container"><div class="DTED_Lightbox_Content_Wrapper"><div class="DTED_Lightbox_Content"></div></div></div></div>'),background:l('<div class="DTED_Lightbox_Background"><div/></div>'),
close:l('<div class="DTED_Lightbox_Close"></div>'),content:null}});g=e.display.lightbox;g.conf={offsetAni:25,windowPadding:25};var i=jQuery,f;e.display.envelope=i.extend(!0,{},e.models.displayController,{init:function(a){f._dte=a;f._init();return f},open:function(a,b,c){f._dte=a;i(f._dom.content).children().detach();f._dom.content.appendChild(b);f._dom.content.appendChild(f._dom.close);f._show(c)},close:function(a,b){f._dte=a;f._hide(b)},_init:function(){if(!f._ready){f._dom.content=i("div.DTED_Envelope_Container",
f._dom.wrapper)[0];r.body.appendChild(f._dom.background);r.body.appendChild(f._dom.wrapper);f._dom.background.style.visbility="hidden";f._dom.background.style.display="block";f._cssBackgroundOpacity=i(f._dom.background).css("opacity");f._dom.background.style.display="none";f._dom.background.style.visbility="visible"}},_show:function(a){a||(a=function(){});f._dom.content.style.height="auto";var b=f._dom.wrapper.style;b.opacity=0;b.display="block";var c=f._findAttachRow(),d=f._heightCalc(),h=c.offsetWidth;
b.display="none";b.opacity=1;f._dom.wrapper.style.width=h+"px";f._dom.wrapper.style.marginLeft=-(h/2)+"px";f._dom.wrapper.style.top=i(c).offset().top+c.offsetHeight+"px";f._dom.content.style.top=-1*d-20+"px";f._dom.background.style.opacity=0;f._dom.background.style.display="block";i(f._dom.background).animate({opacity:f._cssBackgroundOpacity},"normal");i(f._dom.wrapper).fadeIn();f.conf.windowScroll?i("html,body").animate({scrollTop:i(c).offset().top+c.offsetHeight-f.conf.windowPadding},function(){i(f._dom.content).animate({top:0},
600,a)}):i(f._dom.content).animate({top:0},600,a);i(f._dom.close).bind("click.DTED_Envelope",function(){f._dte.close()});i(f._dom.background).bind("click.DTED_Envelope",function(){f._dte.blur()});i("div.DTED_Lightbox_Content_Wrapper",f._dom.wrapper).bind("click.DTED_Envelope",function(a){i(a.target).hasClass("DTED_Envelope_Content_Wrapper")&&f._dte.blur()});i(q).bind("resize.DTED_Envelope",function(){f._heightCalc()})},_heightCalc:function(){f.conf.heightCalc?f.conf.heightCalc(f._dom.wrapper):i(f._dom.content).children().height();
var a=i(q).height()-f.conf.windowPadding*2-i("div.DTE_Header",f._dom.wrapper).outerHeight()-i("div.DTE_Footer",f._dom.wrapper).outerHeight();i("div.DTE_Body_Content",f._dom.wrapper).css("maxHeight",a);return i(f._dte.dom.wrapper).outerHeight()},_hide:function(a){a||(a=function(){});i(f._dom.content).animate({top:-(f._dom.content.offsetHeight+50)},600,function(){i([f._dom.wrapper,f._dom.background]).fadeOut("normal",a)});i(f._dom.close).unbind("click.DTED_Lightbox");i(f._dom.background).unbind("click.DTED_Lightbox");
i("div.DTED_Lightbox_Content_Wrapper",f._dom.wrapper).unbind("click.DTED_Lightbox");i(q).unbind("resize.DTED_Lightbox")},_findAttachRow:function(){var a=i(f._dte.s.table).DataTable();return f.conf.attach==="head"?a.table().header():f._dte.s.action==="create"?a.table().header():a.row(f._dte.s.modifier).node()},_dte:null,_ready:!1,_cssBackgroundOpacity:1,_dom:{wrapper:i('<div class="DTED_Envelope_Wrapper"><div class="DTED_Envelope_ShadowLeft"></div><div class="DTED_Envelope_ShadowRight"></div><div class="DTED_Envelope_Container"></div></div>')[0],
background:i('<div class="DTED_Envelope_Background"><div/></div>')[0],close:i('<div class="DTED_Envelope_Close">&times;</div>')[0],content:null}});f=e.display.envelope;f.conf={windowPadding:50,heightCalc:null,attach:"row",windowScroll:!0};e.prototype.add=function(a){if(d.isArray(a))for(var b=0,c=a.length;b<c;b++)this.add(a[b]);else{b=a.name;if(b===m)throw"Error adding field. The field requires a `name` option";if(this.s.fields[b])throw"Error adding field '"+b+"'. A field already exists with this name";
this._dataSource("initField",a);this.s.fields[b]=new e.Field(a,this.classes.field,this);this.s.order.push(b)}return this};e.prototype.blur=function(){this._blur();return this};e.prototype.bubble=function(a,b,c){var k=this,h,p;if(this._killInline(function(){k.bubble(a,b,c)}))return this;d.isPlainObject(b)&&(c=b,b=m);c=d.extend({},this.s.formOptions.bubble,c);b?(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),h=d.map(b,function(a){return k.s.fields[a]}),p=d.map(a,function(){return k._dataSource("individual",
a)})):(d.isArray(a)||(a=[a]),p=d.map(a,function(a){return k._dataSource("individual",a,null,k.s.fields)}),h=d.map(p,function(a){return a.field}));this.s.bubbleNodes=d.map(p,function(a){return a.node});p=d.map(p,function(a){return a.edit}).sort();if(p[0]!==p[p.length-1])throw"Editing is limited to a single row only";this._edit(p[0],"bubble");var e=this._formOptions(c);d(q).on("resize."+e,function(){k.bubblePosition()});if(!this._preopen("bubble"))return this;var f=this.classes.bubble;p=d('<div class="'+
f.wrapper+'"><div class="'+f.liner+'"><div class="'+f.table+'"><div class="'+f.close+'" /></div></div><div class="'+f.pointer+'" /></div>').appendTo("body");f=d('<div class="'+f.bg+'"><div/></div>').appendTo("body");this._displayReorder(h);var g=p.children().eq(0),i=g.children(),j=i.children();g.append(this.dom.formError);i.prepend(this.dom.form);c.message&&g.prepend(this.dom.formInfo);c.title&&g.prepend(this.dom.header);c.buttons&&i.append(this.dom.buttons);var l=d().add(p).add(f);this._closeReg(function(){l.animate({opacity:0},
function(){l.remove();d(q).off("resize."+e)})});f.click(function(){k.blur()});j.click(function(){k._close()});this.bubblePosition();l.animate({opacity:1});this._focus(h,c.focus);this._postopen("bubble");return this};e.prototype.bubblePosition=function(){var a=d("div.DTE_Bubble"),b=d("div.DTE_Bubble_Liner"),c=this.s.bubbleNodes,k=0,h=0,e=0;d.each(c,function(a,b){var c=d(b).offset();k+=c.top;h+=c.left;e+=c.left+b.offsetWidth});var k=k/c.length,h=h/c.length,e=e/c.length,c=k,f=(h+e)/2,g=b.outerWidth(),
i=f-g/2,g=i+g,j=d(q).width();a.css({top:c,left:f});g+15>j?b.css("left",15>i?-(i-15):-(g-j+15)):b.css("left",15>i?-(i-15):0);return this};e.prototype.buttons=function(a){var b=this;"_basic"===a?a=[{label:this.i18n[this.s.action].submit,fn:function(){this.submit()}}]:d.isArray(a)||(a=[a]);d(this.dom.buttons).empty();d.each(a,function(a,k){"string"===typeof k&&(k={label:k,fn:function(){this.submit()}});d("<button/>",{"class":k.className||""}).html(k.label||"").click(function(a){a.preventDefault();k.fn&&
k.fn.call(b)}).appendTo(b.dom.buttons)});return this};e.prototype.clear=function(a){var b=this,c=this.s.fields;if(a)if(d.isArray(a))for(var c=0,k=a.length;c<k;c++)this.clear(a[c]);else c[a].destroy(),delete c[a],a=d.inArray(a,this.s.order),this.s.order.splice(a,1);else d.each(c,function(a){b.clear(a)});return this};e.prototype.close=function(){this._close(!1);return this};e.prototype.create=function(a,b,c,k){var h=this;if(this._killInline(function(){h.create(a,b,c,k)}))return this;var e=this.s.fields,
f=this._crudArgs(a,b,c,k);this.s.action="create";this.s.modifier=null;this.dom.form.style.display="block";this._actionClass();d.each(e,function(a,b){b.set(b.def())});this._event("initCreate");this._assembleMain();this._formOptions(f.opts);f.maybeOpen();return this};e.prototype.disable=function(a){var b=this.s.fields;d.isArray(a)||(a=[a]);d.each(a,function(a,d){b[d].disable()});return this};e.prototype.display=function(a){return a===m?this.s.displayed:this[a?"open":"close"]()};e.prototype.edit=function(a,
b,c,d,h){var e=this;if(this._killInline(function(){e.edit(a,b,c,d,h)}))return this;var f=this._crudArgs(b,c,d,h);this._edit(a,"main");this._assembleMain();this._formOptions(f.opts);f.maybeOpen();return this};e.prototype.enable=function(a){var b=this.s.fields;d.isArray(a)||(a=[a]);d.each(a,function(a,d){b[d].enable()});return this};e.prototype.error=function(a,b){b===m?this._message(this.dom.formError,"fade",a):this.s.fields[a].error(b);return this};e.prototype.field=function(a){return this.s.fields[a]};
e.prototype.fields=function(){return d.map(this.s.fields,function(a,b){return b})};e.prototype.get=function(a){var b=this.s.fields;a||(a=this.fields());if(d.isArray(a)){var c={};d.each(a,function(a,d){c[d]=b[d].get()});return c}return b[a].get()};e.prototype.hide=function(a,b){a?d.isArray(a)||(a=[a]):a=this.fields();var c=this.s.fields;d.each(a,function(a,d){c[d].hide(b)});return this};e.prototype.inline=function(a,b,c){var k=this;d.isPlainObject(b)&&(c=b,b=m);var c=d.extend({},this.s.formOptions.inline,
c),h=this._dataSource("individual",a,b,this.s.fields),e=d(h.node),f=h.field;if(d("div.DTE_Field",e).length||this._killInline(function(){k.inline(a,b,c)}))return this;this._edit(h.edit,"inline");var g=this._formOptions(c);if(!this._preopen("inline"))return this;var i=e.contents().remove();e.append(d('<div class="DTE DTE_Inline"><div class="DTE_Inline_Field"/><div class="DTE_Inline_Buttons"/></div>'));e.find("div.DTE_Inline_Field").append(f.node());c.buttons&&e.find("div.DTE_Inline_Buttons").append(this.dom.buttons);
this._closeReg(function(a){d(r).off("click"+g);if(!a){e.contents().detach();e.append(i)}});d(r).on("click"+g,function(a){d.inArray(e[0],d(a.target).parents().andSelf())===-1&&k.blur()});this._focus([f],c.focus);this._postopen("inline");return this};e.prototype.message=function(a,b){b===m?this._message(this.dom.formInfo,"fade",a):this.s.fields[a].error(b);return this};e.prototype.node=function(a){var b=this.s.fields;a||(a=this.order());return d.isArray(a)?d.map(a,function(a){return b[a].node()}):b[a].node()};
e.prototype.off=function(a,b){d(this).off(this._eventName(a),b);return this};e.prototype.on=function(a,b){d(this).on(this._eventName(a),b);return this};e.prototype.one=function(a,b){d(this).one(this._eventName(a),b);return this};e.prototype.open=function(){var a=this;this._displayReorder();this._closeReg(function(){a.s.displayController.close(a,function(){a._clearDynamicInfo()})});this._preopen("main");this.s.displayController.open(this,this.dom.wrapper);this._focus(d.map(this.s.order,function(b){return a.s.fields[b]}),
this.s.editOpts.focus);this._postopen("main");return this};e.prototype.order=function(a){if(!a)return this.s.order;arguments.length&&!d.isArray(a)&&(a=Array.prototype.slice.call(arguments));if(this.s.order.slice().sort().join("-")!==a.slice().sort().join("-"))throw"All fields, and no additional fields, must be provided for ordering.";d.extend(this.s.order,a);this._displayReorder();return this};e.prototype.remove=function(a,b,c,e,h){var f=this;if(this._killInline(function(){f.remove(a,b,c,e,h)}))return this;
d.isArray(a)||(a=[a]);var g=this._crudArgs(b,c,e,h);this.s.action="remove";this.s.modifier=a;this.dom.form.style.display="none";this._actionClass();this._event("initRemove",[this._dataSource("node",a),this._dataSource("get",a),a]);this._assembleMain();this._formOptions(g.opts);g.maybeOpen();g=this.s.editOpts;null!==g.focus&&d("button",this.dom.buttons).eq(g.focus).focus();return this};e.prototype.set=function(a,b){var c=this.s.fields;if(!d.isPlainObject(a)){var e={};e[a]=b;a=e}d.each(a,function(a,
b){c[a].set(b)});return this};e.prototype.show=function(a,b){a?d.isArray(a)||(a=[a]):a=this.fields();var c=this.s.fields;d.each(a,function(a,d){c[d].show(b)});return this};e.prototype.submit=function(a,b,c,e){var h=this,f=this.s.fields,g=[],i=0,j=!1;if(this.s.processing||!this.s.action)return this;this._processing(!0);var l=function(){g.length!==i||j||(j=!0,h._submit(a,b,c,e))};this.error();d.each(f,function(a,b){b.inError()&&g.push(a)});d.each(g,function(a,b){f[b].error("",function(){i++;l()})});
l();return this};e.prototype.title=function(a){var b=d(this.dom.header).children("div."+this.classes.header.content);if(a===m)return b.html();b.html(a);return this};e.prototype.val=function(a,b){return b===m?this.get(a):this.set(a,b)};var j=t.Api.register;j("editor()",function(){return u(this)});j("row.create()",function(a){var b=u(this);b.create(w(b,a,"create"))});j("row().edit()",function(a){var b=u(this);b.edit(this[0][0],w(b,a,"edit"))});j("row().delete()",function(a){var b=u(this);b.remove(this[0][0],
w(b,a,"remove",1))});j("rows().delete()",function(a){var b=u(this);b.remove(this[0],w(b,a,"remove",this[0].length))});j("cell().edit()",function(a){u(this).inline(this[0][0],a)});j("cells().edit()",function(a){u(this).bubble(this[0],a)});e.prototype._constructor=function(a){a=d.extend(!0,{},e.defaults,a);this.s=d.extend(!0,{},e.models.settings,{table:a.domTable||a.table,dbTable:a.dbTable||null,ajaxUrl:a.ajaxUrl,ajax:a.ajax,idSrc:a.idSrc,dataSource:a.domTable||a.table?e.dataSources.dataTable:e.dataSources.html,
formOptions:a.formOptions});this.classes=d.extend(!0,{},e.classes);this.i18n=a.i18n;var b=this,c=this.classes;this.dom={wrapper:d('<div class="'+c.wrapper+'"><div data-dte-e="processing" class="'+c.processing.indicator+'"></div><div data-dte-e="body" class="'+c.body.wrapper+'"><div data-dte-e="body_content" class="'+c.body.content+'"/></div><div data-dte-e="foot" class="'+c.footer.wrapper+'"><div class="'+c.footer.content+'"/></div></div>')[0],form:d('<form data-dte-e="form" class="'+c.form.tag+'"><div data-dte-e="form_content" class="'+
c.form.content+'"/></form>')[0],formError:d('<div data-dte-e="form_error" class="'+c.form.error+'"/>')[0],formInfo:d('<div data-dte-e="form_info" class="'+c.form.info+'"/>')[0],header:d('<div data-dte-e="head" class="'+c.header.wrapper+'"><div class="'+c.header.content+'"/></div>')[0],buttons:d('<div data-dte-e="form_buttons" class="'+c.form.buttons+'"/>')[0]};if(d.fn.dataTable.TableTools){var k=d.fn.dataTable.TableTools.BUTTONS,h=this.i18n;d.each(["create","edit","remove"],function(a,b){k["editor_"+
b].sButtonText=h[b].button})}d.each(a.events,function(a,c){b.on(a,function(){var a=Array.prototype.slice.call(arguments);a.shift();c.apply(b,a)})});var c=this.dom,f=c.wrapper;c.formContent=n("form_content",c.form)[0];c.footer=n("foot",f)[0];c.body=n("body",f)[0];c.bodyContent=n("body_content",f)[0];c.processing=n("processing",f)[0];a.fields&&this.add(a.fields);d(r).one("init.dt.dte",function(a,c){b.s.table&&c.nTable===d(b.s.table).get(0)&&(c._editor=b)});this.s.displayController=e.display[a.display].init(this);
this._event("initComplete",[])};e.prototype._actionClass=function(){var a=this.classes.actions,b=this.s.action,c=d(this.dom.wrapper);c.removeClass([a.create,a.edit,a.remove].join(" "));"create"===b?c.addClass(a.create):"edit"===b?c.addClass(a.edit):"remove"===b&&c.addClass(a.remove)};e.prototype._ajax=function(a,b,c){var e={type:"POST",dataType:"json",data:null,success:b,error:c},h=this.s.action,f=this.s.ajax||this.s.ajaxUrl,h="edit"===h||"remove"===h?this._dataSource("id",this.s.modifier):null;d.isArray(h)&&
(h=h.join(","));d.isPlainObject(f)&&f.create&&(f=f[this.s.action]);if(d.isFunction(f)){var g=null,e=null;if(this.s.ajaxUrl){var i=this.s.ajaxUrl;i.create&&(g=i[this.s.action]);-1!==g.indexOf(" ")&&(g=g.split(" "),e=g[0],g=g[1]);g=g.replace(/_id_/,h)}f(e,g,a,b,c)}else"string"===typeof f?-1!==f.indexOf(" ")?(g=f.split(" "),e.type=g[0],e.url=g[1]):e.url=f:e=d.extend({},e,f||{}),e.url=e.url.replace(/_id_/,h),e.data&&(e.data(a),b=d.isFunction(e.data)?e.data(a):e.data,a=d.isFunction(e.data)&&b?b:d.extend(!0,
a,b)),e.data=a,d.ajax(e)};e.prototype._assembleMain=function(){var a=this.dom;d(a.wrapper).prepend(a.header);d(a.footer).append(a.formError).append(a.buttons);d(a.bodyContent).append(a.formInfo).append(a.form)};e.prototype._blur=function(){var a=this.s.editOpts;a.blurOnBackground&&!1!==this._event("preBlur")&&(a.submitOnBlur?this.submit():this._close())};e.prototype._clearDynamicInfo=function(){var a=this.classes.field.error,b=this.dom.wrapper;d("div."+a,b).removeClass(a);n("msg-error",b).html("").css("display",
"none");this.error("").message("")};e.prototype._close=function(a){!1!==this._event("preClose")&&(this.s.closeCb&&(this.s.closeCb(a),this.s.closeCb=null),this.s.closeIcb&&(this.s.closeIcb(),this.s.closeIcb=null),this.s.displayed=!1,this._event("close"))};e.prototype._closeReg=function(a){this.s.closeCb=a};e.prototype._crudArgs=function(a,b,c,e){var h=this,f,g,i;d.isPlainObject(a)||("boolean"===typeof a?(i=a,a=b):(f=a,g=b,i=c,a=e));i===m&&(i=!0);f&&h.title(f);g&&h.buttons(g);return{opts:d.extend({},
this.s.formOptions.main,a),maybeOpen:function(){i&&h.open()}}};e.prototype._dataSource=function(a){var b=Array.prototype.slice.call(arguments);b.shift();var c=this.s.dataSource[a];if(c)return c.apply(this,b)};e.prototype._displayReorder=function(a){var b=d(this.dom.formContent),c=this.s.fields,a=a||this.s.order;b.children().detach();d.each(a,function(a,d){b.append(d instanceof e.Field?d.node():c[d].node())})};e.prototype._edit=function(a,b){var c=this.s.fields,e=this._dataSource("get",a,c);this.s.modifier=
a;this.s.action="edit";this.dom.form.style.display="block";this._actionClass();d.each(c,function(a,b){var c=b.valFromData(e);b.set(c!==m?c:b.def())});this._event("initEdit",[this._dataSource("node",a),e,a,b])};e.prototype._event=function(a,b){b||(b=[]);if(d.isArray(a))for(var c=0,e=a.length;c<e;c++)this._event(a[c],b);else return c=d.Event(a),d(this).triggerHandler(c,b),c.result};e.prototype._eventName=function(a){for(var b=a.split(" "),c=0,d=b.length;c<d;c++){var a=b[c],e=a.match(/^on([A-Z])/);e&&
(a=e[1].toLowerCase()+a.substring(3));b[c]=a}return b.join(" ")};e.prototype._focus=function(a,b){"number"===typeof b?a[b].focus():b&&(0===b.indexOf("jq:")?d("div.DTE "+b.replace(/^jq:/,"")).focus():this.s.fields[b].focus())};e.prototype._formOptions=function(a){var b=this,c=v++,e=".dteInline"+c;this.s.editOpts=a;this.s.editCount=c;"string"===typeof a.title&&(this.title(a.title),a.title=!0);"string"===typeof a.message&&(this.message(a.message),a.message=!0);"boolean"!==typeof a.buttons&&(this.buttons(a.buttons),
a.buttons=!0);d(r).on("keyup"+e,function(c){var e=d(r.activeElement),f=e[0].nodeName.toLowerCase(),k=d(e).attr("type"),f=f==="input"&&d.inArray(k,["color","date","datetime","datetime-local","email","month","number","password","range","search","tel","text","time","url","week"])!==-1;if(b.s.displayed&&a.submitOnReturn&&c.keyCode===13&&f){c.preventDefault();b.submit()}else if(c.keyCode===27){c.preventDefault();b._close()}else e.parents(".DTE_Form_Buttons").length&&(c.keyCode===37?e.prev("button").focus():
c.keyCode===39&&e.next("button").focus())});this.s.closeIcb=function(){d(r).off("keyup"+e)};return e};e.prototype._killInline=function(a){return d("div.DTE_Inline").length?(this.off("close.killInline").one("close.killInline",a).blur(),!0):!1};e.prototype._message=function(a,b,c){!c&&this.s.displayed?"slide"===b?d(a).slideUp():d(a).fadeOut():c?this.s.displayed?"slide"===b?d(a).html(c).slideDown():d(a).html(c).fadeIn():(d(a).html(c),a.style.display="block"):a.style.display="none"};e.prototype._postopen=
function(a){d(this.dom.form).off("submit.editor-internal").on("submit.editor-internal",function(a){a.preventDefault()});this._event("open",[a]);return!0};e.prototype._preopen=function(a){if(!1===this._event("preOpen",[a]))return!1;this.s.displayed=a;return!0};e.prototype._processing=function(a){var b=d(this.dom.wrapper),c=this.dom.processing.style,e=this.classes.processing.active;a?(c.display="block",b.addClass(e)):(c.display="none",b.removeClass(e));this.s.processing=a;this._event("processing",[a])};
e.prototype._submit=function(a,b,c,e){var h=this,f=t.ext.oApi._fnSetObjectDataFn,g={},i=this.s.fields,j=this.s.action,l=this.s.editCount,o=this.s.modifier,n={action:this.s.action,data:{}};this.s.dbTable&&(n.table=this.s.dbTable);if("create"===j||"edit"===j)d.each(i,function(a,b){f(b.dataSrc())(n.data,b.get())}),d.extend(!0,g,n.data);if("edit"===j||"remove"===j)n.id=this._dataSource("id",o);c&&c(n);!1===this._event("preSubmit",[n,j])?this._processing(!1):this._ajax(n,function(c){h._event("postSubmit",
[c,n,j]);if(!c.error)c.error="";if(!c.fieldErrors)c.fieldErrors=[];if(c.error||c.fieldErrors.length){h.error(c.error);d.each(c.fieldErrors,function(a,b){var c=i[b.name];c.error(b.status||"Error");if(a===0){d(h.dom.bodyContent,h.s.wrapper).animate({scrollTop:d(c.node()).position().top},500);c.focus()}});b&&b.call(h,c)}else{var s=c.row!==m?c.row:g;h._event("setData",[c,s,j]);if(j==="create"){h.s.idSrc===null&&c.id?s.DT_RowId=c.id:c.id&&f(h.s.idSrc)(s,c.id);h._event("preCreate",[c,s]);h._dataSource("create",
i,s);h._event(["create","postCreate"],[c,s])}else if(j==="edit"){h._event("preEdit",[c,s]);h._dataSource("edit",o,i,s);h._event(["edit","postEdit"],[c,s])}else if(j==="remove"){h._event("preRemove",[c]);h._dataSource("remove",o,i);h._event(["remove","postRemove"],[c])}if(l===h.s.editCount){h.s.action=null;h.s.editOpts.closeOnComplete&&(e===m||e)&&h._close(true)}a&&a.call(h,c);h._event(["submitSuccess","submitComplete"],[c,s])}h._processing(false)},function(a,c,d){h._event("postSubmit",[a,c,d,n]);
h.error(h.i18n.error.system);h._processing(false);b&&b.call(h,a,c,d);h._event(["submitError","submitComplete"],[a,c,d,n])})};e.defaults={table:null,ajaxUrl:null,fields:[],display:"lightbox",ajax:null,idSrc:null,events:{},i18n:{create:{button:"New",title:"Create new entry",submit:"Create"},edit:{button:"Edit",title:"Edit entry",submit:"Update"},remove:{button:"Delete",title:"Delete",submit:"Delete",confirm:{_:"Are you sure you wish to delete %d rows?",1:"Are you sure you wish to delete 1 row?"}},error:{system:"An error has occurred - Please contact the system administrator"}},
formOptions:{bubble:d.extend({},e.models.formOptions,{title:!1,message:!1,buttons:"_basic"}),inline:d.extend({},e.models.formOptions,{buttons:!1}),main:d.extend({},e.models.formOptions)}};var y=function(a,b,c){d.each(b,function(a,b){d('[data-editor-field="'+b.dataSrc()+'"]').html(b.valFromData(c))})},j=e.dataSources={},z=function(a){a=d(a);setTimeout(function(){a.addClass("highlight");setTimeout(function(){a.addClass("noHighlight").removeClass("highlight");setTimeout(function(){a.removeClass("noHighlight")},
550)},500)},20)},A=function(a,b,c){if(d.isArray(b))return d.map(b,function(b){return A(a,b,c)});var e=t.ext.oApi,b=d(a).DataTable().row(b);return null===c?b.node().id:e._fnGetObjectDataFn(c)(b.data())};j.dataTable={id:function(a){return A(this.s.table,a,this.s.idSrc)},get:function(a){var b=d(this.s.table).DataTable().rows(a).data().toArray();return d.isArray(a)?b:b[0]},node:function(a){var b=d(this.s.table).DataTable().rows(a).nodes().toArray();return d.isArray(a)?b:b[0]},individual:function(a,b,
c){var e=d(this.s.table).DataTable(),a=e.cell(a),f=a.index(),g;if(c&&(g=b?c[b]:c[e.settings()[0].aoColumns[f.column].mData],!g))throw"Unable to automatically determine field from source. Please specify the field name";return{node:a.node(),edit:f.row,field:g}},create:function(a,b){var c=d(this.s.table).DataTable();if(c.settings()[0].oFeatures.bServerSide)c.draw();else if(null!==b){var e=c.row.add(b);c.draw();z(e.node())}},edit:function(a,b,c){b=d(this.s.table).DataTable();b.settings()[0].oFeatures.bServerSide?
b.draw(!1):(a=b.row(a),null===c?a.remove().draw(!1):(a.data(c).draw(!1),z(a.node())))},remove:function(a){var b=d(this.s.table).DataTable();b.settings()[0].oFeatures.bServerSide?b.draw():b.rows(a).remove().draw()}};j.html={id:function(a){return a},initField:function(a){var b=d('[data-editor-label="'+(a.data||a.name)+'"]');!a.label&&b.length&&(a.label=b.html())},get:function(a,b){var c={};d.each(b,function(a,b){var e=d('[data-editor-field="'+b.dataSrc()+'"]').html();b.valToData(c,e)});return c},node:function(){return r},
individual:function(a,b,c){"string"===typeof a?(b=a,d('[data-editor-field="'+b+'"]')):b=d(a).attr("data-editor-field");a=d('[data-editor-field="'+b+'"]');return{node:a[0],edit:a.parents("[data-editor-id]").data("editor-id"),field:c?c[b]:null}},create:function(a,b){y(null,a,b)},edit:function(a,b,c){y(a,b,c)}};j.js={id:function(a){return a},get:function(a,b){var c={};d.each(b,function(a,b){b.valToData(c,b.val())});return c},node:function(){return r}};e.classes={wrapper:"DTE",processing:{indicator:"DTE_Processing_Indicator",
active:"DTE_Processing"},header:{wrapper:"DTE_Header",content:"DTE_Header_Content"},body:{wrapper:"DTE_Body",content:"DTE_Body_Content"},footer:{wrapper:"DTE_Footer",content:"DTE_Footer_Content"},form:{wrapper:"DTE_Form",content:"DTE_Form_Content",tag:"",info:"DTE_Form_Info",error:"DTE_Form_Error",buttons:"DTE_Form_Buttons"},field:{wrapper:"DTE_Field",typePrefix:"DTE_Field_Type_",namePrefix:"DTE_Field_Name_",label:"DTE_Label",input:"DTE_Field_Input",error:"DTE_Field_StateError","msg-label":"DTE_Label_Info",
"msg-error":"DTE_Field_Error","msg-message":"DTE_Field_Message","msg-info":"DTE_Field_Info"},actions:{create:"DTE_Action_Create",edit:"DTE_Action_Edit",remove:"DTE_Action_Remove"},bubble:{wrapper:"DTE DTE_Bubble",liner:"DTE_Bubble_Liner",table:"DTE_Bubble_Table",close:"DTE_Bubble_Close",pointer:"DTE_Bubble_Triangle",bg:"DTE_Bubble_Background"}};d.fn.dataTable.TableTools&&(j=d.fn.dataTable.TableTools.BUTTONS,j.editor_create=d.extend(!0,j.text,{sButtonText:null,editor:null,formTitle:null,formButtons:[{label:null,
fn:function(){this.submit()}}],fnClick:function(a,b){var c=b.editor,d=c.i18n.create,e=b.formButtons;if(!e[0].label)e[0].label=d.submit;c.title(d.title).buttons(e).create()}}),j.editor_edit=d.extend(!0,j.select_single,{sButtonText:null,editor:null,formTitle:null,formButtons:[{label:null,fn:function(){this.submit()}}],fnClick:function(a,b){var c=this.fnGetSelected();if(c.length===1){var d=b.editor,e=d.i18n.edit,f=b.formButtons;if(!f[0].label)f[0].label=e.submit;d.title(e.title).buttons(f).edit(c[0])}}}),
j.editor_remove=d.extend(!0,j.select,{sButtonText:null,editor:null,formTitle:null,formButtons:[{label:null,fn:function(){var a=this;this.submit(function(){d.fn.dataTable.TableTools.fnGetInstance(d(a.s.table).DataTable().table().node()).fnSelectNone()})}}],question:null,fnClick:function(a,b){var c=this.fnGetSelected();if(c.length!==0){var d=b.editor,e=d.i18n.remove,f=b.formButtons,g=e.confirm==="string"?e.confirm:e.confirm[c.length]?e.confirm[c.length]:e.confirm._;if(!f[0].label)f[0].label=e.submit;
d.message(g.replace(/%d/g,c.length)).title(e.title).buttons(f).remove(c)}}}));e.fieldTypes={};var x=function(a,b){if(d.isArray(a))for(var c=0,e=a.length;c<e;c++){var f=a[c];d.isPlainObject(f)?b(f.value===m?f.label:f.value,f.label,c):b(f,f,c)}else{c=0;d.each(a,function(a,d){b(d,a,c);c++})}},o=e.fieldTypes,j=d.extend(!0,{},e.models.fieldType,{get:function(a){return a._input.val()},set:function(a,b){a._input.val(b).trigger("change")},enable:function(a){a._input.prop("disabled",false)},disable:function(a){a._input.prop("disabled",
true)}});o.hidden=d.extend(!0,{},j,{create:function(a){a._val=a.value;return null},get:function(a){return a._val},set:function(a,b){a._val=b}});o.readonly=d.extend(!0,{},j,{create:function(a){a._input=d("<input/>").attr(d.extend({id:a.id,type:"text",readonly:"readonly"},a.attr||{}));return a._input[0]}});o.text=d.extend(!0,{},j,{create:function(a){a._input=d("<input/>").attr(d.extend({id:a.id,type:"text"},a.attr||{}));return a._input[0]}});o.password=d.extend(!0,{},j,{create:function(a){a._input=
d("<input/>").attr(d.extend({id:a.id,type:"password"},a.attr||{}));return a._input[0]}});o.textarea=d.extend(!0,{},j,{create:function(a){a._input=d("<textarea/>").attr(d.extend({id:a.id},a.attr||{}));return a._input[0]}});o.select=d.extend(!0,{},j,{_addOptions:function(a,b){var c=a._input[0].options;c.length=0;b&&x(b,function(a,b,d){c[d]=new Option(b,a)})},create:function(a){a._input=d("<select/>").attr(d.extend({id:a.id},a.attr||{}));o.select._addOptions(a,a.ipOpts);return a._input[0]},update:function(a,
b){var c=d(a._input).val();o.select._addOptions(a,b);d(a._input).val(c)}});o.checkbox=d.extend(!0,{},j,{_addOptions:function(a,b){var c=a._input.empty();b&&x(b,function(b,d,e){c.append('<div><input id="'+a.id+"_"+e+'" type="checkbox" value="'+b+'" /><label for="'+a.id+"_"+e+'">'+d+"</label></div>")})},create:function(a){a._input=d("<div />");o.checkbox._addOptions(a,a.ipOpts);return a._input[0]},get:function(a){var b=[];a._input.find("input:checked").each(function(){b.push(this.value)});return a.separator?
b.join(a.separator):b},set:function(a,b){var c=a._input.find("input");!d.isArray(b)&&typeof b==="string"?b=b.split(a.separator||"|"):d.isArray(b)||(b=[b]);var e,f=b.length,g;c.each(function(){g=false;for(e=0;e<f;e++)if(this.value==b[e]){g=true;break}this.checked=g}).change()},enable:function(a){a._input.find("input").prop("disabled",false)},disable:function(a){a._input.find("input").prop("disabled",true)},update:function(a,b){var c=o.checkbox.get(a);o.checkbox._addOptions(a,b);o.checkbox.set(a,c)}});
o.radio=d.extend(!0,{},j,{_addOptions:function(a,b){var c=a._input.empty();b&&x(b,function(b,e,f){c.append('<div><input id="'+a.id+"_"+f+'" type="radio" name="'+a.name+'" /><label for="'+a.id+"_"+f+'">'+e+"</label></div>");d("input:last",c).attr("value",b)[0]._editor_val=b})},create:function(a){a._input=d("<div />");o.radio._addOptions(a,a.ipOpts);this.on("open",function(){a._input.find("input").each(function(){if(this._preChecked)this.checked=true})});return a._input[0]},get:function(a){a=a._input.find("input:checked");
return a.length?a[0]._editor_val:m},set:function(a,b){a._input.find("input").each(function(){this._preChecked=false;if(this._editor_val==b)this._preChecked=this.checked=true});a._input.find("input:checked").change()},enable:function(a){a._input.find("input").prop("disabled",false)},disable:function(a){a._input.find("input").prop("disabled",true)},update:function(a,b){var c=o.radio.get(a);o.radio._addOptions(a,b);o.radio.set(a,c)}});o.date=d.extend(!0,{},j,{create:function(a){if(!d.datepicker){a._input=
d("<input/>").attr(d.extend({id:a.id,type:"date"},a.attr||{}));return a._input[0]}a._input=d("<input />").attr(d.extend({type:"text",id:a.id,"class":"jqueryui"},a.attr||{}));if(!a.dateFormat)a.dateFormat=d.datepicker.RFC_2822;if(!a.dateImage)a.dateImage="../../images/calender.png";setTimeout(function(){d(a._input).datepicker(d.extend({showOn:"both",dateFormat:a.dateFormat,buttonImage:a.dateImage,buttonImageOnly:true},a.opts));d("#ui-datepicker-div").css("display","none")},10);return a._input[0]},
set:function(a,b){d.datepicker?a._input.datepicker("setDate",b).change():d(a._input).val(b)},enable:function(a){d.datepicker?a._input.datepicker("enable"):d(a._input).prop("disable",false)},disable:function(a){d.datepicker?a._input.datepicker("disable"):d(a._input).prop("disable",true)}});e.prototype.CLASS="Editor";e.version="1.3.1";return e};"function"===typeof define&&define.amd?define("datatables-editor",["jquery","datatables"],v):"object"===typeof exports?v(require("jquery"),require("datatables")):
jQuery&&!jQuery.fn.dataTable.Editor&&v(jQuery,jQuery.fn.dataTable)})(window,document);