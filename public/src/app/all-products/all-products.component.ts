import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allProducts: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      this.allProducts = data;
    });
  }

  onButtonDelete(id){
    let observable = this._httpService.deleteProductByID(id);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
      }
      this.getProductsFromService();
    });
  }
  

}
