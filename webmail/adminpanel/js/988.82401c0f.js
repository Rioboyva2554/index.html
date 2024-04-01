"use strict";(globalThis["webpackChunkadmin_panel_vue_webclient"]=globalThis["webpackChunkadmin_panel_vue_webclient"]||[]).push([[988],{30988:(e,a,t)=>{t.r(a),t.d(a,{default:()=>V});var s=t(59835);const l={class:"q-pa-lg"},o={class:"row q-mb-md"},n={class:"col text-h5"},i={class:"row q-mb-md"},d={class:"row q-mb-md"},c={class:"col-2 q-my-sm q-pl-sm required-field"},u={class:"col-5"},r={class:"row q-mb-md"},p={class:"col-2 q-my-sm q-pl-sm required-field"},h={class:"col-5"},m={class:"row"},E={class:"row q-mt-md"},_={class:"q-pt-md text-right"};function b(e,a,t,b,I,S){const T=(0,s.up)("q-item-label"),g=(0,s.up)("q-checkbox"),v=(0,s.up)("q-input"),w=(0,s.up)("q-card-section"),C=(0,s.up)("q-card"),R=(0,s.up)("q-btn"),A=(0,s.up)("q-linear-progress"),N=(0,s.up)("q-inner-loading"),q=(0,s.up)("q-scroll-area"),O=(0,s.Q2)("t");return(0,s.wg)(),(0,s.j4)(q,{class:"full-height full-width"},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s._)("div",o,[(0,s.wy)((0,s._)("div",n,null,512),[[O,"FACEBOOK.HEADING_SETTINGS"]])]),(0,s.Wm)(C,{flat:"",bordered:"",class:"card-edit-settings"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s.Wm)(g,{dense:"",modelValue:I.enableFacebook,"onUpdate:modelValue":a[0]||(a[0]=e=>I.enableFacebook=e)},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(T,null,null,512),[[O,"FACEBOOK.ENABLE_MODULE"]])])),_:1},8,["modelValue"])]),(0,s._)("div",d,[(0,s.wy)((0,s._)("div",c,null,512),[[O,"OAUTHINTEGRATORWEBCLIENT.LABEL_APP_ID"]]),(0,s._)("div",u,[(0,s.Wm)(v,{outlined:"",dense:"","bg-color":"white",modelValue:I.appId,"onUpdate:modelValue":a[1]||(a[1]=e=>I.appId=e)},null,8,["modelValue"])])]),(0,s._)("div",r,[(0,s.wy)((0,s._)("div",p,null,512),[[O,"OAUTHINTEGRATORWEBCLIENT.LABEL_APP_SECRET"]]),(0,s._)("div",h,[(0,s.Wm)(v,{outlined:"",dense:"","bg-color":"white",modelValue:I.appSecret,"onUpdate:modelValue":a[2]||(a[2]=e=>I.appSecret=e)},null,8,["modelValue"])])]),(0,s._)("div",m,[(0,s.Wm)(T,{caption:""},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("span",null,null,512),[[O,"FACEBOOK.INFO_SETTINGS"]])])),_:1})]),(0,s._)("div",E,[(0,s.Wm)(g,{dense:"",modelValue:I.auth,"onUpdate:modelValue":a[3]||(a[3]=e=>I.auth=e)},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(T,null,null,512),[[O,"FACEBOOKAUTHWEBCLIENT.SCOPE_AUTH"]])])),_:1},8,["modelValue"])])])),_:1})])),_:1}),(0,s._)("div",_,[(0,s.Wm)(R,{unelevated:"","no-caps":"",dense:"",class:"q-px-sm",ripple:!1,color:"primary",onClick:S.saveFacebookSettings,label:e.$t("COREWEBCLIENT.ACTION_SAVE")},null,8,["onClick","label"])])]),(0,s.Wm)(N,{style:{"justify-content":"flex-start"},showing:I.saving},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{query:""})])),_:1},8,["showing"])])),_:1})}var I=t(99336),S=t(41427),T=t(72456),g=t(30236);const v={name:"FacebookAdminSettings",data(){return{saving:!1,enableFacebook:!1,auth:!1,appId:"",appSecret:"",scopes:[]}},mounted(){this.populate()},beforeRouteLeave(e,a,t){this.$root.doBeforeRouteLeave(e,a,t)},methods:{hasChanges(){const e=g.Z.getFacebookSettings();let a=!1;return this.scopes.forEach((e=>{a||"auth"===e.Name&&(a=this.auth!==e.Value)})),this.enableFacebook!==e.enableModule||this.appId!==e.id||a||this.appSecret!==e.secret},revertChanges(){this.populate()},populate(){const e=g.Z.getFacebookSettings();this.enableFacebook=e.enableModule,this.appId=e.id,this.scopes=e.scopes,this.appSecret=e.secret,this.scopes.forEach((e=>{"auth"===e.Name&&(this.auth=e.Value)}))},saveFacebookSettings(){this.appId&&this.appSecret||!this.enableFacebook?this.save():S.Z.showError(this.$t("MAILWEBCLIENT.ERROR_REQUIRED_FIELDS_EMPTY"))},save(){if(!this.saving){this.saving=!0,this.scopes.forEach((e=>{"auth"===e.Name&&(e.Value=this.auth)}));const e={EnableModule:this.enableFacebook,Id:this.appId,Secret:this.appSecret,Scopes:this.scopes};T.Z.sendRequest({moduleName:"Facebook",methodName:"UpdateSettings",parameters:e}).then((a=>{this.saving=!1,!0===a?(g.Z.saveFacebookSettings(e),this.populate(),S.Z.showReport(this.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))):S.Z.showError(this.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(e=>{this.saving=!1,S.Z.showError(I.Z.getTextFromResponse(e,this.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}}}};var w=t(11639),C=t(66663),R=t(44458),A=t(63190),N=t(96937),q=t(33115),O=t(66611),F=t(68879),L=t(60854),f=t(8289),k=t(69984),W=t.n(k);const Z=(0,w.Z)(v,[["render",b]]),V=Z;W()(v,"components",{QScrollArea:C.Z,QCard:R.Z,QCardSection:A.Z,QCheckbox:N.Z,QItemLabel:q.Z,QInput:O.Z,QBtn:F.Z,QInnerLoading:L.Z,QLinearProgress:f.Z})}}]);