import { CommonHeaderComponent } from './components/common-header/common-header.component';
import { PaymentComponent } from './components/customer/payment/payment.component';
import { TransferComponent } from './components/customer/transfer/transfer.component';
import { LoginComponent } from './components/login/login.component';
import { ChatModule } from './models/chat.module';
import { DemoMaterialModule } from './material-module';
import { StepperErrorsExampleComponent } from './components/stepper-errors-example/stepper-errors-example.component';
import { QueryFromComponent } from './components/customer/query-from/query-from.component';
import { OnlineBookingComponent } from './components/customer/online-booking/online-booking.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/customer/top-bar/top-bar.component';
import { CartComponent } from './components/customer/cart/cart.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductListComponent} from './components/customer/product-list/product-list.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { AdminComponent } from './components/admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartsModule } from 'ng2-charts';

import '../polyfills';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageSignupComponent } from './components/home-page-signup/home-page-signup.component';
import { DealerPageComponent } from './components/dealer/dealer-page/dealer-page.component';
import { BookingInfoComponent } from './components/dealer/booking-info/booking-info.component';
import { CustomerQueryComponent } from './components/dealer/customer-query/customer-query.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent, 
    AdminComponent,
    CustomerComponent,
    OnlineBookingComponent,
    QueryFromComponent,

    StepperErrorsExampleComponent,
    HomePageComponent,

    HomePageSignupComponent,
    ProductListComponent,
    TopBarComponent,
    CartComponent,
    TransferComponent,
    PaymentComponent,
    CommonHeaderComponent,
    DealerPageComponent,
    BookingInfoComponent,
    CustomerQueryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    NgbModule,
    AngularFontAwesomeModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    ChatModule,
    ChartsModule,
    MatProgressSpinnerModule,
    MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent,StepperErrorsExampleComponent],
  entryComponents: []

})
export class AppModule { }
