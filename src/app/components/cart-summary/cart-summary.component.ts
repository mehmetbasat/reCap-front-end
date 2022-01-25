import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/entities/car';
import { CartItem } from 'src/app/models/entities/cartItem';
import { Result } from 'src/app/models/results/result';
import { CarImagesService } from 'src/app/services/car-image.service';
import { CartService } from 'src/app/services/cart.service';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private dateTimeService: DateTimeService, private cartService: CartService, private carImageService: CarImagesService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  removeFromCart(car: Car) {
    let result:Result = this.cartService.removeFromCart(car);
    if(result.success){
      this.toastrService.success(result.message, car.brandName + " " + car.carName)
    }else{
      this.toastrService.error(result.message, car.brandName + " " + car.carName)
    }    
  }

  getCart() {
    this.cartItems = this.cartService.listOfCart();
  }

  getRentalPeriod(rentDate: Date, returnDate: Date): number {
    return this.dateTimeService.getRentalPeriod(rentDate, returnDate);
  }

  formatDate(date: Date): string {
    return this.dateTimeService.formatDate(date);
  }

  showDate(date:Date){
    return this.dateTimeService.showDate(date);
  }

  getImagePath(imagePath: string) {
    return this.carImageService.apiUrl + imagePath
  }
}
