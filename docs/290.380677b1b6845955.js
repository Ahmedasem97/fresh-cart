"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[290],{5290:(x,m,a)=>{a.r(m),a.d(m,{CartComponent:()=>v});var u=a(6814),p=a(1120),t=a(4769),C=a(6286);function _(s,h){if(1&s){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div")(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",16,17),t.NdJ("click",function(){const c=t.CHM(e).$implicit,o=t.MAs(11),d=t.oxw(2);return t.KtG(d.removeItem(c.product._id,o))}),t._UZ(12,"i",18),t._uU(13," Remove "),t.qZA()(),t.TgZ(14,"div")(15,"button",19,20),t.NdJ("click",function(){const c=t.CHM(e).$implicit,o=t.MAs(16),d=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(c.product._id,c.count+1,o,d))}),t._UZ(17,"i",21),t.qZA(),t.TgZ(18,"span",22),t._uU(19),t.qZA(),t.TgZ(20,"button",19,23),t.NdJ("click",function(){const c=t.CHM(e).$implicit,o=t.MAs(16),d=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(c.product._id,c.count-1,o,d))}),t._UZ(22,"i",24),t.qZA()()()()}if(2&s){const e=h.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.hij(" price:",t.xi3(9,5,e.price," E\xa3")," "),t.xp6(11),t.Oqu(e.count)}}const g=function(s){return["/payment",s]};function i(s,h){if(1&s){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3,"shop cart"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.clear())}),t._uU(5," clear all "),t.qZA()(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,_,23,8,"div",7),t.TgZ(10,"button",8),t._uU(11," online payment "),t._UZ(12,"img",9),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(7),t.hij(" total price: ",t.xi3(8,3,e.cardDetails.totalCartPrice," E\xa3")," "),t.xp6(2),t.Q6J("ngForOf",e.cardDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,g,e.cardDetails._id))}}function l(s,h){1&s&&(t.TgZ(0,"h2",25),t._uU(1,"your cart is empty .."),t.qZA())}let v=(()=>{class s{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cardDetails=null}ngOnInit(){this._CartService.getCartUser().subscribe({next:e=>{this.cardDetails=e.data}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:n=>{this.cardDetails=n.data,this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(n.numOfCartItems)},error:n=>{this._Renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,n,c){r>=1&&(this._Renderer2.setAttribute(n,"disabled","true"),this._Renderer2.setAttribute(c,"disabled","true"),this._CartService.updateCartCount(e,r).subscribe({next:o=>{this.cardDetails=o.data,this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(c,"disabled")},error:o=>{this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(c,"disabled")}}))}clear(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cardDetails=null,this._CartService.cartNumber.next(e.numOfCartItems))}})}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(C.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:4,vars:2,consts:[["class","w-75 mb-3 mx-auto p-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mb-3","mx-auto","p-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2","text-capitalize"],[1,"text-capitalize","btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-capitalize","text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"text-capitalize","main-btn","mt-3",3,"routerLink"],["src","./assets/images/visa-1.svg","alt","visa logo"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","text-capitalize","small","mb-0"],[1,"btn","m-0","p-0","text-main",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],[1,"fa-solid","fa-plus"],[1,"mx-2"],["btn2",""],[1,"fa-solid","fa-minus"],[1,"text-center","text-capitalize"]],template:function(r,n){if(1&r&&(t.YNc(0,i,13,8,"section",0),t._uU(1," <"),t.YNc(2,l,2,0,"ng-template",null,1,t.W1O)),2&r){const c=t.MAs(3);t.Q6J("ngIf",n.cardDetails)("ngIfElse",c)}},dependencies:[u.ez,u.sg,u.O5,u.H9,p.rH]})}return s})()},6286:(x,m,a)=>{a.d(m,{N:()=>C});var u=a(5619),p=a(4769),t=a(9862);let C=(()=>{class _{constructor(i){this._HttpClient=i,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new u.X(0)}addCart(i){return this._HttpClient.post(this.baseUrl+"cart",{productId:i})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(i){return this._HttpClient.delete(this.baseUrl+`cart/${i}`)}updateCartCount(i,l){return this._HttpClient.put(this.baseUrl+`cart/${i}`,{count:l})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkout(i,l){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${i}?url=http://localhost:4200`,{shippingAddress:l})}allOrders(i){return this._HttpClient.get(this.baseUrl+`orders/user/${i}`)}static#t=this.\u0275fac=function(l){return new(l||_)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);