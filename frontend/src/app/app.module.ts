import { CommonHeaderComponent } from './common-header/common-header.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { TransferComponent } from './customer/transfer/transfer.component';
import { LoginComponent } from './login/login.component';
import { ChatModule } from './chat/chat-dialog/chat.module';
import { DemoMaterialModule } from './material-module';
import { StepperErrorsExampleComponent } from './stepper-errors-example/stepper-errors-example.component';
import { UpdateFormComponent } from './customer/update-form/update-form.component';
import { QueryFromComponent } from './customer/query-from/query-from.component';
import { OnlineBookingComponent } from './customer/online-booking/online-booking.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './customer/top-bar/top-bar.component';
import { CartComponent } from './customer/cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent} from './customer/product-list/product-list.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer/customer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartsModule } from 'ng2-charts';

import '../polyfills';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageServicesComponent } from './home-page-services/home-page-services.component';
import { HomePageSignupComponent } from './home-page-signup/home-page-signup.component';
import { DealerPageComponent } from './dealer/dealer-page/dealer-page.component';
import { BookingInfoComponent } from './dealer/booking-info/booking-info.component';
import { CustomerQueryComponent } from './dealer/customer-query/customer-query.component';

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
    UpdateFormComponent,
    StepperErrorsExampleComponent,
    HomePageComponent,
    HomePageServicesComponent,
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
