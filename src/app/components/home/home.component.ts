import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { Category } from 'src/app/core/interfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CuttextPipe,
    CarouselModule,
    RouterLink,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}

  products: Product[] = [];
  categories: Category[] = [];
  wishListData: string[] = []; //Data --> wishlist(add, remove)

  term: string = '';

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.products = response.data;
      },
    });

    this._ProductService.getCategories().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.categories = response.data;
      },
    });

    this._WishlistService.getWishlist().subscribe({
      next: (response) => {
        const newData = response.data.map((item: any) => item._id);
        this.wishListData = newData;
      },
    });
  }

 
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 3000,
  }

  arrows:string[] = ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']

  featuredCategories: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: this.arrows,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 2500,
  }


  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');

    this._CartService.addCart(id).subscribe({
      next: (response) => {
        // console.log(response);
        this._ToastrService.success(response.message, 'Fresh Cart');
        this._Renderer2.removeAttribute(element, 'disabled');

        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }

  addWishList(prodId: string | undefined): void {
    this._WishlistService.addWishlist(prodId).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message);
        this._WishlistService.favNumber.next(response.data.length);
        this.wishListData = response.data;
      },
    });
  }

  removeFav(prodId: string | undefined): void {
    this._WishlistService.removeWishlist(prodId).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message);
        this._WishlistService.favNumber.next(response.data.length);
        this.wishListData = response.data;
        
      },
    });
  }
}
