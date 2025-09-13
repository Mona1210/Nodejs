import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { InvestorsComponent } from './investors/investors.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'products', component:ProductsComponent},
  {path:'investors', component:InvestorsComponent},
  {path:'productDetail/:tableName', component:ProductDetailComponent},
  {path:'', redirectTo:'home',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
