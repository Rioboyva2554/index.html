"use strict";(globalThis["webpackChunkadmin_panel_vue_webclient"]=globalThis["webpackChunkadmin_panel_vue_webclient"]||[]).push([[439],{41186:(t,e,s)=>{s.r(e),s.d(e,{default:()=>P});var n=s(59835),a=s(86970);const i={class:"flex column full-height"};function l(t,e,s,l,r,d){const o=(0,n.up)("Trash"),h=(0,n.up)("q-tooltip"),u=(0,n.up)("q-btn"),c=(0,n.up)("Add"),T=(0,n.up)("q-toolbar"),p=(0,n.up)("StandardList"),m=(0,n.up)("q-item-label"),I=(0,n.up)("q-item-section"),g=(0,n.up)("q-item"),C=(0,n.up)("q-separator"),_=(0,n.up)("q-list"),E=(0,n.up)("router-view"),N=(0,n.up)("q-splitter"),b=(0,n.up)("ConfirmDialog"),f=(0,n.up)("main-layout"),w=(0,n.Q2)("t");return(0,n.wg)(),(0,n.j4)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(N,{"after-class":d.showTabs?"":"q-splitter__right-panel",class:"full-height full-width",modelValue:r.listSplitterWidth,"onUpdate:modelValue":e[2]||(e[2]=t=>r.listSplitterWidth=t),limits:[10,30]},{before:(0,n.w5)((()=>[(0,n._)("div",i,[d.isUserSuperAdmin?((0,n.wg)(),(0,n.j4)(T,{key:0,class:"col-auto q-py-sm list-border"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{flat:"",color:"grey-8",size:"mg","no-wrap":"",disable:0===r.checkedIds.length,onClick:d.askDeleteCheckedTenants},{default:(0,n.w5)((()=>[(0,n.Wm)(o),(0,n._)("span",null,(0,a.zw)(d.countLabel),1),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.$t("COREWEBCLIENT.ACTION_DELETE")),1)])),_:1})])),_:1},8,["disable","onClick"]),(0,n.Wm)(u,{flat:"",color:"grey-8",size:"mg",onClick:d.routeCreateTenant},{default:(0,n.w5)((()=>[(0,n.Wm)(c),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.$t("ADMINPANELWEBCLIENT.ACTION_CREATE_ENTITY_TENANT")),1)])),_:1})])),_:1},8,["onClick"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(p,{ref:"tenantList",class:"col-grow list-border",items:r.tenantItems,selectedItem:r.selectedTenantId,loading:r.loadingTenants,search:r.search,page:r.page,pagesCount:d.pagesCount,hideControls:!d.isUserSuperAdmin,noItemsText:"ADMINPANELWEBCLIENT.INFO_NO_ENTITIES_TENANT",noItemsFoundText:"ADMINPANELWEBCLIENT.INFO_NO_ENTITIES_FOUND_TENANT",onRoute:d.route,onCheck:d.afterCheck},null,8,["items","selectedItem","loading","search","page","pagesCount","hideControls","noItemsText","noItemsFoundText","onRoute","onCheck"])])])),after:(0,n.w5)((()=>[d.showTabs?((0,n.wg)(),(0,n.j4)(N,{key:0,"after-class":"q-splitter__right-panel",class:"full-height full-width",modelValue:r.tabsSplitterWidth,"onUpdate:modelValue":e[1]||(e[1]=t=>r.tabsSplitterWidth=t),limits:[10,30]},{before:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(g,{clickable:"",onClick:e[0]||(e[0]=t=>d.route(r.selectedTenantId)),class:(0,a.C_)(""===r.selectedTab?"bg-selected-item":"")},{default:(0,n.w5)((()=>[(0,n.Wm)(I,null,{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(m,{lines:"1"},null,512),[[w,"ADMINPANELWEBCLIENT.LABEL_COMMON_SETTINGS_TAB"]])])),_:1})])),_:1},8,["class"]),(0,n.Wm)(C)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.tabs,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.tabName},[(0,n.Wm)(g,{clickable:"",onClick:t=>d.route(r.selectedTenantId,e.tabName),class:(0,a.C_)(r.selectedTab===e.tabName?"bg-selected-item":"")},{default:(0,n.w5)((()=>[(0,n.Wm)(I,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{lines:"1"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.$t(e.tabTitle)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick","class"]),(0,n.Wm)(C)])))),128))])),_:1})])),after:(0,n.w5)((()=>[(0,n.Wm)(E,{onTenantCreated:d.handleCreateTenant,onCancelCreate:d.route,onDeleteTenant:d.askDeleteTenant,deletingIds:r.deletingIds},null,8,["onTenantCreated","onCancelCreate","onDeleteTenant","deletingIds"])])),_:1},8,["modelValue"])):(0,n.kq)("",!0),d.showTabs?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(E,{key:1,onTenantCreated:d.handleCreateTenant,onCancelCreate:d.route,onDeleteTenant:d.askDeleteTenant,deletingIds:r.deletingIds},null,8,["onTenantCreated","onCancelCreate","onDeleteTenant","deletingIds"]))])),default:(0,n.w5)((()=>[(0,n.Wm)(b,{ref:"confirmDialog"},null,512)])),_:1},8,["after-class","modelValue"])])),_:1})}s(69665);var r=s(24409),d=s.n(r),o=s(99336),h=s(41427),u=s(14089),c=s(72456),T=s(47214),p=s(31088),m=s(92072),I=s(21469),g=s(58733),C=s(40163),_=s(50918);const E={name:"Tenants",components:{MainLayout:m.Z,ConfirmDialog:I.Z,StandardList:g.Z,Add:C.Z,Trash:_.Z},data(){return{tenants:[],selectedTenantId:0,loadingTenants:!1,totalCount:0,search:"",page:1,limit:p.Z.getEntitiesPerPage(),tenantItems:[],checkedIds:[],justCreatedId:0,deletingIds:[],tabs:[],selectedTab:"",listSplitterWidth:u.Z.pInt(localStorage.getItem("aurora_admin_tenants_splitter-width"),20),tabsSplitterWidth:u.Z.pInt(localStorage.getItem("aurora_admin_tenants_tabs_splitter-width"),20)}},computed:{currentTenantId(){return this.$store.getters["tenants/getCurrentTenantId"]},allTenants(){return this.$store.getters["tenants/getTenants"]},pagesCount(){return Math.ceil(this.totalCount/this.limit)},countLabel(){const t=this.checkedIds.length;return t>0?t:""},showTabs(){return this.tabs.length>0&&this.selectedTenantId>0},isUserSuperAdmin(){return this.$store.getters["user/isUserSuperAdmin"]}},watch:{$route(t,e){this.parseRoute()},allTenants(){this.populate();let t=!1;this.justCreatedId&&this.allTenants.find((t=>t.id===this.justCreatedId))&&(this.tenants.find((t=>t.id===this.justCreatedId))&&(this.route(this.justCreatedId),t=!0),this.justCreatedId=0),0!==this.selectedTenantId||t||this.route(this.currentTenantId)},tenants(){this.tenants?this.tenantItems=this.tenants.map((t=>({id:t.id,title:t.name,checked:!1}))):this.tenantItems=[]},currentTenantId(){this.currentTenantId!==this.selectedTenantId&&this.route(this.currentTenantId)},selectedTenantId(){this.currentTenantId!==this.selectedTenantId&&0!==this.selectedTenantId&&this.$store.commit("tenants/setCurrentTenantId",this.selectedTenantId)},listSplitterWidth(){localStorage.setItem("aurora_admin_tenants_splitter-width",this.listSplitterWidth)},tabsSplitterWidth(){localStorage.setItem("aurora_admin_tenants_tabs_splitter-width",this.tabsSplitterWidth)}},mounted(){this.populateTabs(),this.parseRoute(),this.populate()},methods:{populateTabs(){this.tabs=T.Z.getAdminEntityTabs("getAdminTenantTabs").map((t=>({tabName:t.tabName,tabTitle:t.tabTitle})))},parseRoute(){if("/tenants/create"===this.$route.path)this.selectedTenantId=0;else{const t=u.Z.pString(this.$route?.params?.search),e=u.Z.pPositiveInt(this.$route?.params?.page);this.search===t&&this.page===e&&0===this.justCreatedId||(this.search=t,this.page=e,this.populate());const s=u.Z.pNonNegativeInt(this.$route?.params?.id);this.selectedTenantId!==s&&(this.selectedTenantId=s);const n=this.$route.path.split("/"),a=n.length>0?n[n.length-1]:"",i=this.tabs.find((t=>t.tabName===a));this.selectedTab=i?i.tabName:""}},populate(){const t=this.search.toLowerCase(),e=""===t?this.allTenants:this.allTenants.filter((e=>-1!==e.name.toLowerCase().indexOf(t)));this.totalCount=e.length;const s=this.limit*(this.page-1);this.tenants=e.slice(s,s+this.limit)},route(t=0,e=""){const s=this.$refs?.tenantList?.enteredSearch||"",n=""!==s?`/search/${s}`:"";let a=this.$refs?.tenantList?.selectedPage||1;this.search!==s&&(a=1);const i=a>1?`/page/${a}`:"",l=t>0?`/id/${t}`:"",r=""!==e?`/${e}`:"",d="/tenants"+n+i+l+r;d!==this.$route.path&&this.$router.push(d)},routeCreateTenant(){this.$router.push("/tenants/create")},handleCreateTenant(t){this.justCreatedId=t,this.route(),this.$store.dispatch("tenants/requestTenants")},afterCheck(t){this.checkedIds=t},askDeleteTenant(t){this.askDeleteTenants([t])},askDeleteCheckedTenants(){this.askDeleteTenants(this.checkedIds)},askDeleteTenants(t){if(d().isFunction(this?.$refs?.confirmDialog?.openDialog)){const e=1===t.length?this.tenants.find((e=>e.id===t[0])):null,s=e?e.name:"";this.$refs.confirmDialog.openDialog({title:s,message:this.$tc("ADMINPANELWEBCLIENT.CONFIRM_DELETE_TENANT_PLURAL",t.length),okHandler:this.deleteTenants.bind(this,t)})}},deleteTenants(t){this.deletingIds=t,this.loadingTenants=!0,c.Z.sendRequest({moduleName:"Core",methodName:"DeleteTenants",parameters:{IdList:t,DeletionConfirmedByAdmin:!0,TenantId:this.currentTenantId,Type:"Tenant"}}).then((e=>{if(this.deletingIds=[],this.loadingTenants=!1,!0===e){h.Z.showReport(this.$tc("ADMINPANELWEBCLIENT.REPORT_DELETE_ENTITIES_TENANT_PLURAL",t.length));const e=-1!==t.indexOf(this.selectedTenantId),s=this.$refs?.tenantList?.selectedPage||1,n=this.tenants.length===t.length&&s>1;n&&d().isFunction(this.$refs?.tenantList?.decreasePage)?this.$refs.tenantList.decreasePage():e?(this.route(),this.populate()):this.populate()}else h.Z.showError(this.$tc("ADMINPANELWEBCLIENT.ERROR_DELETE_ENTITIES_TENANT_PLURAL",t.length));this.$store.dispatch("tenants/requestTenants")}),(e=>{this.deletingIds=[],this.loadingTenants=!1,h.Z.showError(o.Z.getTextFromResponse(e,this.$tc("ADMINPANELWEBCLIENT.ERROR_DELETE_ENTITIES_TENANT_PLURAL",t.length))),this.$store.dispatch("tenants/requestTenants")}))}}};var N=s(11639),b=s(7498),f=s(51663),w=s(68879),L=s(46858),k=s(13246),A=s(490),W=s(76749),D=s(33115),$=s(50926),S=s(69984),Z=s.n(S);const R=(0,N.Z)(E,[["render",l]]),P=R;Z()(E,"components",{QSplitter:b.Z,QToolbar:f.Z,QBtn:w.Z,QTooltip:L.Z,QList:k.Z,QItem:A.Z,QItemSection:W.Z,QItemLabel:D.Z,QSeparator:$.Z})}}]);