"use strict";(globalThis["webpackChunkadmin_panel_vue_webclient"]=globalThis["webpackChunkadmin_panel_vue_webclient"]||[]).push([[874],{35874:(e,s,t)=>{t.r(s),t.d(s,{default:()=>U});var o=t(59835),l=t(86970);const a={class:"q-pa-lg"},r={class:"row q-mb-md"},i={class:"col text-h5"},n={class:"row q-mb-md"},d={class:"col-2 q-mt-sm"},p={class:"col-5 textarea"},u={class:"row q-mb-md"},h=(0,o._)("div",{class:"col-2"},null,-1),S={class:"col-8"},c={class:"row"},m={class:"col-2 q-mt-sm"},_={class:"col-5"},v={class:"col-1 q-mt-sm q-pl-md"},E={class:"col-1"},A={class:"q-pt-md text-right"};function P(e,s,t,P,g,L){const I=(0,o.up)("q-input"),w=(0,o.up)("q-item-label"),R=(0,o.up)("q-card-section"),C=(0,o.up)("q-card"),N=(0,o.up)("q-btn"),T=(0,o.up)("q-linear-progress"),q=(0,o.up)("q-inner-loading"),O=(0,o.up)("q-scroll-area"),b=(0,o.Q2)("t");return(0,o.wg)(),(0,o.j4)(O,{class:"full-height full-width"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("div",r,[(0,o.wy)((0,o._)("div",i,null,512),[[b,"MAILCHANGEPASSWORDPOPPASSDPLUGIN.HEADING_SETTINGS_TAB"]])]),(0,o.Wm)(C,{flat:"",bordered:"",class:"card-edit-settings"},{default:(0,o.w5)((()=>[(0,o.Wm)(R,null,{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o.wy)((0,o._)("div",d,null,512),[[b,"MAILCHANGEPASSWORDPOPPASSDPLUGIN.LABEL_MAIL_SERVERS"]]),(0,o._)("div",p,[(0,o.Wm)(I,{outlined:"",dense:"","bg-color":"white",type:"textarea",modelValue:g.supportedServers,"onUpdate:modelValue":s[0]||(s[0]=e=>g.supportedServers=e)},null,8,["modelValue"])])]),(0,o._)("div",u,[h,(0,o._)("div",S,[(0,o.Wm)(w,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.$t("MAILCHANGEPASSWORDPOPPASSDPLUGIN.LABEL_HINT_MAIL_SERVERS")),1)])),_:1})])]),(0,o._)("div",c,[(0,o.wy)((0,o._)("div",m,null,512),[[b,"MAILCHANGEPASSWORDPOPPASSDPLUGIN.LABEL_HOST"]]),(0,o._)("div",_,[(0,o.Wm)(I,{outlined:"",dense:"","bg-color":"white",modelValue:g.host,"onUpdate:modelValue":s[1]||(s[1]=e=>g.host=e)},null,8,["modelValue"])]),(0,o.wy)((0,o._)("div",v,null,512),[[b,"MAILCHANGEPASSWORDPOPPASSDPLUGIN.LABEL_PORT"]]),(0,o._)("div",E,[(0,o.Wm)(I,{outlined:"",dense:"","bg-color":"white",modelValue:g.port,"onUpdate:modelValue":s[2]||(s[2]=e=>g.port=e)},null,8,["modelValue"])])])])),_:1})])),_:1}),(0,o._)("div",A,[(0,o.Wm)(N,{unelevated:"","no-caps":"",dense:"",class:"q-px-sm",ripple:!1,color:"primary",label:e.$t("COREWEBCLIENT.ACTION_SAVE"),onClick:L.save},null,8,["label","onClick"])])]),(0,o.Wm)(q,{style:{"justify-content":"flex-start"},showing:g.saving},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{query:""})])),_:1},8,["showing"])])),_:1})}var g=t(99336),L=t(41427),I=t(72456),w=t(31609);const R={name:"PoppassdAdminSettings",mounted(){this.populate()},data(){return{host:"",port:"",supportedServers:"",saving:!1}},beforeRouteLeave(e,s,t){this.$root.doBeforeRouteLeave(e,s,t)},methods:{hasChanges(){const e=w.Z.getPoppassdSettings();return this.supportedServers!==e.supportedServers||this.host!==e.host||this.port!==e.port},revertChanges(){this.populate()},populate(){const e=w.Z.getPoppassdSettings();this.supportedServers=e.supportedServers,this.host=e.host,this.port=e.port},save(){if(!this.saving){this.saving=!0;const e={SupportedServers:this.supportedServers,Host:this.host,Port:this.port};I.Z.sendRequest({moduleName:"MailChangePasswordPoppassdPlugin",methodName:"UpdateSettings",parameters:e}).then((e=>{this.saving=!1,!0===e?(w.Z.savePoppassdSettings({supportedServers:this.supportedServers,host:this.host,port:this.port}),this.populate(),L.Z.showReport(this.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))):L.Z.showError(this.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(e=>{this.saving=!1,L.Z.showError(g.Z.getTextFromResponse(e,this.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}}}};var C=t(11639),N=t(66663),T=t(44458),q=t(63190),O=t(66611),b=t(33115),W=t(68879),G=t(60854),Z=t(8289),f=t(69984),D=t.n(f);const V=(0,C.Z)(R,[["render",P]]),U=V;D()(R,"components",{QScrollArea:N.Z,QCard:T.Z,QCardSection:q.Z,QInput:O.Z,QItemLabel:b.Z,QBtn:W.Z,QInnerLoading:G.Z,QLinearProgress:Z.Z})}}]);