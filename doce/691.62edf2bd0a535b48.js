"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[691],{9691:(C,u,s)=>{s.r(u),s.d(u,{DetailsComponent:()=>O});var a=s(6814),_=s(756),t=s(4769),l=s(1120),p=s(0),d=s(6286),g=s(2425);function m(n,r){if(1&n&&t._UZ(0,"img",15),2&n){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function D(n,r){1&n&&(t.ynx(0),t.YNc(1,m,1,1,"ng-template",14),t.BQk())}function f(n,r){1&n&&t._UZ(0,"i",17),2&n&&t.ekj("rating-color",!0)}function x(n,r){if(1&n&&(t.ynx(0),t.YNc(1,f,1,2,"i",16),t.BQk()),2&n){const e=r.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.productDetails.ratingsAverage>=e)}}const v=function(){return[1,2,3,4,5]};function h(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h3",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span",10),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p",11),t.YNc(18,x,2,1,"ng-container",5),t._uU(19),t.qZA()(),t.TgZ(20,"footer")(21,"button",12,13),t.NdJ("click",function(){t.CHM(e);const o=t.MAs(22),c=t.oxw();return t.KtG(c.addProduct(c.productDetails._id,o))}),t._uU(23," add to cart "),t.qZA()()()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("options",e.productDetailsOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(null==e.productDetails.category?null:e.productDetails.category.name),t.xp6(3),t.Oqu(t.xi3(16,8,e.productDetails.price,"E\xa3")),t.xp6(3),t.Q6J("ngForOf",t.DdM(11,v)),t.xp6(1),t.hij(" ",e.productDetails.ratingsAverage," ")}}let O=(()=>{class n{constructor(e,i,o,c,A){this._ActivatedRoute=e,this._ProductService=i,this._Renderer2=o,this._CartService=c,this._ToastrService=A,this.productDetails=null,this.productDetailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1e3,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id")}}),this._ProductService.getProductDetails(this.productId).subscribe({next:e=>{this.productDetails=e.data}})}addProduct(e,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addCart(e).subscribe({next:o=>{this._ToastrService.success(o.message,"Fresh Cart"),this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)},error:o=>{this._Renderer2.removeAttribute(i,"disabled")}})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(l.gz),t.Y36(p.M),t.Y36(t.Qsj),t.Y36(d.N),t.Y36(g._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto p-5 mb-4",4,"ngIf"],[1,"w-75","mx-auto","p-5","mb-4"],[1,"row","align-items-center","justify-content-center"],[1,"col-lg-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-lg-9"],[1,"h5"],[1,"text-muted"],[1,"d-flex","justify-content-between","align-items-center","my-3"],[1,"small"],[1,"mb-0"],[1,"main-btn","text-capitalize","w-100","mt-1",3,"click"],["btnAdd",""],["carouselSlide",""],["alt","Product Image",1,"w-100",3,"src"],["class","fas fa-star",3,"rating-color",4,"ngIf"],[1,"fas","fa-star"]],template:function(i,o){1&i&&t.YNc(0,h,24,12,"section",0),2&i&&t.Q6J("ngIf",o.productDetails)},dependencies:[a.ez,a.sg,a.O5,a.H9,_.bB,_.Fy,_.Mp]})}return n})()}}]);