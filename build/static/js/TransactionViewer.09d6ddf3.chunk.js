(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1394:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},1416:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(3),c=t(0),r=t.n(c),l=t(255);function s(e){var a=e.label,t=e.children,c=e.tip,s=void 0!==c&&c,m=e.text;return r.a.createElement("tr",null,r.a.createElement("th",null,Object(n.c)(a),s&&r.a.createElement("span",null,"\xa0",r.a.createElement(l.a,{text:m,className:"ml-2"}))),r.a.createElement("td",null,t))}},2682:function(e,a,t){"use strict";t.d(a,"a",function(){return N});var n=t(2),c=t.n(n),r=t(5),l=t(13),s=t(14),m=t(20),o=t(19),d=t(21),i=t(0),E=t.n(i),u=t(2882),b=t.n(u),_=t(9),f=t(3),N=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).initCameras=Object(r.a)(c.a.mark(function a(){var t;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.Camera.getCameras();case 3:if(!((t=a.sent).length>0)){a.next=9;break}return a.next=7,e.scanner.start(t[0]);case 7:a.next=10;break;case 9:e.setState({error:E.a.createElement(_.a,{color:"warning",className:"text-center"},Object(f.c)("no_webcam_found"))});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),e.setState({error:E.a.createElement(_.a,{color:"danger",className:"text-center"},Object(f.c)("trying_enable_webcam_message_0")," ",E.a.createElement("br",null),Object(f.c)("trying_enable_webcam_message_1"))});case 15:case"end":return a.stop()}},a,null,[[0,12]])})),e.state={error:null},e.ref=E.a.createRef(),e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.onScan;this.scanner=new b.a.Scanner({video:this.ref.current,backgroundScan:!1}),this.scanner.addListener("scan",function(a){e({code:a})}),this.initCameras()}},{key:"componentWillUnmount",value:function(){this.scanner.stop()}},{key:"render",value:function(){var e=this.state.error;return e||E.a.createElement("video",{className:"w-100",style:v.video,ref:this.ref})}}]),a}(E.a.Component),v={video:{}}},3502:function(e,a,t){"use strict";t.r(a);var n=t(38),c=t.n(n),r=t(2),l=t.n(r),s=t(5),m=t(13),o=t(14),d=t(20),i=t(19),E=t(21),u=t(0),b=t.n(u),_=t(3),f=t(10),N=t(16),v=t(371),p=t(52),O=t.n(p),h=t(6),x=t(23),T=t(1416),g=t(135),j=t(59),y=t(36),C=t(260),A=function(e){var a=e.contract_address,t=e.method,n=Object(_.c)("trigger_smart_contract"),c=Object(_.c)("normal_address_trigger_smart_contract");return h.x&&a===h.I.SIDECHAIN&&t.includes(h.N.WITHDRAW)&&(n=Object(_.c)("sign_trigger_smart_contract"),c=Object(_.c)("sign_normal_trigger_smart_contract")),b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),n,b.a.createElement("small",null,c))};function w(e){var a=e.contract,n=["MAINTENANCE_TIME_INTERVAL","ACCOUNT_UPGRADE_COST","CREATE_ACCOUNT_FEE","TRANSACTION_FEE","ASSET_ISSUE_FEE","WITNESS_PAY_PER_BLOCK","WITNESS_STANDBY_ALLOWANCE","CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT","CREATE_NEW_ACCOUNT_BANDWIDTH_RATE","ALLOW_CREATION_OF_CONTRACTS","REMOVE_THE_POWER_OF_THE_GR","ENERGY_FEE","EXCHANGE_CREATE_FEE","MAX_CPU_TIME_OF_ONE_TX","ALLOW_UPDATE_ACCOUNT_NAME","ALLOW_SAME_TOKEN_NAME"];if(a.parameters)for(var c in a.parameters)for(var r in n)c===r&&(n[c],a.parameters[c]);var l,s=[];if(s.push(a),s&&(l=Object(j.a)(s,"asset_name","amount")[0]),a.contractType)switch(a.contractType.toUpperCase()){case"TRANSFERCONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("transfer_contract"),b.a.createElement("small",null,Object(_.c)("TRX_transfer_between_addresses")))),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"from"},b.a.createElement(x.a,{address:a.owner_address},a.owner_address)),b.a.createElement(T.a,{label:"to"},b.a.createElement(x.a,{address:a.to_address},a.to_address)),b.a.createElement(T.a,{label:"amount"},b.a.createElement(g.b,{amount:a.amount/h.F})),a.contract_note&&b.a.createElement(T.a,{label:"note"},decodeURIComponent(a.contract_note))))));case"TRANSFERASSETCONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("transfer_asset_contract"),b.a.createElement("small",null,Object(_.c)("token_transfer_between_addresses")))),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"from"},b.a.createElement(x.a,{address:a.owner_address},a.owner_address)),b.a.createElement(T.a,{label:"to"},b.a.createElement(x.a,{address:a.to_address},a.to_address)),b.a.createElement(T.a,{label:"amount"},l.map_amount),b.a.createElement(T.a,{label:"token"},b.a.createElement(C.a,{value:a,notamount:!0,totoken:!0}))))));case"PARTICIPATEASSETISSUECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("participate_asset_issue_contract"),b.a.createElement("small",null,Object(_.c)("participate_token_between_addresses")))),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"to"},b.a.createElement(x.a,{address:a.owner_address},a.owner_address)),b.a.createElement(T.a,{label:"issuer"},b.a.createElement(x.a,{address:a.to_address},a.to_address)),b.a.createElement(T.a,{label:"amount"},a.amount/h.F),b.a.createElement(T.a,{label:"token"},b.a.createElement(C.a,{value:a,notamount:!0,totoken:!0}))))));case"WITNESSUPDATECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("witness_update_contract"),b.a.createElement("small",null,Object(_.c)("updates_a_witness")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})),b.a.createElement(T.a,{label:"URL"},a.url))));case"WITNESSCREATECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("witness_create_contract"),b.a.createElement("small",null,Object(_.c)("create_a_witness")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})),b.a.createElement(T.a,{label:"URL"},a.url))));case"ACCOUNTUPDATECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("account_update_contract"),b.a.createElement("small",null,Object(_.c)("update_account_name")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})),b.a.createElement(T.a,{label:"account_name"},Object(y.toUtf8)(a.account_name)))));case"ACCOUNTCREATECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("account_create_contract"),b.a.createElement("small",null,Object(_.c)("account_create")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"create_from_address"},b.a.createElement(x.a,{address:a.owner_address})),b.a.createElement(T.a,{label:"create_to_address"},b.a.createElement(x.a,{address:a.account_address})))));case"WITHDRAWBALANCECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("withdraw_balance_contract"),b.a.createElement("small",null,Object(_.c)("withdraw_balance")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})))));case"FREEZEBALANCECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("freeze_balance_contract"),b.a.createElement("small",null,Object(_.c)("freeze_TRX")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})),a.receiver_address&&b.a.createElement(T.a,{label:"receive_list"},b.a.createElement(x.a,{address:a.receiver_address})),a.resource?b.a.createElement(T.a,{label:"type"},a.resource):b.a.createElement(T.a,{label:"type"},"Bandwidth"),b.a.createElement(T.a,{label:"frozen_balance"},a.frozen_balance/h.F),b.a.createElement(T.a,{label:"frozen_days"},a.frozen_duration))));case"UNFREEZEBALANCECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("unfreeze_balance_contract"),b.a.createElement("small",null,Object(_.c)("unfreeze_TRX")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})),a.receiver_address&&b.a.createElement(T.a,{label:"receive_list"},b.a.createElement(x.a,{address:a.receiver_address})))));case"VOTEWITNESSCONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("vote_witness_contract"),b.a.createElement("small",null,Object(_.c)("vote_for_a_witness")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})),b.a.createElement("tr",null,b.a.createElement("th",null,Object(_.c)("votes")),b.a.createElement("td",null,b.a.createElement("ul",null,a.votes.map(function(e,a){return b.a.createElement("li",{key:a},b.a.createElement(x.a,{address:e.vote_address,truncate:!1}),Object(_.c)("counts")," : ",e.vote_count)})))))));case"ASSETISSUECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("asset_issue_contract"),b.a.createElement("small",null,Object(_.c)("issue_a_new_asset")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})),b.a.createElement(T.a,{label:"token_name"},Object(y.toUtf8)(a.name)),b.a.createElement(T.a,{label:"total_supply"},b.a.createElement(f.c,{value:a.total_supply/(a.precision?Math.pow(10,a.precision):1)})),b.a.createElement(T.a,{label:"TRX_exchange_rate"},a.trx_num/h.F," : ",a.num),b.a.createElement(T.a,{label:"start_time"},a.end_time-a.start_time>1e3?b.a.createElement(f.a,{value:a.start_time}):"-"),b.a.createElement(T.a,{label:"end_time"},a.end_time-a.start_time>1e3?b.a.createElement(f.a,{value:a.end_time}):"-"),b.a.createElement(T.a,{label:"description"},Object(y.toUtf8)(a.description)),b.a.createElement(T.a,{label:"URL"},b.a.createElement(x.d,{url:Object(y.toUtf8)(a.url)})))));case"PROPOSALCREATECONTRACT":return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("proposal_create_contract"),b.a.createElement("small",null,Object(_.c)("proposal_create")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})))));case"TRIGGERSMARTCONTRACT":a.method;var m=t(1394);return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},A(a)),b.a.createElement("div",{className:"content"},b.a.createElement("div",{className:"content_pos"},b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("Basic_info")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("contract_triggers_owner_address"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(x.a,{address:a.owner_address},a.owner_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("contract_address"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(x.a,{address:a.contract_address,isContract:!0},a.contract_address))),b.a.createElement("div",{className:"d-flex content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("value"),":"),a.call_value?b.a.createElement(g.b,{amount:a.call_value/h.F}):b.a.createElement(g.b,{amount:0})))),a.tokenTransferInfo&&void 0!==a.tokenTransferInfo.decimals&&void 0!==a.tokenTransferInfo.symbol&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("TRC20_transfers")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("from"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(x.a,{address:a.tokenTransferInfo.from_address},a.tokenTransferInfo.from_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("to"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(x.a,{address:a.tokenTransferInfo.to_address},a.tokenTransferInfo.to_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("amount"),":"),b.a.createElement("div",{className:"flex1"},Number(a.tokenTransferInfo.amount_str)/Math.pow(10,a.tokenTransferInfo.decimals))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("token_txs_info"),":"),b.a.createElement("div",{className:"flex1"},a.tokenTransferInfo.contract_address==h.j||a.tokenTransferInfo.contract_address==h.k||a.tokenTransferInfo.contract_address==h.i?b.a.createElement("b",{className:"token-img-top",style:{marginRight:5}},b.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,onError:function(e){e.target.onerror=null,e.target.src=m}}),b.a.createElement("i",{style:{width:10,height:10,bottom:-5}})):b.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,style:{marginRight:5},onError:function(e){e.target.onerror=null,e.target.src=m}}),b.a.createElement(x.g,{name:a.tokenTransferInfo.name,address:a.tokenTransferInfo.contract_address,namePlus:a.tokenTransferInfo.name+" ("+a.tokenTransferInfo.symbol+")"}))))),"{}"!=JSON.stringify(a.internal_transactions)&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("Internal_txns")),b.a.createElement("div",{className:"flex1"},Object.keys(a.internal_transactions).map(function(e,t){var n=[];return a.internal_transactions[e].map(function(e,a){var t=Object(j.a)(JSON.parse(e.value_info_list),"token_id","call_value")[0];n.push(b.a.createElement("div",{key:e.transaction_id,className:"d-flex align-items-center content_item"},b.a.createElement("div",{className:"d-flex"},b.a.createElement("div",{className:"mr-1"},Object(_.c)("transfers")),b.a.createElement("div",{className:"mr-1"},t.map_amount+" "+t.map_token_name_abbr),b.a.createElement("div",{className:"mr-1"},Object(_.c)("from")),b.a.createElement("div",{className:"mr-1",style:{width:"150px"}},b.a.createElement(x.c,{address:e.caller_address},e.caller_address)),b.a.createElement("div",{className:"mr-1"},Object(_.c)("to")),b.a.createElement("div",{className:"mr-1",style:{width:"150px"}},b.a.createElement(x.c,{address:e.transfer_to_address},e.transfer_to_address)))))}),n}))),"{}"!=JSON.stringify(a.cost)&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("Fee_Consumption")),b.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("Method_calling")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("contract_method"),":"),b.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name"},e,":"),b.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));case"UPDATEBROKERAGECONTRACT":a.method;return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(_.c)("trigger_smart_contract"),b.a.createElement("small",null,Object(_.c)("SR_set_brokerage_contract")))),b.a.createElement("div",{className:"content"},b.a.createElement("div",{className:"content_pos"},b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("Basic_info")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("contract_triggers_owner_address"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(x.a,{address:a.owner_address},a.owner_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_voting"},Object(_.c)("SR_set_brokerage"),":"),b.a.createElement("div",{className:"flex1"},a.brokerage?100-a.brokerage:100," %")),b.a.createElement("div",{className:"d-flex content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("value"),":"),a.call_value?b.a.createElement(g.b,{amount:a.call_value/h.F}):b.a.createElement(g.b,{amount:0})))),"{}"!=JSON.stringify(a.cost)&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("Fee_Consumption")),b.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(_.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(_.c)("Method_calling")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(_.c)("contract_method"),":"),b.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name"},e,":"),b.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));case"SHIELDEDTRANSFERCONTRACT":var o=Object.keys(a),d=["cost","internal_transactions","map_token_name_abbr","map_token_id","map_token_precision","map_amount","map_amount_logo","map_token_name","contract_note","tokenTransferInfo"];return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),b.a.createElement("small",null,"SHIELDEDTRANSFERCONTRACT"))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,o.map(function(e){if(d.includes(e))return"";if("receive_description"==e){var t=a[e];return b.a.createElement(T.a,{label:e},t.map(function(e){return b.a.createElement("ul",{className:"mb-2"},b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"value_commitment:"),e&&e.value_commitment),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"note_commitment:"),e&&e.note_commitment),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"epk:"),e&&e.epk),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"c_enc:"),e&&e.c_enc),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"c_out:"),e&&e.c_out),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"zkproof:"),e&&e.zkproof))}))}if("spend_description"==e){var n=a[e];return b.a.createElement(T.a,{label:e},n.map(function(e){return b.a.createElement("ul",{className:"mb-2"},b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"value_commitment:"),e&&e.value_commitment),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"anchor:"),e&&e.anchor),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"nullifier:"),e&&e.nullifier),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"rk:"),e&&e.rk),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"zkproof:"),e&&e.zkproof),b.a.createElement("li",null,b.a.createElement("span",{className:"receive-item mr-2 text-muted"},"spend_authority_signature:"),e&&e.spend_authority_signature))}))}return"to_amount"==e||"from_amount"==e?b.a.createElement(T.a,{label:e},a[e]/h.F):b.a.createElement(T.a,{label:e},a[e])}))));default:return b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),"\xa0\xa0",a.contractType)),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,a.owner_address?b.a.createElement(T.a,{label:"owner_address"},b.a.createElement(x.a,{address:a.owner_address})):"")))}return b.a.createElement("div",null,a.contractType&&b.a.createElement("div",{className:"card-body"},JSON.stringify(a)))}function k(e){var a=e.signature;return b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"Signature"},a.bytes)))}var S=t(12),R=Object(S.a)(function(){return t.e(14).then(t.bind(null,3488))}),I=t(30),F=t(9),U=t(2682),M=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(i.a)(a).call(this))).hideModal=function(){var a=e.props.onClose;a&&a()},e.onCodeScan=function(a){var t=a.code,n=e.props.onConfirm;n&&n({code:t})},e.state={body:null},e}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({body:b.a.createElement("div",null,b.a.createElement(U.a,{onScan:this.onCodeScan}))})}},{key:"render",value:function(){var e=this.state.body;return b.a.createElement(F.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},b.a.createElement(F.f,{className:"text-center",toggle:this.hideModal},"Scan Transaction"),b.a.createElement(F.d,null,e))}}]),a}(b.a.Component);var D=Object(I.connect)(function(e){return{account:e.app.account}},{})(M),W=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(d.a)(this,Object(i.a)(a).call(this,e))).hideModal=function(){t.setState({modal:null})},t.setHex=function(e){t.setState({hex:e})},t.loadTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.readTransactionNew(a);case 3:n=e.sent,(c=n.transaction)?t.setState({transactionData:c}):t.setState({modal:b.a.createElement(O.a,{danger:!0,title:Object(_.c)("transaction_load_error"),onConfirm:t.hideModal},Object(_.c)("transaction_load_error_message"))}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({modal:b.a.createElement(O.a,{danger:!0,title:Object(_.c)("transaction_load_error"),onConfirm:t.hideModal},Object(_.c)("transaction_load_error_message"))});case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.scanTransaction=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({modal:b.a.createElement(D,{onClose:t.hideModal,onConfirm:function(e){var a=e.code;t.loadTransaction(a),t.hideModal(),t.setHex(a)}})});case 1:case"end":return e.stop()}},e)})),t.broadcastTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.sendTransactionRaw(a);case 2:n=e.sent,c=n.success,r=n.code,c?t.setState({modal:b.a.createElement(O.a,{success:!0,title:Object(_.c)("transaction_success"),onConfirm:t.hideModal},Object(_.c)("transaction_success_message"))}):t.setState({modal:b.a.createElement(O.a,{danger:!0,title:Object(_.c)("transaction_error"),onConfirm:t.hideModal},Object(_.c)("transaction_error_message"),b.a.createElement("br",null),"Code: ",r)});case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.broadcastTransactionModal=Object(s.a)(l.a.mark(function e(){var a,n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.hex,e.next=3,N.a.readTransactionNew(a);case 3:n=e.sent,c=n.transaction,t.setState({modal:b.a.createElement(O.a,{info:!0,showCancel:!0,confirmBtnText:Object(_.c)("confirm_transaction"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:Object(_.c)("confirm_transaction_message"),onConfirm:function(){return t.broadcastTransaction(a)},onCancel:t.hideModal})}),t.setState({transactionData:c});case 7:case"end":return e.stop()}},e)})),t.addSignature=function(){var e=t.state.hex;t.setState({modal:b.a.createElement(R,{transaction:e,onClose:t.hideModal})})};var n=Object(v.a)(e.location,"hex","");return t.state={hex:n,showInput:""===n,transactionData:null,modal:null},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.hex;e&&this.loadTransaction(e)}},{key:"componentDidUpdate",value:function(e,a){var t=Object(v.a)(this.props.location,"hex","");""!==t&&a.hex!==t&&(this.loadTransaction(t),this.setState({hex:t}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.hex,n=a.transactionData,r=a.modal,l=a.showInput;this.props.flags;return b.a.createElement("main",{className:"container header-overlap _transactionViewer"},r,l&&b.a.createElement("div",{className:"card"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title text-center"},Object(_.c)("transaction")," HEX"),b.a.createElement("p",{className:"text-center"},Object(_.c)("info_tx_viewer")),b.a.createElement("textarea",{className:"w-100 form-control",rows:"6",value:t,onChange:function(a){return e.setState({hex:a.target.value})}}),b.a.createElement("div",{className:"text-center _load_tx"},b.a.createElement("button",{className:"btn btn-primary",disabled:""===c()(t),onClick:function(){return e.loadTransaction(t)}},Object(_.c)("load_tx"))),b.a.createElement("hr",null),b.a.createElement("div",{className:"text-center p-3 _qrcode"},b.a.createElement("h5",{className:"card-title text-center"},Object(_.c)("tx_qrcode")),b.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.scanTransaction()}},Object(_.c)("load_tx_qrcode"),b.a.createElement("i",{className:"fa fa-qrcode ml-2"}))))),n&&b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title text-center"},"Transaction")),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(T.a,{label:"timestamp"},b.a.createElement(f.a,{value:n.timestamp}),"\xa0",b.a.createElement(f.e,{value:n.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),b.a.createElement(T.a,{label:"contracts"},n.contracts.length),b.a.createElement(T.a,{label:"signatures"},n.signatures.length))))),b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-header text-center"},Object(_.c)("Contracts")),n.contracts.map(function(e,a){return b.a.createElement(w,{key:a,contract:e})})),b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-header text-center"},Object(_.c)("Signatures")),n.signatures.map(function(e){return b.a.createElement(k,{signature:e})})),b.a.createElement("div",{className:"card mt-3 mb-5"},b.a.createElement("button",{className:"btn btn-success btn-lg",onClick:this.broadcastTransactionModal},Object(_.c)("broadcast_transaction_to_network")))))}}]),a}(u.Component);a.default=Object(I.connect)(function(e){return{flags:e.app.flags}},{})(W)}}]);