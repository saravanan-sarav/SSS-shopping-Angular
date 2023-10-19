import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    OrdersComponent,
    NavbarComponent,
    FooterComponent,
    ToastMessageComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
