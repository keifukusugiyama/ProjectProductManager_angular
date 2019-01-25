import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  oneProduct = {};
  EditErrors : any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.showOneProduct(params['id']);
    });
  }

  showOneProduct(id: String) { 
    let observable = this._httpService.getProductByID(id);
    observable.subscribe(data => {
      if (data['message']) {
        console.log(data);
        this.EditErrors = {message: "ID is not found. Please try with correct ID or create a new one."};
      }
      else{
        this.oneProduct = data;
      }
    });
  }

  onSubmitEdit(){
    let observable = this._httpService.updateProductByID(this.oneProduct['_id'], this.oneProduct);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
        this.EditErrors = data;
      }
      else{
        this.goHome();
      }
    });
  }


  goHome() {
    this._router.navigate(['/products']);
  }

}
