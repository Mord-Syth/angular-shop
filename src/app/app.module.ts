import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { LocalStorageService } from './core/services/local-storage.service';
import { APPLICATIONINFO } from './core/services/constant.service';
import { GeneratorService } from './core/services/generator.service';
import { Token3, GeneratorFactory } from './core/services/generator.factory';
import { AboutComponent } from './layout/components/about/about.component';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';

import { httpInterceptorProviders } from './core/interceptors';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,

    SharedModule,
    LoginModule,
    AdminModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: APPLICATIONINFO, useValue: { App: 'BookShop', Ver: '1.0' } },
    { provide: Token3, useFactory: GeneratorFactory(3), deps: [GeneratorService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
