"use strict";(self.webpackChunkcyber_test=self.webpackChunkcyber_test||[]).push([[856],{7856:(ke,y,l)=>{l.r(y),l.d(y,{NewOrderModule:()=>Te});var r=l(9808),_=l(8227),m=l(9783);class Z{constructor(i){this.id=0,this.name="Pizza 1",this.size="",this.price=0,this.toppings=[],this.id=i,this.name="Pizza "+i}}class k{constructor(i="",t=.99){this.name=i,this.price=t}}const A=["delivered","pending","cancelled"];class w{constructor(i){this.id=1,this.pizzas=[],this.status="pending",this.createdTime=(new Date).getTime(),this.id=i,this.status=A[Math.floor(3*Math.random())]}}var P=l(3570),O=l(755),h=l(8449),u=l(9633);const C=(0,u.P1)((0,u.ZF)("pizzaList"),n=>n),q=(0,u.P1)((0,u.ZF)("pizzaList"),n=>n.length),I=(0,u.P1)((0,u.ZF)("pizzaList"),n=>n.reduce((i,t)=>i+(t.price+t.toppings.reduce((o,a)=>o+a.price,0)),0));var e=l(7587),c=l(2382);let M=(()=>{class n{constructor(t){this.fb=t}ngOnInit(){this.basicInfoForm=this.fb.group({name:["",[c.kI.required]],email:["",[c.kI.required,c.kI.email]],address:["",[c.kI.required]],contactNumber:["",[c.kI.required]]})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-basic-info"]],decls:19,vars:1,consts:[[1,"basic-info-container","text-gray-800"],[1,"main","mt-4","text-sm"],[1,"formgrid","grid","row-gap-4","justify-content-between",3,"formGroup"],[1,"field","col-12","md:col-5"],["for","firstname2",1,"required"],["id","firstname2","type","text","formControlName","name","required","",1,"text-base","text-color","surface-overlay","p-3","border-1","border-solid","border-round","focus:border-primary","w-full"],["for","lastname2",1,"required"],["id","lastname2","type","text","formControlName","email","required","",1,"text-base","text-color","surface-overlay","p-3","border-1","border-solid","border-round","focus:border-primary","w-full"],["id","firstname2","type","text","formControlName","address","required","",1,"text-base","text-color","surface-overlay","p-3","border-1","border-solid","border-round","focus:border-primary","w-full"],["id","lastname2","type","text","formControlName","contactNumber","required","",1,"text-base","text-color","surface-overlay","p-3","border-1","border-solid","border-round","focus:border-primary","w-full"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"main",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"label",4),e._uU(5,"Name"),e.qZA(),e._UZ(6,"input",5),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"label",6),e._uU(9,"E-mail Address"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",3),e.TgZ(12,"label",4),e._uU(13,"Address"),e.qZA(),e._UZ(14,"input",8),e.qZA(),e.TgZ(15,"div",3),e.TgZ(16,"label",6),e._uU(17,"Contact Number"),e.qZA(),e._UZ(18,"input",9),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("formGroup",o.basicInfoForm))},directives:[c.JL,c.sg,c.Fj,c.JJ,c.u,c.Q7],styles:[""]}),n})();var v=l(845),f=(()=>{return(n=f||(f={})).LARGE="Large",n.MEDIUM="Medium",n.SMALL="Small",f;var n})(),b=(()=>{return(n=b||(b={})).BACON="bacon",n.PEPPERONI="pepperoni",n.MUSHROOM="mushroom",n.OLIVE="olive",n.BASIL="basil",n.SWEETCORN="sweetcorn",n.ONION="onion",n.TOMATO="tomato",b;var n})(),F=l(5698),B=l(3356),z=l(5787),p=l(1777);function J(n,i){if(1&n&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.uIk("id",t.id+"_header"),e.xp6(1),e.Oqu(t.header)}}function N(n,i){1&n&&e.GkF(0)}function S(n,i){}function U(n,i){1&n&&e.YNc(0,S,0,0,"ng-template")}function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(a){return e.CHM(t),e.oxw(2).onIconClick(a)})("keydown.enter",function(a){return e.CHM(t),e.oxw(2).onIconClick(a)}),e._UZ(1,"span"),e.qZA()}if(2&n){const t=e.oxw(2);e.uIk("aria-label","collapse button")("id",t.id+"-label")("aria-controls",t.id+"-content")("aria-expanded",!t.collapsed),e.xp6(1),e.Tol(t.collapsed?t.expandIcon:t.collapseIcon)}}const D=function(n,i,t){return{"p-panel-icons-start":n,"p-panel-icons-end":i,"p-panel-icons-center":t}};function L(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(a){return e.CHM(t),e.oxw().onHeaderClick(a)}),e.YNc(1,J,2,2,"span",7),e.Hsn(2,1),e.YNc(3,N,1,0,"ng-container",4),e.TgZ(4,"div",8),e.YNc(5,U,1,0,void 0,4),e.YNc(6,Q,2,6,"button",9),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.uIk("id",t.id+"-titlebar"),e.xp6(1),e.Q6J("ngIf",t.header),e.xp6(2),e.Q6J("ngTemplateOutlet",t.headerTemplate),e.xp6(1),e.Q6J("ngClass",e.kEZ(6,D,"start"===t.iconPos,"end"===t.iconPos,"center"===t.iconPos)),e.xp6(1),e.Q6J("ngTemplateOutlet",t.iconTemplate),e.xp6(1),e.Q6J("ngIf",t.toggleable)}}function H(n,i){1&n&&e.GkF(0)}function Y(n,i){1&n&&e.GkF(0)}function E(n,i){if(1&n&&(e.TgZ(0,"div",12),e.Hsn(1,2),e.YNc(2,Y,1,0,"ng-container",4),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}const j=["*",[["p-header"]],[["p-footer"]]],V=function(n){return{"p-panel p-component":!0,"p-panel-toggleable":n}},$=function(n){return{transitionParams:n,height:"0",opacity:"0"}},R=function(n){return{value:"hidden",params:n}},G=function(n){return{transitionParams:n,height:"*",opacity:"1"}},X=function(n){return{value:"visible",params:n}},K=["*","p-header","p-footer"];let W=0,ee=(()=>{class n{constructor(t){this.el=t,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new e.vpe,this.onBeforeToggle=new e.vpe,this.onAfterToggle=new e.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+W++}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":default:this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;case"icons":this.iconTemplate=t.template}})}onHeaderClick(t){"header"===this.toggler&&this.toggle(t)}onIconClick(t){"icon"===this.toggler&&this.toggle(t)}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(t):this.collapse(t)),t.preventDefault()}expand(t){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(t){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(t){this.animating=!1,this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-panel"]],contentQueries:function(t,o,a){if(1&t&&(e.Suo(a,m.$_,5),e.Suo(a,m.jx,4)),2&t){let s;e.iGM(s=e.CRH())&&(o.footerFacet=s.first),e.iGM(s=e.CRH())&&(o.templates=s)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:K,decls:7,vars:22,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(t,o){1&t&&(e.F$t(j),e.TgZ(0,"div",0),e.YNc(1,L,7,10,"div",1),e.TgZ(2,"div",2),e.NdJ("@panelContent.done",function(s){return o.onToggleDone(s)}),e.TgZ(3,"div",3),e.Hsn(4),e.YNc(5,H,1,0,"ng-container",4),e.qZA(),e.YNc(6,E,3,1,"div",5),e.qZA(),e.qZA()),2&t&&(e.Tol(o.styleClass),e.Q6J("ngClass",e.VKq(12,V,o.toggleable))("ngStyle",o.style),e.uIk("id",o.id),e.xp6(1),e.Q6J("ngIf",o.showHeader),e.xp6(1),e.Q6J("@panelContent",o.collapsed?e.VKq(16,R,e.VKq(14,$,o.animating?o.transitionOptions:"0ms")):e.VKq(20,X,e.VKq(18,G,o.animating?o.transitionOptions:"0ms"))),e.uIk("id",o.id+"-content")("aria-hidden",o.collapsed)("aria-labelledby",o.id+"-titlebar"),e.xp6(3),e.Q6J("ngTemplateOutlet",o.contentTemplate),e.xp6(1),e.Q6J("ngIf",o.footerFacet||o.footerTemplate))},directives:[r.mk,r.PC,r.O5,r.tP,z.H],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}\n"],encapsulation:2,data:{animation:[(0,p.X$)("panelContent",[(0,p.SB)("hidden",(0,p.oB)({height:"0",overflow:"hidden"})),(0,p.SB)("void",(0,p.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,p.SB)("visible",(0,p.oB)({height:"*"})),(0,p.eR)("visible <=> hidden",[(0,p.oB)({overflow:"hidden"}),(0,p.jt)("{{transitionParams}}")]),(0,p.eR)("void => hidden",(0,p.jt)("{{transitionParams}}")),(0,p.eR)("void => visible",(0,p.jt)("{{transitionParams}}"))])]},changeDetection:0}),n})(),te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,m.m8,z.T],m.m8]}),n})();function ne(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2).$implicit;return e.oxw().deletePizza(a)}),e.qZA()}}function oe(n,i){if(1&n&&(e.TgZ(0,"div",5),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.YNc(3,ne,1,0,"button",6),e.qZA()),2&n){const t=e.oxw(),o=t.$implicit,a=t.index;e.xp6(2),e.Oqu(o.name),e.xp6(1),e.Q6J("ngIf",a>0)}}function ie(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){const s=e.CHM(t).$implicit,d=e.oxw(2).$implicit;return e.oxw().selectPizzaSize(s.value,d)}),e.qZA()}if(2&n){const t=i.$implicit,o=e.oxw(2).$implicit;e.Q6J("label",t.key)("ngClass",o.size===t.value?"bg-primary-500 text-white":"")}}function ae(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){const s=e.CHM(t).$implicit,d=e.oxw(2).$implicit;return e.oxw().addPizzaToppings(s.key,d)}),e.qZA()}if(2&n){const t=i.$implicit,o=e.oxw(2).$implicit,a=e.oxw();e.Q6J("ngClass",a.getIndex(t.key,o)>-1?"bg-primary-500 text-white":"")("label",t.key)("icon",a.getIndex(t.key,o)>-1?"pi pi-stop-circle text-xl":"pi pi-circle text-xl")}}function se(n,i){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"span",9),e._uU(2,"Choose size"),e.qZA(),e.TgZ(3,"div",10),e.YNc(4,ie,1,2,"button",11),e.ALo(5,"keyvalue"),e.qZA(),e.qZA(),e.TgZ(6,"div",12),e.TgZ(7,"span",13),e._uU(8,"Pick your toppings"),e.qZA(),e.TgZ(9,"div",14),e.YNc(10,ae,1,3,"button",15),e.ALo(11,"keyvalue"),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,2,t.pizzaSizes)),e.xp6(6),e.Q6J("ngForOf",e.lcZ(11,4,t.pizzaToppings))}}function le(n,i){1&n&&(e.TgZ(0,"p-panel",2),e.YNc(1,oe,4,2,"ng-template",3),e.YNc(2,se,12,6,"ng-template",4),e.qZA()),2&n&&e.Q6J("toggleable",!0)}let re=(()=>{class n{constructor(t,o){this.store=t,this.pizzaManagerService=o,this.pizzaSizes=f,this.pizzaToppings=b}ngOnInit(){this.pizzas$=this.store.select(C),this.getPizzaConfig()}getPizzaConfig(){this.pizzaManagerService.getPizzaConfig().pipe((0,F.q)(1)).subscribe(t=>{this.pizzaConfig=null==t?void 0:t.pizzaConfig})}selectPizzaSize(t,o){var a,s;const d=null!==(s=null===(a=this.pizzaConfig.prices.find(Ze=>Ze.size===t.toLowerCase()))||void 0===a?void 0:a.price)&&void 0!==s?s:10.99,g=Object.assign({},o);g.size=t,g.price=d,this.store.dispatch((0,h.PW)(g))}addPizzaToppings(t,o){const a=Object.assign({},o);if(-1===a.toppings.findIndex(s=>s.name===t)){const s=new k(t);a.toppings=[...a.toppings,s]}else a.toppings=a.toppings.filter(s=>s.name!==t);this.store.dispatch((0,h.PW)(a))}deletePizza(t){this.store.dispatch((0,h.qX)(t))}trackByMethod(t,o){return o.id}getIndex(t,o){return o.toppings.findIndex(a=>a.name===t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.yh),e.Y36(B.V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-pizza-details"]],decls:3,vars:4,consts:[[1,"pizza-details-container"],["toggler","icon","collapseIcon","pi pi-arrow-circle-up text-white","styleClass","m-0 my-2","expandIcon","pi pi-arrow-circle-down text-white",3,"toggleable",4,"ngFor","ngForOf","ngForTrackBy"],["toggler","icon","collapseIcon","pi pi-arrow-circle-up text-white","styleClass","m-0 my-2","expandIcon","pi pi-arrow-circle-down text-white",3,"toggleable"],["pTemplate","header"],["pTemplate","content"],[1,"m-0","p-0","w-full","flex","align-items-center","justify-content-between"],["name","removePzzaBtn","pButton","","class","p-button-sm p-button-text p-button-danger","label","Remove Pizza",3,"click",4,"ngIf"],["name","removePzzaBtn","pButton","","label","Remove Pizza",1,"p-button-sm","p-button-text","p-button-danger",3,"click"],[1,"pizza-sizes"],[1,"choose-label"],[1,"mt-2","flex","flex-wrap","gap-2","justify-content-start"],["pButton","","class","p-button-sm p-button-outlined border-noround w-8rem shadow-none",3,"label","ngClass","click",4,"ngFor","ngForOf"],[1,"pizza-toppings","mt-6"],[1,"toppings-label"],[1,"mt-2","flex","flex-wrap","gap-4","justify-content-between"],["pButton","","class","p-button-sm p-button-outlined p-button-info border-noround w-12rem shadow-none",3,"ngClass","label","icon","click",4,"ngFor","ngForOf"],["pButton","",1,"p-button-sm","p-button-outlined","border-noround","w-8rem","shadow-none",3,"label","ngClass","click"],["pButton","",1,"p-button-sm","p-button-outlined","p-button-info","border-noround","w-12rem","shadow-none",3,"ngClass","label","icon","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,le,3,1,"p-panel",1),e.ALo(2,"async"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,o.pizzas$))("ngForTrackBy",o.trackByMethod))},directives:[r.sg,ee,m.jx,r.O5,v.Hq,r.mk],pipes:[r.Ov,r.Nd],styles:["[_nghost-%COMP%]     .p-panel.p-panel-toggleable .p-panel-header{padding-top:.3rem;padding-bottom:.3rem;background-color:#565454;color:#fff}[_nghost-%COMP%]     .p-panel.p-panel-toggleable .p-panel-header-icon{box-shadow:none}[_nghost-%COMP%]     .p-panel.p-panel-toggleable .p-panel-header-icon:enabled:hover{background:none}"]}),n})();function ce(n,i){if(1&n&&(e.TgZ(0,"div",9),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.price)}}function pe(n,i){if(1&n&&(e.TgZ(0,"div",3),e.TgZ(1,"div",4),e.TgZ(2,"label",5),e._uU(3),e.qZA(),e._UZ(4,"div",6),e.TgZ(5,"span",7),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.qZA(),e.YNc(8,ce,5,2,"div",8),e.qZA()),2&n){const t=i.$implicit;e.xp6(3),e.AsE("",t.size," ",t.name,""),e.xp6(3),e.Oqu(e.xi3(7,4,t.price,"GBP ")),e.xp6(2),e.Q6J("ngForOf",t.toppings)}}let de=(()=>{class n{constructor(t){this.store=t}ngOnInit(){this.pizzas$=this.store.select(C),this.totalPrice$=this.store.select(I)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-summary"]],decls:12,vars:12,consts:[[1,"summary-container","my-5"],["class","my-4",4,"ngFor","ngForOf"],[1,"total","text-xl","font-bold","flex","justify-content-between","py-4"],[1,"my-4"],[1,"flex","justify-content-between","align-items-center"],["for","name",1,"font-bold"],[1,"border-bottom-1","border-dotted","surface-border","w-8"],[1,"font-bold"],["class","toppings pl-5 flex justify-content-between text-sm my-3",4,"ngFor","ngForOf"],[1,"toppings","pl-5","flex","justify-content-between","text-sm","my-3"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,pe,9,7,"div",1),e.ALo(2,"async"),e._UZ(3,"hr"),e.TgZ(4,"div",2),e.TgZ(5,"span"),e._uU(6,"TOTAL"),e.qZA(),e.TgZ(7,"span"),e._uU(8),e.ALo(9,"currency"),e.ALo(10,"number"),e.ALo(11,"async"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,o.pizzas$)),e.xp6(7),e.Oqu(e.xi3(9,4,e.xi3(10,7,e.lcZ(11,10,o.totalPrice$),"1.2-2"),"GBP ")))},directives:[r.sg],pipes:[r.Ov,r.H9,r.JJ],styles:[""]}),n})();var x=l(7773);const ue=["basicInfo"],me=[{path:"",component:(()=>{class n{constructor(t,o,a){this.store=t,this.messageService=o,this.router=a,this.totalPizzaCount=0,this.totalOrderCount=0,this.pizzas=[]}ngOnInit(){this.clearPizzas(),this.store.select(q).subscribe(t=>this.totalPizzaCount=t),this.store.select(O.vn).subscribe(t=>this.totalOrderCount=t),this.store.select(C).subscribe(t=>this.pizzas=t),this.addPizzaToStore()}addPizzaToStore(){const t=new Z(++this.totalPizzaCount);this.store.dispatch((0,h.PW)(t))}clearPizzas(){this.store.dispatch((0,h.T_)())}removePizza(t){this.store.dispatch((0,h.qX)(t))}placeOrder(){if(this.basicInfoComponent.basicInfoForm.invalid)return this.basicInfoComponent.basicInfoForm.markAllAsTouched(),void this.messageService.add({key:"tr",severity:"warn",summary:"Failed",detail:"Please fill the required fields"});const t=new w(++this.totalOrderCount);t.address=this.basicInfoComponent.basicInfoForm.value,t.pizzas=this.pizzas,this.store.dispatch((0,P.f)(t)),this.messageService.add({key:"tr",life:5e3,severity:"success",summary:"Success",detail:"Order placed successfully."}),this.router.navigateByUrl("/dashboard")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.yh),e.Y36(m.ez),e.Y36(_.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-order"]],viewQuery:function(t,o){if(1&t&&e.Gf(ue,7),2&t){let a;e.iGM(a=e.CRH())&&(o.basicInfoComponent=a.first)}},features:[e._Bn([m.ez])],decls:24,vars:0,consts:[[1,"order-panel","bg-white","px-4","md:px-8","py-4","text-gray-800","shadow-3"],[1,"text-2xl","font-bold","mb-6"],[1,"min-h-screen","overflow-auto"],[1,"basic-info"],["for","heading",1,"text-xl","font-bold"],[1,"border-1","surface-border"],["basicInfo",""],[1,"choose-pizza","mt-4","mb-2","flex","justify-content-between"],["pButton","","icon","pi pi-plus","label","Add Pizza",1,"p-button-outlined","shadow-none","p-button-sm","p-button-success","m-0","p-2",3,"click"],[1,"summary","mt-6"],[1,"flex","justify-content-end","pt-4","pb-8"],["pButton","","label","Place Order",1,"p-button-outlined","p-button-sm","shadow-none",3,"click"],["key","tr"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"header"),e.TgZ(2,"p",1),e._uU(3,"PIZZA ORDER"),e.qZA(),e.qZA(),e.TgZ(4,"main",2),e.TgZ(5,"header",3),e.TgZ(6,"label",4),e._uU(7,"Basic Information"),e.qZA(),e.qZA(),e._UZ(8,"hr",5),e._UZ(9,"app-basic-info",null,6),e.TgZ(11,"header",7),e.TgZ(12,"label",4),e._uU(13,"Choose your Pizza"),e.qZA(),e.TgZ(14,"button",8),e.NdJ("click",function(){return o.addPizzaToStore()}),e.qZA(),e.qZA(),e._UZ(15,"app-pizza-details"),e.TgZ(16,"header",9),e.TgZ(17,"label",4),e._uU(18,"Summary"),e.qZA(),e.qZA(),e._UZ(19,"hr",5),e._UZ(20,"app-summary"),e.qZA(),e.TgZ(21,"footer",10),e.TgZ(22,"button",11),e.NdJ("click",function(){return o.placeOrder()}),e.qZA(),e.qZA(),e.qZA(),e._UZ(23,"p-toast",12))},directives:[M,v.Hq,re,de,x.FN],styles:[".order-panel[_ngcontent-%COMP%]{border-radius:3px}"]}),n})()}];let ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.Bz.forChild(me)],_.Bz]}),n})();var T=l(5921);const he=["cb"],fe=function(n,i,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":n,"p-disabled":i,"p-checkbox-label-focus":t}};function be(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"label",7),e.NdJ("click",function(a){e.CHM(t);const s=e.oxw(),d=e.MAs(3);return s.onClick(a,d,!0)}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,fe,t.checked(),t.disabled,t.focused)),e.uIk("for",t.inputId),e.xp6(1),e.Oqu(t.label)}}const _e=function(n,i,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":n,"p-checkbox-disabled":i,"p-checkbox-focused":t}},Ce=function(n,i,t){return{"p-highlight":n,"p-disabled":i,"p-focus":t}},ve={provide:c.JU,useExisting:(0,e.Gpc)(()=>ye),multi:!0};let ye=(()=>{class n{constructor(t){this.cd=t,this.checkboxIcon="pi pi-check",this.trueValue=!0,this.falseValue=!1,this.onChange=new e.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1}onClick(t,o,a){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),a&&o.focus())}updateModel(t){let o;this.binary?(o=this.checked()?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(o=this.checked()?this.model.filter(a=>!T.gb.equals(a,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this.onChange.emit({checked:o,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:T.gb.contains(this.value,this.model)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-checkbox"]],viewQuery:function(t,o){if(1&t&&e.Gf(he,5),2&t){let a;e.iGM(a=e.CRH())&&(o.inputViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([ve])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"input",2,3),e.NdJ("focus",function(){return o.onFocus()})("blur",function(){return o.onBlur()})("change",function(d){return o.handleChange(d)}),e.qZA(),e.qZA(),e.TgZ(4,"div",4),e.NdJ("click",function(d){e.CHM(a);const g=e.MAs(3);return o.onClick(d,g,!0)}),e._UZ(5,"span",5),e.qZA(),e.qZA(),e.YNc(6,be,2,9,"label",6)}2&t&&(e.Tol(o.styleClass),e.Q6J("ngStyle",o.style)("ngClass",e.kEZ(18,_e,o.checked(),o.disabled,o.focused)),e.xp6(2),e.Q6J("readonly",o.readonly)("value",o.value)("checked",o.checked())("disabled",o.disabled),e.uIk("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-checked",o.checked())("required",o.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,Ce,o.checked(),o.disabled,o.focused)),e.xp6(1),e.Q6J("ngClass",o.checked()?o.checkboxIcon:null),e.xp6(1),e.Q6J("ngIf",o.label))},directives:[r.PC,r.mk,r.O5],styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0}),n})(),ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez]]}),n})();var xe=l(7102);let Te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,c.u5,c.UX,te,v.hJ,xe.Qy,ze,x.EV,ge]]}),n})()}}]);