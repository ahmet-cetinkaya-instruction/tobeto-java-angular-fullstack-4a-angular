import { Routes } from '@angular/router';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';
import { BasicLayoutComponent } from './shared/components/basic-layout/basic-layout.component';
import { HomePageComponent } from './routes/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '', // Mevcut route, belirtilen path ile eşleştiğinde
    component: BasicLayoutComponent, // İlgili component'i, AppComponent'den başlayarak ilk karşılaştığı router-outlet'e yerleştirir.
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      ...authRoutes, // ... spread operatörü ile authRoutes array'ini routes array'ine ekliyoruz.
      ...productsRoutes,
      ...categoriesRoutes,
    ], // Bu route'un altında başka route'lar olabilir. Bu route'un altındaki route'lar, bu route'un component'i içerisindeki -BasicLayoutComponent- ilk karşılaştığı router-outlet'e yerleştirilir.
  },
];
