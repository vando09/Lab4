import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UnitComponent } from './unit/unit.component';
import { DeleteComponent } from './unit/delete/delete.component';
import { CreateComponent } from './unit/create/create.component';
import { EditComponent } from './unit/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    ProductDetailComponent,
    ProductComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UnitComponent,
    DeleteComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
