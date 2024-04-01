"use strict";(globalThis["webpackChunkadmin_panel_vue_webclient"]=globalThis["webpackChunkadmin_panel_vue_webclient"]||[]).push([[829],{17829:(t,e,o)=>{o.r(e),o.d(e,{default:()=>N});var a=o(59835);const i={class:"q-pa-lg"},n={class:"row q-mb-md"},s={class:"col text-h5"},r={class:"row"},l={class:"col-8"},u=["innerHTML"],c={key:0,class:"row q-mt-md"},d={class:"col-8"},h=["innerHTML"];function T(t,e,o,T,p,A){const m=(0,a.up)("q-item-label"),w=(0,a.up)("q-btn"),F=(0,a.up)("q-card-section"),_=(0,a.up)("q-card"),g=(0,a.up)("q-card-actions"),R=(0,a.up)("q-dialog"),E=(0,a.up)("q-linear-progress"),b=(0,a.up)("q-inner-loading"),I=(0,a.up)("q-scroll-area"),O=(0,a.Q2)("t");return(0,a.wg)(),(0,a.j4)(I,{class:"full-height full-width"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",n,[(0,a.wy)((0,a._)("div",s,null,512),[[O,"TWOFACTORAUTH.HEADING_SETTINGS_TAB"]])]),(0,a.Wm)(_,{flat:"",bordered:"",class:"card-edit-settings"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",l,[(0,a.Wm)(m,{caption:""},{default:(0,a.w5)((()=>[(0,a._)("div",{innerHTML:A.inscriptionTwoFactorAuthentication},null,8,u)])),_:1})])]),p.twoFactorAuthEnabled?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[(0,a.Wm)(w,{unelevated:"","no-caps":"","no-wrap":"",dense:"",class:"q-px-xs",ripple:!1,color:"primary",label:t.$t("TWOFACTORAUTH.ACTION_DISABLE_TFA"),onClick:A.showTwoFactorAuthenticationDialogue},null,8,["label","onClick"])])])):(0,a.kq)("",!0)])),_:1})])),_:1})]),(0,a.Wm)(R,{modelValue:p.confirmTwoFactorAuthentication,"onUpdate:modelValue":e[1]||(e[1]=t=>p.confirmTwoFactorAuthentication=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{style:{"min-width":"300px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a._)("span",{innerHTML:A.confirmDisableTwoFactorAuthentication},null,8,h)])),_:1}),(0,a.Wm)(g,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{unelevated:"","no-caps":"",dense:"",class:"q-px-sm",ripple:!1,color:"primary",onClick:A.disableTwoFactorAuthentication,label:t.$t("TWOFACTORAUTH.ACTION_DISABLE_TFA")},null,8,["onClick","label"]),(0,a.Wm)(w,{unelevated:"","no-caps":"",dense:"",class:"q-px-sm",ripple:!1,color:"primary",label:t.$t("COREWEBCLIENT.ACTION_CANCEL"),onClick:e[0]||(e[0]=t=>p.confirmTwoFactorAuthentication=!1)},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(b,{style:{"justify-content":"flex-start"},showing:p.loading||p.saving},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{query:""})])),_:1},8,["showing"])])),_:1})}var p=o(72456),A=o(41427),m=o(99336),w=o(14089),F=o(47668),_=o.n(F),g=o(79706);const R={name:"TwoFactorAuthAdminSettingsPerUser",data(){return{user:null,loading:!1,saving:!1,twoFactorAuthEnabled:!1,confirmTwoFactorAuthentication:!1}},computed:{inscriptionTwoFactorAuthentication(){return this.twoFactorAuthEnabled?this.$t("TWOFACTORAUTH.INFO_TFA_ENABLED_FOR_USER",{USER:this.user?.publicId}):this.$t("TWOFACTORAUTH.INFO_TFA_DISABLED_FOR_USER",{USER:this.user?.publicId})},confirmDisableTwoFactorAuthentication(){return this.$t("TWOFACTORAUTH.CONFIRM_DISABLE_TFA",{USER:this.user?.publicId})}},watch:{$route(t,e){this.parseRoute()}},mounted(){this.parseRoute()},methods:{disableTwoFactorAuthentication(){const t={UserId:this.user.id,TenantId:this.user.tenantId};p.Z.sendRequest({moduleName:"TwoFactorAuth",methodName:"DisableUserTwoFactorAuth",parameters:t}).then((t=>{this.confirmTwoFactorAuthentication=!1,t?(this.populate(),A.Z.showReport(this.$t("TWOFACTORAUTH.REPORT_DISABLE_USER_TFA",{USER:this.user.publicId}))):A.Z.showError(this.$t("TWOFACTORAUTH.ERROR_DISABLE_USER_TFA",{USER:this.user.publicId}))}),(t=>{this.confirmTwoFactorAuthentication=!1,A.Z.showError(m.Z.getTextFromResponse(t,this.$t("TWOFACTORAUTH.ERROR_DISABLE_USER_TFA",{USER:this.user.publicId})))}))},showTwoFactorAuthenticationDialogue(){this.confirmTwoFactorAuthentication=!0},parseRoute(){const t=w.Z.pPositiveInt(this.$route?.params?.id);this.user?.id!==t&&(this.user={id:t},this.populate())},populate(){this.loading=!0;const t=this.$store.getters["tenants/getCurrentTenantId"];g.Z.getUser(t,this.user.id).then((({user:t,userId:e})=>{e===this.user.id&&(this.loading=!1,t&&_().isFunction(t?.getData)?(this.user=t,this.getUserSettings()):this.$emit("no-user-found"))}))},getUserSettings(){this.loading=!0;const t={UserId:this.user.id,TenantId:this.user.tenantId};p.Z.sendRequest({moduleName:"TwoFactorAuth",methodName:"GetUserSettings",parameters:t}).then((t=>{this.loading=!1,t&&(this.twoFactorAuthEnabled=t?.TwoFactorAuthEnabled)}),(t=>{this.loading=!1,A.Z.showError(m.Z.getTextFromResponse(t))}))}}};var E=o(11639),b=o(66663),I=o(44458),O=o(63190),f=o(33115),U=o(68879),C=o(87743),S=o(11821),W=o(60854),q=o(8289),Z=o(69984),v=o.n(Z);const L=(0,E.Z)(R,[["render",T]]),D=L;v()(R,"components",{QScrollArea:b.Z,QCard:I.Z,QCardSection:O.Z,QItemLabel:f.Z,QBtn:U.Z,QDialog:C.Z,QCardActions:S.Z,QInnerLoading:W.Z,QLinearProgress:q.Z});const N={moduleName:"TwoFactorAuth",requiredModules:[],getAdminUserTabs(){return[{tabName:"two-factor-auth",tabTitle:"TWOFACTORAUTH.LABEL_SETTINGS_TAB",tabRouteChildren:[{path:"id/:id/two-factor-auth",component:D},{path:"search/:search/id/:id/two-factor-auth",component:D},{path:"page/:page/id/:id/two-factor-auth",component:D},{path:"search/:search/page/:page/id/:id/two-factor-auth",component:D}]}]}}}}]);