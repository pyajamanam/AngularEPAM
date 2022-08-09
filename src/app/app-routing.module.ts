import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact-list', component: ContactComponent },
  { path: 'product-list',
   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
   },
  { path: 'products', loadChildren: () =>
   import('./products/products.module').then(m => m.ProductsModule)
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
