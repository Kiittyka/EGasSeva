import { CustomerQueryComponent } from './components/dealer/customer-query/customer-query.component';
import { PaymentComponent } from './components/customer/payment/payment.component';
import { TransferComponent } from './components/customer/transfer/transfer.component';
import { CartComponent } from './components/customer/cart/cart.component';
import { ProductListComponent } from './components/customer/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { StepperErrorsExampleComponent } from './components/stepper-errors-example/stepper-errors-example.component';
import { QueryFromComponent } from './components/customer/query-from/query-from.component';
import { OnlineBookingComponent } from './components/customer/online-booking/online-booking.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent } from './components/logout/logout.component';

import { CustomerComponent } from './components/customer/customer/customer.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { HomePageSignupComponent } from './components/home-page-signup/home-page-signup.component';
import { HeaderComponent } from './components/header/header.component';
import { DealerPageComponent } from './components/dealer/dealer-page/dealer-page.component';
import { BookingInfoComponent } from './components/dealer/booking-info/booking-info.component';

const routes: Routes = [

  { path: 'adminDashboard', component: AdminComponent },
  {
    path: 'customer', component: CustomerComponent,
    children: [
      { path: 'transferConnection', component: TransferComponent },
      { path: 'gasBooking', component: OnlineBookingComponent },
      { path: 'accessories', component: ProductListComponent},
      { path: 'cart', component: CartComponent},
      { path: 'payment', component: PaymentComponent},
      { path: 'query', component: QueryFromComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  // {path: 'customer', component: CustomerComponent, canActivate: [AuthGaurdService]},
 
  
  { path: 'registrationStepper', component: StepperErrorsExampleComponent },
  { path: '', component: HomePageComponent },
  { path: 'home-page-header', component: HeaderComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'SignUp', component: HomePageSignupComponent },
  
  {path:'dealer',component: DealerPageComponent ,
  children :  [{path:'bookinginfo', component:BookingInfoComponent},
  
  {path:'query', component:CustomerQueryComponent},
  {path:'queries', component:CustomerQueryComponent},
  { path: 'logout', component: LogoutComponent }]
   
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
