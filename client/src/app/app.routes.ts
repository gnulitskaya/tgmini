import { Routes } from '@angular/router';
import { ShopComponent } from './features/features/shop/shop.component';
import { ProductDetailsComponent } from './features/features/shop/product-details/product-details.component';
import { HomeComponent } from './features/features/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'shop/:id', component: ProductDetailsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
