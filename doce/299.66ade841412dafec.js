"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[299],{5299:(d,o,s)=>{s.r(o),s.d(o,{BrandsComponent:()=>_});var a=s(6814),t=s(4769),i=s(0);function n(e,l){if(1&e&&(t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"img",6),t.TgZ(3,"h3",7),t._uU(4),t.qZA()()()),2&e){const r=l.$implicit;t.xp6(2),t.Q6J("src",r.image,t.LSH)("alt",r.name),t.xp6(2),t.Oqu(r.name)}}let _=(()=>{class e{constructor(r){this._ProductService=r,this.brandsData=[]}ngOnInit(){this._ProductService.getBrands().subscribe({next:r=>{this.brandsData=r.data}})}static#t=this.\u0275fac=function(c){return new(c||e)(t.Y36(i.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"m-4"],[1,"row","g-4","justify-content-center","align-items-center"],[1,"text-main","text-center"],["class","col-sm-6 col-md-4 col-lg-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-2"],["role","button",1,"rounded","p-2","item","border","border-black","border-opacity-25"],[1,"w-100",3,"src","alt"],[1,"text-center","text-main","h5","mt-2"]],template:function(c,u){1&c&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),t._uU(3,"All Brands"),t.qZA(),t.YNc(4,n,5,3,"div",3),t.qZA()()),2&c&&(t.xp6(4),t.Q6J("ngForOf",u.brandsData))},dependencies:[a.ez,a.sg],styles:[".item[_ngcontent-%COMP%]{transition:transform .5s,box-shadow .5s}.item[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 0 5px #0aad0a}"]})}return e})()},0:(d,o,s)=>{s.d(o,{M:()=>i});var a=s(4769),t=s(9862);let i=(()=>{class n{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(e=1){return this._HttpClient.get(this.baseUrl+`products?page=${e}`)}getProductDetails(e){return this._HttpClient.get(this.baseUrl+`products/${e}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoriesDetails(e){return this._HttpClient.get(this.baseUrl+`categories/${e}`)}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}static#t=this.\u0275fac=function(l){return new(l||n)(a.LFG(t.eN))};static#e=this.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);