"use strict";(globalThis["webpackChunkadmin_panel_vue_webclient"]=globalThis["webpackChunkadmin_panel_vue_webclient"]||[]).push([[185],{77185:(l,t,s)=>{s.r(t),s.d(t,{default:()=>g});var e=s(59835),a=s(86970);const c={class:"q-pa-lg"},n={class:"row q-mb-md"},o={class:"col text-h5"},d={class:"row q-mb-md"},i={class:"col-2"},r={class:"col-5"},u={class:"row"},_={class:"col-2"},p={class:"col-5"};function v(l,t,s,v,m,w){const N=(0,e.up)("q-card-section"),A=(0,e.up)("q-card"),E=(0,e.up)("q-scroll-area"),b=(0,e.Q2)("t");return(0,e.wg)(),(0,e.j4)(E,{class:"full-height full-width"},{default:(0,e.w5)((()=>[(0,e._)("div",c,[(0,e._)("div",n,[(0,e._)("div",o,(0,a.zw)(l.$t("ADMINPANELWEBCLIENT.HEADING_ABOUT_SETTINGS")),1)]),(0,e.Wm)(A,{flat:"",bordered:"",class:"card-edit-settings"},{default:(0,e.w5)((()=>[(0,e.Wm)(N,null,{default:(0,e.w5)((()=>[(0,e._)("div",d,[(0,e.wy)((0,e._)("div",i,null,512),[[b,"ADMINPANELWEBCLIENT.LABEL_PRODUCT_NAME"]]),(0,e._)("div",r,[(0,e._)("b",null,(0,a.zw)(m.productName),1)])]),(0,e._)("div",u,[(0,e.wy)((0,e._)("div",_,null,512),[[b,"ADMINPANELWEBCLIENT.LABEL_PRODUCT_VERSION"]]),(0,e._)("div",p,[(0,e._)("b",null,(0,a.zw)(m.version),1)])])])),_:1})])),_:1})])])),_:1})}var m=s(31088);const w={name:"AboutAdminSettings",data(){return{version:"",productName:""}},mounted(){this.populate()},methods:{populate(){const l=m.Z.getAboutSettings();this.version=l.version,this.productName=l.productName}}};var N=s(11639),A=s(66663),E=s(44458),b=s(63190),h=s(69984),L=s.n(h);const T=(0,N.Z)(w,[["render",v]]),g=T;L()(w,"components",{QScrollArea:A.Z,QCard:E.Z,QCardSection:b.Z})}}]);