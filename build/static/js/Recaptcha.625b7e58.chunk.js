(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{3521:function(e,a,t){"use strict";function r(){return"undefined"!=typeof window&&void 0!==window.grecaptcha&&"function"==typeof window.grecaptcha.render}t.r(a),t.d(a,"default",function(){return b});var n,i=t(15),l=t(14),o=t(21),p=t(20),d=t(141),c=t(22),s=t(0),h=t.n(s),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(p.a)(a).call(this,e))).updateReadyState=function(){r()&&(t.setState({ready:!0}),clearInterval(n))},t.renderGrecaptcha=function(){t.setState({widget:grecaptcha.render(t.props.elementID,{sitekey:t.props.sitekey,callback:t.props.verifyCallback||void 0,theme:t.props.theme,type:t.props.type,size:t.props.size,tabindex:t.props.tabindex,hl:t.props.hl,badge:t.props.badge,"expired-callback":t.props.expiredCallback||void 0})}),t.props.onloadCallback&&t.props.onloadCallback()},t.reset=t.reset.bind(Object(d.a)(t)),t.state={ready:r(),widget:null},t.state.ready||(n=setInterval(t.updateReadyState,1e3)),t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.state.ready&&this.renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,a){var t=this.props,r=t.render,n=t.onloadCallback;"explicit"===r&&n&&this.state.ready&&!a.ready&&this.renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(n)}},{key:"reset",value:function(){var e=this.state,a=e.ready,t=e.widget;a&&null!==t&&grecaptcha.reset(t)}},{key:"execute",value:function(){var e=this.state,a=e.ready,t=e.widget;a&&null!==t&&grecaptcha.execute(t)}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?h.a.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):h.a.createElement("div",{id:this.props.elementID,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),a}(s.Component);b.defaultProps={elementID:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"}}}]);