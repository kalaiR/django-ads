(function(){
 
    var aa = document;

    function ba(){
        var b=aa.cookie,a=Math.round((new Date).getTime()/1000),c=b.indexOf("__utma=")>-1,d=b.indexOf("__utmb=")>-1,e=b.indexOf("__utmc=")>-1,g,i={};
        if(c){
            g=b.split("__utma=")[1].split(";")[0].split(".");
            i.sid=(!d||!e?a:g[4])+"";
            i.vid=g[1]+"."+g[2];
            i.from_cookie=true
        } else {
            i.sid=window&&window.gaGlobal&&window.gaGlobal.sid?window.gaGlobal.sid:a+"";
            i.vid=window&&window.gaGlobal&&window.gaGlobal.vid?window.gaGlobal.vid:Math.round(Math.random()*2147483647)+"."+a;
            i.from_cookie=false
        }
        
        i.hid=window&&window.gaGlobal&&window.gaGlobal.hid?window.gaGlobal.hid:Math.round(Math.random()*2147483647);
        window.gaGlobal=i;
        return i
    };

    var f={
        google_ad_channel:"channel",
        google_ad_host:"host",
        google_ad_region:"region",
        google_ad_section:"region",
        google_ad_type:"ad_type",
        google_adtest:"adtest",
        google_alternate_ad_url:"alternate_ad_url",
        google_alternate_color:"alt_color",
        google_bid:"bid",google_city:"gcs",
        google_color_bg:"color_bg",
        google_color_border:"color_border",
        google_color_line:"color_line",
        google_color_link:"color_link",
        google_color_text:"color_text",
        google_color_url:"color_url",
        google_contents:"contents",
        google_country:"gl",
        google_cust_age:"cust_age",
        google_cust_ch:"cust_ch",
        google_cust_gender:"cust_gender",
        google_cust_id:"cust_id",
        google_cust_interests:"cust_interests",
        google_cust_job:"cust_job",
        google_cust_l:"cust_l",
        google_cust_lh:"cust_lh",
        google_cust_u_url:"cust_u_url",
        google_disable_video_autoplay:"disable_video_autoplay",
        google_ed:"ed",google_encoding:"oe",
        google_feedback:"feedback_link",
        google_flash_version:"flash",
        google_gl:"gl",
        google_hints:"hints",
        google_kw:"kw",
        google_kw_type:"kw_type",
        google_language:"hl",
        google_referrer_url:"ref",
        google_region:"gr",
        google_reuse_colors:"reuse_colors",
        google_safe:"adsafe",
        google_targeting:"targeting",
        google_ui_features:"ui"
    },

    j={
        google_ad_format:"format",
        google_ad_output:"output",
        google_ad_callback:"callback",
        google_ad_override:"google_ad_override",
        google_ad_slot:"slotname",
        google_analytics_uacct:"ga_wpids",
        google_correlator:"correlator",
        google_cpa_choice:"cpa_choice",
        google_image_size:"image_size",
        google_last_modified_time:"lmt",
        google_max_num_ads:"num_ads",
        google_max_radlink_len:"max_radlink_len",
        google_num_radlinks:"num_radlinks",
        google_num_radlinks_per_unit:"num_radlinks_per_unit",
        google_only_ads_with_video:"only_ads_with_video",
        google_page_location:"loc",
        google_page_url:"url",
        google_rl_dest_url:"rl_dest_url",
        google_rl_filtering:"rl_filtering",
        google_rl_mode:"rl_mode",
        google_rt:"rt",
        google_skip:"skip"
    };

function m(b){return f[b]||j[b]||null};

function r(){}
r.prototype.c=function(){};
r.prototype.e=function(){};
r.prototype.o=function(){};
var u=null;

function z(){
    this.b=this.m();
    this.g=false;
    
    if(!this.b){
        this.g=this.i();
        
        if(!this.g)u.e("Browser does not allow cookies")
    }
}

z.prototype.f="__gads=";z.prototype.d="GoogleAdServingTest=";
z.prototype.l=function(){return this.b};
z.prototype.setCookieInfo=function(b){
    this.a=b._cookies_[0];
    
    if(this.a!=null){
        this.b=this.a._value_;
        this.n()
    }
};
z.prototype.k=function(b){
    var a=(new Date).valueOf(),c=new Date;
    c.setTime(a+b);
    return c
};

z.prototype.j=function(b){
    if(this.b!=null||!this.g){
        u.c("Skipping fetch cookie call");return
    }
    var a=document.domain,c="http://partner.googleadservices.com/gampad/cookie.js?callback=_GA_googleCookieHelper.setCookieInfo&client="+C(b)+"&domain="+C(a);
    u.c("Issuing a fetch cookie call with <a href='"+c+"'>"+c+"</a>");

    document.write("<script src = '"+c+"'><\/script>")
};
z.prototype.i=function(){
    document.cookie=this.d+"Good";
    var b=this.h(this.d),a=b=="Good";
    if(a){
        var c=this.k(-1);
        document.cookie=this.d+"; expires="+c.toGMTString()
    }
    return a
};
z.prototype.m=function(){
    var b=this.h(this.f);
    if(b!=null)u.c("Read first party cookie: "+b);
    else u.e("No first party cookie found");
    return b
};
z.prototype.h=function(b){
    var a=document.cookie,c=a.indexOf(b),d=null;
    if(c!=-1){
        var e=c+b.length,g=a.indexOf(";",e);
        if(g==-1)g=a.length;
        d=a.substring(e,g)}return d
};
z.prototype.n=function(){
    if(this.a==null)u.e("Skipping cookie creation: no cookie info");
    else if(this.b==null)u.o("Skipping cookie creation: no cookie value");
    else{
        var b=new Date;
        b.setTime(1000*this.a._expires_);
        var a=this.a._domain_,c=this.f+this.b+"; expires="+b.toGMTString()+"; path="+this.a._path_+"; domain=."+a;
        document.cookie=c;
        u.c("Written cookie: "+c)
    }
};
window.IDICommon=window.IDICommon||(function(){
        return{getHash:function(b){var a=b.indexOf("#")+1;
        return a?b.substr(a):""},htmlEscape:function(b){return/[&<>\"]/.test(b)?b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;"):b},makeIframeTag:function(b){var a="<iframe";for(var c in b)a+=" "+c+'="'+IDICommon.htmlEscape(b[c])+'"';return a+"></iframe>"},getIframe:function(b,a){try{return b.frames[a]}catch(c){return null}},makeIframeNode:function(b){var a=document.createElement("iframe");
for(var c in b)a.setAttribute(c,b[c]);return a},appendHiddenIframe:function(b,a){setTimeout(function(){document.body.appendChild(IDICommon.makeIframeNode({id:b,name:b,src:a,width:0,height:0,frameBorder:0}))},0)},writeHiddenIframe:function(b,a){document.write(IDICommon.makeIframeTag({id:b,name:b,src:a,width:0,height:0,frameBorder:0}))},splitURIComponent:function(b,a){var c=[],d=b.length,e=0;while(e<d){var g=b.substr(e,a),i=g.length;if(e+i<d)for(var n=1;n<3;++n)if(g.charAt(i-n)=="%")g=g.substr(0,i-=
n);c.push(g);e+=i}return c},MAX_URL_LENGTH:4095,IDI_DEFAULT_POLLING_INTERVAL:1000}})();window.IDIHost=window.IDIHost||(function(){var b=window.location.href.replace(/([^:\/])\/.*$/,"$1/robots.txt"),a="",c={},d={},e={},g={},i={};function n(h,k){for(var o in k)h[o]=k[o]}function s(h,k){var o=window.frames[h];if(o){var w;while(w=IDICommon.getIframe(o,h+"_"+c[h])){try{if(w.location.href=="about:blank")break}catch(t){break}e[h]+=IDICommon.getHash(w.location.href);++c[h]}var p=e[h].split("$"),x=p.length-1;if(x>0){e[h]=p[x];for(var y=0;y<x;++y)k(decodeURIComponent(p[y]),h)}}}function q(h){return a||
h.replace(/([^:\/]\/).*$/,"$1ig/idi_relay")}function l(h){window.clearInterval(i[h]);i[h]=0}function D(h){b=h}function K(h){a=h}function L(h,k,o){l(h);i[h]=window.setInterval(function(){s(h,k)},typeof o=="object"&&o.pollingInterval||IDICommon.IDI_DEFAULT_POLLING_INTERVAL)}function F(h,k,o){var w;if(typeof o=="object")w=o.moduleRelayUrl;var t=d[h];if(isNaN(t))throw new Error("Invalid module id");else{var p=typeof w=="string"?w:q(g[h]),x=encodeURIComponent(k)+"$",y=IDICommon.MAX_URL_LENGTH-1-p.length,
A=IDICommon.splitURIComponent(x,y),M=A.length;for(var v=0;v<M;++v)IDICommon.appendHiddenIframe(h+"_"+(t+v),p+"#"+A[v]);d[h]+=M}}function G(h,k,o,w,t){var p={frameBorder:0,scrolling:"no"},x,y,A,M,v;if(typeof t=="object"){x=t.iframeAttrs;y=t.callback;A=t.userPrefs;M=t.pollingInterval;v=t.parentDivId}if(typeof x=="object")n(p,x);n(p,{id:k,name:k,src:h,width:o,height:w});c[k]=0;d[k]=0;e[k]="";g[k]=h;var N=[];if(typeof A=="object")for(var B in A)N.push(encodeURIComponent(B)+"="+encodeURIComponent(A[B]));
if(typeof y=="function"){N.push("idi_hr="+encodeURIComponent(b));window.IDIHost.registerListener(k,y,t)}if(N.length){var H=N.join("&");if(p.src.length+1+H.length>IDICommon.MAX_URL_LENGTH){H+="$";var W=q(h),fa=IDICommon.MAX_URL_LENGTH-1-W.length,X=IDICommon.splitURIComponent(H,fa),Y=X.length;for(var B=0;B<Y;++B){var R=k+"_"+B,Z=W+"#"+X[B];if(v){var S=document.getElementById(v);S.innerHTML+=IDICommon.makeIframeTag({id:R,name:R,src:Z,width:0,height:0,frameBorder:0})}else IDICommon.writeHiddenIframe(R,
Z)}d[k]+=Y;H=""}p.src+="#"+H}if(v){var S=document.getElementById(v);S.innerHTML+=IDICommon.makeIframeTag(p)}else document.write(IDICommon.makeIframeTag(p))}return{setHostRelayUrl:D,setModuleRelayUrl:K,getModuleRelayUrl:q,registerListener:L,unregisterListener:l,postMessageToModule:F,createModule:G}})();function E(b){return b!=null?'"'+b+'"':'""'}function C(b){if(typeof encodeURIComponent=="function")return encodeURIComponent(b);else return escape(b)}function I(b,a){if(b&&a)window.google_ad_url+="&"+b+"="+a}function J(b){var a=window,c=m(b),d=a[b];I(c,d)}function O(b,a){if(a)I(b,C(a))}function P(b){var a=window,c=m(b),d=a[b];O(c,d)}function Q(b,a){var c=window,d=m(b),e=c[b];if(d&&e&&typeof e=="object")e=e[a%e.length];I(d,e)}function ca(b,a){var c=b.screen,d=navigator.javaEnabled(),e=-a.getTimezoneOffset();
if(c){I("u_h",c.height);I("u_w",c.width);I("u_ah",c.availHeight);I("u_aw",c.availWidth);I("u_cd",c.colorDepth)}I("u_tz",e);I("u_his",history.length);I("u_java",d);if(navigator.plugins)I("u_nplug",navigator.plugins.length);if(navigator.mimeTypes)I("u_nmime",navigator.mimeTypes.length)}function da(b){if(!b.google_enable_first_party_cookie)return;if(u==null)u=new r;if(b._GA_googleCookieHelper==null)b._GA_googleCookieHelper=new z;if(!b._google_cookie_fetched){b._google_cookie_fetched=true;b._GA_googleCookieHelper.j(T(b.google_ad_client))}}
function T(b){if(b){b=b.toLowerCase();if(b.substring(0,3)!="ca-")b="ca-"+b}return b}function ea(b){if(b){b=b.toLowerCase();if(b.substring(0,9)!="dist-aff-")b="dist-aff-"+b}return b}function ga(b,a){var c=document.getElementById(b);c.style.height=a+"px"}function ha(b,a,c){window.clearTimeout(c);var d=/^google_resize_flash_ad_idi\((\d+)\)/,e=b.match(d);if(e)ga(a,e[1])}function ia(b,a,c,d){c=c.substring(0,2000);c=c.replace(/%\w?$/,"");if((b.google_ad_output=="js"||b.google_ad_output=="json_html")&&(b.google_ad_request_done||
b.google_radlink_request_done))a.write('<script language="JavaScript1.1" src='+E(c)+"><\/script>");else if(b.google_ad_output=="html"){if(b.name!="google_ads_frame"){if(d!=null)a.write('<div id="'+d+'">');if(ja(b.google_ad_output,b.google_ad_client)){IDIHost.setModuleRelayUrl("http://pagead2.googlesyndication.com/pagead/idi_relay.html");var e=0;if(b.google_num_0ad_slots)e+=b.google_num_0ad_slots;if(b.google_num_ad_slots)e+=b.google_num_ad_slots;if(b.google_num_sdo_slots)e+=b.google_num_sdo_slots;
var g="google_inline_div"+e,i="<div id="+E(g)+' style="position:relative;width:'+b.google_ad_width+'px"></div><div style="position:relative;width:'+b.google_ad_width+"px;height:"+b.google_ad_height+'px;z-index:-1"></div>';a.write(i);var n="google_frame"+e,s=b.setTimeout(function(){IDIHost.unregisterListener(n)},5000);IDIHost.createModule(c,n,b.google_ad_width,b.google_ad_height,{callback:function(q,l){ha(q,l,s)},pollingInterval:500,iframeAttrs:{style:"position: absolute;left:0px",marginWidth:"0",
marginHeight:"0",vspace:"0",hspace:"0",allowTransparency:"true"},parentDivId:g})}else{a.write('<iframe name="google_ads_frame" width='+E(b.google_ad_width)+" height="+E(b.google_ad_height)+" frameborder="+E(b.google_ad_frameborder)+" src="+E(c)+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">');a.write("</iframe>")}if(d!=null)a.write("</div>")}}else if(b.google_ad_output=="textlink")a.write('<script language="JavaScript1.1" src='+E(c)+"><\/script>")}
function ka(b){for(var a in f)b[a]=null;for(var a in j){if(a=="google_correlator")continue;b[a]=null}}function la(b){if(b.google_ad_format)return b.google_ad_format.indexOf("_0ads")>0;return b.google_ad_output!="html"&&b.google_num_radlinks>0}function U(b){return b&&b.indexOf("_sdo")!=-1}function ma(){var b=null,a=window,c=document,d=new Date,e=d.getTime(),g=a.google_ad_format;if(a.google_cpa_choice!=b){a.google_ad_url="http://pagead2.googlesyndication.com/cpa/ads?";a.google_ad_url+="client="+escape(T(a.google_ad_client));
a.google_ad_region="_google_cpa_region_";J("google_cpa_choice");if(typeof c.characterSet!="undefined")O("oe",c.characterSet);else if(typeof c.charset!="undefined")O("oe",c.charset)}else if(U(g)){a.google_ad_url="http://pagead2.googlesyndication.com/pagead/sdo?";a.google_ad_url+="client="+escape(ea(a.google_ad_client))}else{a.google_ad_url="http://pagead2.googlesyndication.com/pagead/ads?";a.google_ad_url+="client="+escape(T(a.google_ad_client))}J("google_ad_host");var i=a.google_num_slots_by_client,
n=a.google_num_slots_by_channel,s=a.google_prev_ad_formats_by_region,q=a.google_prev_ad_slotnames_by_region;if(a.google_ad_region==b&&a.google_ad_section!=b)a.google_ad_region=a.google_ad_section;var l=a.google_ad_region==b?"":a.google_ad_region;if(U(g)){if(a.google_num_sdo_slots)a.google_num_sdo_slots=a.google_num_sdo_slots+1;else a.google_num_sdo_slots=1;if(a.google_num_sdo_slots>4)return false}else if(la(a)){if(a.google_num_0ad_slots)a.google_num_0ad_slots=a.google_num_0ad_slots+1;else a.google_num_0ad_slots=
1;if(a.google_num_0ad_slots>3)return false}else if(a.google_cpa_choice==b){if(a.google_num_ad_slots)a.google_num_ad_slots=a.google_num_ad_slots+1;else a.google_num_ad_slots=1;if(a.google_num_slots_to_rotate){s[l]=b;q[l]=b;if(a.google_num_slot_to_show==b)a.google_num_slot_to_show=e%a.google_num_slots_to_rotate+1;if(a.google_num_slot_to_show!=a.google_num_ad_slots)return false}else if(a.google_num_ad_slots>6&&l=="")return false}I("dt",d.getTime());J("google_language");if(a.google_country)J("google_country");
else J("google_gl");J("google_region");P("google_city");P("google_hints");J("google_safe");J("google_encoding");J("google_last_modified_time");P("google_alternate_ad_url");J("google_alternate_color");J("google_skip");J("google_targeting");var D=a.google_ad_client;if(!i[D]){i[D]=1;i.length+=1}else i[D]+=1;if(s[l])if(!U(g)){O("prev_fmts",s[l].toLowerCase());if(i.length>1)I("slot",i[D])}if(q[l])O("prev_slotnames",q[l].toLowerCase());if(g&&!a.google_ad_slot){O("format",g.toLowerCase());if(!U(g))if(s[l])s[l]=
s[l]+","+g;else s[l]=g}if(a.google_ad_slot)if(q[l])q[l]=q[l]+","+a.google_ad_slot;else q[l]=a.google_ad_slot;J("google_max_num_ads");I("output",a.google_ad_output);J("google_adtest");J("google_ad_callback");J("google_ad_slot");P("google_correlator");if(a.google_ad_channel){P("google_ad_channel");var K="",L=a.google_ad_channel.split(/[+, ]/);for(var F=0;F<L.length;F++){var G=L[F];if(!n[G])n[G]=1;else K+=G+"+"}O("pv_ch",K)}if(a.google_enable_first_party_cookie)O("cookie",a._GA_googleCookieHelper.l());
P("google_page_url");Q("google_color_bg",e);Q("google_color_text",e);Q("google_color_link",e);Q("google_color_url",e);Q("google_color_border",e);Q("google_color_line",e);if(a.google_reuse_colors)I("reuse_colors",1);else I("reuse_colors",0);J("google_kw_type");P("google_kw");P("google_contents");J("google_num_radlinks");J("google_max_radlink_len");J("google_rl_filtering");J("google_rl_mode");J("google_rt");P("google_rl_dest_url");J("google_num_radlinks_per_unit");J("google_ad_type");J("google_image_size");
J("google_ad_region");J("google_feedback");P("google_referrer_url");P("google_page_location");I("frm",a.google_iframing);J("google_bid");J("google_cust_age");J("google_cust_gender");J("google_cust_interests");J("google_cust_id");J("google_cust_job");J("google_cust_u_url");J("google_cust_l");J("google_cust_lh");J("google_cust_ch");J("google_ed");P("google_ui_features");P("google_only_ads_with_video");P("google_disable_video_autoplay");if(V(a,c)&&c.body){var h=c.body.scrollHeight,k=c.body.clientHeight;
if(k&&h)O("cc",Math.round(k*100/h))}ba();I("ga_vid",a.gaGlobal.vid);I("ga_sid",a.gaGlobal.sid);I("ga_hid",a.gaGlobal.hid);I("ga_fc",a.gaGlobal.from_cookie);P("google_analytics_uacct");J("google_ad_override");J("google_flash_version");ca(a,d);return true}function na(){var b=window,a=document;da(b);if(!ma())return;ia(b,a,b.google_ad_url,null);ka(b)}function oa(){na();return true}function V(b,a){return b.top.location==a.location}function pa(b,a){var c=a.documentElement;if(V(b,a))return false;if(b.google_ad_width&&
b.google_ad_height){var d=1,e=1;if(b.innerHeight){d=b.innerWidth;e=b.innerHeight}else if(c&&c.clientHeight){d=c.clientWidth;e=c.clientHeight}else if(a.body){d=a.body.clientWidth;e=a.body.clientHeight}if(e>2*b.google_ad_height||d>2*b.google_ad_width)return false}return true}function qa(b){var a=window,c=null,d=a.onerror;a.onerror=b;if(a.google_ad_frameborder==c)a.google_ad_frameborder=0;if(a.google_ad_output==c)a.google_ad_output="html";if(U(a.google_ad_format)){var e=a.google_ad_format.match(/^(\d+)x(\d+)_.*/);
if(e){a.google_ad_width=parseInt(e[1],10);a.google_ad_height=parseInt(e[2],10);a.google_ad_output="html"}}if(a.google_ad_format==c&&a.google_ad_output=="html")a.google_ad_format=a.google_ad_width+"x"+a.google_ad_height;ra(a,document);if(a.google_num_slots_by_channel==c)a.google_num_slots_by_channel=[];if(a.google_num_slots_by_client==c)a.google_num_slots_by_client=[];if(a.google_prev_ad_formats_by_region==c)a.google_prev_ad_formats_by_region=[];if(a.google_prev_ad_slotnames_by_region==c)a.google_prev_ad_slotnames_by_region=
[];if(a.google_correlator==c)a.google_correlator=(new Date).getTime();if(a.google_adslot_loaded==c)a.google_adslot_loaded={};if(a.google_adContentsBySlot==c)a.google_adContentsBySlot={};if(a.google_flash_version==c)a.google_flash_version=sa();a.onerror=d}function ta(b){if(b in $)return $[b];return $[b]=navigator.userAgent.toLowerCase().indexOf(b)!=-1}var $={};function ja(b,a){if(b!="html")return false;var c={};c["ca-pub-7027491298716603"]=true;c["ca-pub-8344185808443527"]=true;c["ca-pub-9812682548211238"]=
true;c["ca-pub-4424308218891706"]=true;c["ca-pub-6922559858235084"]=true;c["ca-pub-6477563040863705"]=true;c["ca-google"]=true;return c[T(a)]!=null}function ua(b){var a={},c=b.split("?"),d=c[c.length-1].split("&");for(var e=0;e<d.length;e++){var g=d[e].split("=");if(g[0])try{a[g[0].toLowerCase()]=g.length>1?(window.decodeURIComponent?decodeURIComponent(g[1].replace(/\+/g," ")):unescape(g[1])):""}catch(i){}}return a}function va(){var b=window,a=ua(document.URL);if(a.google_ad_override)b.google_ad_override=
a.google_ad_override}function sa(){if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];if(b&&b.description)return b.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var a=3,c=1;while(c)try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(d){c=null}return a.toString()}else if(ta("msie")&&!window.opera){var c=null;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){var a=
0;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;c.AllowScriptAccess="always"}catch(d){if(a==6)return a.toString()}try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(d){}}if(c!=null){var a=c.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function wa(b,a){for(var c in a)b["google_"+c]=a[c]}function xa(b,a){if(!a)return b.location;return b.referrer}function ya(b,a){if(b.location==a)return Date.parse(b.lastModified)/1000;else return null}function za(b,
a){if(!a&&b.google_referrer_url==null)return"0";else if(a&&b.google_referrer_url==null)return"1";else if(!a&&b.google_referrer_url!=null)return"2";else if(a&&b.google_referrer_url!=null)return"3";return"4"}function Aa(b,a,c){if(c)return b.google_referrer_url;else if(b.google_page_url&&b.google_referrer_url)return b.google_referrer_url;else return a.referrer}function Ba(b,a,c,d){b.page_url=xa(c,d);b.page_location=null}function Ca(b,a,c,d){b.page_url=a.google_page_url;b.page_location=xa(c,d)||"EMPTY"}
function Da(b,a){var c={},d=pa(b,a);c.iframing=za(b,d);if(!(!b.google_page_url))Ca(c,b,a,d);else Ba(c,b,a,d);c.last_modified_time=ya(a,c.page_url);c.referrer_url=Aa(b,a,d);return c}function Ea(b){var a={},c=b.URL.substring(b.URL.lastIndexOf("http"));a.iframing=null;a.page_url=c;a.page_location=b.location;a.last_modified_time=null;a.referrer_url=c;return a}function ra(b,a){var c;if(b.google_page_url==null&&Fa[a.domain])c=Ea(a);else c=Da(b,a);wa(b,c)}var Fa={};Fa["ad.yieldmanager.com"]=true;va();qa(oa);na();
})()
