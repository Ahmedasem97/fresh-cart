import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;

  // behaver subject
  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addCart(prodId: string): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `cart`, {
      productId: prodId,
    });
  }

  getCartUser(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `cart`);
  }

  removeCartItem(prodId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${prodId}`);
  }

  updateCartCount(prodId: string, countNum: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `cart/${prodId}`, {
      count: countNum,
    });
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`);
  }

  checkout(checkId: string | null, orderInfo: object): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl +
        `orders/checkout-session/${checkId}?url=http://localhost:4200`,
      {
        shippingAddress: orderInfo,
      }
    );
  }

  // allorders
  allOrders(id: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `orders/user/${id}`);
  }
}
