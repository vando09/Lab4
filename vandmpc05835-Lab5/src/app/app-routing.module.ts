import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [{
  path: 'product',
  component: ProductComponent,
  // children:[
  //   {
  //     path:'product-detail/:id',
  //     component: ProductDetailComponent
  //   },
  // ]
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'product/:id',
  component: ProductDetailComponent
},
{
  path: 'login',
  component: LoginComponent
}, 
{ path: '', redirectTo: 'login', pathMatch: 'full' },


{
  path: 'star',
  component: StarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
