(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1496:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1542).Col;t.default=n},1497:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1542).Row;t.default=n},1542:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Col",{enumerable:!0,get:function(){return r.default}});var n=c(a(1550)),r=c(a(1552));function c(e){return e&&e.__esModule?e:{default:e}}},1574:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAByklEQVR4Aa2RA7AeQRCEu7dipxTbtm3btm3btm0bhdi2bdvJj53nq6vs//y+w3LUg5BwROrF2vu5TtO9XxvHR0Sy423NntvfVpft76o/2vm2RjaEACIEbHhRdSRERggAEr9AtmyUdO/WcDte9ajySIEeARskxzdPVWAYOVLDA1x0r3xGaswGJLZxqAjR4j2qpCLi84EkRCTgfL9Eitu4Q5ot3wzbOdfLDAMxGt4YhiAE4jta9YnfGHBfKXWfgppdsh28Axucdqm0UWYY+EGyaZ/cR3ZbjsedKT4SFM+OxcrSzPi/JQkBOGpg/mOjSQpHnihqZWxY2jGlMqCf2c4YZPNIfx0uW4Ji6erZkJZzE0vzjG7lThjJ4dKeMwiDNiS2RYoZqdWEomd+RHI4NLRoqxQRv9Es3bxgzQVuRQyeW+3yZPjjnbELbi0ICaYUAkB9QCQ2XFrt8mHYiPT7n35MaBgYpZo9IHE+aiSps7T69ZeeLNFofY4sWktsBIa42wp0G3sgUi3KFEW6j6x/y4GwUnNZxpE1lqWXmsszSI3l6f/UXpGxJSKCSovS96m4MK1UXJjuSbVFmXIjoii/OnvMMvPSNqkyP1t8hBAvK0rbVvfapoMAAAAASUVORK5CYII="},1716:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(2e3)),r=c(a(2299));function c(e){return e&&e.__esModule?e:{default:e}}n.default.Group=r.default;var o=n.default;t.default=o},2000:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(0)),r=m(a(1)),c=a(48),o=f(a(5)),l=f(a(2285)),s=f(a(86)),i=a(63),u=f(a(136));function f(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){if(e&&e.__esModule)return e;var t=d();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=n?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}}return a.default=e,t&&t.set(e,a),a}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=function(){function e(){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?O(e):t}(this,h(e).apply(this,arguments))).saveCheckbox=function(e){t.rcCheckbox=e},t.renderCheckbox=function(e){var a,r=e.getPrefixCls,c=O(t),s=c.props,i=c.context,u=s.prefixCls,f=s.className,d=s.children,m=s.indeterminate,p=s.style,y=s.onMouseEnter,h=s.onMouseLeave,E=g(s,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),x=i.checkboxGroup,j=r("checkbox",u),k=v({},E);x&&(k.onChange=function(){E.onChange&&E.onChange.apply(E,arguments),x.toggleOption({label:d,value:s.value})},k.name=x.name,k.checked=-1!==x.value.indexOf(s.value),k.disabled=s.disabled||x.disabled);var N=(0,o.default)(f,(b(a={},"".concat(j,"-wrapper"),!0),b(a,"".concat(j,"-wrapper-checked"),k.checked),b(a,"".concat(j,"-wrapper-disabled"),k.disabled),a)),w=(0,o.default)(b({},"".concat(j,"-indeterminate"),m));return n.createElement("label",{className:N,style:p,onMouseEnter:y,onMouseLeave:h},n.createElement(l.default,v({},k,{prefixCls:j,className:w,ref:t.saveCheckbox})),void 0!==d&&n.createElement("span",null,d))},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(e,n.Component),function(e,t,a){t&&y(e.prototype,t)}(e,[{key:"componentDidMount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,a=void 0===t?{}:t;a.registerValue&&a.registerValue(e),(0,u.default)("checked"in this.props||(this.context||{}).checkboxGroup||!("value"in this.props),"Checkbox","`value` is not validate prop, do you mean `checked`?")}},{key:"shouldComponentUpdate",value:function(e,t,a){return!(0,s.default)(this.props,e)||!(0,s.default)(this.state,t)||!(0,s.default)(this.context.checkboxGroup,a.checkboxGroup)}},{key:"componentDidUpdate",value:function(e){var t=e.value,a=this.props.value,n=(this.context||{}).checkboxGroup,r=void 0===n?{}:n;a!==t&&r.registerValue&&r.cancelValue&&(r.cancelValue(t),r.registerValue(a))}},{key:"componentWillUnmount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,a=void 0===t?{}:t;a.cancelValue&&a.cancelValue(e)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return n.createElement(i.ConfigConsumer,null,this.renderCheckbox)}}]),e}();x.__ANT_CHECKBOX=!0,x.defaultProps={indeterminate:!1},x.contextTypes={checkboxGroup:r.any},(0,c.polyfill)(x);var j=x;t.default=j},2285:function(e,t,a){"use strict";a.r(t);var n,r=a(102),c=a.n(r),o=a(28),l=a.n(o),s=a(36),i=a.n(s),u=a(34),f=a.n(u),d=a(37),m=a.n(d),p=a(0),b=a.n(p),v=a(1),y=a.n(v),h=a(5),O=a.n(h),E=a(48),g=(n=p.Component,m()(x,n),x.getDerivedStateFromProps=function(e,t){return"checked"in e?l()({},t,{checked:e.checked}):null},x.prototype.focus=function(){this.input.focus()},x.prototype.blur=function(){this.input.blur()},x.prototype.render=function(){var e,t=this.props,a=t.prefixCls,n=t.className,r=t.style,o=t.name,s=t.id,i=t.type,u=t.disabled,f=t.readOnly,d=t.tabIndex,m=t.onClick,p=t.onFocus,v=t.onBlur,y=t.autoFocus,h=t.value,E=c()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),g=Object.keys(E).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e},{}),x=this.state.checked,j=O()(a,n,((e={})[a+"-checked"]=x,e[a+"-disabled"]=u,e));return b.a.createElement("span",{className:j,style:r},b.a.createElement("input",l()({name:o,id:s,type:i,readOnly:f,disabled:u,tabIndex:d,className:a+"-input",checked:!!x,onClick:m,onFocus:p,onBlur:v,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:h},g)),b.a.createElement("span",{className:a+"-inner"}))},x);function x(e){i()(this,x);var t=f()(this,n.call(this,e));t.handleChange=function(e){var a=t.props,n=a.disabled,r=a.onChange;n||("checked"in t.props||t.setState({checked:e.target.checked}),r&&r({target:l()({},t.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},t.saveInput=function(e){t.input=e};var a="checked"in e?e.checked:e.defaultChecked;return t.state={checked:a},t}g.propTypes={prefixCls:y.a.string,className:y.a.string,style:y.a.object,name:y.a.string,id:y.a.string,type:y.a.string,defaultChecked:y.a.oneOfType([y.a.number,y.a.bool]),checked:y.a.oneOfType([y.a.number,y.a.bool]),disabled:y.a.bool,onFocus:y.a.func,onBlur:y.a.func,onChange:y.a.func,onClick:y.a.func,tabIndex:y.a.oneOfType([y.a.string,y.a.number]),readOnly:y.a.bool,autoFocus:y.a.bool,value:y.a.any},g.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},Object(E.polyfill)(g);var j=g;t.default=j},2299:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(0)),r=m(a(1)),c=a(48),o=f(a(5)),l=f(a(86)),s=f(a(137)),i=f(a(2e3)),u=a(63);function f(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){if(e&&e.__esModule)return e;var t=d();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=n?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}}return a.default=e,t&&t.set(e,a),a}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=function(){function e(t){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(a=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?O(e):t}(this,h(e).call(this,t))).cancelValue=function(e){a.setState(function(t){return{registeredValues:t.registeredValues.filter(function(t){return t!==e})}})},a.registerValue=function(e){a.setState(function(t){var a=t.registeredValues;return{registeredValues:[].concat(v(a),[e])}})},a.toggleOption=function(e){var t=a.state.registeredValues,n=a.state.value.indexOf(e.value),r=v(a.state.value);-1===n?r.push(e.value):r.splice(n,1),"value"in a.props||a.setState({value:r});var c=a.props.onChange;if(c){var o=a.getOptions();c(r.filter(function(e){return-1!==t.indexOf(e)}).sort(function(e,t){return o.findIndex(function(t){return t.value===e})-o.findIndex(function(e){return e.value===t})}))}},a.renderGroup=function(e){var t=e.getPrefixCls,r=O(a),c=r.props,l=r.state,u=c.prefixCls,f=c.className,d=c.style,m=c.options,p=g(c,["prefixCls","className","style","options"]),v=t("checkbox",u),y="".concat(v,"-group"),h=(0,s.default)(p,["children","defaultValue","value","onChange","disabled"]),E=c.children;m&&0<m.length&&(E=a.getOptions().map(function(e){return n.createElement(i.default,{prefixCls:v,key:e.value.toString(),disabled:"disabled"in e?e.disabled:c.disabled,value:e.value,checked:-1!==l.value.indexOf(e.value),onChange:e.onChange,className:"".concat(y,"-item")},e.label)}));var x=(0,o.default)(y,f);return n.createElement("div",b({className:x,style:d},h),E)},a.state={value:t.value||t.defaultValue||[],registeredValues:[]},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(e,n.Component),function(e,t,a){t&&y(e.prototype,t),a&&y(e,a)}(e,[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled,name:this.props.name,registerValue:this.registerValue,cancelValue:this.cancelValue}}}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"getOptions",value:function(){return this.props.options.map(function(e){return"string"==typeof e?{label:e,value:e}:e})}},{key:"render",value:function(){return n.createElement(u.ConfigConsumer,null,this.renderGroup)}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}]),e}();x.defaultProps={options:[]},x.propTypes={defaultValue:r.array,value:r.array,options:r.array.isRequired,onChange:r.func},x.childContextTypes={checkboxGroup:r.any},(0,c.polyfill)(x);var j=x;t.default=j},3476:function(e,t,a){"use strict";a.r(t);var n=a(1497),r=a.n(n),c=a(1496),o=a.n(c),l=a(1716),s=a.n(l),i=a(95),u=a(15),f=a(14),d=a(21),m=a(20),p=a(22),b=a(68),v=a(0),y=a.n(v),h=a(29),O=a(12),E=a(4),g=a(92),x=a(23),j=a(3);function k(e){var t=e.valdata,a=(e.icon,e.children),n=Object(b.a)(e,["valdata","icon","children"]);return y.a.createElement("li",{className:"list-group-item p-1"},y.a.createElement("div",Object.assign({className:"media my-3 mx-3",key:t},n),y.a.createElement("div",{className:"media-body mb-0 lh-125 "},a)))}var N=function(e){function t(){var e;Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).listen=function(){},e.addEvent=function(t){t.id=e.id++,-1<e.state.filters.indexOf(t.type)&&e.setState(function(e,a){return{events:[t].concat(Object(i.a)(e.events.slice(0,30)))}})};var a=!(e.id=0),n=!(e.state={events:[],filters:[],filterButtons:[{label:Object(j.c)("transactions"),icon:"fa fa-exchange-alt",value:"transfer"},{label:Object(j.c)("votes"),icon:"fa fa-bullhorn",value:"vote"},{label:Object(j.c)("asset_participation"),icon:"fa fa-arrow-right",value:"asset-participate"},{label:Object(j.c)("token_created"),icon:"fa fa-plus-circle",value:"asset-create"},{label:Object(j.c)("witness"),icon:"fa fa-eye",value:"witness-create"},{label:Object(j.c)("account"),icon:"fa fa-user",value:"account-name-changed"}]}),r=void 0;try{for(var c,o=e.state.filterButtons[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var l=c.value;e.state.filters.push(l.value)}}catch(e){n=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return e}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.listen()}},{key:"componentWillUnmount",value:function(){this.listener.close()}},{key:"buildRow",value:function(e,t){switch(e.type){case"transfer":return y.a.createElement(k,{key:e.id,icon:"fa-exchange-alt"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-10 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(j.c)("token_transfer"))),Object(j.c)("from"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.transferFromAddress,truncate:!0}))),y.a.createElement("div",{className:"col-xs-4 col-sm-2 d-flex justify-content-center align-items-center"},y.a.createElement("img",{src:a(1574)})),y.a.createElement("div",{className:"col-xs-10 col-sm-5"},y.a.createElement("div",null,Object(j.c)("asset"),": ","TRX"===e.tokenName?y.a.createElement("b",null,y.a.createElement(O.c,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount/E.L})):y.a.createElement("b",null,y.a.createElement(O.c,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount}))," ",e.tokenName),y.a.createElement("div",null,Object(j.c)("to"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.transferToAddress,truncate:!0}))))));case"vote":return y.a.createElement(k,{key:e.id,icon:"fa-bullhorn"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(j.c)("voting")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("votes"),": ",y.a.createElement("b",null,y.a.createElement(O.c,{value:e.votes}))),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("voter"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.voterAddress,truncate:!1}))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("representatives"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.candidateAddress,truncate:!1})))));case"asset-participate":return y.a.createElement(k,{key:e.id,icon:"fa-arrow-right"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(j.c)("asset_participation")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("token_name"),": ",y.a.createElement("b",null,e.name)),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("owner_address"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.ownerAddress,truncate:!1}))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("bought"),": ",e.amount," ",e.name)));case"asset-create":return y.a.createElement(k,{key:e.id,icon:"fa-plus-circle"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(j.c)("token_creation")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("token_name"),": ",y.a.createElement("b",null,y.a.createElement(x.f,{name:e.name}))),y.a.createElement("div",{className:"col-sm-9"},Object(j.c)("address"),": ",y.a.createElement(x.a,{address:e.ownerAddress,truncate:!1})," ",Object(j.b)("created_token")," ",y.a.createElement(x.f,{name:e.name}))));case"witness-create":return y.a.createElement(k,{key:e.id,icon:"fa-user"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(j.c)("sr_candidature")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(j.c)("address"),": ",y.a.createElement(x.a,{address:e.ownerAddress,truncate:!1})," ",Object(j.b)("applied_for_super_representative"))))}return y.a.createElement("div",{className:"media pt-3",key:"other-"+t},y.a.createElement("p",{className:"media-body pb-3 mb-0 small lh-125 "},"Unknown"))}},{key:"setFilter",value:function(e){this.setState({filters:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.events,n=t.filters,c=t.filterButtons;return y.a.createElement("main",{className:"container header-overlap page-live pb-3 token_black live"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-12 mb-4"},y.a.createElement("div",{className:"card"},y.a.createElement("div",{className:"card-body"},y.a.createElement("h5",{className:"card-title"},Object(j.c)("filters")),y.a.createElement("form",{className:"pt-2"},y.a.createElement(s.a.Group,{style:{width:"100%"},onChange:this.setFilter.bind(this),defaultValue:n},y.a.createElement(r.a,{className:"d-flex"},c.map(function(e){return y.a.createElement(o.a,{className:"mr-5",key:e.value},y.a.createElement("i",{className:e.icon+" ml-2"}),y.a.createElement("span",{className:"ml-1 mr-1"},e.label),y.a.createElement(s.a,{value:e.value}))}))))))),y.a.createElement("div",{className:"col-md-12 mt-3 mt-md-0"},0===a.length?y.a.createElement("div",{className:"card"},y.a.createElement(g.b,null,Object(j.c)("waiting_for_transactions"))):y.a.createElement("div",{className:"card"},y.a.createElement("ul",{className:"list-group list-group-flush"},a.map(function(t){return e.buildRow(t)}))))))}}]),t}(y.a.Component);t.default=Object(h.connect)(function(e){return{}},{})(N)}}]);