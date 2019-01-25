import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct = {};
  createNewErrors : any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  
  onSubmitNew() {
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
        this.createNewErrors = data;
      }
      else{
        this.newProduct = { };
        this.goHome();
      }
    });
  }

  goHome() {
    this._router.navigate(['/products']);
  }
  
}
