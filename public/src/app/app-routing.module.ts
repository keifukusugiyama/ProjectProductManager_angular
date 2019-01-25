import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: [
    { path: '', component: AllProductsComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'new', component: NewComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
